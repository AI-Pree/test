<template>
  <div class="w-100 h-a-L h-100-S h-100-XS fd-r jc-c py-10-L py-0-S py-0-XS px-0-L px-4-M z-10">
    <span class="w-100 h-100 p-f t-0 gradient-400 d-n-L ts-3" :class="{'l-100': !open, 'l-0': open}" />
    <div class="container h-a-L h-100-S h-100-XS fd-r-L fd-c-S fd-c-XS ai-c p-r-L p-f-S p-f-XS l-0 t-0 ts-3 ovh-y-v-L ovh-y-a-L ovh-y-a-S ovh-y-a-XS" :class="{'l-100': !open, 'l-0': open}">
      <div class="w-100 fd-r-L fd-c-S fd-c-XS ai-c-L pt-0-L pt-15-S pt-15-XS px-0-L px-6-M px-4-S px-4-XS">
        <nuxt-link class="w-a-L w-100-S w-100-XS mr-4-L mr-0-S mr-0-XS mb-0-L mb-4-S mb-4-XS tt-u f-gray-600 fw-500 fs-5-L fs-7-S fs-7-XS link hv ts-3" v-for="(item, i) in items" :key="i" :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="w-a-L w-50-M w-100-S w-100-XS fsh-0 mt-0-L mt-4-S mt-4-XS px-0-M px-4-S px-4-XS">
        <AmButton color="mcolor-100" opacityEffect scaleEffect :full="mobile" @click="$emit('connect', 'connect')" v-if="!publicKey">
          Connect Wallet
        </AmButton>
        <AmButton color="mcolor-100" opacityEffect scaleEffect :full="mobile" to="/my" v-if="publicKey" :title="publicKey">
          SOL {{ publicKey.substr(0, 6) }} ...... {{ publicKey.substr(-4) }}
        </AmButton>
      </div>
      <div class="w-fix-70-L w-50-M w-100-S w-100-XS fsh-0 ml-2-L ml-0-S ml-0-XS mt-0-L mt-4-S mt-4-XS px-0-M px-4-S px-4-XS pb-0-M pb-10-S pb-10-XS">
        <AmSelectbox :data="languages" :update="false" :bottom="mobile" />
      </div>
    </div>
    <svg @click="open = !open" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" class="z-12 w-fix-10 p-a r-fix-s-5 t-fix-s-5 d-n-L d-b-s d-b-XS">
      <rect width="20" height="2" rx="1" fill="white"/>
      <rect x="4" y="8" width="16" height="2" rx="1" fill="white"/>
      <rect y="16" width="20" height="2" rx="1" fill="white"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    publicKey: {type: String, default: null}
  },
  data () {
    return {
      items: [
        {title: 'Dashboard', to: '/'},
        {title: 'Participate', to: '/my'},
        {title: 'Begginers Guide', to: ''},
        {title: 'Documentation', to: ''},
        {title: 'Tokenomics', to: ''}
      ],
      languages: {
        theme: 'default',
        value: 1,
        items: [
          {label: 'English', value: 1},
          {label: 'Russian', value: 2}
        ],
        colorDefault: 'mcolor-100',
        colorBackground: 'mcolor-200',
        colorTitle: 'white-200'
      },
      mobile: false,
      open: true
    }
  },
  watch: {
    open (val) {
      if (this.mobile) {
        if (val) {
          document.documentElement.style.overflow = 'hidden'
        } else {
          document.documentElement.style.overflow = 'auto'
        }
      }
    }
  },
  methods: {
    resize () {
      if (window.innerWidth < 1280) {
        this.mobile = true
      } else {
        this.mobile = false
      }
      if (window.innerWidth < 1024) {
        this.open = false
      } else {
        this.open = true
      }
    }
  },
  mounted () {
    this.resize ()
    window.addEventListener('resize', this.resize)
  }
}
</script>
