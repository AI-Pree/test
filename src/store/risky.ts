// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'


// State
export const state = () => ({
  troveList: [],
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
})

// Actions
export const actions = actionTree(
  { state, getters, mutations }, {
    async getTroveListAction({ commit }, page) {
      await this.$axios.get('trove/list?page=' + page.page).then(({ data }) => {
        if (page.clear) {
          commit('adjustTroveListClear', data.entities || [])
        } else {
          commit('adjustTroveList', data.entities || [])
        }
      })
    },
  }
)
