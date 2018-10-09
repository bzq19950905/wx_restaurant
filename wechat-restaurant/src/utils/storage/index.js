let result = {}
const store2Storage = (name, value) => {
  let local = window.localStorage
  let usedObj = local.getItem('menuList') ? JSON.parse(local.getItem('menuList')) : {}
  if (Object.keys(usedObj).includes(name)) {
    result[name] = value
    Object.assign(usedObj, result)
  } else {
    usedObj[name] = value
  }
  local.setItem('menuList', JSON.stringify(usedObj))
}
const assigeMenus = (menuList, stoageList) => {
  menuList.forEach((item) => {
    item.children.forEach((menu) => {
      if (Object.keys(stoageList).includes(menu.name)) {
        menu.count = stoageList[menu.name][0]
      }
    })
  })
  return menuList
}
// 购物车加加
const shopAdd = (shopData) => {
  let picAll = 0
  let picList = shopData
  // shopData.forEach(item => {
  //   item.children.forEach(v => {
  //     if (v.count > 0) {
  //       picAll += shopIAdd(v.count, v.price)
  //       picList[v.name] = [v.count, v.price]
  //     }
  //   })
  // })
  if (shopData) {
    for (let i = 0; i < Object.values(shopData).length; i++) {
      picAll += shopIAdd(Object.values(shopData)[i][0], Object.values(shopData)[i][1])
    }
  }
  return {
    picAll,
    picList
  }
}
// 累加
const shopIAdd = (count, price) => {
  return count * price
}
export {
  store2Storage,
  assigeMenus,
  shopAdd
}
