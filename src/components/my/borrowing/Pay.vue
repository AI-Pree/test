<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-20-XS">
    <div class="w-100" :class="{'op-0': getLoading}">
      <div class="w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-4-S pb-15-XS ta-c-XS">
        Borrow
      </div>
      <div class="w-100 fs-5-S fs-20-XS f-gray-500 pb-1-S pb-5-XS ta-c-XS" v-if="getIsBorrow">
        Your current debt share
      </div>
      <div class="w-100 fs-6-S fs-20-XS f-white-200 ta-c-XS pb-2-S pb-10-XS ta-c-XS mb-10-XS" v-if="getIsBorrow">
        <span class="fs-8-S fs-25-XS f-mcolor-100 fw-800 pr-1">{{getDebt.toLocaleString()}}</span> GENS
        (<span class="fw-800 f-mcolor-100">{{getPercent.toLocaleString()}}</span>
        <span class="fw-600 px-1">% CR)</span> 
      </div>
      <div class="w-100 pt-6-S pb-15-XS fd-r-S fd-r-XS">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" full v-if="getIsBorrow && !getBorrowOrPay" @click="changeBorrowOrPayFunc">
            Borrow
          </AmButton>
          <AmButton color="gray-800" bColor="gray-800" colorText="gray-500" full disabled v-if="getIsBorrow && getBorrowOrPay">
            Borrow
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS ">
          <AmButton color="gray-800" bColor="gray-800" colorText="gray-500" full disabled v-if="getIsBorrow && !getBorrowOrPay">
            Pay Debt
          </AmButton>
          <AmButton color="mcolor-200" bColor="mcolor-100" full v-if="getIsBorrow && getBorrowOrPay" @click="changeBorrowOrPayFunc">
            Pay Debt
          </AmButton>
        </div>
      </div>
      
      <!-- <div class="w-100 mb-4 mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="getIsBorrow">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          New amount (+200 GENS fee)
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6-S fs-20-XS fw-600 f-white-200 fsh-0">GENS</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" v-model="to" />
        </div>
      </div> -->

    <!-- This section is for the borrow  -->
      <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="getIsBorrow && getBorrowOrPay">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          Collateral
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6-S fs-20-XS fw-600 f-white-200 fsh-0">SOL</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="0.0000" v-model="from" maxlength="12" />
          <span class="fs-6-S fs-20-XS f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0" @click="setMax">Max</span>
        </div>
      </div>
      <div class="w-100 mb-4 mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="getIsBorrow && getBorrowOrPay">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          Amount received
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6-S fs-20-XS fw-600 f-white-200 fsh-0">GENS</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="0" v-model="to" maxlength="20" />
        </div>
      </div>
      <div class="w-100 fd-r-S fd-c-XS mt-0-S mt-15-XS" v-if="getIsBorrow && getBorrowOrPay">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="reset">
            reset
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-8-XS">
          <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="confirmFunc">
            confirm
          </AmButton>
        </div>
      </div>

    <!-- This section for the pay debt  -->
    <div class="w-100 mt-4 mb-4 mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="getIsBorrow && !getBorrowOrPay">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          Repay
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6-S fs-20-XS fw-600 f-white-200 fsh-0">SOL</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="0.0000" v-model="repayTo" maxlength="12" />
          <span class="fs-6-S fs-20-XS f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0">Close Borrow</span>
        </div>
      </div>
      <div class="w-100 fd-r-S fd-c-XS mt-0-S mt-15-XS" v-if="getIsBorrow && !getBorrowOrPay">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="reset">
            reset
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-8-XS">
          <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full >
            confirm
          </AmButton>
        </div>
      </div>
      <!-- <div class="w-100 mt-4" v-if="getIsBorrow">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="updateTroveFunc">
          update trove
        </AmButton>
      </div>
      <div class="w-100 mt-4" v-if="getIsBorrow">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="closeTroveFunc">
          Close trove
        </AmButton>
      </div> -->
    </div>
    <div class="w-100 h-100 p-a l-0 t-0 fd-r ai-c jc-c" v-if="getLoading">
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'



export default {
  components: {
    Loading
  },
  data () {
    return {
      from: null,
      to: null,
      repayTo:null,
      mint: '',
      borrow: 0,
    }
  },
  computed: {
    // for the CR percent
    getPercent() {
        return 0
    },
    getDebt () {
      return this.$accessor.borrowing.debt || 0
    },
    getUsd () {
      return this.$accessor.usd || 0
    },
    getLoading () {
      return this.$accessor.borrowing.loading
    },
    getIsBorrow () {
      return true
      //return this.$accessor.borrowing.troveId
    },
    getDebt () {
      return this.$accessor.borrowing.debt || 0
    },
    getBorrowAmount () {
      return this.$accessor.borrowing.trove.amountToClose || 0
    },
    getBorrowOrPay () {
        return this.$accessor.borrowing.borrowOrPay
    }
  },
  watch: {
    from (val) {
      if (val) {
        this.from = val.toString().replace(/[^+\d\.]/g, '')
        if (this.from.split('.').length > 2) this.from = this.from.replace(/\.(?=[^\.]*$)/, '')
      }
      this.to = (Math.round(Math.round(Number(this.from) * this.getUsd) / 2.5)).toString()
      this.$emit('sol', this.from)
      this.$accessor.borrowing.getDebt({from: this.from, to: this.to})
    },
    to (val) {
      if (val) {
        this.to = val.toString().replace(/[^+\d]/g, '')
        if (this.to.length > 1 && this.to.substr(0, 1) === '0') {
          this.to = 1
        }
      }
      this.$emit('gens', this.to)
      this.$accessor.borrowing.getDebt({from: this.from, to: this.to})
    },
  },
  methods: {
    setMax () {
      this.from = this.$accessor.wallet.balance ? this.$accessor.wallet.balance : 0
    },
    reset () {
      this.from = null
      this.to = null
      this.mint = null
    },
    confirmFunc () {
      if (Number(this.from) > 0 && Number(this.to) > 1599 && this.mint && Number(this.getDebt) > 109) {
        this.$accessor.borrowing.confirmBorrow({from: this.from, to: this.to, mint: this.mint})
        this.from = null
        this.to = this.getBorrowAmount
        this.mint = null
      }
    },
    closeTroveFunc () {
      if (this.mint) {
        this.to = 0;
        this.$accessor.borrowing.closeTrove({mint: this.mint, amount: this.to})
        this.mint = null
      }
    },
    updateTroveFunc () {
      if (this.mint) {
        this.$accessor.borrowing.closeTrove({mint: this.mint, amount: this.to})
        this.mint = null
      }
    },
    // For updating the borrow or pay
    changeBorrowOrPayFunc () {
         this.$accessor.borrowing.changeBorrowOrPay(this.$accessor.borrowing.borrowOrPay)
         console.log("the value changes to ", this.$accessor.borrowing.borrowOrPay)
    } 

  },
  mounted() {
    if(this.getIsBorrow) {
      this.to = this.$accessor.borrowing.trove.amountToClose
    }
  }
}
</script>