import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Yanshi from '../views/Online/Yanshi/index.vue'
import Test from '../views/Online/Yanshi/Erer-ten/test.vue'
import DialogIndex from '../views/Online/Yanshi/Com/DialogIndex.vue'
import FiveStarsUI from '../views/Online/Yanshi/Com/FiveStarsUI'

import BigFileBasic from '../views/Online/Yanshi/BigFile/Basic'
import BigFilePool from '../views/Online/Yanshi/BigFile/Pool'
import ErerElevenCookie from '../views/Online/Yanshi/Erer-eleven/Cookie'
import ErerElevenLinkClick from '../views/Online/Yanshi/Erer-eleven/LinkClick'
Vue.use(VueRouter)

// 配置两套路由online与h5
const routes_online = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: to => {
      return '/yanshi'
    },
    children: [
      {
        path: '/yanshi',
        name: 'yanshi',
        component: Yanshi,
        redirect: to => {
          return '/yanshi/com'
        },
        children: [
          {
            path: '/yanshi/com',
            name: 'com',
            redirect: to => {
              return '/yanshi/com/dialog'
            },
          },
          {
            path: '/yanshi/com/dialog',
            name: 'dialog',
            component: DialogIndex
          },
          {
            path: '/yanshi/com/five-stars',
            name: 'five-stars',
            component: FiveStarsUI
          },
          
          {
            path: '/yanshi/big-file',
            name: 'big-file',
            redirect: to => {
              return '/yanshi/big-file/basic'
            },
          },
          {
            path: '/yanshi/big-file/basic',
            name: 'big-file-basic',
            component: BigFileBasic
          },
          {
            path: '/yanshi/big-file/pool',
            name: 'big-file-pool',
            component: BigFilePool
          },

          {
            path: '/yanshi/erer-eleven',
            name: 'erer-eleven',
            redirect: to => {
              return '/yanshi/erer-eleven/cookie'
            }
          },
          {
            path: '/yanshi/erer-eleven/cookie',
            name: 'erer-eleven-cookie',
            component: ErerElevenCookie
          },
          {
            path: '/yanshi/erer-eleven/link-click',
            name: 'erer-eleven-link-click',
            component: ErerElevenLinkClick
          },
        ]
      },
      {
        path: '/about',
        name: 'about',
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
