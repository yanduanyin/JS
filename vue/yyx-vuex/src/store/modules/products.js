import shop from '../../api/shop'

const state = {
  all: [
    
  ]
}

const getters = {}

// mutations 可以改 state 也只有它可以改 state
const mutations = {
  setProducts(state, products) {
    state.all = products
  }
}

const actions = {
  // vuex 给 actions的， commit  mutations => state
  getAllProducts ({ commit }) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback 回来了', products);
      commit('setProducts', products)
    })
    // mutations
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}