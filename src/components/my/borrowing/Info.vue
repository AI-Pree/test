<template>
  <div class="w-100">
    <div class="d-n-XS w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-0-L pb-0-M pb-0-S pb-15-XS ta-l-S ta-c-XS">
        <Balance />
    </div>
    <AmDivider class="my-4-S my-10-XS" />
    <div class="w-100" v-if="getIsBorrow && withdrawOrDeposit">
      <div class="w-100 f-mcolor-500 fs-12-S fs-30-XS fw-600 ta-l-S ta-c-XS">
        0 %
      </div>
      <div class="w-100 fs-8-S fs-24-XS fw-600 f-white-200 pb-2-S pb-10-XS fd-r ai-c pt-4-S pt-10-XS jc-l-S jc-c-XS">
        Collateral Ratio (CR)
        <Hint>
          By default, the collateral ratio is <span class="f-mcolor-300">250%</span> of your set collateral.

          It is recommended to keep your collateral ratio above <span class="f-mcolor-300">250%</span>.
        </Hint>
        
      </div>
      <div class="w-100 fs-6-S fs-20-XS fw-400 f-white-200 pb-4-S pb-10-XS fd-r ai-c pt-4-s pt-10-XS jc-l-S jc-c-XS">
        Below <span class="f-mcolor-300"> 110% </span> will be liquidated.
      </div>
      <div class=" w-100 fs-6-S fs-20-XS fw-400 f-white-200 pb-4-S pb-10-XS fd-r ai-c pt-4-s pt-10-XS jc-l-S jc-c-XS">
        Liquidation Price
        <span class="px-1-S px-6-XS f-mcolor-100 fw-500">{{ Number(Number(from) * getUsd).toLocaleString() }}</span> GENS
      </div>
    </div>
    <AmDivider class="mt-2-S mt-10-XS mb-2-S mb-10-XS" v-if="withdrawOrDeposit" />
    <div class="w-100" v-if="!withdrawOrDeposit">
      <div class="w-100 f-white-200 fs-8-S fs-25-XS fw-600 ta-l-S ta-c-XS">
        Amount Received
      </div>
      <div class="w-100 fd-r pt-4-S pt-10-XS fw-w">
        <div class="w-70-S w-100-XS">
          <div class="w-100 fs-12-S fs-25-XS f-mcolor-100 fw-700 ta-l-S ta-c-XS">
            0
          </div>
          <div class="w-100 fs-6-S fs-20-XS f-white-200 fw-600 pt-2-S pt-10-XS ta-l-S ta-c-XS">
            SOL
          </div>
        </div>
      </div>
      <AmDivider class="mt-5-S mt-10-XS mb-2-S mb-10-XS" />
    </div>
    <div class="w-100" v-if="getIsBorrow && !withdrawOrDeposit">
      <div class="w-100 f-white-200 fs-8-S fs-25-XS fw-600 ta-l-S ta-c-XS">
        Remaining Amount
      </div>
      <div class="w-100 fd-r pt-4-S pt-10-XS fw-w">
        <div class="w-70-S w-100-XS">
          <div class="w-100 fs-12-S fs-25-XS f-mcolor-100 fw-700 ta-l-S ta-c-XS">
            {{ getTroveAmount ? getTroveAmount.toLocaleString() : 0 }}
          </div>
          <div class="w-100 fs-6-S fs-20-XS f-white-200 fw-600 pt-2-S pt-10-XS ta-l-S ta-c-XS">
            GENS
          </div>
        </div>
        <div class="w-30-S w-100-XS">
          <div class="w-100 fs-8-S fs-25-XS f-green-600 fw-700 ta-l-S ta-c-XS pt-0-S pt-10-XS">
            0 %
          </div>
          <div class="w-100 fs-5-S fs-20-XS f-white-200 fw-400 pt-2-S pt-10-XS ta-l-S ta-c-XS">
            <br/>CR Ratio
          </div>
        </div>
      </div>
      <AmDivider class="mt-5-S mt-10-XS mb-2-S mb-10-XS" />
    </div>
    <div class="w-100 mcolor-800 p-4-S p-15-XS mt-4-S mt-10-XS rad-fix-4 fs-5-S fs-20-XS f-mcolor-500" v-if="(Number(getDebt) < getMaxRatio || Number(to) < 1600) && (from && to)">
      <div class="w-100 pb-2-S pb-10-XS" v-if="Number(to) < 1600">
        The minimum borrowing amount is <span class="fw-600">1,600 GENS</span>
      </div>
      <div class="w-100" v-if="Number(getDebt) < getMaxRatio">
        The CR limit is minimum <span class="fw-600">{{ getMaxRatio }} %</span>
      </div>
    </div>
    <div class="w-100 mcolor-800 p-4-S p-15-XS mt-4-S mt-10-XS rad-fix-4 fs-5-S fs-20-XS f-mcolor-500" v-if="((Number(getDebt)-Number(repayTo) > 0) || (Number(getDebt)-Number(repayTo) < 0))">
      <div class="w-100 pb-2-S pb-10-XS" v-if="(Number(getDebt) - Number(repayTo)) > 0">
        You need <span class="fw-600">{{disputeDebt}}</span> more to close Borrow.
      </div>
      <div class="w-100 pb-2-S pb-10-XS" v-if="(Number(getDebt) - Number(repayTo)) < 0">
        Exceeded the debt amount.
      </div>
    </div>
    <div class="w-100 fd-r pt-4-S pt-10-XS">
      <div :class="{'w-100-S w-100-XS': getIsBorrow, 'w-100': !getIsBorrow}">
        <div class="w-100 fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
          Fee
        </div>
        <div class="w-100 fs-6-S fs-20-XS f-white-200 ta-l-S ta-c-XS fd-r pb-2-S pb-10-XS">
          <div class = "w-100 fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
            <span class="fs-8-S fs-25-XS fw-800 f-mcolor-100">{{ getFee }}</span>
            <span class="fs-8-S fs-25-XS fw-600 px-1">%</span>
          </div>
          
          <div class="w-a fs-5-M fs-8-S fs-25-XS fsh-0 fw-600 f-mcolor-100 fd-r ai-c">
            0 <span class="f-white-200 pl-1-S pl-5-XS">GENS</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100" v-if="getIsBorrow">
      <!-- <div class="w-100 f-white-200 fs-6-S fs-20-XS fw-600 pt-4-S pt-12-XS pb-4-S pb-12-XS ta-l-S ta-c-XS">
        You will receive GENS stable coin.
      </div> -->
      <div class="w-100 fd-r py-2-S py-10-XS">
        <div class="w-100 fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
          Total Borrow
        </div>
        <div class="w-a fs-5-M fs-8-S fs-25-XS fsh-0 fw-600 f-mcolor-100 fd-r ai-c">
          {{ Number(getTotalBorrow).toLocaleString().slice(0, 16) }} <span class="f-white-200 pl-1-S pl-5-XS">GENS</span>
        </div>
      </div>
      <div class="w-100 fd-r py-2-S py-10-XS">
        <div class="w-100 fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
          Total Collateral Ratio
        </div>
        <div class="w-a fs-5-M fs-8-S fs-25-XS fsh-0 fw-600 f-mcolor-100 fd-r ai-c">
          0<span class="f-white-200 pl-1-S pl-5-XS">%</span>
        </div>
      </div>
      <div class="w-100 fd-r py-2-S py-10-XS">
        <div class="w-100 fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
          Total Liquidation Mode
        </div>
        <div class="w-a fs-5-M fs-8-S fs-25-XS fsh-0 fw-600 f-mcolor-100 fd-r ai-c">
          <span class="f-red-700 pl-1-S pl-5-XS">OFF</span>
        </div>
      </div>
       <div class="w-100 fs-4-L fs-4-M fs-6-S fs-20-XS fw-400 f-gray-500 fd-r ai-c">
          (Your liquidation price <span class="f-mcolor-100 pr-1-S pl-1-S pr-1-XS pl-5-XS">0 </span> GENS)
        </div>
    </div>
  </div>
