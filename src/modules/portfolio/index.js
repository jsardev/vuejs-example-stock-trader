import getters from './getters';
import mutations from './mutations';

const defaultState = {
  items: []
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations
};
