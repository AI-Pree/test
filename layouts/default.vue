<template>
  <div class="w-100 h-100min">
    <div class="w-100 h-100min p-f l-0 t-0 ovh-y-a bg-l" />
    <Menu @connect="setModalAction" />
    <Nuxt class="layout" />
    <Footer />
    <AmModal
      :show="modal === 'connect'"
      :shadow="errorWallet ? 'shadow-red-100' : 'shadow-purple-300'"
      max="w-fix-250-S w-90-XS"
      @closed="setModalAction">
        <ConnectWallet
          @cancel="setModalAction"
          @set="setWalletAction"
          :wallets="wallets"
          :error="errorWallet"
          :loader="loaderWallet" />
    </AmModal>
    <AmModal
      :show="modal === 'connectError'"
      shadow="shadow-red-100"
      max="w-fix-250-S w-90-XS"
      @closed="setModalAction">
        <ConnectError />
    </AmModal>
  </div>
</template>

<script>
import ConnectWallet from '@/components/modals/ConnectWallet'
import ConnectError from '@/components/modals/ConnectError'

import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ConnectWallet,
    ConnectError
  },
  computed: {
    ...mapState([
      'modal'
    ]),
    ...mapState('wallet', [
      'wallets',
      'errorWallet',
      'loaderWallet'
    ])
  },
  methods: {
    ...mapActions([
      'setModalAction'
    ]),
    ...mapActions('wallet', [
      'setWalletAction'
    ])
  }
}
</script>
