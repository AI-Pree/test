// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { depositUtil } from '@/utils/deposit'
import { claimDepositReward } from '@/utils/claimDepositReward'

// State
export const state = () => ({
  depositId: '',
  depositData: null
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setDepositId (state, newValue: string) {
    state.depositId = newValue
  },
  setDeposit (state, newValue: object | null) {
    state.depositData = newValue
  }
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    // Claim
    async deposit ({ commit }) {
      const data = await depositUtil(this.$wallet, 'GgMKgNMEY8QTHFXC5xSkMAKaYQqkiZ3WqFbZaBPRFwrA', 2000, this.$web3)
      if (data && (data.depositAccountPubkey)) {
        commit('setDepositId', data.depositAccountPubkey || '')
        commit('setDeposit', data || null)
        console.log(data)
      }
    },

    // Deposit
    async borrow ({ commit }) {
      console.log('borrow')
    },

    // Deposit
    async pay ({ commit }) {
      console.log('pay')
    },

    // Deposit
    async claim ({ commit, state }) {
      if (state.depositId) {
        const data = await claimDepositReward(this.$wallet, 'GgMKgNMEY8QTHFXC5xSkMAKaYQqkiZ3WqFbZaBPRFwrA', state.depositId, this.$web3)
        data.then(result => {
          console.log(result)
        })
      }
    },
  }
)
