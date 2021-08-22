<template>
  <div class="w-100">
    <div class="w-100 fs-10 fw-600 f-white-200 pb-6 ta-c-XS">
      Your Balance
    </div>
    <div class="w-100 fd-r py-2">
      <div class="w-30 fs-7 f-white-200 fw-500">
        SOL
      </div>
      <div class="w-70 fs-7 f-mcolor-300 fw-500 ta-r-XS">
        20.901345345
      </div>
    </div>
    <div class="w-100 fd-r py-2">
      <div class="w-30 fs-7 f-white-200 fw-500">
        HGEN
      </div>
      <div class="w-70 fs-7 f-mcolor-300 fw-500 ta-r-XS">
        13.010112342
      </div>
    </div>
    <div class="w-100 fd-r py-2">
      <div class="w-30 fs-7 f-white-200 fw-500">
        GENS
      </div>
      <div class="w-70 fs-7 f-mcolor-300 fw-500 ta-r-XS">
        400.01
      </div>
    </div>
    <div class="w-100 pt-8 fd-r jc-c">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="$emit('swapFunc')" :full="true">
        Swap guide
      </AmButton>
    </div>
  </div>
</template>
