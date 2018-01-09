import Vue from 'vue';
import Vuex from 'vuex';

import portfolio from './modules/portfolio';
import stock from './modules/stock';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  state: {
    day: 1,
    funds: 10000
  },
  mutations: {
    buy(state, cost) {
      state.funds -= cost;
    },
    sell(state, revenue) {
      state.funds += revenue;
    },
    endday(state) {
      state.day++;
    }
  },
  actions: {
    endday: ({ commit }) => {
      commit('endday');
      commit('stock/endday');
    }
  },
  modules: {
    portfolio,
    stock
  }
});
