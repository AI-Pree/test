// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// State
export const state = () => ({
  depositKey: '',
  depositData: null,
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setDepositKey (state, newValue: string) {
    state.depositKey = newValue
  },
  setDepositData (state, newValue: object | null) {
    state.depositData = newValue
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    // Deposit
    async deposit ({ commit }) {
      const data = await depositUtil(this.$wallet, 'GgMKgNMEY8QTHFXC5xSkMAKaYQqkiZ3WqFbZaBPRFwrA', 2000, this.$web3)
      if (data && (data.depositAccountPubkey)) {
        commit('setDepositKey', data.depositAccountPubkey || '')
        commit('setDepositData', data || null)
        console.log(data)
      }
    },
  }
)
