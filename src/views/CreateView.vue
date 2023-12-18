<template>
  <div>
    <ui-button
      @click="showDialog"
      >
      Создать</ui-button>
    <ui-modal v-model:show="dialogVisible">
      <create-form 
        header='Создать продукт'
        formType='product'
        fieldManager
        fieldNameProduct 
        fieldURL
        fieldDomain
        typeGrid='list'
        :managers="['Маркин В. А.', 'Давыдов Н.Г.']"
        :domains="['https://www.fgdd.com/search', 'https://www.sdsds.com']">
      </create-form>
    </ui-modal>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
  setup() {
    
  },
}
</script>


<style scoped>

</style>