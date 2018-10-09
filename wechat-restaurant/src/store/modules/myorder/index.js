export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    myorderData: [],
    myAddress: '',
    new_Data: 0
  },
  actions: {
    async myData ({commit}, payload) {
      // let MyData = await apiGet('http://47.95.13.141:8083/api/shop')
      // if (Number(MyData.code) === 1) {
      //   commit('MY_DATA', MyData.data.MenuList)
      // }
      let local = window.localStorage
      let MyData = local.getItem('menuList') ? JSON.parse(local.getItem('menuList')) : {}
      console.log(typeof (MyData))
      commit('MY_DATA', MyData)
    },
    mySpread ({commit}, payload) {
      commit('MY_SPREAD', payload)
    },
    newData ({commit}, payload) {
      var now = new Date();
      var time = now.getTime() + 1000 * 60 * 30
      let Houres = new Date(time).getHours()
      let getMinutes = new Date(time).getMinutes()
      commit('new_Data', `${Houres}:${getMinutes}`)
    }
  },
  mutations: {
    MY_DATA (state, payload) {
      state.myorderData = payload
    },
    MY_SPREAD (state, payload) {
      state.myAddress = payload.addressDetail
    },
    new_Data (state, payload) {
      state.new_Data = payload
    }
  }
}
