import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import portfolio from './modules/portfolio';
import stock from './modules/stock';
import persistence from './modules/persistence';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  modules: {
    app,
    portfolio,
    stock,
    persistence
  }
});
