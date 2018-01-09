import random from 'lodash/random';

export default {
  namespaced: true,
  state: {
    // TODO: replace this with generated data
    items: [
      { name: 'Apple', price: 25 },
      { name: 'Microsoft', price: 15 },
      { name: 'Oracle', price: 50 }
    ]
  },
  mutations: {
    endday(state) {
      state.items = state.items.map(stock => ({
        ...stock,
        price: random(15, 100)
      }));
    }
  },
  getters: {
    getByName: state => name => {
      return state.items.find(item => item.name === name);
    },
    getPriceByName: (state, getters) => name => {
      return getters.getByName(name).price;
    }
  },
  actions: {
    // TODO: handle this duplication
    buy: ({ commit, getters }, { name, quantity }) => {
      const asset = getters.getByName(name);
      const cost = quantity * asset.price;

      commit('buy', cost, { root: true });
      commit('portfolio/buy', { ...asset, quantity }, { root: true });
    },
    sell: ({ commit, getters }, { name, quantity }) => {
      const asset = getters.getByName(name);
      const revenue = quantity * asset.price;

      commit('sell', revenue, { root: true });
      commit('portfolio/sell', { ...asset, quantity }, { root: true });
    }
  }
};
