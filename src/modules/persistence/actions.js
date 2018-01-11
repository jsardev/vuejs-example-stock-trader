import pick from 'lodash/pick';
import api from './api';

export default {
  invokeSaveModal: ({ commit }) => commit('invokeSaveModal'),
  save: ({ rootState, commit }, name) => {
    commit('saveStart');

    const stateToSave = {
      name,
      timestamp: Date.now(),
      state: pick(rootState, ['app', 'stock', 'portfolio'])
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
};
