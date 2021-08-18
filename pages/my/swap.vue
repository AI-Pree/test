<template>
  <div class="w-100 p-7-L">
      <div class="d-f fw-w-XS jc-sb">  
        <Balance />
        <Raydium />
      </div>
  </div>
</template>

<script>
import Balance from "@/components/Swap/Balance.vue"
import Raydium from "@/components/Swap/Raydium.vue"

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
