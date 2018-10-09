// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import YDUI from 'vue-ydui' // 排版框架
import 'vue-ydui/dist/ydui.rem.css' // 排版框架样式
import router from './router' // 路由
import ToThis from '@/utils/defineProperty.js' // 封装的方法挂全局 $http
import store from '@/store/index.js'// vuex
import Icon from 'vue-awesome/components/Icon'// svg icon图标
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import '@/assets/rem.js'// rem转换单位
Vue.config.productionTip = false
Vue.use(ToThis)
Vue.use(YDUI)
Vue.component('v-icon', Icon)
window.eventBus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
