<template>
  <div class="w-100">
    <div class="w-100" v-if="!getIsBorrow">
      <div class="w-100 f-mcolor-500 fs-12 fw-600 ta-c-XS">
        {{ getDebt }} %
      </div>
      <div class="w-100 fs-7-M fw-600 f-white-200 pb-2 fd-r ai-c pt-4 jc-c-XS">
        Debt Ratio <Hint>
          It is recommended to keep your debt ratio <span class="f-mcolor-300">below 50%</span>
        </Hint>
      </div>
    </div>
    <div class="w-100" v-if="getIsBorrow">
      <div class="w-100 f-white-200 fs-10 fw-600 ta-c-XS">
        Amount Remained
      </div>
      <div class="w-100 fd-r pt-4 fw-w">
        <div class="w-70-S w-100-XS">
          <div class="w-100 fs-12 f-mcolor-100 fw-700 ta-c-XS">
            {{ getTroveAmount.toLocaleString() }}
          </div>
          <div class="w-100 fs-6 f-white-200 fw-600 pt-2 ta-c-XS">
            GENS
          </div>
        </div>
        <div class="w-30-S w-100-XS">
          <div class="w-100 fs-8 f-green-600 fw-700 ta-c-XS">
            {{ getDebt }} %
          </div>
          <div class="w-100 fs-5 f-white-200 fw-400 pt-2 ta-c-XS">
            Remaining<br/>Debit Ratio
          </div>
        </div>
      </div>
      <AmDivider class="mt-5 mb-2" />
    </div>
    <div class="w-100 mcolor-800 p-4 mt-4 rad-fix-4 fs-5 f-mcolor-500">
      <div class="w-100 pb-2">
        The minimum borrowing amount is <span class="fw-600">1,600 GENS</span>
      </div>
      <div class="w-100">
        The debt limit is <span class="fw-600">90%</span>
      </div>
    </div>
    <div class="w-100 fd-r pt-4">
      <div :class="{'w-50-S w-100-XS': getIsBorrow, 'w-50': !getIsBorrow}">
        <div class="w-100 fs-6 f-gray-600 pb-2 ta-c-XS">
          fee
        </div>
        <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 ta-c-XS">
          <span class="fs-9-M fs-9-S fs-7-XS fw-800 f-mcolor-100">{{ getFee }}</span>
          <span class="fs-9-M fs-9-S fs-7-XS fw-600 px-1">%</span>
        </div>
      </div>
      <div class="w-50" v-if="false">
        <div class="w-100 fs-6 f-gray-600 pb-2 ta-c-XS fd-r ai-c">
          overall debt <Hint>
            Overall Debt = Amount Received + Fee
          </Hint>
        </div>
        <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 ta-c-XS">
          <span class="fs-9-M fs-9-S fs-7-XS fw-800 f-mcolor-100">6.40</span>
          <span class="fs-9-M fs-9-S fs-7-XS fw-600 px-1">%</span>
        </div>
      </div>
    </div>
    <div class="w-100" v-if="!getIsBorrow">
      <div class="w-100 f-white-200 fs-6 fw-600 pt-4 pb-4 ta-c-XS">
        You will receive GENS stable coin.
      </div>
      <div class="w-100 fd-r-S fd-c-XS py-2">
        <div class="w-100 fs-6 fw-400 f-gray-500 fd-r ai-c jc-c-XS">
          Total Borrowing
        </div>
        <div class="w-a fs-5-M fs-8-S fs-8-XS fsh-0 fw-600 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
          {{ Number(getTotalBorrow).toLocaleString().slice(0, 16) }} <span class="f-white-200 pl-1">GENS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hint from '@/components/Hint'

export default {
  components: {
    Hint
  },
  computed: {
    getTotalBorrow () {
      return this.$accessor.troveTotal || 0
    },
    getFee () {
      return 5
    },
    getDebt () {
      return this.$accessor.borrowing.debt || 0
    },
    getIsBorrow () {
      return this.$accessor.borrowing.troveId
    },
    getTroveAmount () {
      return this.$accessor.borrowing.trove ? this.$accessor.borrowing.trove.borrowAmount : 0
    }
  }
}
</script>
