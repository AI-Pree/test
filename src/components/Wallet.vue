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
import { WalletAdapter, WALLET_PROVIDERS } from '../wallets'
import { Vue, Component } from 'nuxt-property-decorator'
import { AccountInfo, Context } from '@solana/web3.js'
import SolanaWalletAdapter from '@project-serum/sol-wallet-adapter'
import importIcon from '@/utils/import-icon'
import logger from '@/utils/logger'
import { Modal } from 'ant-design-vue'
import { web3Config, commitment } from '@/utils/web3'

Vue.use(Modal)

@Component({
  components: {
    Modal
  }
})
export default class Wallet extends Vue {
  // auto refresh
  walletTimer: number | undefined = undefined
  priceTimer: number | undefined = undefined
  liquidityTimer: number | undefined = undefined
  farmTimer: number | undefined = undefined
  idoTimer: number | undefined = undefined
  // web3 listener
  walletListenerId = null as number | null

  /* ========== COMPUTED ========== */
  get wallet() {
    return this.$accessor.wallet
  }

  get shortWallet(): string {
    const address = this.$accessor.wallet.address

    return address ? `${address.substring(0, 5)}...${address.substring(address.length - 5, address.length)}` : ''
  }

  get providers() {
    return WALLET_PROVIDERS
  }

  get price() {
    return this.$accessor.price
  }

  get liquidity() {
    return this.$accessor.liquidity
  }

  get farm() {
    return this.$accessor.farm
  }

  get ido() {
    return this.$accessor.ido
  }

  /* ========== LIFECYCLE ========== */
  async beforeMount() {
    await this.$accessor.price.requestPrices()
    await this.$accessor.liquidity.requestInfos()
    await this.$accessor.swap.getMarkets()
    await this.$accessor.farm.requestInfos()

    this.setWalletTimer()
    this.setPriceTimer()
    this.setLiquidityTimer()
    this.setFarmTimer()
    this.setIdoTimer()
  }

  beforeDestroy() {
    window.clearInterval(this.walletTimer)
    window.clearInterval(this.priceTimer)
    window.clearInterval(this.liquidityTimer)
    window.clearInterval(this.farmTimer)
    window.clearInterval(this.idoTimer)
  }

  /* ========== WATCH ========== */

  /* ========== METHODS ========== */
  importIcon = importIcon

  connect(providerName: string) {
    const provider = WALLET_PROVIDERS.find((p) => p.name === providerName)
    let wallet: WalletAdapter
    const { rpcs } = web3Config
    const endpoint = rpcs[0]

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
      wallet = new SolanaWalletAdapter((window as any).sollet, endpoint.url)
    } else {
      wallet = provider.adapter ? provider.adapter() : new SolanaWalletAdapter(provider.url, endpoint.url)
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
      this.disconnect()
    })

    try {
      wallet.connect()
    } catch (error) {
      console.error(error.message)
    }
  }

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

  onWalletChange(_accountInfo: AccountInfo<Buffer>, context: Context): void {
    logger('onAccountChange')

    const { slot } = context

    if (slot !== this.wallet.lastSubBlock) {
      this.$accessor.wallet.setLastSubBlock(slot)
      this.$accessor.wallet.getTokenAccounts()
      this.$accessor.farm.getStakeAccounts()
      this.$accessor.ido.getIdoAccounts()
    }
  }

  subWallet() {
    const wallet = this.$wallet
    if (wallet && wallet.publicKey) {
      this.walletListenerId = this.$web3.onAccountChange(wallet.publicKey, this.onWalletChange, commitment)

      this.$accessor.wallet.getTokenAccounts()
      this.$accessor.farm.getStakeAccounts()
      this.$accessor.ido.getIdoAccounts()
    }
  }

  unsubWallet() {
    if (this.walletListenerId) {
      this.$web3.removeAccountChangeListener(this.walletListenerId)
    }
  }

  setWalletTimer() {
    this.walletTimer = window.setInterval(async () => {
      if (this.wallet.connected && !this.wallet.loading) {
        // vuex is connected but $wallet not, meaning window closed
        if (this.$wallet && this.$wallet.connected) {
          if (this.wallet.countdown < this.wallet.autoRefreshTime) {
            this.$accessor.wallet.setCountdown(this.$accessor.wallet.countdown + 1)
            if (this.wallet.countdown === this.wallet.autoRefreshTime) {
              await this.$accessor.wallet.getTokenAccounts()
            }
          }
        } else {
          this.disconnect()
        }
      }
    }, 1000)
  }

  setPriceTimer() {
    this.priceTimer = window.setInterval(async () => {
      if (!this.price.loading) {
        if (this.price.countdown < this.price.autoRefreshTime) {
          this.$accessor.price.setCountdown(this.$accessor.price.countdown + 1)
          if (this.price.countdown === this.price.autoRefreshTime) {
            await this.$accessor.price.requestPrices()
          }
        }
      }
    }, 1000)
  }

  setLiquidityTimer() {
    this.liquidityTimer = window.setInterval(async () => {
      if (!this.liquidity.loading) {
        if (this.liquidity.countdown < this.liquidity.autoRefreshTime) {
          this.$accessor.liquidity.setCountdown(this.$accessor.liquidity.countdown + 1)
          if (this.liquidity.countdown === this.liquidity.autoRefreshTime) {
            await this.$accessor.liquidity.requestInfos()
          }
        }
      }
    }, 1000)
  }

  setFarmTimer() {
    this.farmTimer = window.setInterval(async () => {
      if (!this.farm.loading) {
        if (this.farm.countdown < this.farm.autoRefreshTime) {
          this.$accessor.farm.setCountdown(this.$accessor.farm.countdown + 1)
          if (this.farm.countdown === this.farm.autoRefreshTime) {
            await this.$accessor.farm.requestInfos()
          }
        }
      }
    }, 1000)
  }

  setIdoTimer() {
    this.idoTimer = window.setInterval(async () => {
      if (!this.ido.loading) {
        if (this.ido.countdown < this.ido.autoRefreshTime) {
          this.$accessor.ido.setCountdown(this.$accessor.ido.countdown + 1)
          if (this.ido.countdown === this.ido.autoRefreshTime) {
            await this.$accessor.ido.requestInfos()
          }
        }
      }
    }, 1000)
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
.ant-modal-content {
  background-color: rgba($color: #161421, $alpha: 0.9);

  .ant-modal-close {
    color: #fff;
  }
}
</style>
