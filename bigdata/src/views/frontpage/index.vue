<template>
  <div>
    <div class="frontpage">
      <!-- <Header></Header> -->
      <!-- banner start -->
      <div class="bannerstart">
        <swiper :options="bannerSwiperOption" ref="mySwiper">
          <!-- slides -->
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div class="banner_swiper" :style="{background:'url('+item.imgurl+') center center / cover',height:'600px'}" oncontextmenu="return false;"></div>
          </swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"><img src="../../assets/images/JTleft.png" alt=""></div>
          <div class="swiper-button-next" slot="button-next"><img src="../../assets/images/rightJT.png" alt=""></div>
        </swiper>
        <div class="hotspotarticle">
          <dl @click='goDetail(item)' v-for="item in hotspotData" :key="item.title">
            <dt :style="{background:'url('+item.infoImg+') center center / cover',height:'145px'}">
            </dt>
            <dd>
              <h2>{{item.infoTitle}}</h2>
              <p>{{item.infoProfile}}</p>
              <p @click.stop='gomore'>更多→</p>
            </dd>
          </dl>
        </div>
      </div>
      <!-- banner end -->
      <!-- productcentre start -->
      <div class="productcentre">
        <div class="productcentre-title">
          <h2>产品中心</h2>
          <h3>PRODUCT</h3>
        </div>
        <div class="productcentre-desc">
          <dl v-for="(item,index) in productcentreData" :key="index" @mousemove="productTabChange(index)"
            :class="index==productTab?'boxshadow':''">
            <dt>
              <img :src="item.img" ondragstart="return false" alt="">
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
          <dt class="ourproduct_img" :style="{background:'url('+item.img+') center center / cover',height:'170px'}">
            <!-- <img :src="item.img" alt="" ondragstart="return false"> -->
          </dt>
          <dd>
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <p @click='more(item.title)' class="ourproductMore">了解更多</p>
          </dd>
        </dl>
      </div>
      <!-- ourproduct end -->
      <!-- solution start -->
      <div class="solution">
        <img class="solution_img" src="../../assets/images/solutiong_base.png" alt="">
        <div class="solution-section">
          <div class="solution-title">
            <h3>解决方案</h3>
            <h4>SOLUTION</h4>
          </div>
          <!--solution navMenu -->
          <div class="solution-navMenu">
            <el-menu :default-active="solutionMenu" v-if="solutionMenu" class="el-menu-demo" mode="horizontal">
              <el-menu-item v-for="(item, index) of navMenuDtat" :key="index" @click="tabClick(item.id)"
                :index="item.id">{{item.title}}</el-menu-item>
            </el-menu>
          </div>
          <!-- solution  swiper-->
          <div class="solution-desc">
            <swiper :options="ourproductswiperOption" ref="mySwiper">
              <swiperSlide v-for="(item, ind) in solutionData" :key="item.title">
                <dl>
                  <dt class="solution_img" :style="{background:'url('+item.img+') center center / cover',height:'400px'}">
                    <!-- <img :src="item.img" alt=""> -->
                  </dt>
                  <dd>
                    <h2>{{item.title}}</h2>
                    <p v-html='item.desc'></p>
                    <p @click='chakan(ind)'>查看详情</p>
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
              <img :src="item.img" ondragstart="return false" alt="">
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
  import { newsInfoList } from '@/api/frontpage'
  import Footer from '@/components/Footer.vue'
  export default {
    data() {
      let _this = this
      return {
        bannerSwiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop:true

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
            stretch: -140,
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
            imgurl: require('@/assets/images/banner_1.png')
          },
          {
            imgurl: require('@/assets/images/banner.png')
          },
          {
            imgurl: require('@/assets/images/banner_2.png')
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
                title: '智能网关',
                desc:
                  '物联网关是一种工业互联网数据远传终端，通过串口或者以太网连接现场设备PLC、OPC、变频器、仪表等，将数据通过以太网、GPRS、3G、4G、WIFI、ZigBee等方式，走MQTT、HTTP等协议传输到远端的服务器中，完成数据监控、本地逻辑控制、远程升级、故障报警等功能。 已广泛用在智慧城市、电力、光伏、智能制造、智慧农业等各种智慧建设中。 智能物联网关是物联网系统核心入口， 选择功能强大、稳定可靠、易于扩展的物联网关是物联网项目实施的关键环节之一。',
                img: require('@/assets/images/ourproduct_3.png')
              }
            ]
          },
          {
            title: '大数据中台',
            desc:
              '数据中台可以助推大数据落地，基于中台架构，大数据可以和业务数据、财务数据结合在一起，循着轻量级、场景化、实时性、自动化、智能化的方向，共同赋能企业业务发展。',
            img: require('@/assets/images/bigdata.png'),
            morethings: [
              {
                title: '数据清洗',
                desc: '低质量的数据不仅会损害组织的成长，还会发出许多错误的数据洞察力的信号，导致糟糕的决策。数据科学家认识到数据清理的重要性，这就是为什么他们几乎80%的时间都花在清理和收集新数据上。',
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
                  '数据挖掘平台支持多种高效实用的机器学习算法，包含了分类、回归、聚类、预测、关联，5大类机器学习的成熟算法。其中包含了多种可训练的模型：逻辑回归、决策树、随机森林、朴素贝叶斯、支持向量机、线性回归、K均值、DBSCAN、高斯混合模型。除提供主要算法和建模功能外，Smartbi Mining数据挖掘平台还提供了必不可少的数据预处理功能，包括字段拆分、行过滤与映射、列选择、随机采样、过滤空值、合并列、合并行、JOIN、行选择、去除重复值、排序、增加序列号、增加计算字段等。',
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
            desc: '解决企业数据孤岛的痛点；<br/>跨部门、多业务线数据完全独立，无法全局分析；<br/>动辄上千个埋点，不知如何定义和管理数据模型；<br/>打通 CRM 和数据分析平台， 快速判断线索跟进优先级；',
            img: require('@/assets/images/ourproduct_1.png')
          },
          {
            title: '数字营销方案',
            desc:
              '数字营销,就是指借助于互联网络、电脑通信技术和数字交互式媒体来实现营销目标的一种营销方式。<br/>解决企业营销信息不对称的问题；<br/>解决促销的局限的问题；<br/>解决广告效率不高的问题；<br/>发掘出未曾注意过的市场与空间；<br/>大大提升企业管理的精度；',
            img: require('@/assets/images/ourproduct_2.png')
          },
          {
            title: '风险管控方案',
            desc: '-能源审计<br/>-快速节能诊断<br/>-能源管理体系建设<br/>-水、电、热平衡测试<br/>-漏水点检查<br/>-用电系统（设备)测试<br/>-供热管网节能测试<br/>-蒸汽加热设备节能测试',
            img: require('@/assets/images/ourproduct_3.png')
          },
          {
            title: '质量管控方案',
            desc: '提供多维度的商品质量分析，使企业整个质量管理过程更规范、透明；<br/>提供系统的自定义功能，方便用户灵活的记录产品质量报表管理；<br/>方便用户对产品的检测数据进行采集、分析；<br/>便于生产管理人员及时的发现问题；',
            img: require('@/assets/images/ourproduct_4.png')
          },
          {
            title: '精准获客方案',
            desc: '基于用户画像的关怀、挽回、激励等策略；<br/>提供安全、可管、可控及可视的能力，确保平台及数据安全；<br/>提供人工智能、机器学习的技术支撑能力;<br/>对接业务生产系统，打通商业价值的最后一公里；',
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
        productTab: 0,
        pageNum: 1,
        pageSize: 3
      }
    },
    mounted() {
      this.getNewsInfoList()
    },
    methods: {
      chakan(ind){
        this.$router.push({ name: 'solution', query: { index: ind } })
      },
      more(title) {
        if (title === '数据分析') {
          this.$router.push({ name: 'dataanalyze' })
        } else if (title === '数据清洗') {
          this.$router.push({ name: 'datacleansing' })
        } else if (title === '智能挖掘') {
          this.$router.push({ name: 'intelligentMining' })
        } else if (title === '传感器') {
          this.$router.push({ name: 'sensor' })
        } else if (title === '数据采集') {
          this.$router.push({ name: 'acquisition' })
        }else if(title==='物联SaaS'){ this.$router.push({ name: 'SaaS' })}
        else if(title==='智能网关'){ this.$router.push({ name: 'gateway' })}
      },
      goDetail(detail) {
        this.$router.push({ name: 'hotDetail' })
        window.localStorage.setItem('detail', JSON.stringify(detail))
      },
      gomore() {
        this.$router.push({ name: 'journalism' })
      },
      // 获取新闻栏数据
      getNewsInfoList() {
        let data = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
        newsInfoList(data).then((res) => {
          this.hotspotData = res.data.rows
        })
          .catch((err) => {
            console.log(err)
          })
      },
      productTabChange(ind) {
        this.productTab = ind
      },
      tabClick(index) {
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
.banner_swiper{
  position: relative;
}
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: none;
    font-size: 70px;
    width: 50px;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 120px;
  }

  /* .header-menu{
    color: #fff!important;
  } */
  .ourproductMore {
    cursor: pointer;
  }

  .hotspotarticle h2 {
    font-size: 16px;
    line-height: 26px;
    font-weight: bold;
    margin-bottom: 8px;
    @include moreline(2);
  }

  .frontpage {
    @include wh(100%, auto);
    background: #f2f2f2;

    /* header {
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
      .tag-div {
        font-size: 18px;
        color: #fff;
        margin-top: 25px !important;
        border-right: none !important;
        // .menu-wrapper{
        //   opacity: 0.6;
        // }
      }
      .router-link-exact-active {
        font-size: 18px !important;
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
  } */
    .bannerstart {
      @include minwidth();

      .swiper-pagination {
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          opacity: .5;
        }

        .swiper-pagination-bullet-active {
          width: 50px;
          border-radius: 20px;
          opacity: .5;
          background: #fff;
        }
      }

      .hotspotarticle {
        position: relative;
        bottom: 100px;
        z-index: 10;
        width: 80%;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 40px;
        background: #fff;
        box-shadow: 0px 4px 20px 10px rgba(18, 33, 88, 0.05);
        border-radius: 10px;
        margin: 0 auto;

        dl {
          display: flex;
          width: 31%;
          cursor: pointer;

          dt {
            width: 186px;
            height: 145px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          h2 {
            font-size: 16px;
            font-weight: bold;
            line-height: 27px;
            margin-bottom: 10px;
            @include moreline(2);
          }

          dd {
            flex: 1;
            padding-left: 4%;
            position: relative;

            p:nth-child(2) {
              @include moreline(2);
            }

            p:last-child {
              color: #0000FF;
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

    }

    .productcentre {
      @include wh(80%, auto);
      @include minwidth();
      margin: 0 auto;
      margin-top: -60px;
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
          /* font-family: Arnprior; */
        }
      }

      .productcentre-desc {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .boxshadow {
          box-shadow: 0px 4px 12px 0px rgba(157, 159, 201, 0.3);
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
      @include wh(80%, auto);
      background: #fff;
      margin: 0 auto;
      display: flex;
      margin-bottom: 80px;
      @include minwidth();

      .ourproduct_img {
        width: 170px;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      dl {
        display: flex;
        padding: 55px 35px;
        width: 33.3%;
        box-sizing: border-box;

        dd {
          padding-left: 4%;
          position: relative;
          flex: 1;

          h2 {
            height: 22px;
            /* line-height: 34px; */
            font-size: 18px;
            font-weight: 500;
            color: #2f313d;
            margin-bottom: 6px;
            margin-top: 2px;
            @include moreline(1);
          }

          p:nth-child(2) {
            @include moreline(3);
            font-size: 14px;
            font-weight: 500;
            color: rgba(125, 127, 139, 1);
            line-height: 25px;
          }

          p:last-child {
            position: absolute;
            bottom: 0;
            font-size: 16px;
            font-weight: 500;
            color: rgba(115, 121, 160, 1);
            border: 1px solid rgba(115, 121, 160, 1);
            line-height: 25px;
            border-radius: 22px;
            padding: 3px 14px;
          }
        }
      }
    }

    .solution {
      @include wh(100%, 700px);
      margin: 0 auto;
      @include minwidth(); position: relative;
      .solution_img{
      height: 700px;
      width: 100%;
      }
      .solution-section {
        top: 0;
        z-index: 999;
        margin: 0 auto 67px;
        padding-top: 48px;
        box-sizing: border-box;
        position: absolute;
        .solution-title {
          text-align: center;
          line-height: 1.5;
          color: #fff;

          h3 {
            font-size: 24px;
          }

          h4 {
            font-size: 20px;
            /* font-weight: bold; */
          }
        }

        .solution-navMenu {
          .el-menu {
            font-size: 16px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-around;
            background: none;
            width: 70%;
            margin: 0 auto;
          }

          .el-menu-item {
            font-size: 17px;
            padding: 0;
          }

          .el-menu--horizontal>.el-menu-item:not(.is-disabled) {
            background: none;
            color: #fff;
          }

          .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
            background: none;
          }

          .el-menu--horizontal>.el-menu-item.is-active {
            border-bottom: 4px solid #409EFF;
          }
        }

        .solution-desc {
          display: flex;
          justify-content: space-around;
          margin-top: 58px;

          .swiper-container {
            height: 400px;

            .swiper-wrapper {
              width: 70%;
            }
          }
          dl {
            height: 400px;
            display: flex;
            background: #fff;
            // padding: 20px;
            box-sizing: border-box;
            cursor: pointer;
            // border: 1px solid #999;
            border-radius: 8px;
            overflow: hidden;
            justify-content: space-between;

            .solution_img {
              width: 50%;

              img {
                width: 100%;
                margin-left: -5px;
                height: 100%;
              }
            }

            dd {
              margin: 50px 50px 30px 50px;
              position: relative;
              flex: 1;

              h2 {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
                @include moreline(2);
              }

              p:nth-child(2) {
                line-height: 36px;
                @include moreline(5);
              }

              p:last-child {
                position: absolute;
                bottom: 30px;
                padding: 4px 19px;
                border-radius: 15px;
                font-size: 13px;
                color: $color-white;
                background: #3064C3;
              }
            }
          }
        }
      }
    }

    .customercases {
      width: 100%;
      @include minwidth();
      margin: 0 auto;
      background: url('../../assets/images/partner_base.png') no-repeat;
      background-size: 100% 100%;

      .customercases-section {
        width: 80%;
        margin: 0 auto;
        padding: 48px 0px 67px 0px;
        box-sizing: border-box;

        .customercases-title {
          text-align: center;
          line-height: 1.5;

          h3 {
            font-size: 24px;
          }

          h4 {
            font-size: 20px;
            color: #838596
          }
        }

        .customercases-desc {
          /* @include wh(87%, auto); */
          margin: 0 auto;
          margin-top: 30px;

          .customercases_imgs {
            display: inline-block;
            margin: 5px 15px;
            z-index: 10;
            width: 21%;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>