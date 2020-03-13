import axios from 'axios'
// import qs from 'qs'
import { Message } from 'element-ui'
import router from '../router'
import store from '@/store'

const baseUrl = '/api'

// 请求之前
axios.interceptors.request.use(config => {
  config.timeout = 20000
  // if (!config.headers['lanType']) config.headers['lanType'] = getCookie('lang') || getBrowserLang() || 'en'
  // config.headers['poolId'] = 174
  // config.headers['Authorization'] = getToken()
  return config
}, error => {
  return Promise.reject(error)
})

// 请求回来
axios.interceptors.response.use(res => {
  if (res.data.code !== 0) {
    Message.error(res.data.message)
    if (res.data.code === 100) {
      router.push('/login')
    }
  } else {
    return res.data
  }
}, error => {


  return Promise.reject(error)
})

// 声明请求方法
const request = (url, data = {}) => {
  return axios({
    method: 'post',
    url: baseUrl + url,
    params: data
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
