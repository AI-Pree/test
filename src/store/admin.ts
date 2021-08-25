// Import Typed
import { getAccessorType, mutationTree, actionTree, getterTree } from 'typed-vuex'

// State
export const state = () => ({
})

export type RootState = ReturnType<typeof state>

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    // Send Warning Message
    async sendWarning ({}, value) {
      await this.$axios.post('/notification/subscribe', {type: '1', text: value.text, ratio: value.ratio}).then(({ res }) => {
        console.log(res, 'Subscribe Warning')
      })
    },

    // Send Liquidation Message
    async sendLiquidation ({}, value) {
      await this.$axios.post('/notification/send', {type: '2', text: value.text, ratio: value.ratio}).then(({ res }) => {
        console.log(res, 'Subscribe Liquidation')
      })
    }
  }
)
