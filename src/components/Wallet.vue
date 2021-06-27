<template>
  <div>
    <button class="btn btn-primary" @click="$accessor.wallet.openModal">
      <small>SOL</small> {{ shortWallet || $t('nav.connect_wallet') }}
    </button>

    <Modal
      :title="!wallet.connected ? 'Connect to a wallet' : 'Your wallet'"
      :visible="wallet.modalShow"
      :footer="null"
      centered
      @cancel="$accessor.wallet.closeModal"
    >
      <div v-if="wallet.connected" class="text-center">
        <h3>{{ wallet.address }}</h3>
        <div>
          <button class="btn btn-opacity-primary" @click="disconnect">Disconnect</button>
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
    </Modal>
  </div>
</template>

<script lang="ts">
import { ENDPOINT, WalletAdapter, WALLET_PROVIDERS } from '../wallets'
import Vue from 'vue'
import SolanaWalletAdapter from '@project-serum/sol-wallet-adapter'
import { Modal } from 'ant-design-vue'

Vue.use(Modal)

export default Vue.extend({
  components: {
    Modal
  },

  computed: {
    wallet() {
      return this.$accessor.wallet
    },
    shortWallet(): string {
      const address = this.$accessor.wallet.address

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
        this.$accessor.wallet.closeModal().then(() => {
          if (wallet.publicKey) {
            Vue.prototype.$wallet = wallet
            this.$accessor.wallet.setConnected(wallet.publicKey.toBase58())

            // this.subWallet()
            this.$notify.success({
              message: 'Wallet connected',
              description: ''
            })
          }
        })
      })

      wallet.on('disconnect', () => {
        console.log('disconnected')
        this.$emit('disconnect')
      })

      try {
        wallet.connect()
      } catch (error) {
        console.error(error.message)
      }
    },

    disconnect() {
      Vue.prototype.$wallet.disconnect()
      Vue.prototype.$wallet = null

      // this.unsubWallet()

      this.$accessor.wallet.setDisconnected()
      this.$notify.warning({
        message: 'Wallet disconnected',
        description: ''
      })
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
.ant-modal-content {
  background-color: rgba($color: #161421, $alpha: 0.9);

  .ant-modal-close {
    color: #fff;
  }
}
</style>
