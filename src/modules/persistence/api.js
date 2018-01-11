const apiUrl = 'https://vuejs-stock-trader-23217.firebaseio.com';

const resource = {
  save: state =>
    fetch(`${apiUrl}/state.json`, {
      method: 'POST',
      body: JSON.stringify(state)
    }),
  load: () =>
    fetch(`${apiUrl}/state.json`, {
      method: 'GET'
    })
};

export default {
  save(state) {
    return resource.save(state);
  },
  load() {
    return resource.load();
  }
};
