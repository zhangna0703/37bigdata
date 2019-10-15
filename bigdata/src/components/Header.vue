<template>
  <header>
    <div class="header-logo">
      <img src="@/assets/images/logo.png" alt="logo">
    </div>
    <div class="header-menu">
      <router-link style="position: relative" v-for="(item,index) in menulink" :key="item.title" @mouseenter.native="enter(index)" @mouseleave.native="leave(index)" :to="item.toLink" class="tag-div" tag="div">
        <div>
          <p style="text-align: center">{{item.title}}</p>
          <div :class="{'marginRight' :item.flexFlag}" style="position: absolute;left: 0;top: 20px;" v-show="item.hideFlag">
            <div v-if="item.childs" class="menu-wrapper" :class="{'flexBlock': item.flexFlag}">
              <div v-for="tag of item.childs" :key="tag.id" style="color: #333;margin: 0px 4px;line-height: 25px;text-align: left;">
                <p @click.stop="jumpListPage(tag.jumpUrl, tag.index)">{{tag.name}}</p>
                <p @click.stop="jumpListPage(list.jumpUrl, list.index)" v-for="list of tag.components" :key="list.id">{{list.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
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
      menulink: [
        {
        title: '首页',
        toLink: '/frontpage'
      },
      {
        title: '产品中心',
        toLink: '/productcentre',
        flexFlag: true,
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '物联网平台',
            fontBig: true,
            components: [
              {
                id: '001',
                name: '传感器',
                fontBig: false,
                jumpUrl: 'datacleansing'
              },
              {
                id: '002',
                name: '数据采集',
                fontBig: false,
                jumpUrl: 'datacleansing'
              },
              {
                id: '003',
                name: '智能硬件',
                fontBig: false,
                jumpUrl: 'datacleansing'
              },
            ]
          },
          {
            name: '大数据中台',
            components: [
              {
                id: '001',
                name: '数据清洗',
                fontBig: false,
                jumpUrl: 'datacleansing'
              },
              {
                id: '002',
                name: '数据分析',
                fontBig: false,
                jumpUrl: 'dataanalyze'
              },
              {
                id: '003',
                name: '智能挖掘',
                fontBig: false,
                jumpUrl: 'intelligentMining'
              }
            ]
          }
        ]
      },
      {
        title: '解决方案',
        toLink: '/solution',
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '智能物联',
            jumpUrl: 'solution',
            index: 1
          },
          {
            id: '02',
            name: '数字营销',
            jumpUrl: 'solution',
            index: 2
          },
          {
            id: '03',
            name: '风险管理',
            jumpUrl: 'solution',
            index: 3
          },
          {
            id: '04',
            name: '质量管控',
            jumpUrl: 'solution',
            index: 4
          },
          {
            id: '05',
            name: '精准获客',
            jumpUrl: 'solution',
            index: 5
          }
        ]
      },
      {
        title: '客户案例',
        toLink: '/customercases',
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '能源物联方案'
          },
          {
            id: '02',
            name: '房车物联方案'
          },
          {
            id: '03',
            name: '康养物联saas'
          },
          {
            id: '04',
            name: '军工物联监测'
          }
        ]
      },
      {
        title: '关于我们',
        toLink: '/aboutus',
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '公司简介',
            index: 0,
            jumpUrl: 'aboutus'
          },
          {
            id: '02',
            name: '企业文化',
            index: 1,
            jumpUrl: 'aboutus'
          },
          {
            id: '03',
            name: '加入我们',
            index: 2,
            jumpUrl: 'aboutus'
          },
          {
            id: '04',
            name: '联系我们',
            index: 3,
            jumpUrl: 'aboutus'
          }
        ]
      },
      {
        title: '帮助支持',
        toLink: '/helpsupport'
      }]
    }
  },
  methods: {
    enter(index){
      if (index == 0) {
        return
      }
      this.menulink[index].hideFlag = true
    },
    leave(index){
       if (index == 0) {
        return
      }
      this.menulink[index].hideFlag = false
    },
    jumpListPage (url, index) {
      this.$router.push({name: url, query: {index: index}})
    },
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
z-index: 100;
.header-logo img {
  width: 150px;
}
.header-menu{
  display: flex;
  font-size: 14px;
  z-index: 100;
  .tag-div{
    height: 20px;
    // border-right: 1px solid #ccc;
    padding-right: 60px;
    margin-top: 20px;
    cursor: pointer;
    .marginRight{
      left: -40px !important;
    }
    .flexBlock{
      display: flex;
      // justify-content: space-between;
    }
    .menu-wrapper{
      font-size: 14px;
      text-align: center;
      background: #fff;
      // opacity: 0.8;
      padding: 10px 0;
      z-index: 2
    }
  }
  .tag-div:last-child{
    height: 20px;
    border-right: none;
    // padding: 0px 25px;
    padding: 0
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
