import actions from './actions';
import mutations from './mutations';

import Home from './components/Home';
import End from './components/End';
import Navigation from './components/Navigation';
import Goal from './components/Goal';
import HelpModal from './components/HelpModal';

const defaultState = {
  day: 1,
  funds: 10000,
  goal: 1000000,
  progress: 1,
  finished: false,
  showHelpModal: false
};

const module = {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};

export { module as default, Navigation, Home, Goal, End, HelpModal };
