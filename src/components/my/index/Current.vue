<template>
  <div class="w-100">
    <div class="w-100 fs-9-M fs-7-S fs-7-XS fw-600 f-white-200 pb-2 ta-l-L ta-c-S ta-c-XS">
      Your current earnings
    </div>
    <div class="w-100 fd-r ai-c">
      <div class="w-100 fs-7-M fs-6-S fs-6-XS fw-600 f-white-200 py-6">
        Safe pool
      </div>
      <div class="w-45 fsh-0">
        <AmButton :height="false" color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="claimFunc">
          claim
        </AmButton>
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS ai-c py-2">
      <div class="w-100 fs-6 fw-400 f-white-200">
        Liquidation Incentive
      </div>
      <div class="w-45-S w-100-XS fsh-0 f-white-200 fw-600 pt-2-XS">
        <span class="f-mcolor-100 mr-1">20.901345</span> SOL
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200">
        Transaction Fee
      </div>
      <div class="w-45-S w-100-XS fsh-0 f-white-200 fw-600 pt-2-XS">
        <span class="f-mcolor-100 mr-1">20.901345</span> SOL
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS ai-c py-2">
      <div class="w-100 fs-6 fw-400 f-white-200">
        Rewards
      </div>
      <div class="w-45-S w-100-XS fsh-0 f-white-200 fw-600 pt-2-XS">
        <span class="f-mcolor-100 mr-1">20.901345343</span> HGEN
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS ai-c pt-3">
      <div class="w-100 fd-r ai-c">
        <div class="w-a-S w-100-XS">
          <AmButton :height="false" color="mcolor-200" bColor="mcolor-100" opacityEffect @click="claimFunc">
            claim
          </AmButton>
        </div>
      </div>
      <div class="w-45-S w-100-XS fsh-0 f-white-200 fw-600 pt-4-XS ta-c-XS">
        <span class="f-mcolor-100 mr-1">20.90134</span> SOL
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    depositKey: {type: String, default: null}
  },
  computed: {
    getDepositKey () {
      return this.$accessor.pool.depositKey
    }
  },
  methods: {
    claimFunc () {
      if (this.getDepositKey) {
        this.$accessor.dashboard.claim()
      }
    }
  }
}
</script>
