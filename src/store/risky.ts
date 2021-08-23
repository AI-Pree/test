// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'


// State
export const state = () => ({
  risky: [
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' },
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' },
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' }
  ]
})

// Getters
export const getters = getterTree(state, {
  getRisky(state) {
    return state.risky
  }
})

// Mutation
export const mutations = mutationTree(state, {})

// Actions
export const actions = actionTree(
  { state, getters, mutations }, {}
)
