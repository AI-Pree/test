<template>
  <div class="w-100">
    <Balance />
    <div class="w-100 fd-r fw-w pt-10">
      <div class="w-55-M w-100-S w-100-XS">
        <Pay @gens="to = $event" @sol="from = $event"/>
      </div>
      <div class="w-45-M w-100-S w-100-XS pl-8-M pl-0-XS pt-4-M pt-8-S pt-8-XS">
        <Info :to="Number(to)" :from="Number(from)" />
      </div>
    </div>
    <div class="w-100 fd-r-M fd-c-S fd-c-XS pt-10 ai-s">
      <div class="w-50-M w-100-S w-100-XS pr-4-M pr-0-S pr-0-XS">
        <Notification />
      </div>
      <div class="w-50-M w-100-S fd-r ai-s pl-4 pl-0-S pl-0-XS pt-0-M pt-10-S pt-10-XS">
        <UseFull />
      </div>
    </div>
  </div>
</template>

<script>
import Balance from "@/components/my/borrowing/Balance.vue"
import Pay from "@/components/my/borrowing/Pay.vue"
import Info from '@/components/my/borrowing/Info.vue'
import Notification from '@/components/my/borrowing/Notification.vue'
import UseFull from '@/components/my/borrowing/UseFull.vue'

export default {
  components: {
    Balance,
    Pay,
    Info,
    Notification,
    UseFull
  },
  layout: 'my',
  data () {
    return {
      to: null,
      from: null
    }
  }
}
</script>
