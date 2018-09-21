import { apiGet } from '@/api/index'
export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    myorderData: []
  },
  actions: {
    async myData ({commit}, payload) {
      let MyData = await apiGet('http://47.95.13.141:8083/api/shop')
      if (Number(MyData.code) === 1) {
        commit('MY_DATA', MyData.data.MenuList)
      }
    }
  },
  mutations: {
    MY_DATA (state, payload) {
      state.myorderData = payload.order.slice(0, 2)
    }
  }
}
