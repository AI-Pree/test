<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-20-XS">
    <div class="w-100" :class="{'op-0': getLoading}">
      <div class="w-100 fs-8-S fs-25-XS fw-600 f-white-200 pb-2-S pb-10-XS ta-c-XS">
        Safe Pool
      </div>
      <div class="w-100 fs-5-S fs-20-XS f-gray-400 pb-5-S pb-10-XS fw-500 ta-c-XS">
        You can earn SOL and HGEN coins by depositing GENS.
      </div>
      <div class="w-100 fs-5-S fs-20-XS f-gray-500 pb-2-S pb-10-XS ta-c-XS" v-if="getDepositKey">
        your current pool share
      </div>
      <div class="w-100 fs-6-S fs-20-XS f-white-200 ta-c-XS pb-2-S pb-10-XS" v-if="getDepositKey">
        <span class="fs-8-S fs-25-XS fw-800 f-mcolor-100">{{getPercent.toLocaleString()}}</span>
        <span class="fs-8-S fs-25-XS fw-600 px-1">%</span>
        (<span class="f-mcolor-100 fw-800 pr-1">{{getDepositAmount.toLocaleString()}}</span> GENS)
      </div>
      <div class="w-100 my-2-S my-10-XS mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="!getDepositKey">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          set wallet token GENS
        </div>
        <div class="w-100 fd-r ai-c">
          <input type="text" class="w-100 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="XXXXXXXXX..." v-model="gen" />
        </div>
      </div>
      <div class="w-100 my-2-S my-10-XS mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS" v-if="!getDepositKey">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          set wallet token HGEN
        </div>
        <div class="w-100 fd-r ai-c">
          <input type="text" class="w-100 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="XXXXXXXXX..." v-model="hgen" />
        </div>
      </div>
      <div class="w-100 my-2-S my-10-XS mcolor-700 rad-fix-2 px-4-S px-10-XS py-3-S py-10-XS">
        <div class="w-100 fs-5-S fs-20-XS f-gray-600 pb-1-S pb-5-XS">
          set amount you want to deposit
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6-S fs-20-XS fw-600 f-white-200 fsh-0">GENS</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-6-S fs-20-XS fw-600 f-mcolor-300" placeholder="0" v-model="from" />
          <span class="fs-6 f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0" v-if="false">max</span>
        </div>
      </div>
      <div class="w-100 fd-r-S fd-c-XS pt-4-S pt-20-XS">
        <div class="w-50-S w-100-XS mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="reset">
            reset
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-S ml-0-XS mt-0-S mt-4-XS mt-0-S mt-10-XS">
          <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="depositFunc">
            confirm
          </AmButton>
        </div>
      </div>
      <div class="w-100 pt-4-S mr-2-S mr-0-XS mt-0-S mt-10-XS" v-if="getDepositKey">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="closeDepositFunc">
          close deposit
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
      gen: '',
      hgen: '',
      from: null
    }
  },
  computed: {
    getDepositKey () {
      return this.$accessor.pool.depositKey
    },
    getLoading () {
      return this.$accessor.pool.loading
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
  watch: {
    from (val) {
      if (val) {
        this.from = val.toString().replace(/[^+\d]/g, '')
        if (this.from.length > 1 && this.from.substr(0, 1) === '0') {
          this.from = 1
        }
      }
    }
  },
  methods: {
    reset () {
      this.from = null
      this.to = null
    },
    depositFunc () {
      if (this.getDepositKey) {
        this.$accessor.pool.addDeposit({from: this.from})
      } else {
        this.$accessor.pool.newDeposit({from: this.from, gen: this.gen, hgen: this.hgen})
      }
      this.from = null
    },
    closeDepositFunc () {
      this.$accessor.pool.closeDeposit(this.from)
      this.from = null
    }
  }
}
</script>
