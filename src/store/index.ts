// Import Typed
import { getAccessorType, mutationTree, actionTree, getterTree } from 'typed-vuex'

// Import Modules
import * as wallet from './wallet'
import * as dashboard from './dashboard'
import * as borrowing from './borrowing'
import * as swap from './swap'
import * as pool from './pool'

// State
export const state = () => ({
  modal: ''
})

export type RootState = ReturnType<typeof state>

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setModal (state, newValue: string) {
    state.modal = newValue
  },

  initialiseStore() {
    console.log('initialised')
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {

  }
)

// Export Module
export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    wallet,
    dashboard,
    borrowing,
    swap,
    pool
  }
})
