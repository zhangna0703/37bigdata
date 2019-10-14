<template>
  <div>
    <div class="banner">
      <swiper :options="bannerSwiperOption" ref="mySwiper" class="swipers">
        <!-- slides -->
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
      </swiper>
      <img src="../../assets/images/u247.png" alt="">
    </div>
    <ul class="nav">
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
            <li>陆游房车水电桩物联系统</li>
            <li>可视化管控系统</li>
            <li>中关村科技园区能源管控系统</li>
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
            <li>陆游房车水电桩物联系统</li>
            <li>可视化管控系统</li>
            <li>中关村科技园区能源管控系统</li>
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
export default {
  components: {
    swiper,
    swiperSlide,
    Footer
  },
  data () {
    return {
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
      datalist: ['物联网客户案例', '大数据客户案例'],
      imagelist: [require('@/assets/images/u1911.png'), require('@/assets/images/u1912.png'), require('@/assets/images/u1913.png'), require('@/assets/images/u1914.png'), require('@/assets/images/u1915.jpg'), require('@/assets/images/u1916.jpg'), require('@/assets/images/u1918.png'), require('@/assets/images/u1919.png'), require('@/assets/images/u1920.png'), require('@/assets/images/u1921.png')]
    }
  },
  methods: {
    setInternetSow (ind) {
      this.flag = true
    },
    setBigSow (ind) {
      this.flag = false
    }
  }
}
</script>

<style scoped>
.iotCore,.bigdata{
  display: flex;
  width: 70%;
  margin: 30px auto;
}
.rights{
  display: flex;
  flex-wrap: wrap;
}
.rights li{
  width: 30%;
  margin: 20px;
}
.rights li img{
  width: 100%;
}
.lefts{
  text-align: right;
  margin-right: 50px;
}
.lefts h2{
  font-size: 18px;
  margin-bottom: 20px;
}
.lefts ul{
  margin-top: 10px
}
.lefts ul li{
  line-height: 40px;
  font-size: 14px;
}
.detail{
  border: solid 1px #fff;
  padding: 3px 5px;
  box-sizing: border-box;
  color: #fff;
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 999;
}
.shadow{
  height: 100%;
  background: rgba(0, 0, 0, .2);
  position: relative;
}
.nav{
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    height: 50px;
    margin-top: 20px;
    font-size: 16px;
    border-bottom: solid 1px #ccc;
}
.nav li{
  height: 100%;
  line-height: 50px;
  cursor: pointer;
}
.nav .tit_active{
  font-weight: 800;
  border-bottom: solid 3px rgba(102, 153, 255, 1);
}
.show_cont{
  display: flex;
}
.shadow .left{
  margin: 50px;
}
.shadow .right h2{
  font-weight: 800;
  font-size: 28px;
  color: #FFFFFF;
  margin-top: 70px;
}
.shadow .right p{
  color: #FFFFFF;
  width: 270px;
  margin-top: 40px;
}
.swiper-button-prev,.swiper-button-next{
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
.banner{
  height: 520px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner>img{
  height: 100%;
  margin-left: -20px;
  width: 100%;
}
.swipers{
  position: absolute;
  width: 60%;
  height: 60%;
}
</style>
