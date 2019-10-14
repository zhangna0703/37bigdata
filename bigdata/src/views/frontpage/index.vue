
<template>
  <div>
    <div class="frontpage">
      <Header></Header>
      <!-- banner start -->
      <div class="banner">
        <swiper :options="bannerSwiperOption" ref="mySwiper">
          <!-- slides -->
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div :style="{background:'url('+item.imgurl+') center center / cover',height:'600px'}"></div>
          </swiperSlide>
        </swiper>
        <div class="hotspotarticle">
          <dl v-for="item in hotspotData" :key="item.title">
            <dt>
              <img :src="item.img" ondragstart="return false" alt="">
            </dt>
            <dd>
              <h2>{{item.title}}</h2>
              <p>{{item.desc}}</p>
              <p>热点详情→</p>
            </dd>
          </dl>
        </div>
      </div>
      <!-- banner end -->
      <!-- hot detail start -->
      <!-- <div class="hotdetail">
            <swiper :options="bannerSwiperOption" ref="hotspot">
                <swiperSlide>
                  <div class="hotspotarticle">
                    <dl v-for="item in hotspotData" :key="item.title">
                      <dt>
                        <img :src="item.img" alt="">
                      </dt>
                      <dd>
                        <h2>{{item.title}}</h2>
                        <p>{{item.desc}}</p>
                        <p>热点详情→</p>
                      </dd>
                    </dl>
                  </div>
                </swiperSlide>
                <swiperSlide>
                  <div class="hotspotarticle">
                    <dl v-for="item in hotspotData" :key="item.title">
                      <dt>
                        <img :src="item.img" alt="">
                      </dt>
                      <dd>
                        <h2>{{item.title}}</h2>
                        <p>{{item.desc}}</p>
                        <p>热点详情→</p>
                      </dd>
                    </dl>
                  </div>
                </swiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
      </div>-->
      <!-- hot detail end -->
      <!-- productcentre start -->
      <div class="productcentre">
        <div class="productcentre-title">
          <h2>产品中心</h2>
          <h3>PRODUCT</h3>
        </div>
        <div class="productcentre-desc">
          <dl
            v-for="(item,index) in productcentreData"
            :key="index"
            @click="productTabChange(index)"
            :class="index==productTab?'boxshadow':''"
          >
            <dt>
              <img :src="item.img" ondragstart="return false"  alt="">
            </dt>
            <dd>
              <h2>{{item.title}}</h2>
              <p>{{item.desc}}</p>
            </dd>
            <div class="d3" v-show="index==productTab"></div>
          </dl>
        </div>
      </div>
      <!-- productcentre end -->
      <!-- ourproduct start -->
      <div class="ourproduct">
        <dl v-for="item in productcentreData[productTab].morethings" :key="item.title">
          <dt class="ourproduct_img">
            <img :src="item.img" alt="" ondragstart="return false" >
          </dt>
          <dd>
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <p>了解更多</p>
          </dd>
        </dl>
      </div>
      <!-- ourproduct end -->
      <!-- solution start -->
      <div class="solution">
        <div class="solution-section">
          <div class="solution-title">
            <h3>解决方案</h3>
            <h4>SOLUTION</h4>
          </div>
          <!--solution navMenu -->
          <div class="solution-navMenu">
            <el-menu :default-active="solutionMenu" v-if="solutionMenu" class="el-menu-demo" mode="horizontal">
              <el-menu-item v-for="(item, index) of navMenuDtat" :key="index" @click="tabClick(item.id)" :index="item.id">{{item.title}}</el-menu-item>
            </el-menu>
          </div>
          <!-- solution  swiper-->
          <div class="solution-desc">
            <swiper :options="ourproductswiperOption" ref="mySwiper">
              <swiperSlide v-for="item in solutionData" :key="item.title">
                <dl>
                  <dt>
                    <img class="solution_img" :src="item.img" alt="">
                  </dt>
                  <dd>
                    <h2>{{item.title}}</h2>
                    <p>{{item.desc}}</p>
                    <p>查看详情</p>
                  </dd>
                </dl>
              </swiperSlide>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
          </div>
        </div>
      </div>
      <!-- solution end -->
      <!-- case start -->
      <div class="customercases">
        <div class="customercases-section">
          <div class="customercases-title">
            <h3>合作伙伴</h3>
            <h4>PARTNER</h4>
          </div>
          <div class="customercases-desc">
            <div class="customercases_imgs" v-for="item in customercasesData" :key="item.img">
              <img :src="item.img" ondragstart="return false"  alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- case end -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    let _this = this
    return {
      bannerSwiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      solutionMenu: '0',
      ourproductswiperOption: {
        initialSlide: 0,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -50,
          depth: 50,
          modifier: 1,
          slideShadows: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChange: function () {
            _this.$nextTick(() => {
              _this.solutionMenu = JSON.stringify(this.activeIndex)
            })
          }
        }
      },
      imgList: [
        {
          imgurl: require('@/assets/images/banner1.jpg')
        },
        {
          imgurl: require('@/assets/images/banner2.jpg')
        },
        {
          imgurl: require('@/assets/images/banner3.jpg')
        },
        {
          imgurl: require('@/assets/images/banner4.jpg')
        }
      ],
      hotspotData: [
        {
          title: '新浪微热点大数据研究院亮相',
          desc: '以“智联世界 无限可能”为主题的2019年世界人工智能...',
          img: require('@/assets/images/hot_1.png')
        },
        {
          title: '重庆以大数据智能化引领创新驱动',
          desc: '《人民日报》也为此做了整版报道，大数据智能化为重庆经济...',
          img: require('@/assets/images/hot_2.png')
        },
        {
          title: '大数据让税收更“有数”',
          desc:
            '税收工作正凭借大数据技术不断地走向精准化、智能化、科学化。将大数据融入到税收工作中',
          img: require('@/assets/images/hot_3.png')
        }
      ],
      productcentreData: [
        {
          title: '物联网平台',
          desc:
            '为初级水平用户提供用能监控，为中级水平用户提供用能分析诊断，为高级水平用户提供用能预测和用能优化配置方案。',
          img: require('@/assets/images/wulianwang.png'),
          morethings: [
            {
              title: '传感器',
              desc:
                '传感数据是由感知设备或传感设备感受、测量及传输的数据。感知设备或传感设备可以包括1个或多个传感器。',
              img: require('@/assets/images/ourproduct_1.png')
            },
            {
              title: '数据采集',
              desc:
                '监控客户端可以实现为jar包，供需监控系统调用，实时写日志到文件系统比如每分钟生成一个日志文件，监控jar包每个几十秒启动一次',
              img: require('@/assets/images/ourproduct_2.png')
            },
            {
              title: '智能判读、智能硬件',
              desc:
                '未经前期调研论证和规范分析所获取的信息，其数据量越大可能越模糊，其得到的垃圾信息也就可能越多',
              img: require('@/assets/images/ourproduct_3.png')
            }
          ]
        },
        {
          title: '大数据中台',
          desc:
            '数据中台可以助推大数据落地，基于中台架构，大数据可以和业务数据、财务数据结合在一起，循着轻量级、场景化、实时性、自动化、智能化的方向，共同赋能企业业务发展。',
          img: require('@/assets/images/wulianwang.png'),
          morethings: [
            {
              title: '数据清洗',
              desc: '快速生成高频词云分布 情感走向等多维图表展示...',
              img: require('@/assets/images/ourproduct_4.png')
            },
            {
              title: '数据分析',
              desc:
                '对企业生产经营中进货、出货、批发销售、付款等进行全程进行（从接获订单合同开始，进入物料采购...',
              img: require('@/assets/images/ourproduct_5.png')
            },
            {
              title: '智能挖掘',
              desc:
                '方案简介方案简介方案简介方案简介方案简介方案简介方案简介方案简介方案简介方案简介方案简介',
              img: require('@/assets/images/ourproduct_6.png')
            }
          ]
        }
      ],
      navMenuDtat: [
        {
          'id': '0',
          'title': '智能物联方案'
        },
        {
          'id': '1',
          'title': '数字营销方案'
        },
        {
          'id': '2',
          'title': '风险管控方案'
        },
        {
          'id': '3',
          'title': '质量管控方案'
        },
        {
          'id': '4',
          'title': '精准获客方案'
        }
      ],
      solutionData: [
        {
          title: '智能物联方案',
          desc: '快速生成高频词云分布 情感走向等多维图表展示.',
          img: require('@/assets/images/ourproduct_1.png')
        },
        {
          title: '数字营销方案',
          desc:
            '对企业生产经营中进货、出货、批发销售、付款等进行全程进行（从接获订单合同开始.',
          img: require('@/assets/images/ourproduct_2.png')
        },
        {
          title: '风险管控方案',
          desc: '情感走向等多维图表展示',
          img: require('@/assets/images/ourproduct_3.png')
        },
        {
          title: '质量管控方案',
          desc: '快速生成高频词云分布 情感走向等多维图表展示...',
          img: require('@/assets/images/ourproduct_4.png')
        },
        {
          title: '精准获客方案',
          desc: '方案简介方案简介方案简介方案简介方案简介方。...',
          img: require('@/assets/images/ourproduct_5.png')
        }
      ],
      customercasesData: [
        {
          img: require('@/assets/images/partner1.png')
        },
        {
          img: require('@/assets/images/partner2.png')
        },
        {
          img: require('@/assets/images/partner3.png')
        },
        {
          img: require('@/assets/images/partner4.png')
        },
        {
          img: require('@/assets/images/partner5.png')
        },
        {
          img: require('@/assets/images/partner6.png')
        },
        {
          img: require('@/assets/images/partner7.png')
        },
        {
          img: require('@/assets/images/partner8.png')
        },
        {
          img: require('@/assets/images/partner9.png')
        },
        {
          img: require('@/assets/images/partner10.png')
        },
        {
          img: require('@/assets/images/partner11.png')
        },
        {
          img: require('@/assets/images/partner12.png')
        }
      ],
      productTab: 0
    }
  },
  methods: {
    productTabChange (ind) {
      this.productTab = ind
    },
    tabClick (index) {
      this.$refs.mySwiper.swiper.slideTo(index, 300)
    }
  },
  components: {
    swiper,
    swiperSlide,
    Footer,
    Header
  }
}
</script>

