import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
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
