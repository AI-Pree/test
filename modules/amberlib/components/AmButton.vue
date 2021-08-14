<template>
  <div class="w-a-M w-100-S w-100-XS d-ib tt-u rad-fix-2 shadow-purple-100 amButton br-4 brs-s" :class="[color, `f-${colorText}`, `br-${bColor}`, {opacity: opacityEffect, scale: scaleEffect}]">
    <span class="w-100 h-100 p-a l-0 t-0 amButtonHover" :class="[colorHover, `f-${colorTextHover}`]" v-if="hover" />
    <nuxt-link :to="to" v-if="to" class="w-a-M w-100-S w-100-XS d-f ai-c jc-c ta-c h-fix-25min px-8 py-2 fs-5 fw-500 z-2">
      <span v-if="label">
        {{ label }}
      </span>
      <span v-else>
        <slot />
      </span>
    </nuxt-link>
    <a :href="link" v-else-if="link" class="w-a-M w-100-S w-100-XS d-f ai-c jc-c ta-c h-fix-25min px-8 py-2 fs-5 fw-500 z-2">
      <span v-if="label">
        {{ label }}
      </span>
      <span v-else>
        <slot />
      </span>
    </a>
    <span class="w-a-M w-100-S w-100-XS d-f ai-c jc-c ta-c h-fix-25min px-6 py-2 fs-5 fw-500 z-2" v-else @click="$emit('click')" :class="getHover">
      <span v-if="label">
        {{ label }}
      </span>
      <span v-else>
        <slot />
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    colorText: {type: String, default: 'white-200'},
    color: {type: String, default: 'purple-700'},
    bColor: {type: String, default: 'purple-700'},
    hover: {type: Boolean, default: false},
    colorTextHover: {type: String, default: 'white-200'},
    colorHover: {type: String, default: 'purple-700'},
    label: {type: String, default: null},
    to: {type: String, default: null},
    link: {type: String, default: null},
    opacityEffect: {type: Boolean, default: false},
    scaleEffect: {type: Boolean, default: false}
  },
  computed: {
    getHover () {
      return this.hover ? `f-${this.colorTextHover}` : null
    }
  }
}
</script>

<style lang="scss" scoped>
.amButton{
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  .amButtonHover {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover{
    &.opacity {
      opacity: 0.8;
    }
    &.scale {
      transform: scale(0.98);
    }
    .amButtonHover {
      opacity: 1;
    }
  }
}
</style>
