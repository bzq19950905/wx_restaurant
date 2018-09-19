import Vue from 'vue'
import VueX from 'vuex'
import * as modules from './modules/index.js'
Vue.use(VueX)
const store = new VueX.Store({
  state: {
    count: 0
  },
  modules
})
export default store
