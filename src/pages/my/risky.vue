<template>
  <div class="w-100 p-2-XS p-2-S">
    <div class="w-100 fd-r ai-s">
      <div class="d-i fs-5 f-white-200 ta-c px-1 py-2 br-r-4 brrs-s br-mcolor-400 fd-r ai-c jc-c w-100"
        v-for="(header, h) in headers" :key="h">
        <div class="w-100 h-100 fd-r ai-c jc-c ta-c fw-600">
          {{ header }}
        </div>
      </div>
      <div class="w-5 fsh-0" />
    </div>
    <div class="w-100 fd-r ai-s br-t-4 brts-d br-mcolor-400" v-for="(data, d) in tableData" :key="d">
      <div class="d-i fs-5 ta-c px-1 py-4 br-r-4 brrs-s br-mcolor-400 fd-r ai-c jc-c w-100"
        v-for="(key, i) in Object.keys(data)" :key="i" :class="{'f-mcolor-100': [1].indexOf(i) > -1, 'f-gray-400': [1].indexOf(i) === -1}">
          <div class="w-100 h-100 fd-r ai-c jc-c ta-c fw-400">
            {{ data[key] }}
          </div>
      </div>
      <div class="w-5 fsh-0 fd-r ai-c jc-c">
        <img src="@/assets/svg/my/bin.svg" class="w-fix-s-10 hv ts-3" @click="binAction(data.holder)" />
      </div>
    </div>
    <div class="w-100 fd-r jc-c pt-10" v-if="tableData.length > 0">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="nextPage">
        More
      </AmButton>
    </div>
  </div>
</template>

<script>
//import Balance from '@/components/my/pool/Balance.vue'
//import CommonTable from '@/components/common/table/CommonTable.vue'
import { encodeUtil } from '@/utils/trove'
import { getCollateral } from "@/utils/layout"
import { PublicKey } from '@solana/web3.js';
import BN from "bn.js";

export default {
  layout: 'my',
  computed: {
    aTroveList() {
      return this.$accessor.risky.troveList
    }
  },
  watch: {
    aTroveList: {
      deep: false,
      handler(newValue) {
        this.setTroveList(newValue)
      }
    },
  },
  data() {
    return {
      tableData: [],
      headers: ['Date', 'Holder', 'Collateral (SOL)', 'Debt (GENS)', 'Fee (GENS)', 'Debt Ratio'],
      page: 1
    }
  },
  methods: {
    binAction (val) {
      console.log(val)
    },
    setTroveList (newValue) {
      this.tableData = []
      newValue.forEach(async (element) => {
        const trove = new PublicKey(element.trove)
        const data = await this.$web3.getAccountInfo(trove);
        const res = await encodeUtil(trove, data.data)
        this.tableData.push({
          date: '',
          holder: res.owner.substr(0, 4) + '...' + res.owner.substr(-4),
          coll: new BN(res.lamports).div(new BN("1000000000")).toString(),
          debt: res.borrowAmount || '',
          fee: res.depositorFee || '',
          debtRatio: getCollateral(res.borrowAmount.toString(), res.lamports.toString())
        })
      })
    },
    nextPage() {
      this.page++
      this.$accessor.risky.getTroveListAction({page: this.page, clear: false})
    }
  },
  mounted() {
    this.$accessor.risky.getTroveListAction({page: this.page, clear: true})
  }
}
</script>
