// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import {TROVE_ACCOUNT_DATA_LAYOUT, TroveLayout, getCollateral} from "@/utils/layout";
import {PublicKey} from "@solana/web3.js";
import BN from "bn.js";

// State
export const state = () => ({
  troveList: [],
})

// Getters
export const getters = getterTree(state, {
  troveList: (state) => state.troveList,
})

// Mutation
export const mutations = mutationTree(state, {
  adjustTroveList(state, newValue = []) {
    state.troveList = [ ...state.troveList, ...newValue ]
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations }, {
    async getTroveListAction({ state, commit }, page) {
      await this.$axios.get('trove/list?page=' + page).then(async ({ data }) => {
        await commit('adjustTroveList', data.entities.map(async (item) => {
          const encodedTroveState = (await this.$web3.getAccountInfo(new PublicKey(item.trove), 'singleGossip'))!.data;
          const decodedTroveState = TROVE_ACCOUNT_DATA_LAYOUT.decode(encodedTroveState) as TroveLayout;
          console.log(decodedTroveState)
          return {
            date: '12',
            holder: '12', //String(new PublicKey(decodedTroveState.owner).toBase58()),
            coll: '12',
            debt: '12',//String(new BN(decodedTroveState.borrowAmount, 10, 'le').toNumber()),
            fee: '12',//String(new BN(decodedTroveState.depositorFee, 10, 'le').toString()),
            debtRatio: '12',//getCollateral(new BN(decodedTroveState.borrowAmount, 10, 'le').toNumber(), new BN(decodedTroveState.lamports, 10, 'le').toString()),
            price: '12'
          }
        }) || [])
        console.log(state.troveList, 1)
      })
    },
  }
)
