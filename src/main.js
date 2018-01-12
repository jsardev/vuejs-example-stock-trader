import Vue from 'vue';
import VueRouter from 'vue-router';

import './directives';
import routes from './routes';
import store from './store';

import App from './App.vue';
import utils from './utils';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    const vm = this;
    utils.attachKeyboardShortcuts(vm);
  }
});
