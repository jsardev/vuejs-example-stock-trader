import actions from './actions';
import mutations from './mutations';

const defaultState = {
  day: 1,
  funds: 10000
};

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};
