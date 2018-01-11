export default {
  // TODO: handle this duplication
  buy: ({ commit, getters }, { name, quantity }) => {
    const asset = getters.getByName(name);
    const cost = quantity * asset.price;

    commit('app/buy', cost, { root: true });
    commit('portfolio/buy', { ...asset, quantity }, { root: true });
  },
  sell: ({ commit, getters }, { name, quantity }) => {
    const asset = getters.getByName(name);
    const revenue = quantity * asset.price;

    commit('app/sell', revenue, { root: true });
    commit('portfolio/sell', { ...asset, quantity }, { root: true });
  }
};
