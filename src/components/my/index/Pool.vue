<template>
  <div class="w-90-L w-60-S w-100-XS h-100min fd-c jc-c l-0-L l-20-S">
    <div class="w-100 fs-9-M fs-7-S fs-7-XS fw-600 f-white-200 pb-4 ta-c">
      Safe Pool
    </div>
    <div class="w-100 fs-6 f-white-200 pb-6 ta-c px-10-S px-0-XS">
      You can earn SOL and HGEN coins by depositing GENS
    </div>
    <div class="w-100 fd-r-S fd-c-XS ai-c">
      <div class="w-70-S w-100-XS">
        <div class="w-100 fs-6 f-gray-600 pb-2">
          your current pool share
        </div>
        <div class="w-100 fs-5 f-white-200">
          <span class="f-mcolor-100 fs-10 fw-900">6.40</span>
          <span class="fs-10 fw-900 px-1">%</span>
          (<span class="f-mcolor-100 fw-800 pr-1">201</span> GENS)
        </div>
      </div>
      <div class="w-30-S w-100-XS pt-4-XS">
        <div class="w-100 fs-6 f-gray-600 pb-2">
          APY
        </div>
        <div class="w-100 fs-10 fw-900 f-white-200">
          <span class="f-mcolor-100 mr-1">32.5</span>%
        </div>
      </div>
    </div>
    <div class="w-100 pt-8 pb-6">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full to="/my/pool">
        Deposit
      </AmButton>
    </div>
    <div class="w-100 fd-r ai-c py-2">
      <div class="w-100 fs-5 fw-400 f-white-200">
        Total Deposited
      </div>
      <div class="w-45 fsh-0 fs-5 f-white-200 fw-600">
        <span class="f-mcolor-100">{{ getDepositeTotal.toLocaleString() }}</span> GENS
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
    getDepositeTotal () {
      return this.$accessor.totalDeposit || 0
    }
  },
}
</script>
