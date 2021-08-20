<template>
  <div class="w-100 px-0-L px-4-M px-3-S px-3-XS m-0-auto">
    <div class="fw-700 f-white-200 fs-10 mb-5">Notification</div>
    <div class="d-f fd-r jc-sb mt-6">
      <div class="w-45 d-f fd-c">
        <Textarea label="Warning Message Template"/>
        <InputWithTopLabel label="Debit Ratio" inputLabel="81, 85, 90" class="mt-2"/>
        <div class="d-f fd-r jc-sb mt-2">
          <div class="w-45">
            <AmButton color="mcolor-200" bColor="mcolor-100" colorText="mcolor-300" opacityEffect :full="true">
              REMOVE
            </AmButton>
          </div>
          <div class="w-45">
            <AmButton color="mcolor-100" opacityEffect scaleEffect :full="true">
              Confirm
            </AmButton>
          </div>
        </div>
      </div>
      <div class="w-45 d-f fd-c">
        <Textarea label="Liquidation Message Template"/>
        <InputWithTopLabel label="Debit Ratio" inputLabel="81, 85, 90" class="mt-2"/>
        <div class="d-f fd-r jc-sb mt-2">
          <div class="w-45">
            <AmButton color="mcolor-200" bColor="mcolor-100" colorText="mcolor-300" opacityEffect :full="true">
              REMOVE
            </AmButton>
          </div>
          <div class="w-45">
            <AmButton color="mcolor-100" opacityEffect scaleEffect :full="true">
              Confirm
            </AmButton>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 mt-6">
      <AmButton color="mcolor-100" opacityEffect scaleEffect :full="true">
        Confirm
      </AmButton>
    </div>
  </div>
</template>

<script>
import Textarea from '@/components/common/form-elements/input-text/Textarea.vue'
import InputWithTopLabel from '@/components/common/form-elements/input-text/InputWithTopLabel.vue'
import SimpleRadio from '@/components/common/form-elements/input-select/SimpleRadio.vue'

export default {
  components: {
    Textarea,
    InputWithTopLabel,
    SimpleRadio
  }
}
</script>