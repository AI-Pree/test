<template>
  <div :class="['dropdown', { open }]">
    <a class="btn btn-opacity-primary dropdown-toggle" style="color: #fff" href="#" @click.prevent="toggle()">
      {{ $t('currentLang') }}
    </a>

    <ul class="dropdown-menu">
      <li>
        <NuxtLink class="dropdown-item" :to="switchLocalePath('en')">English</NuxtLink>
      </li>
      <li>
        <NuxtLink class="dropdown-item" :to="switchLocalePath('kr')">한국어</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },

  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style>
  .dropdown {
    margin-left: 0.5rem;
  }
</style>
