<template>
  <div class="w-100">
    <CommonTable :tableData="risky" :tableOptions="tableOptions" @binAction="binAction($event)" class="mt-4"/>

    <AmButton color="mcolor-100" opacityEffect scaleEffect class="mt-4">
      More
    </AmButton>
  </div>
</template>

<script>
import Balance from '@/components/my/pool/Balance.vue'
import CommonTable from '@/components/common/table/CommonTable.vue'

import { mapGetters } from 'vuex'

export default {
  layout: 'my',
  components: {
    Balance,
    CommonTable
  },
  computed: {
    ...mapGetters({ risky: 'risky/getRisky' })
  },
  data() {
    return {
      tableOptions: [
        { title: 'Date', field: 'date' },
        { title: 'Holder', field: 'holder', type: 'link' },
        { title: 'Collateral (SOL)', field: 'coll' },
        { title: 'Debt (GENS)', field: 'debt' },
        { title: 'Fee (GENS)', field: 'fee' },
        { title: 'Debt Ratio', field: 'debtRatio' },
        { title: 'Liquidated Price (GENS)', field: 'price' },
        { title: '', type: 'bin-action' }
      ]
    }
  },
  methods: {
    binAction(val) {
      console.log(val)
    }
  }
}
</script>
