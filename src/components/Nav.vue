<template>
  <div id="top-nav">
    <div class="container">
      <div :class="['navbar', { open }]">
        <div class="text-right">
          <a href="#" class="navbar-toggler" @click.prevent.stop="toggle()">
            <img src="~/assets/icons/menu-toggler.svg" alt="" />
          </a>
        </div>
        <nav class="nav">
          <a href="#" class="navbar-close close" @click.prevent.stop="toggle()"></a>

          <div class="nav-links">
            <a href="#" class="nav-link">{{ $t('nav.dashboard') }}</a>
            <a href="#" class="nav-link">{{ $t('nav.participate') }}</a>
            <a href="#" class="nav-link">{{ $t('nav.beginners_guide') }}</a>
            <a href="#" class="nav-link">{{ $t('nav.documentation') }}</a>
            <a href="#" class="nav-link">{{ $t('nav.whitepaper') }}</a>
          </div>

          <div class="nav-actions">
            <Wallet />
            <LangDropdown />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      open: false
    }
  },

  methods: {
    toggle() {
      this.open = !this.open
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  display: block;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;

    &-links {
      @media (max-width: map-get($breakpoints, md)) {
        display: flex;
        flex-direction: column;
        margin-top: 2vw;
        margin-left: 0;
      }
      .nav-link {
        text-transform: uppercase;
        padding: 0.5rem 0.8rem;
        color: rgba($color: #fff, $alpha: 0.4);
        text-decoration: none;

        &:hover,
        &:focus {
          color: rgba($color: #fff, $alpha: 0.5);
        }
      }
    }

    &-actions {
      display: flex;
      margin-left: 2.5rem;

      & > *:last-child {
        margin-left: 0.5rem;
      }

      @media (max-width: map-get($breakpoints, md)) {
        margin-top: 2vw;
        margin-left: 0;
      }
    }
  }

  &-toggler {
    display: none;
    margin-top: 2rem;
  }

  &-close {
    display: none;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    &-toggler {
      display: inline-block;
    }

    &-close {
      display: block;
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 20px;
      height: 20px;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    .nav {
      flex-direction: column;
      position: absolute;
      top: -100%;
      right: 0;
      left: 0;
      z-index: 999;
      background-color: rgba($color: #161421, $alpha: 0.95);
      transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);

      .nav-actions {
        margin-top: 2rem;
      }
    }

    &.open {
      .nav {
        display: flex;
        top: 0;
      }
    }
  }
}
</style>
