<template>
  <div class="h-full">
    <header-component></header-component>
    <form-component></form-component>
    <help-modal></help-modal>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FormComponent from './components/FormComponent.vue'
import HelpModal from './components/HelpModal.vue';

export default {
  name: 'App',
  components: {
    FormComponent,
    HeaderComponent,
    HelpModal
  }
}
</script>

