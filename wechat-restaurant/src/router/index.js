import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello.vue'
// 订单页
import Myorder from '@/components/myOrder'
// 地址
import MyAddress from '@/components/MyAddress'
import SelectAddress from '@/components/MyAddress/component/selectAddress'// 选择地址
import AddAddress from '@/components/MyAddress/component/addaddress'// 添加地址
// 题图
import NearbyMap from '@/components/nearbyMap'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    },
    {
      path: '/myaddress',
      name: 'MyAddress',
      component: MyAddress,
      redirect: '/myaddress/selectaddress',
      children: [{
        path: 'selectaddress',
        name: 'SelectAddress',
        component: SelectAddress
      }, {
        path: 'addaddress',
        name: 'AddAddress',
        component: AddAddress
      }]
    }, {
      path: '/nearbymap',
      name: 'NearbyMap',
      component: NearbyMap
    }
  ]
})
// [{
//   path: '/',
//   component: App,
//   children: [{
//       path: '',
//       redirect: '/newMenu',
//   }, {
//       path: '/menu',
//       component: Menu,
//   }, {
//       path: '/register',
//       component: Register,
//   }, {
//       path: '/myorder',
//       component: MyOrder,
//   }, {
//       path: '/shopdetail',
//       component: ShopDetail,
//   }, {
//       path: '/nearbyshop',
//       component: NearbyShop,
//       children: [{
//           path: 'mapshop',
//           component: MapShop,
//       }],
//   }, {
//       path: '/myaddress',
//       name: 'MyAddress',
//       component: MyAddress,
//       children: [{
//           path: 'addaddress',
//           name: 'AddAddress',
//           component: AddAddress,
//       }],
//   }, {
//       path: '/newMenu',
//       component: NewMenu,
//   }, {
//       path: '/hallFoodOrderDetail',
//       component: HallFoodOrderDetail,
//   }, {
//       path: '/deliveryOrderDetail',
//       component: DeliveryOrderDetail,
//   }, {
//       path: '/reserveOrderDetail',
//       component: ReserveOrderDetail,
//   }, {
//       path: '/pickUpOrderDetail',
//       component: PickUpOrderDetail,
//   }, {
//       path: '/quickPay',
//       component: QuickPay,
//   }, {
//       path: '/fooddetail',
//       component: FoodDetail,
//   }, {
//       path: '/*',
//       component: NotFound,
//   }],
// }];
