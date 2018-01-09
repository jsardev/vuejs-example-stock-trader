export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items(state, getters, rootState, rootGetters) {
      return state.items.map(item => ({
        ...item,
        price: rootGetters['stock/getPriceByName'](item.name)
      }));
    }
  },
  mutations: {
    buy(state, { name, quantity, price }) {
      const asset = state.items.find(asset => asset.name === name);

      if (asset) {
        asset.quantity += quantity;
      } else {
        state.items.push({ name, quantity });
      }
    },
    sell(state, { name, quantity, price }) {
      const asset = state.items.find(asset => asset.name === name);
      const assetQuantity = asset.quantity - quantity;

      if (assetQuantity === 0) {
        const assetIndex = state.items.indexOf(asset);
        state.items.splice(assetIndex, 1);
      } else {
        asset.quantity = assetQuantity;
      }
    }
  }
};
