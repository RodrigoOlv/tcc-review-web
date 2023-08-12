<template>
  <div class="h-full">
    <header-component></header-component>
    <form-component></form-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'App',
  components: {
    FormComponent,
    HeaderComponent
  }
}
</script>

