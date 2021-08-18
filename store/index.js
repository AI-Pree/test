import wallet from './modules/wallet'

// State
export const state = () => ({
  language: 'en',
  modal: null
})

// Getters
export const getters = {}

// Actions
export const actions = {

  // Set Name Modal Action
  setModalAction ({ commit }, value) {
    commit('wallet/setErrorWallet', false)
    commit('wallet/setLoaderWallet', false)
    commit('setModal', value === false ? null : value)
  }

}

// Mutation
export const mutations = {

  // Set Name Modal Mutation
  setModal (state, value) {
    state.modal = value
  }

}

// Modules
export const modules = {
  wallet
}
