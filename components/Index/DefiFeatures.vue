<template>
  <div class="container pt-30-M pt-20-S pt-15-XS">
    <div class="w-100 tt-u fs-16-M fs-10-S fs-8-XS fw-600 f-white-200 ta-c">
      DeFi FEATURES
    </div>
    <div class="w-100 fd-r jc-c pt-0-M pt-4-S pt-4-XS">
      <div class="w-70-M w-100-S w-100-XS fd-r ai-t jc-c fw-w">
        <div class="w-33-M w-50-S w-50-XS fd-c jc-c ai-c p-12-L p-6-M p-3-S p-3-XS" v-for="(item, i) in items" :key="i">
          <div class="w-90 fd-r ai-c jc-c shadow-purple-100 rad-fix-4 py-6-M py-4-S py-4-XS">
            <img :src="require('@/assets/svg/' + item.img)" class="h-fix-40-M h-fix-30-S h-fix-25-XS" />
          </div>
          <div class="w-100 pt-6-M pt-4-S pt-4-XS fs-8-M fs-6-S fs-6-XS fw-600 f-white-200 ta-c">
            {{ item.name }}
          </div>
          <div class="w-100 pt-2 fs-5-M fs-4-S fs-4-XS fw-400 f-gray-500 ta-c">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 fd-r jc-c pt-5-M pt-4-S pt-4-XS px-0-M px-3-S px-3-XS">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect>
        Beginner’s Guide to DeFi
      </AmButton>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {img: 'defiFuture1.svg', name: 'Borrowing', text: 'Get an interes-free loan'},
        {img: 'defiFuture2.svg', name: 'Safe Pool', text: 'We have triple earnings.'},
        {img: 'defiFuture3.svg', name: 'Farming', text: 'Fund to earn transaction fees profit.'}
      ]
    }
  }
}
</script>
