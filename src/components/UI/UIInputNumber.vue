<template>
  <div class="input_block">
    <label class="label">{{ label }}</label>
    <input 
    type="number" 
    :value="modelValue"
    @input="updateInput" 
    class='input'  
    min="0" 
    max="100">
  </div>
</template>

<script>
export default {
  name: 'ui-input-number',
  props: {
    modelValue: [Number, String],
    label: {
      type: String
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    
  }
}
</script>

<style lang="scss" scoped>
.input_block {
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1.5px solid rgb(233, 236, 239);
  border-radius: 8px;
  padding: 10px 24px ;
}
  .input {
    box-sizing: border-box;
    border: none;
    background: rgb(255, 255, 255);
    color: rgb(118, 120, 125);
    width: 100%;
    max-width: 100%;
    outline: none;
    @media (min-width: 768px) {
  
    }
  }
  .label {
    font-size: 14px;
    margin-bottom: 5px;
    color: var(--color-grey);
  }
</style>
