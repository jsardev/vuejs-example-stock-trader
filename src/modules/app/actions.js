export default {
  endday: ({ commit }) => {
    commit('endday');
    commit('stock/endday', null, { root: true });
  }
};
