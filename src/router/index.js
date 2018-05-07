import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/:type',
      name: 'Home',
      component: Home
    },
    // {
    //     path: '*',
    //     redirect: '/home/all?type=__all__'
    // },
    {
      path: '/',
      redirect: '/home/all?type=__all__'
    },
    {           // 路由重定向
      path: '/home',
      redirect: '/home/all?type=__all__'
    }
  ],
  scrollBehavior (to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x:0,y:0}
    }
  }
})
