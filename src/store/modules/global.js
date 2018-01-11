export default {
  namespaced: true,
  state: {
    day: 1,
    funds: 10000
  },
  mutations: {
    state(state, newState) {
      state = Object.assign(state, newState);
    },
    buy(state, cost) {
      state.funds -= cost;
    },
    sell(state, revenue) {
      state.funds += revenue;
    },
    endday(state) {
      state.day++;
    }
  },
  actions: {
    endday: ({ commit }) => {
      commit('endday');
      commit('stock/endday', null, { root: true });
    }
  }
};
