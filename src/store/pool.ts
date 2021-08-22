// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// State
export const state = () => ({
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async cancel ({ commit }) {
      console.log('cancel')
    },

    async confirm ({ commit }) {
      console.log('confirm')
    }
  }
)
