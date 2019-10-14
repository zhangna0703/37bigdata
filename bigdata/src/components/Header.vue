<template>
  <header>
      <div class="header-logo">
        <img src="@/assets/images/logo.png" alt="logo">
      </div>
      <div class="header-menu">
        <div class="route-tag">
          <p>首页</p>
        </div>
        <div class="route-tag">
          <p >产品中心</p>
          <div class="menu-list">
            <div>hahahaha</div>
            <div>hahahaha</div>
            <div>hahahaha</div>
            <div>hahahaha</div>
          </div>
        </div>
        <div class="route-tag">
          <p>解决方案</p>
          <div class="menu-list">
            <div>智能物联</div>
            <div>数字营销</div>
            <div>风险管理</div>
            <div>质量管控</div>
            <div>精准获客</div>
          </div>
        </div>
        <div class="route-tag">
          <p>客户案例</p>
          <div class="menu-list">
            <div>能源物联方案</div>
            <div>房车物联方案</div>
            <div>康养物联saas</div>
            <div>军工物联监测</div>
          </div>
        </div>
        <div class="route-tag">
          <p>关于我们</p>
          <div class="menu-list">
            <div>公司简介</div>
            <div>企业文化</div>
            <div>加入我们</div>
            <div>联系我们</div>
          </div>
        </div>
        <div class="route-tag">
          <p>帮助支持</p>
        </div>
      </div>
      <!-- <ul class="header-menu">
        <router-link to="/frontpage" tag="div" class="route-tag">首页</router-link>
        <router-link to="/productcentre" tag="div" class="route-tag">产品中心</router-link>
         <div class="producebox">
          <div>
            <router-link to="/productcentre" tag="div" class="route-tag">产品中心</router-link>
          </div>
          <div></div>
        </div>
        <router-link to='/solution' tag="div" class="route-tag">解决方案</router-link>
        <router-link to='/customercases' tag="div" class="route-tag">客户案例</router-link>
        <router-link to='/aboutus' tag="div" class="route-tag">关于我们</router-link>
        <router-link to='/helpsupport' tag="div" class="route-tag">帮助支持</router-link>
      </ul> -->
      <div class="header-login">
        <span @click='goLogin'>登录</span>|
        <span @click='goRegister'>注册</span>
      </div>
  </header>
</template>

<script>
import {newsInfoList} from '../api/frontpage'
export default {
  data () {
    return {
      menulink: [
        {
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
        }
      ],
      pageNum: 1,
      pageSize: 3
    }
  },
  mounted () {
    this.getNewsInfoList()
  },
  methods: {
    // 获取新闻栏数据
    getNewsInfoList () {
      let data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      newsInfoList(data).then((res) => {
        console.log(res, '9999')
      })
        .catch((err) => {
          console.log(err)
        })
    },
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
background: $color-white;
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
    color: $color-white;
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
