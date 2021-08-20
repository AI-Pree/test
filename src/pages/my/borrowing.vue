<template>
  <div class="w-100">
    <Balance />
    <div class="mb-4 d-f fw-w-XS">
      <PayDebt :isBorrow="isBorrow" @changeBorrow="changeBorrow($event)" />
      <Info v-if="!isBorrow"/>
      <InfoRemained v-else/>
    </div>
    <div class="d-f fw-w-XS mb-5">
      <Notification />
      <Useful />
    </div>
  </div>
</template>

<script>
import Balance from "@/components/Balance.vue"
import PayDebt from "@/components/Borrowing/PayDebt.vue"
import Notification from '@/components/Borrowing/Notification.vue'
import Info from '@/components/Borrowing/Info.vue'
import InfoRemained from '@/components/Borrowing/InfoRemained.vue'
import Useful from '@/components/Borrowing/Useful.vue'

export default {
  layout: 'my',
  data() {
    return {
      isBorrow: false,
    }
  },
  methods: {
    changeBorrow(borrow) {
      console.log(borrow)
      this.isBorrow = borrow
    }
  },
  components: {
    Balance,
    PayDebt,
    Notification,
    Info,
    Useful,
    InfoRemained
  }
}
</script>
