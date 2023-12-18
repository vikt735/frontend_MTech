<template>
  <div>
    <input 
    :type="type" 
    :value="modelValue"
    @input="updateInput" 
    class='input'  
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    box-sizing: border-box;
    padding: 16px 24px ;
    border: 1.5px solid rgb(233, 236, 239);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    color: rgb(118, 120, 125);
    width: 100%;
    max-width: 100%;
    outline: none;
    &:focus {
      background-color: rgba(123, 97, 255, 0.1);
    }
  }
</style>