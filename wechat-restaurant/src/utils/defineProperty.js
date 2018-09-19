import Http from './http/index.js'
export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: Http
    })
  }
}
