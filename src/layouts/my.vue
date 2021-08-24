<template>
  <div class="w-100 h-100min">
    <div class="w-100 h-100min p-f l-0 t-0 ovh-y-a bg-r" />
    <Menu :publicKey="publicKey" />
    <div class="w-100 fd-r jc-c pt-10" v-if="publicKey && wallet">
      <div class="container fd-r">
        <div class="w-20-M w-100-XS p-r-M p-f-S p-f-XS b-0-S b-0-XS l-0-S l-0-XS z-5">
          <Sidebar class="r-fix-s-15-M" @logout="logout" />
        </div>
        <div class="w-85-L w-100-S w-100-XS mcolor rad-fix-10 p-8-M p-3-S p-3-XS">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
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
  }
}
</script>
