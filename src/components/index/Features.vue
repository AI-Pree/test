<template>
  <section class="features">
    <div class="container">
      <h3 class="section-title">DEFi FEATURES</h3>
      <div class="feature-items">
        <div class="feature-item">
          <div class="feature-item-icon">
            <img src="~/assets/icons/creditor.svg" alt="">
          </div>
          <h5 class="feature-item-title">Borrowing</h5>
          <p class="feature-item-desc">Get an interes-free loan</p>
        </div>
        <div class="feature-item">
          <div class="feature-item-icon">
            <img src="~/assets/icons/creditor.svg" alt="">
          </div>
          <h5 class="feature-item-title">Liquidity Pool</h5>
          <p class="feature-item-desc">Fund to earn transaction fees profit.</p>
        </div>
        <div class="feature-item">
          <div class="feature-item-icon">
            <img src="~/assets/icons/creditor.svg" alt="">
          </div>
          <h5 class="feature-item-title">Staking</h5>
          <p class="feature-item-desc">xxxxxxxxxxxxxxxx</p>
        </div>
        <div class="feature-item">
          <div class="feature-item-icon">
            <img src="~/assets/icons/creditor.svg" alt="">
          </div>
          <h5 class="feature-item-title">Farming</h5>
          <p class="feature-item-desc">xxxxxxxxxxxxxxxx</p>
        </div>
      </div>

      <div class="text-center">
        <a href="#" class="btn btn-primary">Beginner’s Guide to DeFi</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .features {
    padding-top: 6rem;
    padding-bottom: 6rem;

    .feature-items {
      margin-top: 3.5rem;
      display: flex;
      flex-wrap: wrap;

      .feature-item {
        margin-bottom: 3rem;
        text-align: center;
        flex: 1 1 25%;

        @media (max-width: map-get($breakpoints, lg)) {
          flex: 1 1 50%;
        }

        &-icon {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          padding: 1rem;
          background: #14143A;
          border: 1px solid #A634FF;
          box-sizing: border-box;
          box-shadow: 0 0 10px #B556FF;
          border-radius: 8px;

          img {
            width: 70px;
          }

          @media (max-width: map-get($breakpoints, sm)) {
            width: 120px;
            height: 120px;
          }
        }

        &-title {
          font-size: 1.4rem;
          margin-top: 2rem;
        }

        &-desc {
          color: $text-gray;
        }
      }
    }
  }
</style>
