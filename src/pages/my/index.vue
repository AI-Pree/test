<template>
  <div class="w-100">
    <div class="w-100 fd-r-L fd-c-S fd-c-XS ai-s">
      <div class="w-50-L w-100-S w-100-XS br-6 brs-s br-mcolor-300 shadow-purple-100 p-6-M p-4-S p-4-XS rad-fix-8 mr-2-L">
        <Current @claimFunc="claimFunc" />
      </div>
      <div class="w-50-L w-100-S w-100-XS gradient-500 p-6 rad-fix-8 ml-2-L ovh d-f-L d-n-S d-n-XS">
        <Farming @borrowFunc="borrowFunc" />
        <img src="@/static/my-farming.png" class="h-100 p-a r-0 t-0" />
      </div>
    </div>
    <div class="w-100 f-mcolor-300 fw-800 fs-18-M fs-12-S fs-10-XS ta-c pt-12 pb-2">
      <span class="f-white-200 pr-3">$</span>000.000.000.000
    </div>
    <div class="w-100 f-white-200 fw-400 fs-7-M fs-6-S fs-5-XS ta-c pb-12 pt-2">
      Total Deposited Value (Total Value Locked)
    </div>
    <div class="w-100 fd-r-L fd-c-S fd-c-XS ai-s">
      <div class="w-50-L w-100-S w-100-XS br-6 gradient-200 rad-fix-8 p-8-M p-4-S p-4-XS mr-8">
        <Borrowing @borrowFunc="borrowFunc" @payFunc="payFunc" />
      </div>
      <div class="w-50-L w-100-S w-100-XS p-6-M p-3-S p-0-XS fsh-0 pt-0-L pt-10-S pt-10-XS">
        <Pool @depositFunc="depositFunc" />
      </div>
    </div>
    <div class="w-100 fd-r-L fd-c-S fd-c-XS ai-s d-n-L pt-0-L pt-5-S pt-5-XS">
      <div class="w-50-L w-100-S w-100-XS gradient-500 p-6-M p-4-S p-4-XS rad-fix-8 ml-2-L ovh">
        <Farming @borrowFunc="borrowFunc" />
        <img src="@/static/my-farming.png" class="h-100 p-a r-0 t-0" />
      </div>
    </div>
  </div>
</template>

<script>
import Current from '@/components/my/index/Current'
import Farming from '@/components/my/index/Farming'
import Borrowing from '@/components/my/index/Borrowing'
import Pool from '@/components/my/index/Pool'

export default {
  components: {
    Current,
    Farming,
    Borrowing,
    Pool
  },
  layout: 'my',
  methods: {
    depositFunc () {
      this.$accessor.dashboard.deposit()
    },
    borrowFunc () {
      this.$accessor.dashboard.borrow()
    },
    payFunc () {
      this.$accessor.dashboard.pay()
    },
    claimFunc () {
      this.$accessor.dashboard.claim()
    }
  }
}
</script>
