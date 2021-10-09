<template>
  <div class="w-100 h-a-S h-100-XS fd-r jc-c py-5 px-10 z-10">
    <span class="w-100 h-100 p-f t-0 gradient-400 d-n-S ts-3" :class="{'l-100': !open, 'l-0': open}" />
    <div class="w-100 h-a-S h-100-XS fd-r-S fd-c-XS ai-c p-r-S p-f-XS l-0 t-0 ts-3 ovh-y-v-S ovh-y-a-XS" :class="{'l-100': !open, 'l-0': open}">
      <div class="w-100 fd-r-S fd-c-XS p-0-S p-20-XS pt-0-S pt-40-XS ai-c">
        <div class="w-a-S w-100-XS fsh-0 px-0-S px-20-XS mr-4 fd-r jc-c">
            <img src="@/assets/svg/company_logo.png" class="h-fix-15-S h-fix-55-XS" />
        </div>
        <nuxt-link class="w-a f-gray-600 fw-500 fs-5-M fs-7-S fs-25-XS link hv ts-3 mr-4 my-0-S my-10-XS" v-for="(item, i) in items" :key="i" :to="item.to">
          {{ item.title }}
        </nuxt-link>
        <nuxt-link class="w-a f-gray-600 fw-500 fs-5-M fs-7-S fs-25-XS link hv ts-3 mr-4 my-0-S my-10-XS" :to="{path: '/', hash: '#tokenomics'}">
          Tokenomics
        </nuxt-link>
        <nuxt-link class="w-a f-gray-600 fw-500 fs-5-M fs-7-S fs-25-XS link hv ts-3 mr-4 my-0-S my-10-XS" to="/whitepaper">
          Whitepaper
        </nuxt-link>
      </div>
      <div class="w-a-S w-100-XS fsh-0 px-0-S px-20-XS">
        <AmButton color="mcolor-100" opacityEffect scaleEffect :full="mobile" @click="$emit('connect', 'connect')" v-if="!publicKey">
          <span class="fw-800 pr-1 f-mcolor-300">SOL</span> Connect Wallet
        </AmButton>
        <div class="w-a-S w-100-XS d-ib rad-fix-2 br-4 brs-s mcolor-100 shadow-purple-100 br-purple-700 f-white-200 px-0-S px-10-XS" v-if="publicKey">
          <span class="w-a-S w-100-XS d-f fd-c-S fd-r-XS ai-c jc-c ta-c px-6 fs-4-S fs-20-XS fw-500 z-2 h-fix-s-28min-S h-fix-s-100min-XS">
            <nuxt-link class="w-100 fd-r tt-u" to="/my">
              <span class="fw-800 pr-1-S pr-5-XS f-mcolor-300">SOL</span> {{ publicKey.substr(0, 6) }} ...... {{ publicKey.substr(-4) }}
            </nuxt-link>
            <div class="w-100 fd-r jc-r pt-1 fs-5-S fs-20-XS">
              <span class="hv ts-3" @click="$emit('logout')">
                Disconnect
              </span>
            </div>
          </span>
        </div>
      </div>
      <div class="w-fix-70-S w-100-XS fsh-0 ml-2-S ml-0-XS px-0-S px-20-XS mt-0-S mt-20-XS">
        <AmSelectbox :data="languages" :update="false" :bottom="mobile" />
      </div>
    </div>
    <svg @click="open = !open" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" class="z-12 w-fix-40 p-a r-fix-s-25 t-fix-s-25 d-n-S d-b-s d-b-XS">
      <rect width="20" height="2" rx="1" fill="white"/>
      <rect x="4" y="8" width="16" height="2" rx="1" fill="white" />
      <rect y="16" width="20" height="2" rx="1" fill="white" />
    </svg>
  </div>
</template>

<script>
export default{
  props: {
    publicKey: {type: String, default: null}
  },
  data () {
    return {
      items: [
        {title: 'Dashboard', to: '/my'},
        {title: 'Beginners Guide', to: '/documentation'},
        {title: 'Documentation', to: '/documentation'},
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
      if (window.innerWidth < 600) {
        this.mobile = true
      } else {
        this.mobile = false
      }
      if (window.innerWidth < 600) {
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
