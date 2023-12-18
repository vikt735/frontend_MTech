<template>
  <div class="grid_item">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-grid-item',
}
</script>

<style lang="scss" scoped>
.grid_item {
  margin-bottom: 15px;
  width: 450px;
}
</style>