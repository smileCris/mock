import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '',
  // 跨域配置
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

// 请求拦截
service.interceptors.request.use(
  config => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 基于 axiosInstance 和 Promise 的包装
 * @param {"get"|"put"|"post"|"patch"|"head"|"delete"} action HTTP 动词
 * @param {string} url 请求地址
 * @param {any} data 要发送的数据
 */
export const axiosPromiseWrapper = (action, url, data) => {
  return Promise.resolve(service[action](url, data))
}
