import { apiGet } from '@/api/index'
export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    Data: []
  },
  actions: {
    async myData ({commit}, payload) {
      let MyData = await apiGet('http://47.95.13.141:8083/api/address')
      if (Number(MyData.code) === 1) {
        commit('MY_DATA', MyData.data.getAddress)
      }
    }
  },
  mutations: {
    MY_DATA (state, payload) {
      state.Data = payload
    }
  }
}
