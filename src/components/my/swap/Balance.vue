<template>
  <div class="w-100">
    <div class="w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-6-S pb-15-XS ta-l-S ta-c-XS">
      Your Balance
    </div>
    <div class="w-100 fd-r py-2-S py-10-XS">
      <div class="w-30 fs-6-S fs-20-XS f-white-200 fw-500">
        SOL
      </div>
      <div class="w-70 fs-6-S fs-20-XS f-mcolor-300 fw-500 ta-l-S ta-r-XS">
        {{ getBalance > 0 ? getBalance : 0 }}
      </div>
    </div>
    <div class="w-100 fd-r py-2-S py-10-XS">
      <div class="w-30 fs-6-S fs-20-XS f-white-200 fw-500">
        HGEN
      </div>
      <div class="w-70 fs-6-S fs-20-XS f-mcolor-300 fw-500 ta-l-S ta-r-XS">
        {{ getBalanceHGEN.toLocaleString() }}
      </div>
    </div>
    <div class="w-100 fd-r py-2-S py-10-XS">
      <div class="w-30 fs-6-S fs-20-XS f-white-200 fw-500">
        GENS
      </div>
      <div class="w-70 fs-6-S fs-20-XS f-mcolor-300 fw-500 ta-l-S ta-r-XS">
        {{ getBalanceGENS.toLocaleString() }}
      </div>
    </div>
    <div class="w-100 pt-8-S pt-20-XS fd-r jc-c">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="$emit('swapFunc')" :full="true">
        Swap guide
      </AmButton>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBalance () {
      return this.$accessor.wallet.balance || 0
    },
    getBalanceHGEN () {
      return this.$accessor.wallet.balanceHGEN || 0
    },
    getBalanceGENS () {
      return this.$accessor.borrowing.trove?.borrowAmount || 0
    }
  },
}
</script>
