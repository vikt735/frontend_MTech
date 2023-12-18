<template>
  <div class="home">
    <ui-button
      @click="showDialog"
      >
      Создать</ui-button>
    </div>

    <ui-modal v-model:show="dialogVisible">
      <create-form
      formType="user"
      header='Создать user'
      employeeSelectionField 
      managerSelectionField
      betSelectionField
      businessUnitSelectionField
      percentageInputField
      positionEntryField
      typeGrid='column'
      :employee="['Повов А.А.', 'Дуров К.Р.']"
      :director="['Маслов А.Ф.', 'Туркова Е. А.']"
      :betType="['повременная', 'часовая']"
      :businessUnit="['MVM', 'MTech']"
      >
    </create-form>
        
    </ui-modal>
</template>

<script>

export default {
  name: 'home-view',
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
