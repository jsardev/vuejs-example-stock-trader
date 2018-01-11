import mutations from './mutations';
import actions from './actions';
import './api';

import PersistenceNavItem from './components/PersistenceNavItem';
import SaveModal from './components/SaveModal';
import LoadModal from './components/LoadModal';

const defaultState = {
  load: {
    items: [],
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

export { module as default, PersistenceNavItem, SaveModal, LoadModal };
