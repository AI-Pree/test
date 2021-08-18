export const state = () => ({
  marketPrice: [
    {
      token: 'SOL',
      price: '$ 152.00'
    },
    {
      token: 'HGEN',
      price: '$ 132.00'
    },
    {
      token: 'GENS',
      price: '$ 1.01'
    }
  ]
})

export const getters = {
  getMarketPrice(state) {
    return state.marketPrice
  }
}

export const actions = {
}

export const mutations = {
}
