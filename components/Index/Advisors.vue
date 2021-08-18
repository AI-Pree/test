<template>
  <div class="container pt-30-M pt-20-S pt-15-XS pb-20-M pb-0-S pb-0-XS">
    <div class="w-100 fd-r jc-c ai-c fs-16-M fs-10-S fs-8-XS f-white-200 fw-600 tt-u">
      Advisors
    </div>
    <div class="w-100 pt-10-M pt-7-S pt-7-XS fd-r jc-c fw-w">
      <div class="w-25-M w-50-S w-50-XS fd-c ai-c p-2" v-for="(item, i) in items" :key="i">
        <div class="w-fix-85-M w-45-S w-fix-45-XS h-fix-85-M h-fix-65-S h-fix-45-XS brs-s br-mcolor-100 shadow-purple-100 ovh rad-fix-6">
          <img :src="require('@/static/' + item.img)" class="w-100 h-100min" />
        </div>
        <div class="w-100 fs-8-M fs-5-S fs-5-XS fw-600 ta-c pt-6-M pt-3-S pt-3-XS f-white-200">
          {{ item.name }}
        </div>
        <div class="w-100 fs-6-M fs-4-S fs-4-XS fw-400 ta-c pt-2 f-mcolor-100 tt-u">
          {{ item.position }}
        </div>
        <div class="w-100 fs-6-M fs-4-S fs-4-XS ta-c pt-4-M pt-2-S pt-2-XS f-white-200 px-4-M px-1-S px-1-XS f-lh-15-M f-lh-10-S f-lh-10-XS">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {img: 'user.png', name: 'Name', position: 'Position', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'},
        {img: 'user.png', name: 'Name', position: 'Position', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'},
        {img: 'user.png', name: 'Name', position: 'Position', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'},
        {img: 'user.png', name: 'Name', position: 'Position', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'}
      ]
    }
  }
}
</script>
