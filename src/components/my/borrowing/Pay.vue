<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-4-XS">
    <div class="w-100" :class="{'op-0': getLoading}">
      <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4 ta-c-XS">
        Borrowing
      </div>
      <div class="w-100 pt-6 fd-r-S fd-c-XS">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" full disabled v-if="getIsBorrow">
            Borrow
          </AmButton>
          <AmButton color="gray-800" bColor="gray-800" colorText="gray-500" full disabled v-if="!getIsBorrow">
            Borrow
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-4-XS">
          <AmButton color="gray-800" bColor="gray-800" colorText="gray-500" full disabled v-if="getIsBorrow">
            Pay Debt
          </AmButton>
          <AmButton color="mcolor-200" bColor="mcolor-100" full disabled v-if="!getIsBorrow">
            Pay Debt
          </AmButton>
        </div>
      </div>
      <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          set wallet gens
        </div>
        <div class="w-100 fd-r ai-c">
          <input type="text" class="w-100 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="XXXXXXXXX..." v-model="mint" />
        </div>
      </div>
      <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3" v-if="!getIsBorrow">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          set amount you want to deposit
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">SOL</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="0" v-model="from" maxlength="12" />
          <span class="fs-6 f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0" @click="setMax">max</span>
        </div>
      </div>
      <div class="w-100 mb-4 mcolor-700 rad-fix-2 px-4 py-3" v-if="!getIsBorrow">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          amount received
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">GENS</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="0" v-model="to" maxlength="20" />
        </div>
      </div>
      <div class="w-100 my-4 mcolor-700 rad-fix-2 px-4 py-3" v-if="getIsBorrow">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          repay
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">GENS</span>
          <div type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300">{{ getBorrowAmount }}</div>
        </div>
      </div>
      <div class="w-100 pb-6 fd-r-S fd-c-XS" v-if="!getIsBorrow">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="reset">
            reset
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-4-XS">
          <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="confirmFunc">
            confirm
          </AmButton>
        </div>
      </div>
      <div class="w-100 mt-4" v-if="getIsBorrow">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="closeTroveFunc">
          close trove
        </AmButton>
      </div>
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
      mint: '',
      borrow: 0
    }
  },
  computed: {
    getUsd () {
      return this.$accessor.usd || 0
    },
    getLoading () {
      return this.$accessor.borrowing.loading
    },
    getIsBorrow () {
      return this.$accessor.borrowing.troveId
    },
    getDebt () {
      return this.$accessor.borrowing.debt || 0
    },
    getBorrowAmount () {
      return this.$accessor.borrowing.trove.amountToClose || 0
    }
  },
  watch: {
    from (val) {
      if (val) {
        this.from = val.toString().replace(/[^+\d\.]/g, '')
        if (this.from.split('.').length > 2) this.from = this.from.replace(/\.(?=[^\.]*$)/, '')
      }
      this.to = Math.round(Number(this.from) * this.getUsd).toString()
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
    }
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
        this.to = null
        this.mint = null
      }
    },
    closeTroveFunc () {
      if (this.mint) {
        this.$accessor.borrowing.closeTrove({mint: this.mint})
        this.mint = null
      }
    }
  }
}
</script>
