<template>
  <div class="w-100 mcolor p-8 rad-fix-10">
    <div class="w-100 fd-r ai-c" v-for="(item, i) in items">
      <nuxt-link :to="item.to" class="fd-r ai-c hv ts-3" :class="{'mt-6': i > 0, 'mt-10': i === items.length - 1}">
        <div class="w-fix-s-15 mr-2 fd-r ai-c">
          <HomeSvg class="w-fix-10" v-if="item.id === 1 && !getActive(item)" />
          <HomeActiveSvg class="w-fix-10" v-if="item.id === 1 && getActive(item)" />
          <WalletSvg class="w-fix-10" v-if="item.id === 2 && !getActive(item)" />
          <WalletActiveSvg class="w-fix-10" v-if="item.id === 2 && getActive(item)" />
          <SwitchSvg class="w-fix-10" v-if="item.id === 3 && !getActive(item)" />
          <SwitchActiveSvg class="w-fix-10" v-if="item.id === 3 && getActive(item)" />
          <PieSvg class="w-fix-10" v-if="item.id === 4 && !getActive(item)" />
          <PieActiveSvg class="w-fix-10" v-if="item.id === 4 && getActive(item)" />
          <CoinsSvg class="w-fix-10" v-if="item.id === 5 && !getActive(item)" />
          <CoinsActiveSvg class="w-fix-10" v-if="item.id === 5 && getActive(item)" />
          <DiggingSvg class="w-fix-10" v-if="item.id === 6 && !getActive(item)" />
          <DiggingActiveSvg class="w-fix-10" v-if="item.id === 6 && getActive(item)" />
          <ExitSvg class="w-fix-10" v-if="item.id === 7" />
        </div>
        <span class="fs-6 ts-3" :class="{'f-mcolor-300 fw-600': getActive(item), 'f-white-200 fw-400': !getActive(item)}">
          {{ item.name }}
        </span>
      </nuxt-link>
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
        {id: 4, name: 'Pool/Safe pool', to: '/my/pool', class: 'my-pool'},
        {id: 5, name: 'Stacking', to: '/my/stacking', class: 'my-stacking'},
        {id: 6, name: 'Farming', to: '/my/farming', class: 'my-farming'},
        {id: 7, name: 'Log out', to: '/logout'}
      ]
    }
  }
}
</script>
