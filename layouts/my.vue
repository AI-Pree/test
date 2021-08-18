<template>
  <div class="w-100 h-100min">
    <div class="w-100 h-100min p-f l-0 t-0 ovh-y-a bg-r" />
    <Menu />
    <div class="w-100 fd-r jc-c pt-10">
      <div class="container fd-r">
        <div class="w-20 d-f-L d-n-S d-n-XS">
          <Sidebar class="r-fix-s-15" />
        </div>
        <div class="w-85-L w-100-S w-100-XS mcolor rad-fix-10 p-8-M p-3-S p-3-XS swap-bg">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
}
</script>
