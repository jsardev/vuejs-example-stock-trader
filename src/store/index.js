import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';
import portfolio from './modules/portfolio';
import stock from './modules/stock';
import save from './modules/save';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  modules: {
    global,
    portfolio,
    stock,
    save
  }
});
