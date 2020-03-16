import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import noPage from '@/views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name:  '404',
    component: noPage,
    meta: { title: '没有此页面' }
  },
  {
    path: '/',
    name:  'index',
    redirect: '/index',
    component: Index,
    children: [
      {
        path: '/index',
        name:  '首页',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/order/:goods_id',
        name:  '预约单',
        component: () => import('@/views/order/index.vue')
      },
      {
        path: '/goods/:id',
        name:  '商品详情',
        component: () => import('@/views/goods/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
