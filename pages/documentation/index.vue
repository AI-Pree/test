<template>
  <div class="w-100 fd-c ai-c py-6">
    <div class="container">
      <div class="d-f ta-l fs-12-L fs-12-M fs-8-S fs-8-XS f-gray-600 fw-400">
        <div
          class="mr-9-L mr-8-M mr-4-S mr-4-XS pb-1 c-p" 
          :class="{'br-mcolor-300': activeTab === 'faq', 'brbs-s': activeTab === 'faq'}"
          @click="activeTab = 'faq'">
          FAQ
        </div>
        <div
          class="mr-9-L mr-8-M mr-4-S mr-4-XS pb-1 c-p"
          :class="{'br-mcolor-300': activeTab === 'guide', 'brbs-s': activeTab === 'guide'}"
          @click="activeTab = 'guide'">
          Beginners Guide
        </div>
        <div
          class="mr-9-L mr-8-M mr-4-S mr-4-XS pb-1 c-p" 
          :class="{'br-mcolor-300': activeTab === 'audit', 'brbs-s': activeTab === 'audit'}"
          @click="activeTab = 'audit'">
          Audit
        </div>
      </div>
    </div>

    <div class="container mt-8-L">
      <Faq v-if="activeTab === 'faq'"/>
      <BeginnersGuide v-if="activeTab === 'guide'"/>
      <Audit v-if="activeTab === 'audit'"/>
    </div>

  </div>
</template>

<script>
import Faq from '@/components/documentation/Faq'
import BeginnersGuide from '@/components/documentation/BeginnersGuide'
import Audit from '@/components/documentation/Audit'

export default {
  components: {
    Faq,
    BeginnersGuide,
    Audit
  },
  data() {
    return {
      activeTab: 'faq'
    }
  }
}
</script>
