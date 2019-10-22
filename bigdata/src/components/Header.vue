<template>
  <header :class="{'headerTop': routerUrl}">
    <div class="header-logo">
      <img src="@/assets/images/logo.png" alt="logo">
    </div>
    <div class="header-menu">
      <div style="position: relative" v-for="(item,index) in menulink" :key="item.title"
        @click.stop="jumpListPage(item.toLink, index)"
        @mouseenter="enter(index)"
        @mouseleave="leave(index)" :class="{'checkIndexStyle': index === checkIndex}" class="tag-div">
        <div>
          <p style="text-align: center">{{item.title}}</p>
          <div :class="{'marginRight' :item.flexFlag}" style="position: absolute;left: 0;top: 20px;text-align: center" v-show="item.hideFlag">
            <div style="height: 10px"></div>
              <div>
              <div v-if="item.childs" class="menu-wrapper" :class="{'flexBlock': item.flexFlag}">
                <div v-for="(tag) of item.childs" :key="tag.id" style="color: #fff;margin: 0px 4px;line-height: 25px;text-align: left;">
                  <p @click.stop="jumpListPage( item.toLink, index, tag.jumpUrl, tag.index, tag.titleState, tag.name)" :class="{'nameColor': checkName === tag.name}" class="list_p">{{tag.name}}</p>
                  <p @click.stop="jumpListPage( item.toLink, index, list.jumpUrl, list.index, list.titleState, list.name)" v-for="(list) of tag.components" :key="list.id" :class="{'nameColor': checkName === list.name}" class="list_p">{{list.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-login">
      <!-- <span @click='changeLanguage'>切换语言</span> -->
      <!-- <span @click='goLogin'>登录</span>|
      <span @click='goRegister'>注册</span> -->
    </div>
  </header>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      checkIndex: 0,
      menulink: [
        {
        title: '首页',
        toLink: 'frontpage'
      },
      {
        title: '产品中心',
        toLink: 'productcentre',
        flexFlag: true,
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '物联网平台',
            fontBig: true,
            titleState: true,
            components: [
              {
                id: '001',
                name: '传感器',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: 'sensor'
              },
              {
                id: '002',
                name: '数据采集',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: 'acquisition'
              },
              {
                id: '003',
                name: '智能硬件',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: ''
              },
            ]
          },
          {
            name: '大数据中台',
            fontBig: true,
            titleState: false,
            components: [
              {
                id: '001',
                name: '数据清洗',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: 'datacleansing'
              },
              {
                id: '002',
                name: '数据分析',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: 'dataanalyze'
              },
              {
                id: '003',
                name: '智能挖掘',
                fontBig: false,
                adoptFlage: true,
                jumpUrl: 'intelligentMining'
              }
            ]
          }
        ]
      },
      {
        title: '解决方案',
        toLink: 'solution',
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '智能物联',
            jumpUrl: 'solution',
            index: 0
          },
          {
            id: '02',
            name: '数字营销',
            jumpUrl: 'solution',
            index: 1
          },
          {
            id: '03',
            name: '风险管理',
            jumpUrl: 'solution',
            index: 2
          },
          {
            id: '04',
            name: '质量管控',
            jumpUrl: 'solution',
            index: 3
          },
          {
            id: '05',
            name: '精准获客',
            jumpUrl: 'solution',
            index: 4
          }
        ]
      },
      {
        title: '客户案例',
        toLink: 'customercases',
        hideFlag: false,
        childs: [
          {
            id: '01',
            name: '能源物联方案',
            jumpUrl: 'customercases'
          },
          {
            id: '02',
            name: '房车物联方案',
            jumpUrl: 'customercases'
          },
          {
            id: '03',
            name: '康养物联saas',
            jumpUrl: 'customercases'
          },
          {
            id: '04',
            name: '军工物联监测',
            jumpUrl: 'customercases'
          }
        ]
      },
      {
        title: '关于我们',
        toLink: 'aboutus',
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
            index: 2,
            jumpUrl: 'aboutus'
          },
          {
            id: '03',
            name: '加入我们',
            index: 3,
            jumpUrl: 'aboutus'
          },
          {
            id: '04',
            name: '联系我们',
            index: 4,
            jumpUrl: 'aboutus'
          }
        ]
      },
      // {
      //   title: '帮助支持',
      //   // toLink: '/helpsupport'
      // }
      ]
    }
  },
  computed: {
    ...mapState([
      'checkName',
    ]),
    routerUrl () {
      return this.$route.name == 'frontpage'
    }
  },
  watch: {
    '$route': function () {
      this.checkIndex = Number(sessionStorage.checkIndex)
    }
  },
  mounted () {
    this.checkIndex = Number(sessionStorage.checkIndex) || 0
  },
  methods: {
    changeLanguage(){
      var lang = this.$i18n.locale ==='zh'?'en':'zh'
      this.$i18n.locale = lang
    },
    // 鼠标移入
    enter(index){
      if (index == 0) {
        return
      }
      this.menulink[index].hideFlag = true
    },
    // 鼠标移除
    leave(index){
       if (index == 0) {
        return
      }
      this.menulink[index].hideFlag = false
    },
    // 点击子导航
    jumpListPage ( toLink, parentIndex, url, index, titleState, tabName) {
      sessionStorage.checkIndex = parentIndex
      this.checkIndex = parentIndex
      if (index) {
        this.routerIndexFund(index)
      }
      if (url) {
        this.$router.push({name: url})
      } else {
        this.$router.push({name: toLink})
      }
      this.titleStateFlage(titleState)
      this.checkNameFund(tabName)
    },
    goLogin () {
      this.$router.push({ name: 'login' })
    },
    goRegister () {
      this.$router.push({ name: 'register' })
    },
    ...mapActions([
      'routerIndexFund',
      'titleStateFlage',
      'checkNameFund'
    ])
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
  font-size: 18px;
  z-index: 100;
  .tag-div{
    height: 20px;
    // border-right: 1px solid #ccc;
    padding-right: 60px;
    margin-top: 20px;
    cursor: pointer;
    .marginRight{
      left: -55px !important;
    }
    .flexBlock{
      display: flex;
      // justify-content: space-between;
    }
    .menu-wrapper{
      font-size: 14px;
      text-align: center;
      background: rgba(63, 63, 72, 0.6);
      // opacity: 0.6;
      padding: 15px 15px 8px;
      z-index: 2;
      border-radius: 5px;
    }
  }
  .checkIndexStyle{
    font-weight: bold;
  }
  
  .tag-div:last-child{
    height: 20px;
    border-right: none;
    // padding: 0px 25px;
    // padding: 0
  }
  .router-link-exact-active{
    /* font-size: 1px; */
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
.headerTop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent !important;
  color: #fff;
}
.list_p{
  font-weight: 500 !important;
}
.nameColor {
  color: #FE6021;
  font-size: 600;
}
</style>
