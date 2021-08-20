// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import
import { Wallets, WalletInfo } from '../utils/wallets'

// State
export const state = () => ({
  publicKey: '',
  wallets: Wallets,
  errorConnect: false,
  loaderConnect: false
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {

  setPublicKey (state, newValue: string | null) {
    state.publicKey = newValue
  },

  setErrorConnect (state, newValue: boolean) {
    state.errorConnect = newValue
  },

  setLoaderConnect (state, newValue: boolean) {
    state.loaderConnect = newValue
  },

})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async connectWallet ({ commit }, wallet: WalletInfo) {
      commit('setLoaderConnect', true)
      const adapter = await wallet.getAdapter({ providerUrl: wallet.url, endpoint: 'https://api.mainnet-beta.solana.com' })
      if (!adapter) {
        return
      }
      (this as any)._vm.$wallet = adapter
      adapter.on('connect', () => {
        if (adapter.publicKey) {
          commit('setPublicKey', adapter.publicKey.toBase58())
          commit('setModal', '', { root: true })
        }
        commit('setLoaderConnect', false)
      })
      try {
        adapter.connect()
      } catch (error) {
        console.log(error)
        commit('setLoaderConnect', false)
      }
    }
  }
)
