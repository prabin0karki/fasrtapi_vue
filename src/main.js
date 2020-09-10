import Vue from 'vue';
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue';
import Routes from './router';


import { createStore } from './store'




Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

const store = createStore();

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
