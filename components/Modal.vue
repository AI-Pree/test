<template>
  <transition name="fade">
    <div v-if="show" class="modal">
      <div class="modal-backdrop" @click="closeModal()"></div>

      <div class="modal-dialog">
        <div class="modal-header">
          <span class="modal-close close" @click="closeModal()"></span>
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    openModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  &-backdrop {
    background-color: rgba($color: #000000, $alpha: 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &-dialog {
    background-color: rgba($color: #000000, $alpha: 0.95);
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    z-index: 2;

    @media (max-width: map-get($breakpoints, md)) {
      width: 90%;
    }
  }

  &-header {
    position: relative;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &-close {
    position: absolute;
    top: 1rem;
    right: 2.3rem;
  }

  &-body {
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &-footer {
    padding: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
