import Vue from 'vue';

export default {
  save(state) {
    return Vue.http.post('state.json', state);
  },
  load() {
    return Vue.http.get('state.json');
  }
};
