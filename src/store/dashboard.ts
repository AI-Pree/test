// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { depositUtil } from '@/utils/deposit'
import { claimDepositReward } from '@/utils/claimDepositReward'

// State
export const state = () => ({
  isBorrow: false
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setBorrow (state, newValue: boolean) {
    state.isBorrow = newValue
  }
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
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
