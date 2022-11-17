import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

// 配置两套路由online与h5
const routes_online = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('../views/IframeView.vue')
  }
]

const routes_h5 = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('../views/IframeView.vue')
  }
]

let routes = routes_online;
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
  routes = routes_h5
}

const router = new VueRouter({
  routes
})

export default router
