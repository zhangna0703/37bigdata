<template>
  <div>
    <div class="banner">
      <!-- <swiper :options="bannerSwiperOption" ref="mySwiper" class="swipers">
        <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
          <div class="shadow">
            <div class="show_cont">
              <div class="left">
                <img :src="item.imgurl" alt="">
              </div>
              <div class="right">
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </div>
            </div>
            <span class="detail">了解详情</span>
          </div>
        </swiperSlide>
        <div class="swiper-button-prev" slot="button-prev">＜</div>
        <div class="swiper-button-next" slot="button-next">＞</div>
      </swiper> -->
      <img src="../../assets/images/example.png" alt="">
      <div class="bannerboxs">
        <h2 class="animated bounceInUp">为什么那么多客户选择我们？</h2>
        <p class="animated bounceInUp xias">我们为1000+行业企业提供专业、高效、安全的解决方案!</p>
      </div>
    </div>
    <ul class="navheader">
      <li @click="setInternetSow" :class="{tit_active:flag}">物联网客户案例</li>
      <li @click="setBigSow" :class="{tit_active:!flag}">大数据客户案例</li>
    </ul>
    <div class="contents">
      <!-- 物联网 -->
      <div class="iotCore" v-if='flag==true'>
        <div class="lefts">
          <h2>物联网客户案例</h2>
          <p><img src="../../assets/images/u1868.png" alt=""></p>
          <ul>
            <li v-for='(item,index) in datalist' @click='changemap(index)' :key='index'>{{item}}</li>
          </ul>
        </div>
        <ul class="rights">
          <li v-for='(item,index) in imagelist' :key='index'><img :src="item" alt=""></li>
        </ul>
      </div>
      <!-- 大数据 -->
      <div class="bigdata" v-else>
        <div class="lefts">
          <h2>大数据客户案例</h2>
          <p><img src="../../assets/images/u1868.png" alt=""></p>
          <ul>
            <li v-for='(item,index) in datalist' :key='index'>{{item}}</li>

          </ul>
        </div>
        <ul class="rights">
          <li v-for='(item,index) in imagelist' :key='index'><img :src="item" alt=""></li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Footer from '@/components/Footer.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      swiper,
      swiperSlide,
      Footer
    },
    data() {
      return {
        datalist: ['陆游房车水电桩物联系统', '可视化管控系统', '中关村科技园区能源管控系统'],
        flag: true,
        bannerSwiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        imgList: [
          {
            imgurl: require('@/assets/images/u924.png'),
            tit: '智能水电桩物联系统',
            content: '利用互联网实现了卫生统计工作从单机版层层上报到网络直报的跨越式发展，并基于卫生统计信息数据库构建数据分析平台实现数据互联互通和资源共享。'
          },
          {
            imgurl: require('@/assets/images/u928.png'),
            tit: '智能水电桩物联系统',
            content: '利用互联网实现了卫生统计工作从单机版层层上报到网络直报的跨越式发展，并基于卫生统计信息数据库构建数据分析平台实现数据互联互通和资源共享。'
          },
          {
            imgurl: require('@/assets/images/u924.png'),
            tit: '智能水电桩物联系统',
            content: '利用互联网实现了卫生统计工作从单机版层层上报到网络直报的跨越式发展，并基于卫生统计信息数据库构建数据分析平台实现数据互联互通和资源共享。'
          }
        ],
        // datalist: ['物联网客户案例', '大数据客户案例'],
        imagelist: [require('@/assets/images/u1911.png'), require('@/assets/images/u1912.png'), require('@/assets/images/u1913.png'), require('@/assets/images/u1914.png'), require('@/assets/images/u1915.jpg'), require('@/assets/images/u1916.jpg'), require('@/assets/images/u1918.png'), require('@/assets/images/u1919.png'), require('@/assets/images/u1920.png'), require('@/assets/images/u1921.png')]
      }
    },
    computed: {
      ...mapState([
        'routerIndex'
      ])
    },
    watch: {
      routerIndex(newVal, oldVal) {
        if (newVal >= 0) {
        this.changeSolutionTabIndex(this.routerIndex)
        }
      }
    },
    mounted () {
      if (this.routerIndex === 0) {
        document.documentElement.scrollTop = 665
      } else if (this.routerIndex === 1) {
        document.documentElement.scrollTop = 1365
      } else if (this.routerIndex === 2) {
        document.documentElement.scrollTop = 1715
      }
    },
    methods: {
      setInternetSow(ind) {
        this.flag = true
      },
      setBigSow(ind) {
        this.flag = false
      },
      changemap(index) {
        if (index === 0) {
          document.documentElement.scrollTop = 665
        } else if (index === 1) {
          document.documentElement.scrollTop = 1365
        } else if (index === 2) {
          document.documentElement.scrollTop = 1715
        }
      },
      changeSolutionTabIndex (index) {
        if (index == 0) {
          document.documentElement.scrollTop = 665
        } else if (index == 1) {
          document.documentElement.scrollTop = 1365
        }
      }
    }
  }
</script>

<style scoped>
  .iotCore,
  .bigdata {
    display: flex;
    width: 80%;
    margin: 30px auto;
  }

  .rights {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
  }

  .rights li {
    width: 50%;
    padding: 30px;
    box-sizing: border-box;
  }

  .rights li img {
    width: 100%;
    height: 100%;
  }

  .lefts {
    text-align: right;
    margin-right: 50px;
  }

  .lefts h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .lefts ul {
    margin-top: 10px
  }

  .lefts ul li {
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
  }

  .detail {
    border: solid 1px #fff;
    padding: 3px 5px;
    box-sizing: border-box;
    color: #fff;
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 999;
  }

  .shadow {
    height: 100%;
    background: rgba(0, 0, 0, .2);
    position: relative;
  }

  .navheader {
    width: 25%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px 0px;
  }

  .navheader li {
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
  }

  .navheader .tit_active {
    border-bottom: 4px solid #394263;
    font-weight: bold;
  }

  .show_cont {
    display: flex;
  }

  .shadow .left {
    margin: 50px;
  }

  .shadow .right h2 {
    font-weight: 800;
    font-size: 28px;
    color: #FFFFFF;
    margin-top: 70px;
  }

  .shadow .right p {
    color: #FFFFFF;
    width: 270px;
    margin-top: 40px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    /* width: 100px; */
    width: 45px;
    color: #fff;
    background-image: none;
    font-size: 45px;
  }

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }

  .banner {
    height: 500px;
    width: 100%;
    position: relative;
  }

  .bannerboxs {
    height: 100px;
    position: absolute;
    top: 25%;
    left: 10%;
    color: #fff;
    font-size: 26px;
    line-height: 70px;

    
  }
  .bannerboxs h2 {
      font-size: 46px;
    }

    .xias {
      animation-delay: .5s;
      -webkit-animation-delay: .5s;
    }

  .banner>img {
    height: 100%;
    width: 100%;
  }

  .swipers {
    position: absolute;
    width: 60%;
    height: 60%;
  }
</style>