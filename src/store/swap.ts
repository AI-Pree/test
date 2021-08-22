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
    // Claim
    async swap ({ commit }) {
      console.log('swap')
    },
    // Claim
    async createRay ({ commit }) {
      console.log('createRay')
    },
  }
)
