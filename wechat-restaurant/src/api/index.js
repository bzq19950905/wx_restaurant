import http from '@/utils/http/index.js'

async function apiGet (url, page) {
  return http.get(url, page).then(res => {
    return res
  }).catch(err => {
    return err
  })
}
export {
  apiGet
}
