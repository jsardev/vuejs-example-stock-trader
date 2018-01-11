import Vue from 'vue';

const isActiveElementAnInput = () => document.activeElement.tagName === 'INPUT';

Vue.directive('focus', {
  inserted(el) {
    if (!isActiveElementAnInput()) {
      el.focus();
    }
  },
  update(el) {
    if (!isActiveElementAnInput()) {
      Vue.nextTick(() => el.focus());
    }
  }
});
