<template>
  <div class="w-100">
    <transition name="fade">
      <div class="w-100 mcolor-600 p-4 fd-c ai-c rad-fix-8 mb-3 mt-1" v-if="error">
        <div class="d-f fd-r ai-c">
          <img src="@/assets/svg/warning.svg" class="w-fix-s-10" />
          <div class="fs-7 f-mcolor-500 fw-800 pl-2">
            Connect to wallet
          </div>
        </div>
        <div class="w-100 fs-6 f-mcolor-500 fw-400 pt-2 ta-c">
          Please install and initialize Solong waller extention first
        </div>
      </div>
    </transition>
    <div class="w-100 ta-c fs-10 f-white-200 fw-600">
      Connect to wallet
    </div>
    <div class="w-100 ta-c fs-8 f-gray-500 fw-400 pt-4 pb-2">
      Solana Blockchain
    </div>
    <div class="w-100 fd-c ai-c py-4" v-if="!loader">
      <span class="my-2 fs-8 f-gray-700 hvw ts-3" v-for="(wallet, i) in wallets" :key="i" @click="$emit('set', wallet)">
        {{ wallet.name }}
      </span>
    </div>
    <div class="w-100 fd-c ai-c pt-10 pb-8" v-if="loader">
      <Loader />
      <div class="w-100 ta-c fs-6 f-white-200 pt-4">
        Connection...
      </div>
    </div>
    <div class="w-100 fd-r jc-c px-15 pt-4">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="$emit('cancel', false)">
        Cancel
      </AmButton>
    </div>
    <div class="w-100 fd-r jc-c pt-4">
      <nuxt-link to="/" class="td-u ts-3 hv f-mcolor-100 fs-6 fw-600">
        Wallet guide
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    wallets: {type: Array, default: null},
    error: {type: Boolean, default: false},
    loader: {type: Boolean, default: false}
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
