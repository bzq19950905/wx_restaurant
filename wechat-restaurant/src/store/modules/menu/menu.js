import { apiShop } from '@/api/index.js'
export default {
  namespaced: true,
  state: {
    title: '点餐列表页',
    shopData: null,
    menuSeller: [],
    menuGoods: [],
    menuOrder: []
  },
  actions: {
    async getData ({commit}, payload) {
      let StateData = await apiShop('http://localhost:8082/api/Shop', {})
      if (Number(StateData.code) === 1) {
        commit('GET_DATA', StateData.data.MenuList)
      }
    }
  },
  getters: {

  },
  mutations: {
    GET_DATA (state, payload) {
      console.log(payload)
      state.shopData = payload
      state.menuSeller = payload.seller
      state.menuGoods = payload.goods
      state.menuOrder = payload.order
    }
  }
}
