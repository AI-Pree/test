<template>
  <div class="w-100 p-2-XS p-2-S">
    <CommonTable :tableData="aTroveList" :tableOptions="tableOptions" @binAction="binAction($event)" class="mt-4" />
    <AmButton color="mcolor-100" opacityEffect scaleEffect class="mt-4" @click="nextPage()">
      More
    </AmButton>
  </div>
</template>

<script>
import Balance from '@/components/my/pool/Balance.vue'
import CommonTable from '@/components/common/table/CommonTable.vue'
import { PublicKey } from '@solana/web3.js';
import { mapGetters } from 'vuex'

export default {
  layout: 'my',
  components: {
    Balance,
    CommonTable
  },
  computed: {
    aTroveList() {
      return this.$accessor.risky.troveList
    }
  },
  watch: {
    aTroveList: {
      immediate: true,
      deep: false,
      handler(newValue) {
        this.setTroveList(newValue)
      }
    },
  },
  data() {
    return {
      page: 1,
      tableOptions: [
        { title: 'Date', field: 'date' },
        { title: 'Holder', field: 'holder', type: 'link' },
        { title: 'Collateral (SOL)', field: 'coll' },
        { title: 'Debt (GENS)', field: 'debt' },
        { title: 'Fee (GENS)', field: 'fee' },
        { title: 'Debt Ratio', field: 'debtRatio' },
        { title: 'Liquidated Price (GENS)', field: 'price' },
        { title: '', type: 'bin-action' }
      ],
      tableData: []
    }
  },
  methods: {
    binAction(val) {
      console.log(val)
    },
    setTroveList(newVal) {
      this.tableData = []
      newVal.forEach(async (element) => {
        const temp = new PublicKey(element.user)
        this.$web3.getAccountInfo(temp).then(res => {
          console.log(res)
        })
      })
    },
    nextPage() {
      this.page++
      this.$accessor.risky.getTroveListAction(this.page)
    }
  },
  mounted() {
    this.$accessor.risky.getTroveListAction(this.page)
  }
}
</script>
