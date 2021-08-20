<template>
  <div class="w-100 p-r">
    <div class="mb-1 f-white-200 fw-500">
      <label v-if="label !== ''">{{ label }}</label>
    </div>
    <div class="w-100 p-r textarea">
      <textarea
        :name="inputName"
      ></textarea>
    </div>
  </div>
</template>

<script>

const randomHash = () => Math.random().toString(36).substring(6)

export default {
  props: {
    value: { type: [String, Number, null], default: null },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  data() {
    return {
      inputName: ''
    }
  },
  created() {
    this.inputName = 'simple-input-' + randomHash()
  }
}
</script>

<style scoped>
.textarea textarea {
  width: 100%;
  padding: 20px 32px;
  background: #12112D;
  border-radius: 4px;
  color: #CF68FF;
  font-size: 16px;
  line-height: 19px;
  border: none;
  outline: none;
  resize: none;
  height: 150px;
}
.textarea textarea::placeholder {
  color: rgba(255, 255, 255, 0.1);
  font-size: 16px;
  line-height: 19px;
}
</style>