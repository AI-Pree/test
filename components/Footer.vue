<template>
  <section class="footer">
    <div class="container">
      <div class="footer-row">
        <div class="footer-company">
          <h3>(logo) (company_name)</h3>
          <p>Copyright © 2021 (company_name) All rights reserved.</p>
        </div>
        <div class="footer-social">
          <a href="#">
            <img src="~/assets/icons/telegram.svg" alt="">
          </a>
          <a href="#">
            <img src="~/assets/icons/twitter.svg" alt="">
          </a>
          <a href="#">
            <img src="~/assets/icons/reddit.svg" alt="">
          </a>
          <a href="#">
            <img src="~/assets/icons/discord.svg" alt="">
          </a>
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
  .footer {
    padding: 7rem 0 1.5rem 0;

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-company {
      > h3 {
        margin-bottom: 0.5rem;
      }

      > p {
        color: rgba($color: #fff, $alpha: 0.5);
        font-size: 0.8rem;
        margin: 0;
      }
    }

    &-social {
      img {
        width: 20px;
        margin: 0 0.3rem;
        opacity: 0.4;
      }
    }

    @media (max-width: map-get($breakpoints, md)) {
      &-row {
        flex-direction: column;
        text-align: center;
      }

      &-company {
        margin-bottom: 1rem;
      }
    }
  }
</style>