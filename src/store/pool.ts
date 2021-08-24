// Import Typed
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import Utils
import { depositUtil } from '@/utils/deposit'
import { addDepositUtil } from '@/utils/addDeposit'

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
    // Get Deposit
    async getDeposit ({ commit }, value) {
      await this.$axios.get('deposit?user=' + this.$wallet.publicKey.toBase58()).then(({ data }) => {
        commit('setDepositKey', data.model || '')
      })
    },

    // New Deposit
    async newDeposit ({ state, commit }, value) {
      if (value && (Number(value.from) > 0 && value.gen && value.hgen)) {
        if (!state.depositKey) {
          commit('setLoading', true)
          try {
            const data = await depositUtil(this.$wallet, process.env.mint, Number(value.from), value.gen, value.hgen, this.$web3)
            if (data && (data.depositAccountPubkey)) {
              commit('setDepositKey', data.depositAccountPubkey || '')
              console.log(data, 'newDeposit')
              await this.$axios.post('deposit/upsert', {deposit: data.depositAccountPubkey}).then(({ res }) => {
                console.log(res, 'newDeposit Backend')
              }).finnaly(() => {
                commit('setLoading', false)
              })
              this.$accessor.wallet.getBalance()
            }
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
          this.$axios.post('depositwithdraw', {deposit: state.depositKey, amount: value}).then(({ data }) => {
            console.log(data, 'closeDeposit')
            commit('setDepositKey', '')
            commit('setDepositData', null)
          }).finnaly(() => {
            commit('setLoading', false)
            this.$accessor.wallet.getBalance()
          })
        }
      }
    }
  }
)
