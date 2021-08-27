<template>
  <span class="hint f-white-200">
    <label class="w-fix-s-12 h-fix-s-12 fd-r jc-c ai-c mcolor-100 rad-fix-2 fs-4 fw-400 ml-2 p-r">?</label>
    <span class="popup w-fix-100min w-100max shadow-purple-100 p-2 p-a l-0 t-100 fs-5 mcolor-500 rad-fix-3 fw-400 f-lh-13 z-15">
      <slot />
    </span>
  </span>
</template>

<style lang="scss" scoped>
.hint {
  .popup{
    transform: translate(-50%, 1rem);
    display: none;
  }
  &:hover label + .popup{
    display: block;
  }
}
</style>
