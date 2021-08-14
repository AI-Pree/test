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
import Header from '@/components/Index/Header'
import Future from '@/components/Index/Future'
import DefiFeatures from '@/components/Index/DefiFeatures'
import Hgen from '@/components/Index/Hgen'
import Gens from '@/components/Index/Gens'
import Statistic from '@/components/Index/Statistic'
import Roadmap from '@/components/Index/Roadmap'
import Advisors from '@/components/Index/Advisors'

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
