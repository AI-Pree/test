<template>
  <div class="w-100 fd-c ai-c py-6">
    <Header />
    <Future />
    <DefiFeatures />
    <Hgen />
    <Statistic />
    <Gens />
    <Roadmap />
    <Advisors />
  </div>
</template>

<script>
import Header from '@/components/HomeScreen/Header'
import Future from '@/components/HomeScreen/Future'
import DefiFeatures from '@/components/HomeScreen/DefiFeatures'
import Hgen from '@/components/HomeScreen/Hgen'
import Gens from '@/components/HomeScreen/Gens'
import Statistic from '@/components/HomeScreen/Statistic'
import Roadmap from '@/components/HomeScreen/Roadmap'
import Advisors from '@/components/HomeScreen/Advisors'

export default {
  components: {
    Header,
    Future,
    DefiFeatures,
    Hgen,
    Gens,
    Statistic,
    Roadmap,
    Advisors
  }
}
</script>
