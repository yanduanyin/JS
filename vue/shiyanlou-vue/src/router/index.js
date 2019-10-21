import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const __import__ = file => () => import(`@/pages/${file}.vue`) // 懒加载

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('home'),
      meta: {
        title: '在线做实验， 高效学习编程 -实验楼'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: __import__('user/user'),
      meta: {
        title: '实验楼'
      }
    }
  ]
})
