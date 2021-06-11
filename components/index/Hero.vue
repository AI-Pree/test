<template>
  <section>
    <div class="container">
      <div class="hero">
        <div class="hero-content">
          <h3>FUTURE ENERGY</h3>
          <p>We have a strong integrated solution to bring our world to DeFi online platform, greatly reduces risks and environmental pollution, and results in more reliable power through the utilization of existing engineering art. </p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary">Join Telegram</a>
            <a href="#" class="btn btn-opacity-primary">HGEN story on Medium</a>
          </div>
        </div>
        <img src="~/assets/images/hero.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    min-height: 400px;
    padding: 4rem;
    background: linear-gradient(100.8deg, rgba(255, 255, 255, 0.11) 1.43%, rgba(255, 255, 255, 0) 101.28%);
    border: solid 1px rgba($color: #fff, $alpha: 0.2);
    border-radius: 3.5rem;

    &-content {
      width: 40%;

      > h3 {
        font-size: 2rem;
      }

      > p {
        color: $text-gray;
      }
    }

    > img {
      position: absolute;
      right: 0;
      top: -140px;
      max-width: 570px;
    }

    &-actions {
      margin-top: 2rem;

      > * {
        margin-bottom: 1rem;
        
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }

    @media (max-width: map-get($breakpoints, lg)) {
      > img {
        max-width: 420px;
        top: -100px;
        right: -30px;
      }
    }

    @media (max-width: map-get($breakpoints, md)) {
      padding: 2rem;

      &-content {
        width: 100%;
      }

      > img {
        position: static;
        max-width: 100%;
        margin-bottom: -80px;
      }
    }
  }
</style>