<style lang="scss">
.hotspotarticle h2{
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  margin-bottom: 8px;
  @include moreline(2);
}
.frontpage {
  @include wh(100%, auto);
  background: #f6f8fb;
  header {
    height: 82px !important;
    background: linear-gradient(
      180deg,
      rgba(3, 20, 29, 1) 0%,
      rgba(4, 33, 50, 0) 100%
    ) !important;
    padding: 0px 130px !important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .header-menu {
      li {
        font-size: 18px;
        color: #fff;
        margin-top: 25px !important;
        border-right: none !important;
      }
      .router-link-exact-active {
        font-size: 18px !important;
        /* color: rgba(18, 33, 88, 0.5); */
      }
    }
    .header-login {
      line-height: 82px;
      color: #fff;
      span {
        cursor: pointer;
        padding: 0px 10px;
      }
    }
  }
  .banner {
    @include minwidth();
    .swiper-pagination {
      span {
        width: 100px;
        height: 5px;
        border-radius: 0px;
      }
      .swiper-pagination-bullet-active {
        opacity: 0.4;
        background: $color-theme;
      }
    }
    .hotspotarticle {
      position: relative;
      bottom: 100px;
      z-index: 10;
      width: 70%;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      padding: 40px;
      background: #fff;
      box-shadow: 0px 10px 20px 10px rgba(18, 33, 88, 0.05);
      border-radius: 10px;
      margin: 0 auto;
      dl {
        display: flex;
        width: 31%;
        cursor: pointer;
        dd {
          padding-left: 4%;
          position: relative;
          p:nth-child(2) {
            @include moreline(3);
          }
          p:last-child {
            color:#0000FF;
            position: absolute;
            bottom: 0;
            font-size: 16px;
            /* color: $color-theme; */
          }
        }
      }
    }
  }
  .hotdetail {
    width: 86%;
    background: #fff;
    .swiper-pagination .swiper-pagination-bullet-active {
      opacity: 0.4;
      background: $color-theme;
    }
    .hotspotarticle {
      width: 75%;
      @include minwidth();
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 85px 0px;
      dl {
        display: flex;
        width: 31%;
        cursor: pointer;
        dd {
          padding-left: 4%;
          position: relative;
          h2 {
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
            margin-bottom: 10px;
            @include moreline(2);
          }
          p:nth-child(2) {
            line-height: 27px;
            @include moreline(3);
          }
          p:last-child {
            position: absolute;
            bottom: 0;
            font-size: 16px;
            color: $color-theme;
          }
        }
      }
    }
  }
  .productcentre {
    @include wh(70%, auto);
    @include minwidth();
    margin: 0 auto;
    margin-top: -20px;
    padding: 5px 0px 31px 0px;
    box-sizing: border-box;
    .productcentre-title {
      text-align: center;
      line-height: 1.5;
      font-weight: 500;
      h2 {
        font-size: 24px;
        color: rgba(47, 49, 61, 1);
      }
      h3 {
        font-size: 20px;
        color: #838596;
      }
    }
    .productcentre-desc {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      .boxshadow {
        box-shadow: 0px 8px 12px 0px rgba(157, 159, 201, 0.3);
        z-index: 10;
      }
      dl {
        width: 48%;
        height: 360px;
        background: #fff;
        padding: 25px 85px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 10px;
        position: relative;
        text-align: center;
        dt {
          @include wh(110px, 110px);
          border-radius: 50%;
          border: 1px solid rgba(213, 224, 233, 1);
          line-height: 110px;
          margin: 0 auto;
        }
        dd {
          padding-left: 3%;
          h2 {
            font-size: 20px;
            color: #2f313d;
            font-weight: 500;
            margin-bottom: 20px;
            margin-top: 17px;
            color: #2f313d;
          }
          p {
            @include moreline(7);
            color: #51535f;
            font-size: 16px;
            font-weight: 500;
            line-height: 29px;
          }
        }
        .d3 {
          margin-left: 10px;
          float: left;
          width: 0;
          height: 0;
          border-width: 15px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
          position: absolute;
          bottom: -29px;
          left: 46%;
        }
      }
    }
  }
  .ourproduct {
    @include wh(70%, auto);
    background: #fff;
    margin: 0 auto;
    display: flex;
    margin-bottom: 80px;
    @include minwidth();
    .ourproduct_img{
      width: 163px;
      height: 153px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dl {
      display: flex;
      cursor: pointer;
      padding: 55px 35px;
      width: 33.3%;
      box-sizing: border-box;
      dd {
        flex: 1;
        padding-left: 4%;
        position: relative;
        h2 {
          height: 22px;
          /* line-height: 34px; */
          font-size: 18px;
          font-weight: 500;
          color: #2f313d;
          margin-bottom: 6px;
          margin-top: 2px;
          @include moreline(2);
        }
        p:nth-child(2) {
          @include moreline(3);
          font-size:14px;
          font-weight:500;
          color:rgba(125,127,139,1);
          line-height:25px;
        }
        p:last-child {
          position: absolute;
          bottom: 0;
          font-size:16px;
          font-weight:500;
          color:rgba(115,121,160,1);
          border:1px solid rgba(115,121,160,1);
          line-height:25px;
          border-radius:22px;
          padding: 3px 14px;
        }
      }
    }
  }
  .solution {
    @include wh(70%, 540px);
    margin: 0 auto;
    background: url('../../assets/images/solutiong_base.png') no-repeat;
    @include minwidth();
    .solution-section {
      @include wh(75%, 450px);
      margin: 0 auto;
      padding: 48px 0px 67px 0px;
      box-sizing: border-box;
      .solution-title {
        text-align: center;
        line-height: 1.5;
        color: #fff;
        h3{
          font-size: 24px;
        }
        h4 {
          font-size: 20px;
          /* font-weight: bold; */
        }
      }
      .solution-navMenu{
        .el-menu{
          font-size: 16px;
          padding: 0 95px;
          background: none;
        }
        .el-menu-item{
          font-size: 17px;
        }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled){
          background: none;
          color: #fff;
        }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
          background: none;
        }
        .el-menu--horizontal>.el-menu-item.is-active{
          border-bottom: 4px solid #409EFF;
        }
      }
      .solution-desc {
        display: flex;
        justify-content: space-around;
        margin-top: 58px;
        .swiper-container{
          height: 280px;
        }
        dl {
          display: flex;
          background: #fff;
          // padding: 20px;
          box-sizing: border-box;
          cursor: pointer;
          // border: 1px solid #999;
          .solution_img{
            width: 371px;
          }
          dd {
            margin: 50px 50px 30px 50px;
            position: relative;
            h2 {
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 20px;
              @include moreline(2);
            }
            p:nth-child(2) {
              @include moreline(3);
            }
            p:last-child {
              position: absolute;
              bottom: 30px;
              padding:4px 19px;
              border-radius: 15px;
              font-size: 13px;
              color: $color-white;
              background:#3064C3;
            }
          }
        }
      }
    }
  }
  .customercases {
    @include wh(70%, 720px);
    @include minwidth();
    margin: 0 auto;
    background: url('../../assets/images/partner_base.png') no-repeat;
    background-size: 100% 100%;
    .customercases-section {
      @include wh(100%, 450px);
      margin: 0 auto;
      padding: 48px 0px 67px 0px;
      box-sizing: border-box;
      .customercases-title {
        text-align: center;
        line-height: 1.5;
        h3 {
          font-size: 24px;
        }
        h4{
          font-size: 20px;
          color: #838596
        }
      }
      .customercases-desc {
        /* @include wh(87%, auto); */
        margin: 0 auto;
        width: 90%;
        margin-top: 30px;
        .customercases_imgs{
          display: inline-block;
          margin: 5px 11px;
          z-index: 10;
          width: 22%;
          img {
            // width: 11%;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
