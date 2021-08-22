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
        <div class="w-fix-s-10min fs-7 fw-600 f-mcolor-300 br-0 oul-n" contenteditable @input="press">234.00</div>
        <div class="p-a-S p-r-XS r-0 b-0 w-fix-35-S w-100-XS">
          <AmSelectbox :data="currencyFrom" :update="false" :shadow="false" :padding="false" />
        </div>
      </div>
    </div>
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4">
      <div class="w-100 fs-5 f-gray-600 pb-2 pt-3">
        to (estimate)
      </div>
      <div class="w-100 pb-3-S pb-0">
        <div class="w-fix-s-10min fs-7 fw-600 f-mcolor-300 br-0 oul-n" contenteditable @input="press">234.00</div>
        <div class="p-a-S p-r-XS r-0 b-0 w-fix-35-S w-100-XS">
          <AmSelectbox :data="currencyTo" :update="false" :shadow="false" :padding="false" />
        </div>
      </div>
    </div>
    <div class="w-100 pt-2 pb-6 ta-c fs-6 fw-500 f-white-200">
      1 RAY ≈ 0,099720900961941 SOL
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Slippage Tolerance <span class="w-fix-s-12 h-fix-s-12 fd-r jc-c ai-c mcolor-100 rad-fix-2 fs-4 fw-400 ml-2">?</span>
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
        Minimum Received <span class="w-fix-s-12 h-fix-s-12 fd-r jc-c ai-c mcolor-100 rad-fix-2 fs-4 fw-400 ml-2">?</span>
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
        0.0983070000 <span class="f-white-200 pl-1">SOL</span>
      </div>
    </div>
    <div class="w-100 fd-r-S fd-c-XS py-2">
      <div class="w-100 fs-6 fw-400 f-white-200 fd-r ai-c jc-c-XS">
        Price Impact <span class="w-fix-s-12 h-fix-s-12 fd-r jc-c ai-c mcolor-100 rad-fix-2 fs-4 fw-400 ml-2">?</span>
      </div>
      <div class="w-a fs-6 fsh-0 fw-400 f-mcolor-100 fd-r ai-c pt-2-XS jc-c-XS">
        0.00 <span class="f-white-200 pl-1">%</span>
      </div>
    </div>
    <div class="w-100 pt-8 fd-r jc-c">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="$emit('swapFunc')" :full="true">
        CREATE RAY aCCOUNT
      </AmButton>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currencyFrom: {
        theme: 'default',
        value: 1,
        items: [
          {label: 'RAY', value: 1},
          {label: 'SOL', value: 2}
        ],
        colorDefault: 'mcolor-700',
        colorFocus: 'mcolor-700',
        colorBackground: 'mcolor-700',
        colorTitle: 'white-200'
      },
      currencyTo: {
        theme: 'default',
        value: 2,
        items: [
          {label: 'RAY', value: 1},
          {label: 'SOL', value: 2}
        ],
        colorDefault: 'mcolor-700',
        colorFocus: 'mcolor-700',
        colorBackground: 'mcolor-700',
        colorTitle: 'white-200'
      }
    }
  },
  methods: {
    press (e) {
      if (e.data) {
        if (!e.data.match(/^\d+/) && e.data !== '.') e.target.innerHTML = e.target.innerHTML.replace(/[^+\d\.]/g, '')
        if (e.data === '.' && e.target.innerHTML.split('.').length > 2) e.target.innerHTML = e.target.innerHTML.replace(/\.(?=[^\.]*$)/, '')
      }
    }
  }
}
</script>
