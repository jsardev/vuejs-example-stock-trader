import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  state: {
    funds: 10000,
    // TODO: replace this with generated data
    portfolio: [
      { name: 'Apple', quantity: 10, price: 25 },
      { name: 'Microsoft', quantity: 10, price: 15 },
      { name: 'Oracle', quantity: 10, price: 50 }
    ],
    stocks: []
  },
  mutations: {
    buy(state, payload) {
      const asset = state.portfolio.find(asset => asset.name === payload.name);
      const cost = asset.price * payload.quantity;

      asset.quantity += payload.quantity;
      state.funds -= cost;
    },
    sell(state, payload) {
      const asset = state.portfolio.find(asset => asset.name === payload.name);
      const cost = asset.price * payload.quantity;

      asset.quantity -= payload.quantity;
      state.funds += cost;
    }
  },
  actions: {
    buy: ({ commit }, action) => commit('buy', action),
    sell: ({ commit }, action) => commit('sell', action)
  }
});
