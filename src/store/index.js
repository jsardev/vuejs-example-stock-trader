import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  state: {
    funds: 10000,
    // TODO: replace this with generated data
    portfolio: [
      { name: 'Apple', quantity: 10 },
      { name: 'Microsoft', quantity: 10 },
      { name: 'Oracle', quantity: 10 }
    ],
    stocks: [
      { name: 'Apple', price: 25 },
      { name: 'Microsoft', price: 15 },
      { name: 'Oracle', price: 50 }
    ]
  },
  getters: {
    portfolio(state) {
      return state.portfolio.map(asset => ({
        ...asset,
        price: state.stocks.find(stock => stock.name === asset.name).price
      }));
    }
  },
  mutations: {
    buy(state, payload) {
      const asset = state.portfolio.find(asset => asset.name === payload.name);
      const stock = state.stocks.find(asset => asset.name === payload.name);

      const cost = stock.price * payload.quantity;

      asset.quantity += payload.quantity;
      state.funds -= cost;
    },
    sell(state, payload) {
      const asset = state.portfolio.find(asset => asset.name === payload.name);
      const stock = state.stocks.find(asset => asset.name === payload.name);

      const cost = stock.price * payload.quantity;

      asset.quantity -= payload.quantity;
      state.funds += cost;
    }
  },
  actions: {
    buy: ({ commit }, action) => commit('buy', action),
    sell: ({ commit }, action) => commit('sell', action)
  }
});
