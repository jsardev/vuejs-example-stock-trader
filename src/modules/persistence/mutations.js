export default {
  state(state, newState) {
    state = Object.assign(state, newState);
  },
  invokeSaveModal(state) {
    state.save.showModal = true;
  },
  revokeSaveModal(state) {
    state.save.showModal = false;
  },
  saveStart(state) {
    state.save.inProgress = true;
  },
  saveEnd(state) {
    state.save.inProgress = false;
  },
  saveError(state) {
    state.save.inProgress = false;
  },
  invokeLoadModal(state) {
    state.load.showModal = true;
  },
  revokeLoadModal(state) {
    state.load.showModal = false;
  },
  loadStart(state) {
    state.load.inProgress = true;
  },
  loadEnd(state, data) {
    state.load.items = data
      .map(item => ({
        ...item,
        timestamp: new Date(item.timestamp).toLocaleString()
      }))
      .reverse();

    state.load.inProgress = false;
  },
  loadError(state) {
    state.load.inProgress = false;
  }
};
