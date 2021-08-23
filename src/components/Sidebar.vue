<template>
  <div class="w-100 mcolor px-8-M px-0-S px-0-XS pb-8-M pb-0-S pb-0-XS rad-fix-10-M fd-r fw-w">
    <div class="w-100-M w-20-S w-20-XS fd-r ai-c jc-l-M jc-c-S jc-c-XS" v-for="(item, i) in items">
      <nuxt-link :to="item.to" class="w-a-M w-100-S w-100-XS fd-r-M fd-c-S fd-c-XS ai-c hv ts-3 mt-6-M mt-3-S mt-3-XS mb-0-M mb-3-S mb-3-XS">
        <div class="w-fix-s-15 mr-2-M fd-r ai-c jc-l-M jc-c-S jc-c-XS">
          <HomeSvg class="w-fix-10" v-if="item.id === 1 && !getActive(item)" />
          <HomeActiveSvg class="w-fix-10" v-if="item.id === 1 && getActive(item)" />
          <WalletSvg class="w-fix-10" v-if="item.id === 2 && !getActive(item)" />
          <WalletActiveSvg class="w-fix-10" v-if="item.id === 2 && getActive(item)" />
          <SwitchSvg class="w-fix-10" v-if="item.id === 3 && !getActive(item)" />
          <SwitchActiveSvg class="w-fix-10" v-if="item.id === 3 && getActive(item)" />
          <PieSvg class="w-fix-10" v-if="item.id === 4 && !getActive(item)" />
          <PieActiveSvg class="w-fix-10" v-if="item.id === 4 && getActive(item)" />
          <ExitSvg class="w-fix-10" v-if="item.id === 5" />
        </div>
        <span class="fs-6-M fs-4-S fs-4-XS ts-3 pt-0-M pt-2-S pt-2-XS" :class="{'f-mcolor-300 fw-600': getActive(item), 'f-white-200 fw-400': !getActive(item)}">
          {{ item.name }}
        </span>
      </nuxt-link>
    </div>
    <div class="w-100-M w-20-S w-20-XS fd-r-M fd-c-S fd-c-XS ai-c hv ts-3 mt-10-M mt-3-S mt-3-XS" @click="$emit('logout')">
      <div class="w-fix-s-15 mr-2-M fd-r ai-c jc-l-M jc-c-S jc-c-XS">
        <ExitSvg class="w-fix-10" />
      </div>
      <span class="fs-6-M fs-4-S fs-4-XS ts-3 pt-0-M pt-2-S pt-2-XS f-white-200">
        Log out
      </span>
    </div>
  </div>
</template>

<script>
import HomeSvg from '@/assets/svg/my/home.svg?inline'
import HomeActiveSvg from '@/assets/svg/my/homeActive.svg?inline'
import WalletSvg from '@/assets/svg/my/wallet.svg?inline'
import WalletActiveSvg from '@/assets/svg/my/walletActive.svg?inline'
import SwitchSvg from '@/assets/svg/my/switch.svg?inline'
import SwitchActiveSvg from '@/assets/svg/my/switchActive.svg?inline'
import PieSvg from '@/assets/svg/my/pie.svg?inline'
import PieActiveSvg from '@/assets/svg/my/pieActive.svg?inline'
import CoinsSvg from '@/assets/svg/my/coins.svg?inline'
import CoinsActiveSvg from '@/assets/svg/my/coinsActive.svg?inline'
import DiggingSvg from '@/assets/svg/my/digging.svg?inline'
import DiggingActiveSvg from '@/assets/svg/my/diggingActive.svg?inline'
import ExitSvg from '@/assets/svg/my/exit.svg?inline'

export default {
  components: {
    HomeSvg,
    HomeActiveSvg,
    WalletSvg,
    WalletActiveSvg,
    SwitchSvg,
    SwitchActiveSvg,
    PieSvg,
    PieActiveSvg,
    CoinsSvg,
    CoinsActiveSvg,
    DiggingSvg,
    DiggingActiveSvg,
    ExitSvg
  },
  methods: {
    getActive (item) {
      return $nuxt.$route.name === item.class || false
    }
  },
  data () {
    return {
      items: [
        {id: 1, name: 'Dashboard', to: '/my', class: 'my'},
        {id: 2, name: 'Borrowing', to: '/my/borrowing', class: 'my-borrowing'},
        {id: 3, name: 'Swap', to: '/my/swap', class: 'my-swap'},
        {id: 4, name: 'Pool/Safe pool', to: '/my/pool', class: 'my-pool'}
      ]
    }
  }
}
</script>
