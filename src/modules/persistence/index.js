import mutations from './mutations';
import actions from './actions';

const defaultState = {
  items: [],
  load: {
    inProgress: false,
    showModal: false
  },
  save: {
    inProgress: false,
    showModal: false
  }
};

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};
