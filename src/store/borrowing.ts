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
    async borrow ({ commit }) {
      console.log('borrow')
    },

    // Deposit
    async pay ({ commit }) {
      console.log('borrow')
    },

    // Deposit
    async reset ({ commit }) {
      console.log('pay')
    },

    // Deposit
    async confirm ({ commit }) {
      console.log('confirm')
    },
  }
)
