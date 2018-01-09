import Vue from 'vue';
import Vuex from 'vuex';
import random from 'lodash/random';

Vue.use(Vuex);

// TODO: try to make this immutable
export default new Vuex.Store({
  state: {
    day: 1,
    funds: 10000,
    // TODO: replace this with generated data
    portfolio: [],
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
      const portfolioAsset = state.portfolio.find(asset => asset.name === payload.name);
      const stockAsset = state.stocks.find(stock => stock.name === payload.name);

      const cost = stockAsset.price * payload.quantity;

      if (portfolioAsset) {
        portfolioAsset.quantity += payload.quantity;
      } else {
        state.portfolio.push({
          name: stockAsset.name,
          quantity: payload.quantity
        });
      }

      state.funds -= cost;
    },
    sell(state, payload) {
      const portfolioAsset = state.portfolio.find(asset => asset.name === payload.name);
      const stockAsset = state.stocks.find(stock => stock.name === payload.name);

      const revenue = stockAsset.price * payload.quantity;

      if (portfolioAsset.quantity - payload.quantity === 0) {
        const assetIndex = state.portfolio.indexOf(portfolioAsset);
        state.portfolio.splice(assetIndex, 1);
      } else {
        portfolioAsset.quantity -= payload.quantity;
      }

      state.funds += revenue;
    },
    endDay(state) {
      state.day++;
      state.stocks = state.stocks.map(stock => ({
        ...stock,
        price: random(15, 100)
      }));
    }
  },
  actions: {
    buy: ({ commit }, action) => commit('buy', action),
    sell: ({ commit }, action) => commit('sell', action),
    endDay: ({ commit }) => commit('endDay')
  }
});
