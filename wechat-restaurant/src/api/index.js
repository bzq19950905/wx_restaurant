import http from '@/utils/http/index.js'

async function apiGet (url, page) {
  let pages = page ? page : {}
  return http.get(url, pages).then(res => {
    return res
  }).catch(err => {
    return err
  })
}
export {
  apiGet
}
