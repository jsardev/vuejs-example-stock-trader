export default {
  state(state, newState) {
    state = Object.assign(state, newState);
  },
  decreaseFunds(state, amount) {
    state.funds -= amount;
  },
  increaseFunds(state, amount) {
    state.funds += amount;
  },
  updateProgress(state) {
    state.progress = state.funds / state.goal * 100;
  },
  endgame(state) {
    state.finished = true;
  },
  endday(state) {
    state.day++;
  },
  invokeHelpModal(state) {
    state.showHelpModal = true;
  },
  revokeHelpModal(state) {
    state.showHelpModal = false;
  }
};
