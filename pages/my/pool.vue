<template>
  <div class="w-100">
    <Balance />
    <div class="mb-4 d-f fw-w-XS">
      <Depositing />
      <Info />
    </div>
    <div class="d-f jc-c mt-10 mb-4">
      <button type="button" class="w-100-S w-100-XS d-ib tt-u rad-fix-2 py-2 shadow-purple-100 br-4 mcolor-200 f-white-200 br-mcolor-100 w-50-M mr-3 fs-5 h-fix-25min fw-500 c-p">How to use Safe Pool ></button>
    </div>
  </div>
</template>

<script>
import Balance from "@/components/Balance.vue"
import Depositing from "@/components/Pool/Depositing.vue"
import Info from "@/components/Pool/Info.vue"

export default {
  layout: 'my',
  components: {
    Balance,
    Depositing,
    Info
  }
}
</script>
