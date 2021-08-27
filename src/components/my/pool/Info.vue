<template>
  <div class="w-100">
    <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-8 ta-c-XS">
      You have three earnings
    </div>
    <div class="w-100 fs-7-M fw-600 f-white-200 pb-2 fd-r ai-c jc-c-XS">
      1. Liquidation Incentive
      <Hint>
        ???????????????????????
      </Hint>
    </div>
    <div class="w-100 fs-7 f-white-200 fd-r ai-c fd-600 py-1 pl-3-S pl-0 jc-c-XS">
      <span class="f-mcolor-300 pr-2">{{getCoin}}</span> SOL
    </div>
    <div class="w-100 fs-7-M fw-600 f-white-200 pb-2 fd-r ai-c pt-4 jc-c-XS">
      2. Transaction Fee
      <Hint>
        You receive transaction fee of Borrowing and Repaying.
      </Hint>
    </div>
    <div class="w-100 fs-7 f-white-200 fd-r ai-c fd-600 py-1 pl-3-S pl-0 jc-c-XS">
      <span class="f-mcolor-300 pr-2">{{getGens}}</span> Gens
    </div>
    <div class="w-100 fs-7-M fw-600 f-white-200 pb-2 fd-r ai-c pt-4 jc-c-XS">
      3. Rewards
      <Hint>
        ARP (Annual Percentage Rate) is just a simple interest that you will be receiving every year paid in the token of your choice. But the APR is subject to change and fluctuations.
        The “Monthly” and “Daily” are simply calculated to show how much you will be receiving at the term.
      </Hint>
    </div>
    <div class="w-100 fs-7 f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-c-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5 pl-2">(<span class="f-mcolor-100">32.50%</span> APR)</span>
    </div>
    <div class="w-100 fs-7 f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-c-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5 pl-2">(<span class="f-mcolor-100">32.50%</span> Monthly)</span>
    </div>
    <div class="w-100 fs-7 f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-c-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5 pl-2">(<span class="f-mcolor-100">1.50%</span> Daily)</span>
    </div>
    <AmDivider class="my-4" />
    <div class="w-100 fs-7-M fw-600 f-gray-500 pb-3 fd-r ai-c jc-c-XS">
      pool share
      <Hint>
        Percentage of your share on Safe Pool.
      </Hint>
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 ta-c-XS">
      <span class="fs-9-M fs-9-S fs-10-XS fw-800 f-mcolor-100">{{getPercent}}</span>
      <span class="fs-9-M fs-9-S fs-10-XS fw-600 px-1">%</span>
    </div>
  </div>
</template>

<script>
import Hint from '@/components/Hint'

export default {
  components: {
    Hint
  },
  layout: 'my',
  computed: {
    getPercent () {
      return Number.parseInt((this.$accessor.pool.depositAmount / this.$accessor.totalDeposit || 0) * 100)
    },
    getCoin () {
      return this.$accessor.pool.rewardCoinAmount
    },
    getGens () {
      return this.$accessor.pool.rewardGensAmount
    },
    getHgen () {
      return this.$accessor.pool.rewardHgenAmount
    },
  }
}
</script>
