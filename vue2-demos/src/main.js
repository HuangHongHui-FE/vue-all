import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import antd from './config/antd_design_vue.js';
// import "ant-design-vue/dist/antd.css";  // 这里不用引入

Vue.use(antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
