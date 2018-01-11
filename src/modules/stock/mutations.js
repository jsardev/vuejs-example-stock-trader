import random from 'lodash/random';

export default {
  state(state, newState) {
    state = Object.assign(state, newState);
  },
  endday(state) {
    state.items = state.items.map(stock => ({
      ...stock,
      price: random(15, 100)
    }));
  }
};
