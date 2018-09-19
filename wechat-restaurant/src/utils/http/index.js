import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'

const reqHeaders = {
  Accept: 'text/json'
}

const json2url = (params) => {
  return Object.keys(params).reduce((pre, key) => (`${pre}${key}=${params[key]}&`), '').slice(0, -1)
}
const statusCode = (code) => {
  switch (code + '') {
    case '404':
      return {
        errCode: '0',
        errMsg: '数据跑丢了'
      }
    case '500':
      return {
        errCode: '2',
        errMsg: '后台跑丢了'
      }
    default:
      return 11
  }
}
const request = async (url, opts) => new Promise((resolve, reject) => {
  fetch(url, opts).then(res => {
    try {
      if (res.status === 200) {
        resolve(res.json())
      } else {
        const ErrState = statusCode(res.status)
        reject(ErrState)
      }
    } catch (e) {
      resolve({
        errCode: '3',
        errMsg: '未知错误请稍后再试'
      })
    }
  })
})
export default {
  get (url, params) {
    return request(url + `?${json2url(params)}`, {
      method: 'GET',
      headers: reqHeaders
    })
  },
  post (url, params) {
    return request(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders, {
        'content-type': 'application/x-www-form-urlencoded'
      }),
      body: json2url(params)
    })
  },
  jsonp (url, params) {
    return fetchJsonp(url + `?${json2url(params)}`, {
      jsonpCallback: 'custom_callback'
    }).then(res => res.json())
  }
}
