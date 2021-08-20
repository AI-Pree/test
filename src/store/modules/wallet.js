import { onAccountChange } from '@solana/web3.js'

// Import Wallets Array
import wallets from '@/wallets/wallets'

// State
const state = {
  wallets: wallets,
  walletListenerId: null,
  wallet: null,
  error: false,
  loader: false,
}

// Getters
const getters = {}

// Actions
const actions = {

  // Connect Wallet
  async connectWallet ({ state, rootState, commit, dispatch }, wallet) {
    commit('setLoaderWallet', true)
    if (rootState.rpc && wallet && (wallet.url)) {
      const adapter = await wallet.getAdapter({ providerUrl: wallet.url, endpoint: rootState.rpc })
      // Check Adapter Wallet
      if (!adapter) {
        commit('setLoaderWallet', false)
        commit('setErrorWallet', true)
        commit('setWallet', null)
        this._vm.$wallet = null
      } else {
        this._vm.$wallet = adapter
        if (this._vm.$wallet) {
          const timer = setInterval(() => {
            if (this._vm.$wallet && (this._vm.$wallet._popup.closed)) {
              clearInterval(timer)
              dispatch('disconectAdapterAction')
            } else {
              clearInterval(timer)
            }
          }, 100)
        }
      }
      // Connect Wallet
      adapter.on('connect', () => {
        if (adapter.publicKey) {
          commit('setWallet', adapter.publicKey)
          commit('setWalletListenerId', this._vm.connection.onAccountChange(
            adapter.publicKey,
            (accountInfo, context) => {
              dispatch('subWallet', {accountInfo, context})
            },
            rootState.commitment
          ))
          dispatch('modal', null, {root: true})
        }
      })
      // Disconect Wallet
      adapter.on('disconnect', () => {
        dispatch('disconectWallet')
      })
      // Get Valid Wallet
      try {
        await adapter.connect()
      } catch (error) {
        console.log(error)
        // Error Wallet Connect
        this._vm.$wallet = null
        commit('setLoaderWallet', false)
        commit('setErrorWallet', true)
        commit('setWallet', null)
      }
    } else {
      // Modal Error Connect
      this._vm.$wallet = null
      commit('setWallet', null)
      dispatch('modal', 'connectError', { root: true })
    }
  },

  // Subscribe Wallet
  subWallet ({}, value) {
    console.log(value)
  },

  // Set Account Data
  getTokenAccounts ({}, value) {
    console.log(value)
  },

  // Disconect Adapter
  disconectWallet ({ commit }) {
    if (this._vm.$wallet) {
      this._vm.$wallet._popup.close()
      this._vm.$wallet = null
      commit('setLoaderWallet', false)
      commit('setErrorWallet', false)
      commit('setWallet', null)
    }
  }

}

// Mutation
const mutations = {

  // Set Wallet Mutation
  setWallet (state, value) {
    state.wallet = value ? value.toBase58() : value
  },

  // Set Wallet Listener Id Mutation
  setWalletListenerId (state, value) {
    state.walletListenerId = value
  },

  // Set Error Wallet Mutation
  setErrorWallet (state, value) {
    state.error = value
  },

  // Set Loader Wallet Mutation
  setLoaderWallet (state, value) {
    state.loader = value
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
