// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import
import { Wallets, WalletInfo } from '../utils/wallets'

// State
export const state = () => ({
  wallets: Wallets,
  wallet: '',
  errorConnect: false,
  loaderConnect: false
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {

  setWallet (state, newValue: string) {
    state.wallet = newValue
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
      const adapter = await wallet.getAdapter({ providerUrl: wallet.url, endpoint: 'https://api.mainnet-beta.solana.com' })
      if (!adapter) {
        return
      }
      adapter.on('connect', () => {
        if (adapter.publicKey) {
          alert(adapter.publicKey)
        }
      })
      try {
        adapter.connect()
      } catch (error) {
        console.log(error)
      }
    }
  }
)
