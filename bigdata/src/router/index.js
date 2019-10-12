import Vue from 'vue'
import Router from 'vue-router'
import frontpage from '@/views/frontpage/index.vue'// 首页
import productcentre from '@/views/productcentre/index.vue'// 产品中心
import solution from '@/views/solution/index.vue'// 解决方案
import customercases from '@/views/customercases/index.vue'// 客户案例
import aboutus from '@/views/aboutus/index.vue'// 关于我们
import helpsupport from '@/views/helpsupport/index.vue'// 帮助支持
import indexpage from '@/views/indexpage/index.vue'// 帮助支持
import login from '@/views/login/index.vue'// 登录
import register from '@/views/register/index.vue'// 注册
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/frontpage'
    },
    {
      path: '/frontpage',
      name: 'frontpage',
      component: frontpage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/indexpage',
      name: 'indexpage',
      component: indexpage,
      children: [{
        path: '/productcentre',
        name: 'productcentre',
        component: productcentre
      }, {
        path: '/solution',
        name: 'solution',
        component: solution
      }, {
        path: '/customercases',
        name: 'customercases',
        component: customercases
      }, {
        path: '/aboutus',
        name: 'aboutus',
        component: aboutus
      }, {
        path: '/helpsupport',
        name: 'helpsupport',
        component: helpsupport
      }
      ]
    }

  ]
})