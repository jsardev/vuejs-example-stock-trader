export default {
  state(state, newState) {
    state = Object.assign(state, newState);
  },
  buy(state, { name, quantity, price }) {
    const asset = state.items.find(asset => asset.name === name);

    if (asset) {
      asset.quantity += quantity;
    } else {
      state.items.push({ name, quantity });
    }
  },
  sell(state, { name, quantity, price }) {
    const asset = state.items.find(asset => asset.name === name);
    const assetQuantity = asset.quantity - quantity;

    if (assetQuantity === 0) {
      const assetIndex = state.items.indexOf(asset);
      state.items.splice(assetIndex, 1);
    } else {
      asset.quantity = assetQuantity;
    }
  }
};
