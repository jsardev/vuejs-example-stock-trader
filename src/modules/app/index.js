import actions from './actions';
import mutations from './mutations';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Goal from './components/Goal';

const defaultState = {
  day: 1,
  funds: 10000,
  goal: 1000000
};

const module = {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};

export { module as default, Navigation, Home, Goal };
