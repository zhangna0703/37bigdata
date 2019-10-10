<template>
  <header>
      <div class="header-logo">
          <img src="@/assets/images/logo.png" alt="logo">
      </div>
      <ul class="header-menu">
        <router-link v-for="item in menulink" :key="item.title" :to="item.toLink" tag="li">{{item.title}}</router-link>
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
        title: '首页',
        toLink: '/frontpage'
      },
      {
        title: '产品中心',
        toLink: '/productcentre'
      },
      {
        title: '解决方案',
        toLink: '/solution'
      },
      {
        title: '客户案例',
        toLink: '/customercases'
      },
      {
        title: '关于我们',
        toLink: '/aboutus'
      },
      {
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
  li{
    height: 20px;
    border-right: 1px solid #ccc;
    padding: 0px 25px;
    margin-top: 20px;
    cursor: pointer;
  }
  li:last-child{
    height: 20px;
    border-right: none;
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
