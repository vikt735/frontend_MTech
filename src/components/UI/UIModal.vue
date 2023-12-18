<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import showDialogMixin from "@/mixins/showDialogMixin";
export default {
  name: 'ui-modal',
  mixins: [showDialogMixin]
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog_content {
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 12px;
  min-height: 150px;
  min-width: 280px;
  padding: 30px;
  @media (min-width: 768px) {
    min-width: 450px;
    max-width: 950px;
  }
}
</style>