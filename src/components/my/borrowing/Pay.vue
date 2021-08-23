<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-4-XS">
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
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3" v-if="!getIsBorrow">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        set amount you want to deposit
      </div>
      <div class="w-100 fd-r ai-c">
        <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">SOL</span>
        <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="0.00" v-model="from" />
        <span class="fs-6 f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0">max</span>
      </div>
    </div>
    <div class="w-100 mb-4 mcolor-700 rad-fix-2 px-4 py-3" v-if="!getIsBorrow">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        amount received
      </div>
      <div class="w-100 fd-r ai-c">
        <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">GENS</span>
        <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="0" v-model="to" />
      </div>
    </div>
    <div class="w-100 my-4 mcolor-700 rad-fix-2 px-4 py-3" v-if="getIsBorrow">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        repay
      </div>
      <div class="w-100 fd-r ai-c">
        <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">GENS</span>
        <div type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300">{{ borrow }}</div>
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
</template>

<script>
export default {
  data () {
    return {
      from: null,
      to: null,
      borrow: 0
    }
  },
  computed: {
    getIsBorrow () {
      return this.$accessor.dashboard.isBorrow
    }
  },
  watch: {
    from (val) {
      if (val) {
        this.from = val.replace(/[^+\d\.]/g, '')
        if (this.from.split('.').length > 2) {
          this.from = this.from.replace(/\.(?=[^\.]*$)/, '')
        }
      }
    },
    to (val) {
      if (val) {
        this.to = val.replace(/[^+\d]/g, '').replace(/\.(?=[^\.]*$)/, '')
      }
    }
  },
  methods: {
    reset () {
      this.from = null
      this.to = null
    },
    confirmFunc () {
      this.$accessor.borrowing.confirmBorrow({from: this.from, to: this.to})
      this.from = null
      this.to = null
    },
    closeTroveFunc () {
      this.$accessor.borrowing.closeTrove()
    }
  }
}
</script>
