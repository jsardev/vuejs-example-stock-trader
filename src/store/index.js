import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
  }
});
