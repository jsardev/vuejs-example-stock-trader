import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const defaultState = {
  // TODO: replace this with generated data
  items: [
    { name: 'Apple', price: 25 },
    { name: 'Microsoft', price: 15 },
    { name: 'Oracle', price: 50 }
  ]
};

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  getters,
  actions
};
