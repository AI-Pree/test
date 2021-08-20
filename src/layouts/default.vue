<template>
  <div class="w-100 h-100min">
    <div class="w-100 h-100min p-f l-0 t-0 ovh-y-a bg-l" />
    <Menu @connect="modalWallet" :wallet="wallet" />
    <Nuxt class="layout" />
    <Footer />
    <AmModal
      :show="modal === 'connect'"
      :shadow="error ? 'shadow-red-100' : 'shadow-purple-300'"
      max="w-fix-250-S w-90-XS"
      @closed="modalWallet">
        <ConnectWallet
          @cancel="modalWallet"
          @set="connectWallet"
          :wallets="wallets"
          :error="error"
          :loader="loader" />
    </AmModal>
    <AmModal
      :show="modal === 'connectError'"
      shadow="shadow-red-100"
      max="w-fix-250-S w-90-XS"
      @closed="modalWallet">
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
      'modal',
    ]),
    ...mapState('wallet', [
      'wallet',
      'wallets',
      'error',
      'loader'
    ])
  },

  methods: {
    ...mapActions([
      'modalWallet'
    ]),
    ...mapActions('wallet', [
      'connectWallet'
    ])
  }

}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
