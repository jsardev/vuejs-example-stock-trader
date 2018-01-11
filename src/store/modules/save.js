import pick from 'lodash/pick';
import api from '../api';

export default {
  namespaced: true,
  state: {
    loading: {
      items: [],
      inProgress: false,
      showModal: false
    },
    saving: {
      inProgress: false,
      showModal: false
    }
  },
  mutations: {
    state(state, newState) {
      state = Object.assign(state, newState);
    },
    invokeSaveModal(state) {
      state.saving.showModal = true;
    },
    revokeSaveModal(state) {
      state.saving.showModal = false;
    },
    saveStart(state) {
      state.saving.inProgress = true;
    },
    saveEnd(state) {
      state.saving.inProgress = false;
    },
    saveError(state) {
      state.saving.inProgress = false;
    },
    invokeLoadModal(state) {
      state.loading.showModal = true;
    },
    revokeLoadModal(state) {
      state.loading.showModal = false;
    },
    loadStart(state) {
      state.loading.inProgress = true;
    },
    loadEnd(state, data) {
      state.loading.items = data
        .map(item => ({
          ...item,
          timestamp: new Date(item.timestamp).toLocaleString()
        }))
        .reverse();

      state.loading.inProgress = false;
    },
    loadError(state) {
      state.loading.inProgress = false;
    }
  },
  actions: {
    invokeSaveModal: ({ commit }) => commit('invokeSaveModal'),
    save: ({ rootState, commit }, name) => {
      commit('saveStart');

      const stateToSave = {
        name,
        timestamp: Date.now(),
        state: pick(rootState, ['global', 'stock', 'portfolio'])
      };

      return api
        .save(stateToSave)
        .then(response => response.json())
        .then(() => {
          commit('saveEnd');
          commit('revokeSaveModal');
        })
        .catch(() => commit('saveError'));
    },
    cancelSave: ({ commit }) => {
      commit('revokeSaveModal');
    },
    invokeLoadModal: ({ commit }) => {
      commit('loadStart');

      return api
        .load()
        .then(response => response.json())
        .then(data => {
          commit('loadEnd', Object.values(data));
          commit('invokeLoadModal');
        })
        .catch(() => commit('loadError'));
    },
    load: ({ commit }, { state }) => {
      Object.keys(state).forEach(key => {
        commit(`${key}/state`, state[key], { root: true });
      });
      commit('revokeLoadModal');
    },
    cancelLoad: ({ commit }) => {
      commit('revokeLoadModal');
    }
  }
};
