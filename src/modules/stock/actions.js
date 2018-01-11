export default {
  // TODO: handle this duplication
  generateData: ({ commit }) => commit('generate'),
  buy: ({ commit, dispatch, getters }, { name, quantity }) => {
    const asset = getters.getByName(name);

    dispatch('app/buy', { ...asset, quantity }, { root: true });
    commit('portfolio/buy', { ...asset, quantity }, { root: true });
  },
  sell: ({ commit, dispatch, getters }, { name, quantity }) => {
    const asset = getters.getByName(name);

    dispatch('app/sell', { ...asset, quantity }, { root: true });
    commit('portfolio/sell', { ...asset, quantity }, { root: true });
  }
};
