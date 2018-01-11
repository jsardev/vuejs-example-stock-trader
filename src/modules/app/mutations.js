export default {
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
};
