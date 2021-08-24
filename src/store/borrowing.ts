// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { borrowUtil } from '@/utils/borrow'
import { closeBorrowUtil } from '@/utils/closeBorrow'
import {TROVE_ACCOUNT_DATA_LAYOUT, TroveLayout, getCollateral} from "@/utils/layout";
import BN from "bn.js";
import {PublicKey} from "@solana/web3.js";

// State
export const state = () => ({
  troveId: '',
  trove: {},
  debt: 0
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setTroveId (state, newValue: string) {
    state.troveId = newValue
  },

  setTrove (state, newValue: TroveLayout) {
    state.trove = newValue
    console.log({newValue})
  },

  setDebt (state, newValue: number) {
    state.debt = newValue
  }
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async setTroveById({commit}, value) {
      const encodedTroveState = (await this.$web3.getAccountInfo(value, 'singleGossip'))!.data;
      const decodedTroveState = TROVE_ACCOUNT_DATA_LAYOUT.decode(encodedTroveState) as TroveLayout;

      console.log({decodedTroveState})
      commit('setTrove', {
        troveAccountPubkey: value.toBase58(),
        isInitialized: !!decodedTroveState.isInitialized,
        isLiquidated: !!decodedTroveState.isLiquidated,
        isReceived: !!decodedTroveState.isReceived,
        borrowAmount: new BN(decodedTroveState.borrowAmount, 10, 'le').toNumber(),
        lamports: new BN(decodedTroveState.lamports, 10, 'le').toString(),
        teamFee: new BN(decodedTroveState.teamFee, 10, 'le').toString(),
        depositorFee: new BN(decodedTroveState.depositorFee, 10, 'le').toString(),
        amountToClose: new BN(decodedTroveState.amountToClose, 10, 'le').toString(),
        owner: new PublicKey(decodedTroveState.owner).toBase58(),
      })
    },
    // Get Deposit
    async getTrove ({ commit, dispatch }, value) {
      await this.$axios.get('trove?user=' + this.$wallet.publicKey.toBase58()).then(({ data }) => {
        commit('setTroveId', data.model || '')
        if(data.model && data.model.trove) {
          dispatch('setTroveById', new PublicKey(data.model.trove))
          this.$accessor.dashboard.setBorrow(true)
        }
      })
    },
    // Claim
    async confirmBorrow ({ commit, dispatch }, value) {
      if (Number(value.from > 0) && Number(value.to > 0)) {
        const data = await borrowUtil(this.$wallet, Number(value.to), Number(value.from) * 1000000000, this.$web3)
        if (data && (data.troveAccountPubkey)) {
          commit('setTroveId', data.troveAccountPubkey || '')
          console.log(data, 'borrow')
          this.$accessor.wallet.getBalance()
          dispatch('setTroveById', new PublicKey(data.troveAccountPubkey))
          this.$accessor.dashboard.setBorrow(true)
          await this.$axios.post('trove/upsert', {trove: data.troveAccountPubkey, user: value.mint}).then(({ res }) => {
            console.log(res, 'newTrove Backend')
          })
        }
        this.$accessor.dashboard.setBorrow(true)
      }
    },

    // Deposit
    async closeTrove ({ state, commit }, value) {
      if (state.troveId) {
        const data = await closeBorrowUtil(this.$wallet, process.env.mint, state.trove.troveAccountPubkey, value.mint, this.$web3)
        if(data === null) {
          console.log(data, 'closeTrove')
          commit('setTroveId', '')
          await this.$axios.post('trove/liquidate', {trove: state.trove.troveAccountPubkey}).then(({ res }) => {
            console.log(res, 'newTrove Backend')
          })
          commit('setTrove', {})
          this.$accessor.wallet.getBalance()
          this.$accessor.dashboard.setBorrow(false)
        }
      }
    },

    getDebt ({ commit }, value) {
      if (value && (value.from > 0 && value.to > 0)) {
        commit('setDebt', getCollateral(String(value.from), String(value.to)))
      } else {
        commit('setDebt', 0)
      }
    }
  }
)
