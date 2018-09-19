import http from '@/utils/http/index.js'

async function apiShop (url, page) {
  return http.get(url, page).then(res => {
    return res
  }).catch(err => {
    return err
  })
}
export {
  apiShop
}
