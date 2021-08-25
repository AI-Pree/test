<template>
  <div class="container w-100 fd-c jc-c pt-10 pb-10 m-0-auto">
    <div class="w-60-L w-60-M w-100-S gradient-200 rad-fix-8 p-10-M p-10-S p-10-XS m-0-auto br-mcolor-400 br-1 brs-s">
      <Notification />
    </div>
  </div>
</template>

<script>
import Notification from '@/components/adminBorrowing/Notification.vue'
export default {
  layout: 'admin',
  components: {
    Notification,
  }
}
</script>
