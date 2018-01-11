export default {
  getByName: state => name => {
    return state.items.find(item => item.name === name);
  },
  getPriceByName: (state, getters) => name => {
    return getters.getByName(name).price;
  }
};
