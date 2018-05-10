// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import animate from 'animate.css'
import VueLazyload  from 'vue-lazyload'
// Vue.use(VueLazyload,{   //打包部署时使用同级相对路径
//   error: './static/images/imgerror.jpg',
//   loading: './static/images/imgloading.gif'
// })
Vue.use(VueLazyload,{
  error: '../static/images/imgerror.jpg',
  loading: '../static/images/imgloading.gif'
})
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
