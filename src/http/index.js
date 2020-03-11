import axios from 'axios'
// import qs from 'qs'
// import { Message } from 'element-ui'
import store from '@/store'

const baseUrl = ''

// 请求之前
axios.interceptors.request.use(config => {
  // config.timeout = 20000
  // if (!config.headers['lanType']) config.headers['lanType'] = getCookie('lang') || getBrowserLang() || 'en'
  // config.headers['poolId'] = 174
  // config.headers['Authorization'] = getToken()
  return config
}, error => {
  return Promise.reject(error)
})

// 请求回来
axios.interceptors.response.use(res => {
  store.dispatch('loading/setLoading', false)

  return res.data
}, error => {
  store.dispatch('loading/setLoading', false)

  return Promise.reject(error)
})

// 声明请求方法
const request = (url, data = {}) => {
  return axios({
    method: 'post',
    url: baseUrl + url,
    data: data
  })
}
request.loading = (url, data = {}) => {
  store.dispatch('loading/setLoading', true)
  return axios({
    method: 'post',
    url: baseUrl + url,
    data: data
  })
}

export default request
