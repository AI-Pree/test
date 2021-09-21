<template>
  <div class="container pt-10-S pt-40-XS">
    <div class="w-100 f-white-200 tt-u fs-14-S fs-25-XS fw-600 ta-c px-10-XS">
      (logo) (company_name) helps your FAMILY
    </div>
    <div class="w-100 gradient tt-u fs-13-S fs-30-XS fw-900 ta-c pt-4-S pt-15-XS">
      $ {{ getTotal }}
    </div>
    <div class="w-100 f-gray-400 ta-c fs-6-S fs-15-XS fw-500 pt-2-S pt-10-XS">
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
      return res.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')
    }
  }
}
</script>
