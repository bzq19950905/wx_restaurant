import { apiGet } from '@/api/index'
export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    pos: {}
  },
  actions: {
    async SelectShopData ({commit}, payload) {
      let MyData = await apiGet('http://localhost:8088/api/selectShop')
      console.log(MyData)
      // if (Number(MyData.code) === 1) {
      //   commit('MY_DATA', MyData.data.MenuList)
      // }
    },
    SelectShop_opt ({commit}, payload) {
      console.log(payload)
    }
  },
  mutations: {
    MY_DATA (state, payload) {
      state.myorderData = payload
    }
  }
}
