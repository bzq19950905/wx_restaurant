import { apiGet } from '@/api/index'
export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    Data: [],
    CoordinateText: sessionStorage.getItem('addaddressObj') ? JSON.parse(sessionStorage.getItem('addaddressObj')).address : ''
  },
  actions: {
    async myData ({commit}, payload) {
      let MyData = await apiGet('http://47.95.13.141:8083/api/address')
      if (Number(MyData.code) === 1) {
        commit('MY_DATA', MyData.data.getAddress)
      }
    },
    Coordinate ({commit}, payload) {
      commit('MY_CDTEXT', payload)
    }
  },
  mutations: {
    MY_DATA (state, payload) {
      state.Data = payload
    },
    MY_CDTEXT (state, payload) {
      state.CoordinateText = payload.poiname
    }
  }
}