</template>

<script>
import Hint from '@/components/Hint'
import Balance from '@/components/my/borrowing/Balance.vue'
import { getCollateral } from "@/utils/layout"

export default {
  components: {
    Hint,
    Balance
  },
  props: {
    to: {type: Number, default: null},
    from: {type: Number, default: null},
    repayTo: {type: Number, default:null},
  },
  computed: {
    getMaxRatio () {
      if (this.$accessor.lightMode) {
        return 110
      } 
    //   else {
    //     return 110
    //   }
    },
    getUsd () {
      return this.$accessor.usd || 0
    },
    getTotalBorrow () {
      return this.$accessor.troveTotal || 0
    },
    getFee () {
      return 0.5
    },
    getDebt () {
      return this.$accessor.borrowing.debt || 0
    },
    getIsBorrow () {
      return true
      //return this.$accessor.borrowing.troveId
    },
    getTroveAmount () {
      return this.$accessor.borrowing.trove ? this.$accessor.borrowing.trove.borrowAmount : 0
    },
    getRatio () {
      return this.$accessor.borrowing.trove.borrowAmount ?
        getCollateral(this.$accessor.borrowing.trove.borrowAmount.toString(), this.$accessor.borrowing.trove.lamports.toString(), parseInt(this.$accessor.usd).toString()) : 0;
    },
    withdrawOrDeposit () {
        console.log(`my testing is ${this.$accessor.borrowing.borrowOrPay}`)
        return this.$accessor.borrowing.borrowOrPay
    },
    // returns the debt amount remaining in gens
    disputeDebt() {
        return (Number(getDebt) - Number(repayTo))
    }
  },
}
</script>
