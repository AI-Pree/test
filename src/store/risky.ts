// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'


// State
export const state = () => ({
  troveList: [],
  troveTotal: 0
})

// Getters
export const getters = getterTree(state, {
  troveList: (state) => state.troveList,
})

// Mutation
export const mutations = mutationTree(state, {
  adjustTroveList(state, newValue = []) {
    state.troveList = [ ...state.troveList, ...newValue ]
  },
  adjustTroveListClear(state, newValue = []) {
    state.troveList = newValue
  },
  setTroveTotal(state, newValue: number) {
    state.troveTotal = newValue
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations }, {
    async getTroveListAction({ commit }, value) {
      if (value.clear) {
        commit('adjustTroveListClear', [])
      }
      let params = '?page=' + value.page
      if (value.search) {
        params += '&query=' + value.search
      }
      await this.$axios.get('trove/list' + params).then(({ data }) => {
        commit('setTroveTotal', data.total_count || 0)
        if (value.clear) {
          commit('adjustTroveListClear', data.entities || [])
        } else {
          commit('adjustTroveList', data.entities || [])
        }
      })
    },
  }
)
