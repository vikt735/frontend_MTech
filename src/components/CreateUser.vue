<template>
    <form @submit="submit" class="create-form">
      <ui-grid :typeGrid="typeGrid">
        <ui-grid-item v-if="employeeSelectionField">
          <ui-select-img 
          :options="employee" 
          :label="'Сотрудник'" 
          :default="user.employee"
          @input="selectEmployee"
          />
        </ui-grid-item>
        <ui-grid-item v-if="managerSelectionField">
          <ui-select-img 
          :options="director" 
          :label="'Руководитель'" 
          :default="user.director"
          @input="selectDirector"/>
        </ui-grid-item>
        <ui-grid-item v-if="betSelectionField">
          <ui-select 
          :options="betType" 
          :default="user.betType"  
          @input="selectBetType"
          />
        </ui-grid-item>
        <ui-grid-item v-if="businessUnitSelectionField">
          <ui-select 
          :options="businessUnit" 
          :default="user.businessUnit" 
          @input="selectbusinessUnit" 
          />
        </ui-grid-item>
        <ui-grid-item v-if="percentageInputField">
          <ui-input-number 
          :label="'Процент капитализации'" 
          v-model="user.percentage"  />
        </ui-grid-item>
        <ui-grid-item v-if="positionEntryField">
          <ui-input :placeholder="'Должность'" v-model="user.positionEntry" />
        </ui-grid-item>
        </ui-grid>
      <div class="btn"> 
        <ui-button>Отмена</ui-button>
        <ui-button type="submit" @submit="formSubmit">Создать</ui-button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'create-user',
  data() {
    return { 
      user: {
        employee: 'Нет пользователя',
        director: 'Нет пользователя',
        betType: 'Тип ставки',
        businessUnit: 'Бизнес единица',
        percentage: '',
        positionEntry: ''
      }
    }
  },
  props: {
    typeGrid: {
      type: String,
      default: 'list'
    },
    employee: {
      type: Array,
      default: () => []
    },
    director: {
      type: Array,
      default: () => []
    },
    betType: {
      type: Array,
      default: () => []
    },
    businessUnit : {
      type: Array,
      default: () => []
    },
    employeeSelectionField: {
      type: Boolean,
      default: false
    },
    managerSelectionField: {
      type: Boolean,
      default: false
    },
    betSelectionField: {
      type: Boolean,
      default: false
    },
    businessUnitSelectionField:  {
      type: Boolean,
      default: false
    },
    percentageInputField: {
      type: Boolean,
      default: false
    },
    positionEntryField: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectDirector(option){
      this.user.director = option
    },
    selectEmployee(option){
      this.user.employee = option
    },
    selectBetType(option){
      this.user.betType = option
    },
    selectbusinessUnit(option){
      this.user.businessUnit = option
    },
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios.post(this.url, this.user)
      .then(function (response) {
          currentObj.output = response.data;
      })
      .catch(function (error) {
          currentObj.output = error;
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: space-around;
}
</style>