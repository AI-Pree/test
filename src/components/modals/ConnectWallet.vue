<template>
  <div class="w-100">
    <transition name="fade">
      <div class="w-100 mcolor-600 p-4 fd-c ai-c rad-fix-8 mb-3 mt-1" v-if="error">
        <div class="d-f fd-r ai-c">
          <img src="@/assets/svg/warning.svg" class="w-fix-s-10-S w-fix-s-40-XS" />
          <div class="fs-7-M fs-5-S fs-25-XS f-mcolor-500 fw-800 pl-2">
            Connect to wallet
          </div>
        </div>
        <div class="w-100 fs-6-S fs-20-XS f-mcolor-500 fw-400 pt-2 ta-c">
          Please install and initialize Solong waller extention first
        </div>
      </div>
    </transition>
    <div class="w-100 ta-c fs-10-M fs-7-S fs-25-XS f-white-200 fw-600">
      Connect to wallet
    </div>
    <div class="w-100 ta-c fs-8-M fs-6-S fs-20-XS f-gray-500 fw-400 pt-4-M pt-2-S pt-8-XS pb-2">
      Solana Blockchain
    </div>
    <div class="w-100 fd-c ai-c py-4-M py-2-S py-20-XS" v-if="!loader">
      <span class="my-2-S my-6-XS fs-8-M fs-6-S fs-23-XS f-gray-700 hvw ts-3" v-for="(wallet, i) in wallets" :key="i" @click="$emit('set', wallet)">
        {{ wallet.name }}
      </span>
    </div>
    <div class="w-100 fd-c ai-c pt-10-S pt-20-XS pb-8-S pb-20-XS" v-if="loader">
      <Loading />
      <div class="w-100 ta-c fs-6-S fs-20-XS f-white-200 pt-4-S pt-10-XS">
        Connection...
      </div>
    </div>
    <div class="w-100 fd-r jc-c px-15-M px-0-S px-0-XS pt-4">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="$emit('cancel', false)">
        Cancel
      </AmButton>
    </div>
    <div class="w-100 fd-r jc-c pt-4-S pt-20-XS">
      <nuxt-link to="/" class="td-u ts-3 hv f-mcolor-100 fs-6-S fs-20-XS fw-600">
        Wallet guide
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'


export default {
  components: {
    Loading
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
