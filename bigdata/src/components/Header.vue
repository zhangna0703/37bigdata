<template>
  <header>
      <div class="header-logo">
          <img src="@/assets/images/logo.png" alt="logo">
      </div>
      <ul class="header-menu">
        <router-link to="/frontpage" tag="div" class="route-tag">首页</router-link>
        <router-link to="/productcentre" tag="div" class="route-tag">产品中心</router-link>
         <div class="producebox">
          <p>物联网平台</p>
        </div>
        <router-link to='/solution' tag="div" class="route-tag">解决方案</router-link>
        <router-link to='/customercases' tag="div" class="route-tag">客户案例</router-link>
        <router-link to='/aboutus' tag="div" class="route-tag">关于我们</router-link>
         <router-link to='/helpsupport' tag="div" class="route-tag">帮助支持</router-link> 

      </ul>
      <div class="header-login">
        <span @click='goLogin'>登录</span>|
        <span @click='goRegister'>注册</span>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menulink: [{
        id: 0,
        title: '首页',
        toLink: '/frontpage'
      },
      {
        id: 1,
        title: '产品中心',
        toLink: '/productcentre',
        childs: [
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          }
        ]
      },
      {
        id: 2,
        title: '解决方案',
        toLink: '/solution',
        childs: [
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          }
        ]
      },
      {
        id: 3,
        title: '客户案例',
        toLink: '/customercases',
        childs: [
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          }
        ]
      },
      {
        id: 4,
        title: '关于我们',
        toLink: '/aboutus',
        childs: [
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          },
          {
            title: '数据分析'
          }
        ]
      },
      {
        id: 5,
        title: '帮助支持',
        toLink: '/helpsupport'
      }]
    }
  },
  methods: {
    goLogin () {
      this.$router.push({ name: 'login' })
    },
    goRegister () {
      this.$router.push({ name: 'register' })
    },
    changeActive (id) {
      // console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
@include wh(100%,65px);
@include minwidth();
background: #fff;
display: flex;
justify-content: space-between;
padding: 0px 20px;
box-sizing: border-box;
.header-logo img {
  width: 150px;
}
.header-menu{
  display: flex;
  font-size: 14px;
  .route-tag{
    height: 20px;
    // border-right: 1px solid #ccc;
    padding: 0px 25px;
    margin-top: 20px;
    cursor: pointer;
    .route-menu{
      position: relative;
      .router-menu-chlid{
        position: absolute;
      }
    }
  }
  .route-tag:last-child{
    height: 20px;
    // border-right: none;
    padding: 0px 25px;
  }
  .router-link-exact-active{
    font-size: 15px;
    font-weight: bold;
  }
}
.header-login{
  line-height: 65px;
  span{
    cursor: pointer;
    padding: 0px 10px;
  }
}
}
</style>
