import { apiGet } from '@/api/index'
import {store2Storage, assigeMenus, shopAdd} from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    title: '模拟数据',
    menuGoods: [],
    menuSeller: [],
    picAll: 0,
    storageList: []
  },
  actions: {
    async menuData (context, payload) {
      let MyData = await apiGet('http://47.95.13.141:8083/api/shop')
      if (Number(MyData.code) === 1) {
        context.commit('MENU_DATA', MyData.data.MenuList)
      }
      context.dispatch('shopPic')
    },
    menuAdd (context, payload) {
      let name = payload.name
      let obj = [payload.count += 1, payload.price]
      store2Storage(name, obj)
      context.dispatch('shopPic')
      context.dispatch('menuData')
    },
    menuCur (context, payload) {
      let name = payload.name
      let obj = [payload.count -= 1, payload.price]
      if (payload.count === 0) {
        let local = window.localStorage
        let usedObj = JSON.parse(local.getItem('menuList'))
        // eslint-disable-next-line
        delete(usedObj[payload.name])
        local.setItem('menuList', JSON.stringify(usedObj))
        context.dispatch('shopPic')
        context.dispatch('menuData')
      } else {
        store2Storage(name, obj)
        context.dispatch('shopPic')
        context.dispatch('menuData')
      }
    },
    shopPic (context, payload) {
      let local = window.localStorage
      let usedObj = JSON.parse(local.getItem('menuList'))
      let obj = shopAdd(usedObj)
      context.commit('STORAGE_LIST', obj.picList)
      context.commit('SHOP_PIC', obj.picAll)
    }
  },
  getters: {
    Handle (state) {
      return state.menuGoods
    }
  },
  mutations: {
    MENU_DATA (state, payload) {
      let local = window.localStorage
      let usedObj = local.getItem('menuList') ? JSON.parse(local.getItem('menuList')) : {}
      let ObjAll = assigeMenus(payload.goods, usedObj)
      state.menuGoods = ObjAll
      state.menuSeller = payload.seller
    },
    SHOP_PIC (state, payload) {
      state.picAll = payload
    },
    STORAGE_LIST (state, payload) {
      state.storageList = payload
    }
  }
}
