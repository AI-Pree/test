<template>
  <div class="w-90-S w-100-XS h-100min fd-c l-0-S">
    <div class="w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-5-S pb-10-XS ta-c">
      Safe Pool
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 pb-8-S pb-15-XS ta-c px-10-S px-0-XS">
      You can earn SOL and HGEN coins by depositing GENS
    </div>
    <div class="w-100 fd-r ai-c">
      <div class="w-70-S w-50-XS">
        <div class="w-100 fs-6-S fs-20-XS f-gray-600 pb-2-S pb-10-XS">
          your current pool share
        </div>
        <div class="w-100 fs-5-S fs-25-XS f-white-200">
          <span class="f-mcolor-100 fs-8-S fs-25-XS fw-900">{{getPercent}}</span>
          <span class="fs-8-S fs-25-XS fw-900 px-1">%</span>
          (<span class="f-mcolor-100 fw-800 pr-1">{{ getDepositAmount.toLocaleString() }}</span> GENS)
        </div>
      </div>
      <div class="w-30-S w-50-XS pl-0-S pl-40-XS">
        <div class="w-100 fs-6-S fs-20-XS f-gray-600 pb-2-S pb-10-XS">
          APY
        </div>
        <div class="w-100 fs-8-S fs-25-XS fw-900 f-white-200">
          <span class="f-mcolor-100 mr-1">32.5</span>%
        </div>
      </div>
    </div>
    <div class="w-100 pt-8-S pt-20-XS pb-6-S pb-20-XS">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full to="/my/pool">
        Deposit
      </AmButton>
    </div>
    <div class="w-100 fd-r ai-c py-2-S py-10-XS">
      <div class="w-100 fs-5-S fs-20-XS fw-400 f-white-200">
        Total Deposited
      </div>
      <div class="w-45 fsh-0 fs-5-S fs-20-XS f-white-200 fw-600 ta-r">
        <span class="f-mcolor-100 pr-1-S pr-3-XS">{{ getDepositeTotal.toLocaleString() }}</span> GENS
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isBorrow () {
      return this.$accessor.dashboard.isBorrow
    },
    getDepositAmount () {
      return this.$accessor.pool.depositAmount
    },
    getPercent () {
      return Number.parseInt((this.$accessor.pool.depositAmount / this.$accessor.totalDeposit || 0) * 100)
    },
    getDepositeTotal () {
      return this.$accessor.totalDeposit || 0
    }
  },
}
</script>
