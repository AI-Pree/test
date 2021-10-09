<template>
  <div class="w-100 ovh-h">
    <div class="w-100 fd-r-S fd-c-XS">
      <div class="w-45-S w-100-XS pr-12-S pr-0-XS pl-2-S pl-0-XS">
        <Balance @swapFunc="swapFunc" />
      </div>
      <div class="w-55-S w-100-XS pt-0-S pt-30-XS">
        <Raydium @createRayFunc="createRayFunc" />
      </div>
    </div>
    <img src="@/static/swap.png" class="p-a b-0 w-30 d-b-M d-n-S d-n-XS" />
  </div>
</template>

<script>
import Balance from "@/components/my/swap/Balance.vue"
import Raydium from "@/components/my/swap/Raydium.vue"

export default {
  layout: 'my',
  head(){
    return{
      bodyAttrs: {
          class: "isSwap"
      },
    }
  },
  components: {
    Balance,
    Raydium,
  },
  methods: {
    swapFunc () {
      this.$accessor.swap.swap()
    },
    createRayFunc () {
      this.$accessor.swap.createRay()
    }
  }
}
</script>

<style lang="scss">
.isSwap .swap-bg {
    background-image: url("/img/XMLID.png");
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 320px;
}
</style>
