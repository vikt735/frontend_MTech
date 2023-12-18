<template>
  <div :class="typeGrid === 'column' ? typeGrid : grid" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-grid',
  props: {
    typeGrid: {
      type: String,
      required: true,
      default: 'list'
    },

  }
}
</script>

<style lang="scss" scoped>
.grid, .column {
    display: flex;
    gap: 10px;
}
.grid {
  flex-direction: column;
}
.column {
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>