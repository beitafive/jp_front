import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
import api from './http/api'
import i18n from './lang'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'
import ElementLocale from 'element-ui/lib/locale'
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

Vue.use(ElementUI)


Vue.prototype.$http = http
Vue.prototype.$api = api
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
