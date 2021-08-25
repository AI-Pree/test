<template>
  <div class="container pt-10 px-0-L px-4-M px-3-S px-3-XS">
    <div class="w-100 f-white-200 tt-u fs-19-M fs-15-S fs-8-XS fw-600 ta-c">
      (logo) (company_name) helps your FAMILY
    </div>
    <div class="w-100 gradient tt-u fs-20-M fs-18-S fs-9-XS fw-900 ta-c pt-8-S pt-4-XS">
      $ {{ getTotal }}
    </div>
    <div class="w-100 f-gray-400 ta-c fs-8-M fs-7-S fs-6-XS pt-6-S pt-2-XS fw-500">
      Total Deposited Value at HGEN
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getTotal () {
      let res = '000000000000'
      const total = this.$accessor.totalDeposit
      if (total) {
        res = res.substr(0, res.length - total.toString().length) + total
      }
      return res.toString().replace(/(.)(?=(\d{3})+$)/g,'$1.')
    }
  }
}
</script>
