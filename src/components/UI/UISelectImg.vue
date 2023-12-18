<template>
  <div>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="toggle()">
      <div class="selected_block">
        <div class="block">
          <div class="block_img"><img src="@/assets/user.gif" alt=""></div>
          <div class="block_text">
            <span>{{ label }}</span>
            <span class="block_text-value"> {{ selected }}</span>
          </div>
        </div>
        <div class="btn">{{ open ? '&ndash;' : '+' }}</div>
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'ui-select-img',
  props: {
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
    label: {
      type: String
    }
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
  line-height: 16px;
  font-size: 14px;
}
.selected {
  border-radius: 6px;
  border: 1px solid rgba(123, 97, 255, 0.3);
  color: var(--color-grey);
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
}
.selected.open {
  border: 1px solid var(--color-blu);
  border-radius: 6px 6px 0px 0px;
}
.selected_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.items {
  color: var(--color-grey);
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid var(--color-blu);
  border-left: 1px solid var(--color-blu);
  border-bottom: 1px solid var(--color-blu);
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}
.block {
  display: flex;
  justify-content: space-between;
}
.block_img img {
  width: 30px;
}
.block_text {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-size: 13px;
}
.block_text-value {
  color: var(--color-dark);
}
.btn {
  font-size: 30px;
  color:var(--color-blu);
}
.option {
  color: var(--color-grey);
  padding: 16px;
  cursor: pointer;
  user-select: none;
}
.option:hover {
  background-color: var(--color-blu);
}
.selectHide {
  display: none;
}
</style>
