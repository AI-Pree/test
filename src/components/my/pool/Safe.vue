<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-4-XS">
    <div class="w-100" :class="{'op-0': getLoading}">
      <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4 ta-c-XS">
        Safe Pool
      </div>
      <div class="w-100 fs-6-M fs-6-S fs-5-XS f-gray-400 pb-4 fw-500 ta-c-XS">
        You can earn SOL and HGEN coins by depositing GENS.
      </div>
      <div class="w-100 fs-6-M fs-6-S fs-5-XS f-gray-500 pb-6 ta-c-XS" v-if="getDepositKey">
        your current pool share
      </div>
      <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 ta-c-XS" v-if="getDepositKey">
        <span class="fs-9-M fs-9-S fs-7-XS fw-800 f-mcolor-100">6.40</span>
        <span class="fs-9-M fs-9-S fs-7-XS fw-600 px-1">%</span>
        (<span class="f-mcolor-100 fw-800 pr-1">201.00</span> GENS)
      </div>
      <div class="w-100 my-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          set wallet token GENS
        </div>
        <div class="w-100 fd-r ai-c">
          <input type="text" class="w-100 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="XXXXXXXXX..." v-model="gen" />
        </div>
      </div>
      <div class="w-100 my-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          set wallet token HGEN
        </div>
        <div class="w-100 fd-r ai-c">
          <input type="text" class="w-100 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="XXXXXXXXX..." v-model="hgen" />
        </div>
      </div>
      <div class="w-100 my-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
        <div class="w-100 fs-5 f-gray-600 pb-1">
          set amount you want to deposit
        </div>
        <div class="w-100 fd-r ai-c">
          <span class="w-15-S w-25-XS fs-6 fw-600 f-white-200 fsh-0">GENS</span>
          <input type="text" class="w-100 mx-1 white-100 br-0 oul-n fs-7 fw-600 f-mcolor-300" placeholder="0.00" v-model="from" />
          <span class="fs-6 f-mcolor-100 td-u ts-3 hv d-n-XS fsh-0">max</span>
        </div>
      </div>
      <div class="w-100 pb-6 fd-r-S fd-c-XS">
        <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
          <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="reset">
            reset
          </AmButton>
        </div>
        <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-4-XS">
          <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="depositFunc">
            confirm
          </AmButton>
        </div>
      </div>
      <div class="w-100 mr-2-L mr-2-S mr-0-XS" v-if="getDepositKey">
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
    }
  },
  methods: {
    reset () {
      this.from = null
      this.to = null
    },
    depositFunc () {
      if (this.getDepositKey) {
        this.$accessor.pool.addDeposit({from: this.from, gen: this.gen, hgen: this.hgen})
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
