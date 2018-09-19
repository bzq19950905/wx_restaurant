// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import router from './router'
import ToThis from '@/utils/defineProperty.js'
import store from '@/store/index.js'
import '@/assets/rem.js'
Vue.config.productionTip = false
Vue.use(ToThis)
Vue.use(YDUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
