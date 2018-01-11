import random from 'lodash/random';
import capitalize from 'lodash/capitalize';
import randomWords from 'random-words';

export default {
  state(state, newState) {
    state = Object.assign(state, newState);
  },
  generate(state) {
    state.items = randomWords(10).map(name => ({
      name: capitalize(name),
      price: random(15, 100)
    }));
    state.initialized = true;
  },
  endday(state) {
    state.items = state.items.map(stock => ({
      ...stock,
      price: random(15, 100)
    }));
  }
};
