<template>
  <div class="w-100 p-2-XS p-2-S">
    <div class="w-100 pb-8 fd-r-S fd-c-XS">
      <div class="w-65-S w-100-XS pr-6-S pr-0-XS fd-r ai-c">
        <input type="text" class="w-100 mcolor-700 br-0 pl-3 pr-10 py-3 rad-fix-3 oul-n f-mcolor-300 fs-6" placeholder="Search..." maxlength="60" v-model="search" />
        <img src="@/assets/svg/search.svg" class="w-fix-15 p-a r-10" />
      </div>
      <div class="w-a-S w-100-XS fsh-0 pt-6-XS">
        <AmButton :height="false" color="mcolor-100" bColor="mcolor-100" opacityEffect class="py-2">
          FIND
        </AmButton>
      </div>
      <div class="w-35-M w-100-XS pl-6-M pl-0-XS pt-6-XS">
        <AmSelectbox :data="sort" :update="false" :shadow="false" />
      </div>
    </div>
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
      <AmButton :height="false" color="mcolor-100" bColor="mcolor-100" opacityEffect @click="nextPage" class="py-2">
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
      search: null,
      tableData: [],
      sort: {
        theme: 'default',
        value: 1,
        items: [
          {label: 'Sort By Date', value: 1},
          {label: 'Sort By Price', value: 2}
        ],
        colorDefault: 'white-100',
        colorBackground: 'white-100',
        colorFocus: 'white-100',
        colorTitle: 'mcolor-300',
      },
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
          debtRatio: `${getCollateral(res.borrowAmount.toString(), res.lamports.toString(), parseInt(this.$accessor.usd).toString())}%`
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
