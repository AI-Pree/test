<template>
  <div class="w-100">
    <Balance />
    <div class="w-100 fd-r fw-w pt-10">
      <div class="w-55-M w-100-S w-100-XS">
        <Safe @cancelFunc="cancelFunc" @confirmFunc="confirmFunc" />
      </div>
      <div class="w-45-M w-100-S w-100-XS pl-8-M pl-0-XS pt-4-M pt-8-S pt-8-XS">
        <Info />
      </div>
    </div>
    <div class="w-100 fd-r jc-c pt-10">
      <AmButton color="mcolor-200" bColor="mcolor-100" opacityEffect>
        How to use Safe Pool <img src="@/assets/svg/my/arrow-r.svg" class="w-fix-s-3 ml-1" />
      </AmButton>
    </div>
  </div>
</template>

<script>
import Balance from '@/components/my/pool/Balance.vue'
import Safe from '@/components/my/pool/Safe.vue'
import Info from '@/components/my/pool/Info.vue'

export default {
  layout: 'my',
  components: {
    Balance,
    Safe,
    Info
  },
  methods: {
    cancelFunc () {
      this.$accessor.dashboard.cancel()
    },
    confirmFunc () {
      this.$accessor.dashboard.confirm()
    }
  }
}
</script>
