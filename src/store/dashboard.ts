// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { claimDepositRewardUtil } from '@/utils/claimDepositReward'

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
      if (this.$accessor.pool.depositKey) {
        //const data = await claimDepositRewardUtil(this.$wallet, this.$accessor.pool.depositKey, this.$web3)
        //if (data) {
          //console.log(data, 'claimDeposit')
          this.$accessor.wallet.getBalance()
        //}
      }
    },
  }
)
