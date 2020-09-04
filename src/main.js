import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './App.vue';
import Routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore } from './store'




Vue.config.productionTip = false;
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
