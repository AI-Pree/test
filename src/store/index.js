import { Connection, clusterApiUrl } from '@solana/web3.js'

// Modules
import wallet from './modules/wallet'

// State
export const state = () => ({
  language: 'en',
  modal: null,
  rpcs: [
    { url: 'https://solana-api.projectserum.com', weight: 10 },
    { url: 'https://raydium.rpcpool.com', weight: 50 },
    { url: 'https://api.rpcpool.com', weight: 10 },
    { url: 'https://free.rpcpool.com', weight: 10 },
    { url: 'https://api.mainnet-beta.solana.com', weight: 20 }
  ],
  rpc: null,
  commitment: 'confirmed'
})

// Getters
export const getters = {}

// Actions
export const actions = {

  // Set Rpc Server
  async setRpcServerAction ({ dispatch, state, commit }) {
    if (!state.rpc) {
      // Get Fast Endpoint
      const rpc = await dispatch('getFastEndpoint', null)
      // Get Connection Server Solana
      this._vm.connection = await new Connection(clusterApiUrl('devnet') /* rpc */, state.commitment)
      // Set Commit
      commit('setRpcAdress', rpc)
    }
  },

  // Get Fast Rpc Server
  async getFastEndpoint ({ state }, rpc) {
    state.rpcs.forEach(itemRpc => {
      this.$axios.post(itemRpc.url, { jsonrpc: '2.0', id: 1, method: 'getEpochInfo' }).then((data) => {
        if (!rpc) {
          rpc = itemRpc.url
        }
      })
    })
    while (true) {
      if (rpc) {
        break
      }
      await new Promise((resolve, reject) => setTimeout(resolve, 10))
    }
    return rpc
  },

  // Set Name Modal Action
  modal ({ commit, state }, value) {
    // Set Modal
    commit('setModal', value === false ? null : value)
  },

  // Set Name Modal Action
  modalWallet ({ commit, state, dispatch }, value) {
    if (this._vm.$wallet && !value) {
      // Remove Adapter
      dispatch('wallet/disconectWallet')
    } else {
      // Clear Connect Error Wallet
      commit('wallet/setErrorWallet', false)
      // Clear Connect Loader Wallet
      commit('wallet/setLoaderWallet', false)
      // Set Modal
      commit('setModal', value === false ? null : value)
    }
  }

}

// Mutation
export const mutations = {

  // Set Rpc Adress
  setRpcAdress (state, value) {
    state.rpc = value
  },

  // Set Name Modal Mutation
  setModal (state, value) {
    state.modal = value
  }

}

// Modules
export const modules = {
  wallet
}
