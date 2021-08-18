import * as solanaWeb3 from '@solana/web3.js';
console.log(solanaWeb3.PublicKey);
import { web3Plugin } from '@/utils/solana'

// State
const state = {
  wallet: null,
  wallets: [
    {id: 1, name: 'Bonfida', url: 'https://bonfida.com/wallet'},
    {id: 2, name: 'Ledger', url: 'https://www.ledger.com'},
    {id: 3, name: 'MarhWallet', url: 'https://mathwallet.org'},
    {id: 4, name: 'Phantom', url: 'https://phantom.app/'},
    {id: 5, name: 'Sollet', url: 'https://sollet.io'},
    {id: 6, name: 'Sollet Extension', url: 'https://sollet.io'},
    {id: 7, name: 'Solong', url: 'https://solongwallet.com'}
  ],
  errorWallet: false,
  loaderWallet: false
}

// Getters
const getters = {}

// Actions
const actions = {

  // Set Wallet Action
  setWalletAction ({ commit }, value) {
    const connection = web3Plugin
    console.log(connection)
    commit('setWallet', value)
    commit('setLoaderWallet', true)
  },

}

// Mutation
const mutations = {

  // Set Wallet Mutation
  setWallet (state, value) {
    state.wallet = value
  },

  // Set Error Wallet Mutation
  setErrorWallet (state, value) {
    state.errorWallet = value
  },

  // Set Loader Wallet Mutation
  setLoaderWallet (state, value) {
    state.loaderWallet = value
  }

}

// Module
export default {
  root: true,
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
