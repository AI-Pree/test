<template>
  <section class="roadmap">
    <div class="container">
      <div class="roadmap-content">
        <h3 class="section-title">Roadmap</h3>
        <p class="text-gray">
          We have a strong integrated solution to bring our world to DeFi online platform, greatly reduces risks and environmental pollution, and results in more reliable power through the utilization of existing engineering art.
        </p>
      </div>
      <div class="roadmap-steps">
        <div class="roadmap-step active">
          <img src="~assets/images/roadmap-step-1.png" alt="">
          <h3 class="roadmap-step-title">Step 1</h3>
          <p class="roadmap-step-desc">
            We have a strong integrated solution to bring our world to DeFi online platform, greatly reduces risks.
          </p>
        </div>
        <div class="roadmap-step">
          <img src="~assets/images/roadmap-step-2.png" alt="">
          <h3 class="roadmap-step-title">Step 2</h3>
          <p class="roadmap-step-desc">
            We have a strong integrated solution to bring our world to DeFi online platform, greatly reduces risks.
          </p>
        </div>
        <div class="roadmap-step">
          <img src="~assets/images/roadmap-step-3.png" alt="">
          <h3 class="roadmap-step-title">Step 3</h3>
          <p class="roadmap-step-desc">
            We have a strong integrated solution to bring our world to DeFi online platform, greatly reduces risks.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .roadmap {
    padding: 4rem 0;

    .container {
      display: flex;
    }

    &-content {
      width: 30%;
      padding-right: 2.5rem;

      .section-title {
        text-align: left;
      }
    }

    &-steps {
      width: 70%;
      display: flex;
      background: linear-gradient(100.8deg, rgba(255, 255, 255, 0.11) 1.43%, rgba(255, 255, 255, 0) 101.28%);
      border-radius: 14px;
    }

    &-step {
      position: relative;
      width: 33.33%;
      border-radius: 14px;
      padding: 2rem;

      &.active {
        background: #151433;
        box-shadow: 0 0 10px #8F00FF;
        border-radius: 14px;
      }

      > img {
        position: absolute;
        width: 85px;
        top: -10px;
        right: 15px;
      }

      > p {
        font-size: 0.8rem;
      }
    }

    @media (max-width: map-get($breakpoints, lg)) {
      .container {
        flex-wrap: wrap;
      }

      &-content, &-steps {
        width: 100%;
      }

      &-content {
        text-align: center;
        margin-bottom: 2rem;

        .section-title {
          text-align: center;
        }
      }
    }

    @media (max-width: map-get($breakpoints, md)) {
      &-steps {
        flex-direction: column;
      }

      &-step {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
</style>
