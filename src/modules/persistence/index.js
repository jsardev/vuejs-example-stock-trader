import mutations from './mutations';
import actions from './actions';

import PersistenceNavItem from './components/PersistenceNavItem';

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

const module = {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};

export { module as default, PersistenceNavItem };
