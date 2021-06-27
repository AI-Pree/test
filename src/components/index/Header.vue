<template>
  <section class="header">
    <div class="container">
      <h2 class="section-title">(logo) NEXFIN helps your FAMILY</h2>
      <div class="total-deposited">
        <h3>$ 000.000.000.000</h3>
        <p>Total Deposited Value at HGEN</p>
      </div>
      <div class="launch-app">
        <a href="/swap" class="btn btn-primary">
          Launch App
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 1rem 0;
  }

  .total-deposited {
    margin-bottom: 2rem;
    text-align: center;

    h3 {
      display: inline-block;
      font-size: 2.3rem;
      text-align: center;
      background: linear-gradient(90deg, #00FFF0 0%, #A900FF 100%);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }

    p {
      color: $text-gray;
      font-weight: 700;
      font-size: 1.1rem;
    }

    @media (max-width: map-get($breakpoints, sm)) {
      h3 {
        font-size: 1.8rem;
      }
    }
  }

  .launch-app {
    margin-bottom: 4rem;
    text-align: center;
  }
</style>
