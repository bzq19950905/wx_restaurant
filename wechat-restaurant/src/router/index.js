import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello.vue'
// 商家列表页
import Menu from '@/components/menu'
// 订单页
import Myorder from '@/components/myOrder'
// 地址
import MyAddress from '@/components/MyAddress'
import SelectAddress from '@/components/MyAddress/component/selectAddress'// 选择地址
import AddAddress from '@/components/MyAddress/component/addaddress'// 添加地址
// 地图
import NearbyMap from '@/components/nearbyMap'
// 用户管理
import NewMenu from '@/components/newMenu'
import My from '@/components/newMenu/component/my' // 用户管理首页
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello', // 假定首页
      component: Hello
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/myorder',
      name: 'myorder', // 确认订单
      component: Myorder
    },
    {
      path: '/myaddress',
      name: 'MyAddress', // 选择收货地址
      component: MyAddress,
      redirect: '/myaddress/selectaddress',
      children: [{
        path: 'selectaddress',
        name: 'SelectAddress',
        component: SelectAddress
      }, {
        path: 'addaddress',
        name: 'AddAddress', // 添加收货地址
        component: AddAddress
      }]
    }, {
      path: '/newMenu',
      name: 'newMenu',
      component: NewMenu,
      redirect: '/newMenu/my',
      children: [{
        path: 'my',
        name: 'my', // 用户管理页
        component: My
      }]
    }, {
      path: '/nearbymap',
      name: 'NearbyMap', // 腾讯地图调用
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
