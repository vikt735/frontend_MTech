<template>
  <div class="create-form">
    <h2>{{ header }}</h2>
    <div v-if="formType === 'user'">
      <create-user 
        :employeeSelectionField="employeeSelectionField"
        :managerSelectionField="managerSelectionField"
        :betSelectionField="betSelectionField"
        :businessUnitSelectionField="businessUnitSelectionField"
        :percentageInputField="percentageInputField"
        :positionEntryField="positionEntryField"
        :typeGrid="typeGrid"
        :employee="employee"
        :director="director"
        :betType="betType"
        :businessUnit="businessUnit"/>
    </div>
    <div v-else-if="formType === 'product'">
      <create-product 
        :typeGrid="typeGrid"
        :fieldManager="fieldManager"
        :fieldNameProduct="fieldNameProduct"
        :fieldURL="fieldURL"
        :fieldDomain="fieldDomain"
        :managers="managers"
        :domains="domains"
      />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'create-form',
  props: {
    header: String,
    typeGrid: {
      type: String,
      required: true,
      default: 'list'
    },
    formType: {
      type: String,
      required: true,
      default: 'user'
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
    fieldManager: {
      type: Boolean,
      default: false
    },
    fieldNameProduct: {
      type: Boolean,
      default: false
    },
    fieldURL: {
      type: Boolean,
      default: false
    },
    fieldDomain: {
      type: Boolean,
      default: false
    },
    managers: {
      type: Array,
      default: () => []
    },
    domains: {
      type: Array,
      default: () => []
    },
  },
  
}
</script>

<style lang="scss" scoped>

</style>