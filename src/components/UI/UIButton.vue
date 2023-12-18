<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button'
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgba(123, 97, 255, 0.8);
  border: 1px solid rgba(123, 97, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(233, 233, 233, 1);
  }
}
</style>