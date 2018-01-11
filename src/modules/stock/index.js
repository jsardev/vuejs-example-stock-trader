import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import Stocks from './components/Stocks';

const defaultState = {
  initialized: false,
  items: [
    { name: 'Apple', price: 25 },
    { name: 'Microsoft', price: 15 },
    { name: 'Oracle', price: 50 }
  ]
};

const module = {
  namespaced: true,
  state: defaultState,
  mutations,
  getters,
  actions
};

export { module as default, Stocks };
