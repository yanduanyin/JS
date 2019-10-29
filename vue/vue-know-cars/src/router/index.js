import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const __import__ = file => () => import(`@/pages/${file}.vue`) // 懒加载


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('home/home'),
      meta: {
        title: '[首页]懂车帝_看车选车买车!!!'
      }
    },
    {
      path: '/auto',
      name: 'auto',
      component: __import__('auto/auto'),
      meta: {
        title: '[车型库]懂车帝_看车选车买车!!!'
      }
    },
    {
      path: '/video',
      name: 'video',
      component: __import__('video/video'),
      meta: {
        title: '[汽车视频]懂车帝_看车选车买车!!!'
      }
    }
  ]
})
