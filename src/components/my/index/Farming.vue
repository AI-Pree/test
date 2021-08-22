<template>
  <div class="w-100 h-100min fd-c jc-c">
    <div class="w-100 fs-9-M fs-7-S fs-7-XS fw-600 f-white-200 pb-2">
      Farming
    </div>
    <div class="w-100 fs-6 fw-400 f-white-200 pb-6">
      You will receive GENS stable coin.
    </div>
    <div class="w-100 fs-6 fw-400 f-white-200 pb-2">
      current debt
    </div>
    <div class="w-100 fs-11 fw-700 f-white-200 pb-6">
      $ 201,000
    </div>
    <div class="w-60">
      <AmButton color="white-200" bColor="white-100" colorText="mcolor-100" opacityEffect full @click="$emit('borrowFunc')">
        <span class="fw-800">Borrow</span>
      </AmButton>
    </div>
  </div>
</template>
