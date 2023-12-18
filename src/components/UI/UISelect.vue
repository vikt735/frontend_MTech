<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="toggle()">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        class="option"
        v-for="(option, i) of options"
        :key="i"
        @click="select(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-select',
  props: {
    modelValue: [String, Number],
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods: {
    select(option){
      this.selected = option;
      this.open = false;
      this.$emit('input', option);
    },
    toggle(){
      this.open = !this.open
    }
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  font-size: 14px;
}

.selected {
  border-radius: 6px;
  border: 1px solid rgba(123, 97, 255, 0.3);
  color: var(--color-grey);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.selected.open {
  border: 1px solid var(--color-blu);
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--color-grey) transparent transparent transparent;
}

.items {
  color: var(--color-grey);
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid var(--color-blu);
  border-left: 1px solid var(--color-blu);
  border-bottom: 1px solid var(--color-blu);
  position: absolute;
  background: rgba(255, 255, 255, 1);
  left: 0;
  right: 0;
  z-index: 1;
}
.option {
  color: var(--color-grey);
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
}
.option:hover {
  background-color: rgba(123, 97, 255, 0.5);
}

.selectHide {
  display: none;
}
</style>
