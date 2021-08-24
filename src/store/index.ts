// Import Typed
import { OWNER_ACCOUNT_DATA_LAYOUT, DepositLayout } from '@/utils/layout';
import { getAccessorType, mutationTree, actionTree, getterTree } from 'typed-vuex'

// Import Modules
import * as wallet from './wallet'
import * as dashboard from './dashboard'
import * as borrowing from './borrowing'
import * as swap from './swap'
import * as pool from './pool'

// State
export const state = () => ({
  modal: '',
  totalDeposit: 0,
  gasFee: 0,
  governanceReward: 0,
  solReward: 0,
  tokenReward: 0,
  troveTotal: 0
})

export type RootState = ReturnType<typeof state>

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setModal (state, newValue: string) {
    state.modal = newValue
  },
  setTotalDeposit (state, newValue: number) {
    state.totalDeposit = newValue
  },
  setGasFee (state, newValue: number) {
    state.gasFee = newValue
  },
  setGovernanceReward (state, newValue: number) {
    state.governanceReward = newValue
  },
  setSolReward (state, newValue: number) {
    state.solReward = newValue
  },
  setTokenReward (state, newValue: number) {
    state.tokenReward = newValue
  },
  setTroveTotal (state, newValue: number) {
    state.troveTotal = newValue
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async getInfo ({ commit }) {
      await this.$axios.get('info').then(({ data }) => {
        commit('setTotalDeposit', data.depositTotal || 0)
        commit('setGasFee', data.gasFee || 0)
        commit('setGovernanceReward', data.governanceReward || 0)
        commit('setSolReward', data.solReward || 0)
        commit('setTokenReward', data.tokenReward || 0)
        commit('setTroveTotal', data.troveTotal || 0)
      })
    }
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
