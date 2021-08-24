// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { borrowUtil } from '@/utils/borrow'
import { closeBorrowUtil } from '@/utils/closeBorrow'

// State
export const state = () => ({
  troveId: ''
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setTroveId (state, newValue: string) {
    state.troveId = newValue
  }
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    // Get Deposit
    async getTrove ({ commit }, value) {
      await this.$axios.get('trove?user=' + this.$wallet.publicKey.toBase58()).then(({ data }) => {
        commit('setTroveId', data.model || '')
      })
    },
    // Claim
    async confirmBorrow ({ commit }, value) {
      if (Number(value.from > 0) && Number(value.to > 0)) {
        const data = await borrowUtil(this.$wallet, Number(value.from), Number(value.to) * 1000000000, this.$web3)
        if (data && (data.troveAccountPubkey)) {
          commit('setTroveId', data.troveAccountPubkey || '')
          console.log(data, 'borrow')
          this.$accessor.wallet.getBalance()
        }
        this.$accessor.dashboard.setBorrow(true)
      }
    },

    // Deposit
    async closeTrove ({ state, commit }) {
      if (state.troveId) {
        const data = await closeBorrowUtil(this.$wallet, '12', String(state.troveId), '12', this.$web3)
        console.log(data, 'closeTrove')
        commit('setTroveId', '')
        this.$accessor.wallet.getBalance()
        this.$accessor.dashboard.setBorrow(false)
      }
    },
  }
)
