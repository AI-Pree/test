<template>
  <div class="w-100 br-6 gradient-200 rad-fix-8 p-8-S p-4-XS">
    <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4 ta-c-XS">
      Borrowing
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-5-XS f-gray-500 pb-6 ta-c-XS">
      your current debt
    </div>
    <div class="w-100 fs-6-M fs-6-S fs-4-XS f-white-200 ta-c-XS">
      <span class="fs-9-M fs-9-S fs-7-XS fw-800 f-mcolor-100">201.00</span>
      <span class="fs-9-M fs-9-S fs-7-XS fw-600 px-1">GENS</span>
      (<span class="f-mcolor-100 fw-800 pr-1">10.06%</span>Debt Ratio)
    </div>
    <div class="w-100 pt-6 fd-r-S fd-c-XS">
      <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
        <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="$emit('cancelFunc')">
          Borrow
        </AmButton>
      </div>
      <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-4-XS">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="$emit('confirmFunc')">
          Pay Debt
        </AmButton>
      </div>
    </div>
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        set amount you want to deposit
      </div>
      <div class="w-100 fd-r ai-c">
        <div class="w-fix-s-10min fs-7 fw-600 f-mcolor-300 br-0 oul-n" contenteditable @input="press">234.00</div>
        <span class="pl-1 fs-6 fw-600 f-white-200">SOL</span>
        <span class="p-a r-0 fs-6 f-mcolor-100 td-u ts-3 hv d-n-XS">max</span>
      </div>
    </div>
    <div class="w-100 mb-4 mcolor-700 rad-fix-2 px-4 py-3">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        amount received
      </div>
      <div class="w-100 fd-r ai-c">
        <div class="w-fix-s-10min fs-7 fw-600 f-mcolor-300 br-0 oul-n" contenteditable @input="press">234.00</div>
        <span class="pl-1 fs-6 fw-600 f-white-200">GENS</span>
      </div>
    </div>
    <div class="w-100 pb-6 fd-r-S fd-c-XS">
      <div class="w-50-S w-100-XS mr-2-L mr-2-S mr-0-XS">
        <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect full @click="$emit('cancelFunc')">
          reset
        </AmButton>
      </div>
      <div class="w-50-S w-100-XS ml-2-L ml-2-S ml-0-XS mt-0-S mt-4-XS">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect full @click="$emit('confirmFunc')">
          confirm
        </AmButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
