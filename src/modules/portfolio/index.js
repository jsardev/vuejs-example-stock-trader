import getters from './getters';
import mutations from './mutations';

import Portfolio from './components/Portfolio';

const defaultState = {
  items: []
};

const module = {
  namespaced: true,
  state: defaultState,
  getters,
  mutations
};

export {
  module as default,
  Portfolio
}
