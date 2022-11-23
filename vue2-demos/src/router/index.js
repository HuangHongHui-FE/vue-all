import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Test from '../views/Online/Erer-ten/test.vue'
import Test2 from '../views/Online/Erer-ten/test2.vue'
Vue.use(VueRouter)

// 配置两套路由online与h5
const routes_online = [
  {
    path: '/',
    name: 'Index',
    redirect: to => {
      return '/yanshi'
    },
  },
  {
    path: '/yanshi',
    name: 'yanshi',
    component: Index,
    redirect: to => {
      return '/yanshi/erer-ten'
    },
    children: [
      {
        path: '/yanshi/erer-ten',
        name: 'erer-ten',
        redirect: to => {
          return '/yanshi/erer-ten/test'
        }
      },
      {
        path: '/yanshi/erer-ten/test',
        name: 'test',
        component: Test
      },
      {
        path: '/yanshi/erer-ten/test2',
        name: 'test2',
        component: Test2
      }
    ]
  },
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
  linkActiveClass: 'active',
  routes
})

export default router
