<template>
  <div>
    <button class="btn btn-primary" @click="$refs.walletsModal.openModal()">
      <small>SOL</small> {{ shortWallet || $t('nav.connect_wallet') }}
    </button>

    <Modal ref="walletsModal">
      <template #header>
        <h3>Conntect Wallet</h3>
      </template>

      <template #body>
        <div v-if="wallet" class="text-center">
          <h3>{{ wallet }}</h3>
          <div>
            <button class="btn btn-opacity-primary" @click="disconnect()">Disconnect</button>
          </div>
        </div>
        <div v-else class="wallets-list">
          <button
            v-for="provider in providers"
            :key="provider.name"
            class="btn btn-opacity-primary"
            @click="connect(provider.name)"
          >
            {{ provider.name }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SolanaWalletAdapter from '@project-serum/sol-wallet-adapter'

import { ENDPOINT, WalletAdapter, WALLET_PROVIDERS } from '../wallets'

export default Vue.extend({
  data() {
    return {
      wallet: ''
    }
  },

  computed: {
    shortWallet(): string {
      const address = this.wallet

      return address ? `${address.substring(0, 5)}...${address.substring(address.length - 5, address.length)}` : ''
    },
    providers() {
      return WALLET_PROVIDERS
    }
  },

  methods: {
    connect(providerName: string) {
      const provider = WALLET_PROVIDERS.find((p) => p.name === providerName)
      let wallet: WalletAdapter

      if (!provider) {
        return
      }

      if (providerName === 'Sollet Extension') {
        if ((window as any).sollet === undefined) {
          console.warn({
            message: 'Connect wallet failed',
            description: 'Please install and initialize Sollet wallet extension first'
          })
          return
        }
        wallet = new SolanaWalletAdapter((window as any).sollet, ENDPOINT)
      } else {
        wallet = provider.adapter ? provider.adapter() : new SolanaWalletAdapter(provider.url, ENDPOINT)
      }

      wallet.on('connect', () => {
        console.log('CONNECTED', wallet.publicKey?.toBase58())
        this.wallet = wallet.publicKey?.toBase58() || ''
        Vue.prototype.$wallet = wallet
        ;(this.$refs as any).walletsModal.closeModal()
      })

      wallet.on('disconnect', () => {
        console.log('disconnected')
      })

      try {
        wallet.connect()
      } catch (error) {
        console.error(error.message)
      }
    },

    disconnect() {
      this.wallet = ''
      Vue.prototype.$wallet?.disconnect()
      Vue.prototype.$wallet = null
    }
  }
})
</script>

<style lang="scss">
.wallets-list {
  > .btn {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
