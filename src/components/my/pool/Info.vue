<template>
  <div class="w-100">
    <div class="d-n-XS w-100 fs-8-S fs-25-XS fw-600 f-white-200  pb-0-L pb-0-M pb-0-S pb-15-XS ta-l-S ta-c-XS">
        <Balance />
    </div>
    <AmDivider class="my-4-S my-10-XS" />
    <div class="w-100 fs-6-S fs-20-XS fw-600 f-gray-500 pb-3-S pb-10-XS fd-r ai-c jc-l-S jc-c-XS">
      pool share
      <Hint>
        Percentage of your share on Safe Pool.
      </Hint>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 ta-l-S ta-c-XS">
      <span class="fs-8-S fs-25-XS fw-800 f-mcolor-100">{{getPercent}}</span>
      <span class="fs-8-S fs-25-XS fw-600 px-1">%</span>
    </div>
    <AmDivider class="my-4-S my-10-XS" />
    <div class="w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-8-S pb-15-XS ta-l-S ta-c-XS">
      Your current earnings
    </div>
    <div class="w-100 fs-6-S fs-20-XS fw-600 f-white-200 pb-2-S pb-10-XS fd-r ai-c jc-l-S jc-c-XS">
      1. Liquidation Incentive
      <Hint>
        You receive an incentive form borrower’s liquidation.
      </Hint>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 fd-r ai-c fd-600 py-1 pl-3-S pl-0 jc-l-S jc-c-XS pb-1-S pb-10-XS">
      <span class="f-mcolor-300 pr-2">{{getCoin}}</span> SOL
    </div>
    <div class="w-100 fs-6-S fs-20-XS fw-600 f-white-200 pb-2-S pb-10-XS fd-r ai-c pt-4 jc-l-S jc-c-XS">
      2. Transaction Fee
      <Hint>
        You receive transaction fee of Borrowing and Repaying.
      </Hint>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 fd-r ai-c fd-600 py-1 pl-3-S pl-0 jc-l-S jc-c-XS pb-1-S pb-10-XS">
      <span class="f-mcolor-300 pr-2">{{getGens}}</span> Gens
    </div>
    <div class="w-100 fs-6-S fs-20-XS fw-600 f-white-200 pb-2-S pb-10-XS fd-r ai-c pt-4 jc-l-S jc-c-XS">
      3. Rewards
      <Hint>
        ARP (Annual Percentage Rate) is just a simple interest that you will be receiving every year paid in the token of your choice. But the APR is subject to change and fluctuations.
        The “Monthly” and “Daily” are simply calculated to show how much you will be receiving at the term.
      </Hint>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-l-S jc-c-XS pb-1-S pb-10-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5-S fs-20-XS pl-2">(<span class="f-mcolor-100">32.50%</span> APR)</span>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-l-S jc-c-XS pb-1-S pb-10-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5-S fs-20-XS pl-2">(<span class="f-mcolor-100">32.50%</span> Monthly)</span>
    </div>
    <div class="w-100 fs-6-S fs-20-XS f-white-200 fd-r ai-b fd-600 py-1 pl-3-S pl-0 jc-l-S jc-c-XS pb-1-S pb-10-XS">
      <span class="f-mcolor-300 pr-2">{{getHgen}}</span> HGEN <span class="fs-5-S fs-20-XS pl-2">(<span class="f-mcolor-100">1.50%</span> Daily)</span>
    </div>
  </div>
</template>

<script>
import Hint from '@/components/Hint'
import Balance from '@/components/my/pool/Balance.vue'
 

export default {
  components: {
    Hint,
    Balance
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
