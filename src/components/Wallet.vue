<template>
  <div>
    <button class="btn btn-primary" @click="$refs.walletsModal.openModal()">
      <small>SOL</small> {{ $t('nav.connect_wallet') }}
    </button>

    <Modal ref="walletsModal">
      <template #header>
        <h3>Conntect Wallet</h3>
      </template>

      <template #body>
        <h3>{{ connectedWallet }}</h3>
        <div class="wallets-list">
          <button v-for="wallet in wallets" :key="wallet" class="btn btn-opacity-primary" @click="connect(wallet)">
            {{ wallet }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import SolanaWalletAdapter from '@project-serum/sol-wallet-adapter'
import { WalletAdapter, walletProviders } from '../wallets'

export default {
  data() {
    return {
      connectedWallet: '',
      wallets: ['Sollet', 'Sollet Extension', 'Solong', 'Ledger', 'MathWallet', 'Phantom', 'Bonfida'] as string[]
    }
  },

  methods: {
    connect(walletName: string) {
      const endpoint = 'http://127.0.0.1:8899'
      const provider = walletProviders.find((p) => p.name === walletName)
      let wallet: WalletAdapter

      if (!provider) {
        return
      }

      if (walletName === 'Sollet Extension') {
        if ((window as any).sollet === undefined) {
          console.warn({
            message: 'Connect wallet failed',
            description: 'Please install and initialize Sollet wallet extension first'
          })
          return
        }
        wallet = new SolanaWalletAdapter((window as any).sollet, endpoint)
      } else {
        wallet = provider.adapter ? provider.adapter() : new SolanaWalletAdapter(provider.url, endpoint)
      }

      wallet.on('connect', () => {
        console.log(wallet.publicKey?.toBase58())
        // this.connectedWallet = wallet.publicKey?.toBase58() || ''
      })

      wallet.on('disconnect', () => {
        console.log('disconnected')
      })

      try {
        wallet.connect()
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}
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
