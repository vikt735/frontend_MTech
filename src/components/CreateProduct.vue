<template>
    <form @submit="submit" class="create-form">
      <ui-grid :typeGrid="typeGrid">
        <ui-grid-item v-if="fieldManager">
          <ui-select-img 
          :options="managers" 
          :label="'Менеджер'" 
          :default="product.manager" 
          @input="selectManager" />
        </ui-grid-item >
        <ui-grid-item v-if="fieldNameProduct" >
          <ui-input 
            placeholder='Название продукта' 
            v-model="product.nameProduct"/>
        </ui-grid-item>
        <ui-grid-item v-if="fieldURL">
          <ui-input 
            placeholder='Ссылка в Jira' 
            v-model="product.url" />
        </ui-grid-item>
        <ui-grid-item v-if="fieldDomain">
          <ui-select 
          :options="domains" 
          :default="product.domain" 
          @input="selectDomain"
          />
        </ui-grid-item>
      </ui-grid>
      <div class="btn"> 
        <ui-button type="submit" @submit="formSubmit">Создать</ui-button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'create-product',
  data() {
    return { 
      product: {
        manager: 'Нет пользователь',
        nameProduct: '',
        url: '',
        domain: 'Домен',
      }
    }
  },
  props: {
    typeGrid: {
      type: String,
      default: 'list'
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
    url: {
      type: String
    }
  },
  methods: {
    selectManager(option){
      this.product.manager = option
    },
    selectDomain(option){
      this.product.domain = option
    },
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios.post(this.url, this.product)
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
</style>