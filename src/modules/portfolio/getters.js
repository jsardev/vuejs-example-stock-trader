export default {
  items(state, getters, rootState, rootGetters) {
    return state.items.map(item => ({
      ...item,
      price: rootGetters['stock/getPriceByName'](item.name)
    }));
  }
};
