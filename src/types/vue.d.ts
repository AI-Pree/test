import { NuxtWeb3Instance } from './web3'
import { accessorType } from '~/store'
import { WalletAdapter } from '@solana/wallet-base'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $web3: NuxtWeb3Instance,
    $accessor: typeof accessorType
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $web3: NuxtWeb3Instance,
    $accessor: typeof accessorType
  }
}

// Vuex
declare module 'vuex/types/index' {
  // eslint-disable-next-line
  interface Store<S> {
    $web3: NuxtWeb3Instance,
    $accessor: typeof accessorType
  }
}
