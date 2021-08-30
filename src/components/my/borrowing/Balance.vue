<template>
  <div class="w-100">
    <div class="w-100 fs-10 fw-600 f-white-200 pb-10 ta-c-XS">
      Your Balance
    </div>
    <div class="w-100 fd-r fw-w">
      <div class="w-35-S w-100-XS">
        <div class="w-100 fs-6 fw-500 f-gray-600 pb-3 ta-c-XS">
          $ {{ getBalance > 0 ? getUsdBalance : 0 }}
        </div>
        <div class="w-100 fs-10-M fs-7-S fs-10-XS fw-600 f-white-200 pb-3 ta-c-XS">
          {{ getBalance > 0 ? getBalance.toString().replace('.', ',') : 0 }}
        </div>
        <div class="w-100 fs-6 fw-500 f-mcolor-100 ta-c-XS">
          SOL
        </div>
      </div>
      <div class="w-40-S w-100-XS">
        <div class="w-100 fs-6 fw-500 f-gray-600 pb-3 ta-c-XS">
          $ {{ getBalanceHGEN > 0 ? getHGENBalance : 0 }}
        </div>
        <div class="w-100 fs-10-M fs-7-S fs-10-XS fw-600 f-white-200 pb-3 ta-c-XS">
          {{ getBalanceHGEN > 0 ? (getBalanceHGEN).toLocaleString() : 0 }}
        </div>
        <div class="w-100 fs-6 fw-500 f-mcolor-100 ta-c-XS">
          HGEN
        </div>
      </div>
      <div class="w-25-S w-100-XS">
        <div class="w-100 fs-6 fw-500 f-gray-600 pb-3">&nbsp;</div>
        <div class="w-100 fs-10-M fs-7-S fs-10-XS fw-600 f-white-200 pb-3 ta-c-XS">
          {{ getBalanceGENS.toLocaleString() }}
        </div>
        <div class="w-100 fs-6 fw-500 f-mcolor-100 ta-c-XS">
          GENS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getUsd () {
      return this.$accessor.usd || 0
    },
    getBalance () {
      return this.$accessor.wallet.balance || 0
    },
    getBalanceHGEN () {
      return this.$accessor.wallet.balanceHGEN || 0
    },
    getBalanceGENS () {
      return this.$accessor.borrowing.trove?.borrowAmount || 0
    },
    getUsdBalance () {
      let result = 0
      if (this.getBalance) {
        result = (Number(this.getBalance) * this.getUsd).toString().split('.')
        result = Number(result[0]).toLocaleString() + ',' + result[1].substr(0, 2)
      }
      return result.toString()
    },
    getHGENBalance () {
      let result = 0
      if (this.getBalanceHGEN) {
        result = (Number(this.getBalanceHGEN) * this.getUsd).toString().split('.')
        result = Number(result[0]).toLocaleString() + ',' + result[1].substr(0, 2)
      }
      return result.toString()
    },
  },
}
</script>
