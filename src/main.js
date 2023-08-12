import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap';

import './assets/custom.scss';

const app = createApp(App);

// Configuração global do Axios
app.config.globalProperties.$http = axios;

app.mount('#app');
