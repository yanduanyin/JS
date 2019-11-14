// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/stylus/index.styl'
import './common/font_iconfont/iconfont.css'
// 使用axios请求数据
import axios from 'axios'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

Vue.use(VueLazyload)
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
