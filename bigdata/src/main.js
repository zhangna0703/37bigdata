// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import '@/assets/scss/index.scss'// scss公共变量
import '@/assets/css/common.css'// css公共变量
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'// swiper
import 'swiper/dist/css/swiper.css'
import router from './router'
// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(ElementUI)
 
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

