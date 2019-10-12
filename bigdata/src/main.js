// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/scss/index.scss'// scss公共变量
import '@/assets/css/common.css'// css公共变量

import VueAwesomeSwiper from 'vue-awesome-swiper'// swiper
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
