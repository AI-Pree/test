<template>
  <div class="container pt-15-M pt-10-S pt-10-XS fd-r-M fd-c-S fd-c-XS ovh">
    <div class="w-70-M w-100-S w-100-XS pr-30-L pr-6-M pr-3-S pr-3-XS pl-0-L pl-4-M pl-3-S pl-3-XS">
      <div class="w-100">
        <div class="w-100" ref="round1">
          <ProgressCircle :percent="20" :radius="radius[0]" :stroke="stroke" colorFrom="8F00FF" colorTo="8F00FF" text="Development, Team, Reserve" tokens="50.000.000" />
        </div>
        <div class="w-100 p-a l-0 t-0 p-8-M p-6-S p-3-XS">
          <div class="w-100" ref="round2">
            <ProgressCircle :percent="40" :radius="radius[1]" :stroke="stroke" colorFrom="A533FF" colorTo="A533FF"text="Partner & Adv" tokens="100.000.000" />
          </div>
        </div>
        <div class="w-100 p-a l-0 t-0 p-16-M p-12-S p-6-XS">
          <div class="w-100" ref="round3">
            <ProgressCircle :percent="50" :radius="radius[2]" :stroke="stroke" colorFrom="BC66FF" colorTo="BC66FF" text="Collateral" tokens="150.000.000" />
          </div>
        </div>
        <div class="w-100 p-a l-0 t-0 p-24-M p-18-S p-9-XS">
          <div class="w-100" ref="round4">
            <ProgressCircle :percent="60" :radius="radius[3]" :stroke="stroke" colorFrom="D299FF" colorTo="D299FF" text="Eco" tokens="250.000.000"/>
          </div>
        </div>
        <div class="w-100 p-a l-0 t-0 p-32-M p-24-S p-12-XS">
          <div class="w-100" ref="round5">
            <ProgressCircle :percent="70" :radius="radius[4]" :stroke="stroke" colorFrom="E9CCFF" colorTo="E9CCFF" text="Sale" tokens="300.000.000" />
          </div>
        </div>
        <div class="w-100 h-100 p-a l-0 t-0 fd-c ai-c jc-c">
          <div class="fs-8-M fs-7-S fs-4-XS f-gray-500">
            Total Supply
          </div>
          <div class="fs-9-M fs-8-S fs-3-XS f-gray-200 pt-2 fw-600">
            000,000,000 HGEN
          </div>
        </div>
      </div>
      <div class="w-100 fd-r jc-c pt-12-M pt-8-S pt-8-XS">
        <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect>
          Beginner’s Guide to DeFi
        </AmButton>
      </div>
    </div>
    <div class="w-30-M w-100-S w-100-XS px-0-L px-4-M px-3-S px-3-XS pt-0-M pt-8-S pt-8-XS">
      <div class="w-100 shadow-purple-200 rad-fix-6 p-4 br-6 brs-s br-mcolor-100" v-for="(item, i) in items" :key="i" :class="{'mt-3-M mt-2-S mt-2-XS': i > 0}">
        <div class="w-100 ta-c f-mcolor-400 fw-600 fs-9-M fs-7-S fs-7-XS">
          {{ item.name }} {{ item.count }}%
        </div>
        <div class="w-100 ta-c f-white-200 fw-600 fs-6-M fs-5-S fs-5-XS pt-2">
          {{ item.value }} tokens
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressCircle from '@/components/ProgressCircle'

export default {
  components: {
    ProgressCircle
  },
  data () {
    return {
      items: [
        {name: 'Sale', value: '300.000.000', count: 30},
        {name: 'Eco', value: '250.000.000', count: 25},
        {name: 'Collateral', value: '150.000.000', count: 15},
        {name: 'Partner & Adv', value: '100.000.000', count: 10},
        {name: 'Development', value: '50.000.000', count: 5},
        {name: 'Team', value: '50.000.000', count: 5},
        {name: 'Reserve', value: '50.000.000', count: 5}
      ],
      radius: [],
      stroke: 12
    }
  },
  methods: {
    resize () {
      this.radius = []
      if (window.innerWidth < 600) {
        this.stroke = 12 / 2
      } else if (window.innerWidth < 1000) {
        this.stroke = Math.round(12 / 1.5)
      } else {
        this.stroke = 12
      }
      this.radius.push(this.$refs.round1.clientWidth)
      this.radius.push(this.$refs.round2.clientWidth)
      this.radius.push(this.$refs.round3.clientWidth)
      this.radius.push(this.$refs.round4.clientWidth)
      this.radius.push(this.$refs.round5.clientWidth)
    }
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize)
  }
}
</script>
