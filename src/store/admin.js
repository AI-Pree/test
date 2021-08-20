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
  ],
  borrowingList: [
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' },
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' },
    { date: '2021-02-12 13:12', holder: '0x9fdf…cr34', coll: '212.34', debt: '2323.20', fee: '11.00', debtRatio: '48%', price: '23.20' }
  ]
})

export const getters = {
  getMarketPrice(state) {
    return state.marketPrice
  },
  getBorrowingList(state) {
    return state.borrowingList
  }
}

export const actions = {
}

export const mutations = {
}
