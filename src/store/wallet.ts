// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import
import { Wallets, WalletInfo } from '../utils/wallets'
import { Account, Connection, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, TransactionInstruction } from "@solana/web3.js";

// State
export const state = () => ({
  publicKey: null,
  wallets: Wallets,
  errorConnect: false,
  loaderConnect: false
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {

  setPublicKey (state, newValue: string) {
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
    // Connection
    async connectWallet ({ commit }, wallet: WalletInfo) {
      commit('setLoaderConnect', true)
      const adapter = await wallet.getAdapter({ providerUrl: wallet.url, endpoint: 'https://api.mainnet-beta.solana.com' })
      if (!adapter || !this.$web3) {
        this.app.$accessor.setModal('connectError')
        return
      }
      this.$wallet = adapter
      adapter.on('connect', () => {
        if (adapter.publicKey) {
          commit('setPublicKey', adapter.publicKey.toBase58())
          this.app.$accessor.setModal('')
          const data = new Account()
          console.log(data)
        }
        commit('setLoaderConnect', false)
      })
      try {
        adapter.connect()
      } catch (error) {
        console.log(error)
        commit('setErrorConnect', true)
        commit('setLoaderConnect', false)
      }
    },
    // Disconnection
    logout ({ commit }) {
      if (this.$wallet) {
        this.$wallet.disconnect()
        this.$wallet = null
      }
      commit('setPublicKey', '')
      this.$router.push('/')
    }
  }
)
