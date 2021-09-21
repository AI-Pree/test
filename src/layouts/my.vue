<template>
  <div class="w-100 h-100min">
    <div class="w-100 h-100min p-f l-0 t-0 ovh-y-a bg-r" />
    <Menu :publicKey="publicKey" @logout="logout" />
    <div class="w-100 fd-r jc-c pt-0" v-if="publicKey && wallet">
      <div class="w-100 fd-r">
        <div class="w-20-L w-15-M w-15-S w-0-XS fsh-0 z-10 pt-5">
          <Sidebar class="r-fix-s-15-M" />
          <div class="w-100 pl-10 d-f-S d-n-XS">
            <Balance />
          </div>
        </div>
        <div class="w-80-L w-85-M w-85-S w-100-XS fd-r jc-c">
          <div class="w-80-S w-100-XS px-0-S px-20-XS pt-8-S pt-50-XS">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 pb-0-S pb-40-XS">
      <Footer />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/my/Balance.vue'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

import { AccountInfo } from '@solana/web3.js'

export default {
  fetch () {
    if (!this.$store.$wallet && !this.publicKey) {
      this.logout()
    }
  },
  components: {
    Balance,
    Menu,
    Footer,
    Sidebar
  },
  computed: {
    publicKey () {
      return this.$accessor.wallet.publicKey || null
    },
    wallet () {
      return this.$store.$wallet || null
    }
  },
  methods: {
    logout () {
      this.$accessor.wallet.logout()
    }
  },
  mounted () {
    this.$accessor.pool.getDeposit()
    this.$accessor.borrowing.getTrove()
    this.$accessor.wallet.getBalance()
    this.$accessor.getInfo()
  }
}
</script>
