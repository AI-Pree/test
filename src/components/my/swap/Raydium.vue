<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-4-XS">
    <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4 ta-c-XS">
      Raydium Swap
    </div>
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4">
      <div class="w-100 fs-5 f-gray-600 pb-2 pt-3">
        from
      </div>
      <div class="w-100 pb-3-S pb-0">
        <input class="w-fix-s-10min fs-7 fw-600 f-mcolor-300 br-0 oul-n white-100" placeholder="0" v-model="from" maxlength="15" type="text" />
        <div class="p-a-S p-r-XS r-0 b-0 w-fix-35-S w-100-XS">
          <AmSelectbox v-bind:data.sync="currencyFrom" :update="true" :shadow="false" :padding="false" />
        </div>
      </div>
    </div>
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4">
      <div class="w-100 fs-5 f-gray-600 pb-2 pt-3">
        to (estimate)
      </div>
      <div class="w-100 pb-3-S pb-0">
        <div class="w-fix-s-10min fs-7 fw-600 br-0 oul-n" :class="{'f-mcolor-300': Number(to) > 0, 'f-gray-800': Number(to) === 0}">
          {{ to }}
        </div>
        <div class="p-a-S p-r-XS r-0 b-0 w-fix-35-S w-100-XS">
          <AmSelectbox v-bind:data.sync="currencyTo" :update="true" :shadow="false" :padding="false" />
        </div>
      </div>
    </div>
    <div class="w-100 pt-2 pb-6 ta-c fs-6 fw-500 f-white-200" v-if="currencyFrom.value === tokens[0].value">
      1 RAY ≈ {{ convertRay }} SOL
    </div>
    <div class="w-100 pt-2 pb-6 ta-c fs-6 fw-500 f-white-200" v-if="currencyFrom.value === tokens[1].value">
      1 SOL ≈ {{ convertSOL }} RAY
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Slippage Tolerance
        <Hint>
          Difference on price of 2 different coins you are using in transaction during time it takes to complete transaction.
        </Hint>
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
        1 <span class="f-white-200 pl-1">%</span>
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Slippage Tolerance
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-white-200 fd-r ai-c pt-2-XS jc-c-XS">
        Serum DEX
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Minimum Received
        <Hint>
          Your transaction will revert if there is a large, unfavourable price movement before it is confirmed.
        </Hint>
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
        0.0983070000 <span class="f-white-200 pl-1">SOL</span>
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Price Impact
        <Hint>
          If the pool is $1,000 and you sell $1 worth, thay will "impact" the pool 0.1%.
        </Hint>
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
        0.00 <span class="f-white-200 pl-1">%</span>
      </div>
    </div>
    <div class="w-100 pt-8 fd-r jc-c">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="confirm" :full="true">
        CREATE RAY aCCOUNT
      </AmButton>
    </div>
  </div>
</template>

<script>
import Hint from '@/components/Hint'
const TOKENS = [
  {label: 'RAY', value: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'},
  {label: 'SOL', value: 'So11111111111111111111111111111111111111112'}
]
const CONVERT_RAY = 0.10104800982233
const CONVERT_SOL = 9.896285951185709

export default {
  components: {
    Hint
  },
  data () {
    return {
      tokens: TOKENS,
      convertRay: CONVERT_RAY,
      convertSOL: CONVERT_SOL,
      from: null,
      currencyFrom: {
        theme: 'default',
        value: TOKENS[0].value,
        items: TOKENS,
        colorDefault: 'mcolor-700',
        colorFocus: 'mcolor-700',
        colorBackground: 'mcolor-700',
        colorTitle: 'white-200'
      },
      to: 0,
      currencyTo: {
        theme: 'default',
        value: TOKENS[1].value,
        items: TOKENS,
        colorDefault: 'mcolor-700',
        colorFocus: 'mcolor-700',
        colorBackground: 'mcolor-700',
        colorTitle: 'white-200'
      }
    }
  },
  watch: {
    currencyFrom: {
      deep: true,
      handler (val) {
        if (val.value === this.currencyTo.value) {
          this.currencyTo.value = val.items.filter(item => item.value !== val.value)[0].value
        }
        this.convert()
      }
    },
    currencyTo: {
      deep: true,
      handler (val) {
        if (val.value === this.currencyFrom.value) {
          this.currencyFrom.value = val.items.filter(item => item.value !== val.value)[0].value
        }
        this.convert()
      }
    },
    from (val) {
      if (val) {
        this.from = val.toString().replace(/[^+\d\.]/g, '')
        if (this.from.split('.').length > 2) this.from = this.from.replace(/\.(?=[^\.]*$)/, '')
        if (this.from.substr(0, 2) === '00') this.from = this.from.substr(1, this.from.length)
        this.convert()
      } else {
        this.to = 0
      }
    }
  },
  methods: {
    convert () {
      if (this.currencyFrom.value === this.tokens[0].value) {
        this.to = CONVERT_RAY * Number(this.from)
      } else {
        this.to = CONVERT_SOL * Number(this.from)
      }
    },
    confirm () {
      if (Number(this.from) > 0) {
        this.$accessor.swap.swap({from: this.from, mintFrom: this.currencyFrom.value, mintTo: this.currencyTo.value})
      }
    }
  }
}
</script>
