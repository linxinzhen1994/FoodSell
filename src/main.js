import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)//全局注入ajax请求
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
