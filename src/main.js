import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap';
import 'nicescroll';

import './assets/sass/custom.scss';

import nicescroll from './assets/js/nicescroll';

(($) => {
    $(() => {
        nicescroll();
    });
})(jQuery);

const app = createApp(App);

// Configuração global do Axios
app.config.globalProperties.$http = axios;

app.mount('#app');
