<template>
  <div class="w-100">
    <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4">
      Borrowing
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-5-XS f-white-200 pb-6">
      You will receive GENS stable coin.
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-5-XS f-gray-500 pb-3">
      your current debt
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 pb-8">
      <span class="fs-9-M fs-9-S fs-7-XS fw-800 f-mcolor-100">{{getDebt.toLocaleString()}}</span>
      <span class="fs-9-M fs-9-S fs-7-XS fw-600 px-1">GENS</span>
      (<span class="f-mcolor-100 fw-800 pr-1">{{getCollateral}}%</span> Collateral)
    </div>
    <div class="w-100 pb-6 fd-c-L fd-r-S fd-c-XS">
      <div class="w-100 mr-0-L mr-2-S mr-0-XS" v-if="!isBorrow">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full to="/my/borrowing">
          Borrow
        </AmButton>
      </div>
      <div class="w-100 pt-4-L pt-0-S pt-4-XS ml-0-L ml-2-S ml-0-XS" v-if="isBorrow">
        <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full to="/my/borrowing">
          pay debt
        </AmButton>
      </div>
    </div>
    <div class="w-100 fd-r ai-c py-2">
      <div class="w-100 fs-5 fw-400 f-white-200">
        Total Borrowing
      </div>
      <div class="w-45 fsh-0 fs-5 f-white-200 fw-600">
        <span class="f-mcolor-100">{{ getTotalDebt.toLocaleString() }}</span> GENS
      </div>
    </div>
    <div class="w-100 fd-r ai-c py-2" v-if="false">
      <div class="w-100 fs-5 fw-400 f-white-200">
        Total Debt Ratio
      </div>
      <div class="w-45 fsh-0 fs-5 f-white-200 fw-600">
        <span class="f-mcolor-100">30.70</span> %
      </div>
    </div>
    <div class="w-100 fd-r ai-c pt-2" v-if="false">
      <div class="w-100 fs-5 fw-400 f-white-200">
        Total Liquidation Mode
      </div>
      <div class="w-45 fsh-0 fs-5 f-red-700 fw-600">
        OFF
      </div>
    </div>
  </div>
</template>

<script>
import { getCollateral } from "../../../utils/layout"

export default {
  computed: {
    isBorrow () {
      return this.$accessor.dashboard.isBorrow
    },
    getDebt () {
      console.log(this.$accessor.borrowing.trove)
      return this.$accessor.borrowing.trove.borrowAmount || '0'
    },
    getBalanceHGEN () {
      return this.$accessor.wallet.balanceHGEN || 0
    },
    getBalanceGENS () {
      return this.$accessor.wallet.balanceGENS || 0
    },

    getTotalDebt() {
      return this.$accessor.troveTotal;
    },
    getCollateral () {
      return this.$accessor.borrowing.trove.borrowAmount ?
        getCollateral(this.$accessor.borrowing.trove.borrowAmount.toString(), this.$accessor.borrowing.trove.lamports.toString(), this.$accessor.usd.toString()) : 0;
    }
  },
}
</script>
