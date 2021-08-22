<template>
  <div class="w-100 br-6 brs-s br-mcolor-100 p-6 rad-fix-8">
    <div class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4 ta-c-XS">
      Notification
    </div>
    <div class="w-100 mt-4 mb-2 mcolor-700 rad-fix-2 px-4 py-3">
      <div class="w-100 fs-5 f-gray-600 pb-1">
        email
      </div>
      <div class="w-100 fd-r ai-c">
        <div class="w-100 fs-7 fw-600 f-mcolor-300 br-0 oul-n" contenteditable>sa******@gmail.com</div>
      </div>
    </div>
    <div class="w-100">
      <AmCheckbox :update="false" :data="check" />
    </div>
    <div class="w-100 pt-8 fd-r jc-c">
      <AmButton color="mcolor-100" bColor="mcolor-100" opacityEffect @click="$emit('swapFunc')" :full="true">
        confirm
      </AmButton>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: {
        colorBorder: 'gray-500',
        colorTitle: 'gray-300',
        colorBackground: 'mcolor-400',
        colorBorderChecked: 'mcolor-300',
        colorBackgroundChecked: 'mcolor-300',
        title: 'Submit your email to receive liquidation warning message'
      }
    }
  }
}
</script>
