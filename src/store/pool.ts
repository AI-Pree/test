// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { depositUtil } from '@/utils/deposit'
import { addDepositUtil } from '@/utils/addDeposit'
import { withdrawDepositUtil } from '@/utils/withdrawDeposit'

// State
export const state = () => ({
  depositKey: '',
  depositData: null,
  loading: false
})

// Getters
export const getters = getterTree(state, {})

// Mutation
export const mutations = mutationTree(state, {
  setDepositKey (state, newValue: string) {
    state.depositKey = newValue
  },
  setDepositData (state, newValue: object | null) {
    state.depositData = newValue
  },
  setLoading (state, newValue: boolean) {
    state.loading = newValue
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    // New Deposit
    async newDeposit ({ state, commit }, value) {
      if (value && (Number(value) > 0)) {
        if (!state.depositKey) {
          commit('setLoading', true)
          try {
            const data = await depositUtil(this.$wallet, Number(value), this.$web3)
            if (data && (data.depositAccountPubkey)) {
              commit('setDepositKey', data.depositAccountPubkey || '')
              console.log(data, 'newDeposit')
              this.$accessor.wallet.getBalance()
            }
            commit('setLoading', false)
          } catch {
            commit('setLoading', false)
          }
        }
      }
    },

    // Add Deposit
    async addDeposit ({ state, commit }, value) {
      if (value && (Number(value) > 0)) {
        if (state.depositKey) {
          commit('setLoading', true)
          try {
            const data = await addDepositUtil(this.$wallet, state.depositKey, Number(value), this.$web3)
            console.log(data, 'addDeposit')
            this.$accessor.wallet.getBalance()
            commit('setLoading', false)
          } catch {
            commit('setLoading', false)
          }
        }
      }
    },

    // Close Deposit
    async closeDeposit ({ state, commit }, value) {
      if (value && (Number(value) > 0)) {
        if (state.depositKey) {
          commit('setLoading', true)
          try {
            const data = await withdrawDepositUtil(this.$wallet, String(state.depositKey), Number(value), this.$web3)
            console.log(data, 'closeDeposit')
            commit('setDepositKey', '')
            commit('setDepositData', null)
            this.$accessor.wallet.getBalance()
            commit('setLoading', false)
          } catch {
            commit('setLoading', false)
          }
        }
      }
    }
  }
)
