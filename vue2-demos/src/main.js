import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化的样式
import '@/assets/css/resets.css';
import '@/assets/css/border.css';
import '@/assets/css/font.css'

import antd from './config/antd_design_vue.js';
// import "ant-design-vue/dist/antd.css";  // 这里不用引入

// UI
import UI from './libs/UI'
Vue.use(UI)


Vue.use(antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
