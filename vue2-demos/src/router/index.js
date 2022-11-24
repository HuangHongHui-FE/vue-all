import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Yanshi from '../views/Online/Yanshi/index.vue'
import Test from '../views/Online/Yanshi/Erer-ten/test.vue'
import DialogIndex from '../views/Online/Yanshi/Erer-ten/DialogIndex.vue'
import FiveStarsUI from '../views/Online/Yanshi/Erer-ten/FiveStarsUI'
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
          return '/yanshi/erer-ten/dialog'
        },
      },
      {
        path: '/yanshi/erer-ten/dialog',
        name: 'yan_shi',
        component: Yanshi,
        redirect: to => {
          return '/yanshi/erer-ten/dialog'
        },
        children: [
          {
            path: '/yanshi/erer-ten/dialog',
            name: 'dialog',
            component: DialogIndex
          },
          {
            path: '/yanshi/erer-ten/test',
            name: 'test',
            component: Test
          },
          {
            path: '/yanshi/erer-ten/five-stars',
            name: 'five-stars',
            component: FiveStarsUI
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Index,
    redirect: to => {
      return '/about/test'
    },
    children: [
      {
        path: '/about/test',
        name: 'about_test',
        component: Test
      }
    ]
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
  linkActiveClass: 'active',
  routes
})

export default router;
