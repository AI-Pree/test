<template>
  <div>
    <!--    <img src="~/assets/images/top-right.png" alt="" class="top-right-bg" />-->
    <Nav />
    <Setting />
    <Nuxt />
    <Footer />
    <!--    <img src="~/assets/images/footer-bg.png" alt="" class="footer-bg" />-->
  </div>
</template>

<style lang="scss" scoped>
.top-right-bg {
  max-width: 500px;
  position: absolute;
  top: -50px;
  right: -40px;
  z-index: -1;
}

.footer-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
