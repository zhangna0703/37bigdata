<template>
  <div>
    <div class="aboutus">
      <!-- banner start -->
      <div class="banner">
        <swiper :options="bannerSwiperOption" ref="mySwiper">
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div :style="{background:'url('+item.imgurl+') center center / cover',height:'480px'}"></div>
          </swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- banner end -->
      <ul class="aboutus-tab-header">
        <li v-for="(item,index) in solutionTab" :key="index" :class="index===solutionTabIndex?'aboutus-tab-high':''"
          @click="changeSolutionTabIndex(index)" data-index='index'>{{item}}</li>
      </ul>
      <div class="scrollbox" ref="scrollbox">
        <div class="twobox" ref='a0'>
        <!-- aboutus tab start -->
          <div class="aboutus-tab">
            <div class="aboutus-tab-section">
              <div class="aboutus-more">
                <div class="company-introduction">
                  <div class="title">三七数据</div>
                  <div class="desc">
                    技术有限公司成立于2014年10月，公司总部位于首都北京中关村科学城，在成都、长沙、深圳设有研发中心，是国家双软认定企业和国家高新技术企业。公司名字取名于一种中药材，其有散郁止血，肿定痛之功效，借鉴此含义作为三七数据的立家之本。公司致力于研究和应用大数据技术、物联网技术以及区块链技术，以解决社会问题和民生问题为己任，帮助企业、政府和社会组织从传统信息化向数字智能化转型，帮助个人实现更加美好的生活
                  </div>
                </div>
                <div class="company-moredesc">
                  <p>公司的标语是：数据创造财富。一直以来，我们秉承真诚沟通、用心服务的企业核心文化理念，坚持用户至上，坚持创新驱动，坚持全员共赢，为百度、华为、中科软、中科院、航天五院、汕头航宇、韩旭化妆品、
                    民生银行、中关村发展集团、三众能源、衡东县政府等企业政府组织提供了数字智能化转型技术服务和咨询服务。自公司成立以来，我们始终坚持客户至上的基本原则，我们认为，只有为客户提供超预期的产品和服务，我们才能立于不败之地。
                  </p>
                  <p>围绕帮助客户实现从传统信息化向数字智能化转型的使命，我们为客户提供数字化转型解决方案咨询、设计、研发、培训以及人才外包全链条服务，我们对产品和服务的要求是：High Scalability and High
                    Availability.
                    我们的核心产品包括多位一体的客户关系管理系统、智慧园区整体解决方案及配套系统、复杂装备自动化测试解决方案及平台、新零售全套解决方案设备及平台、金融科技风控系统解决方案以及区块链解决方案。</p>
                </div>
              </div>
            </div>
          </div>
          <!-- aboutus tab end -->
          <!-- expect start -->
          <div class="expect-box">
            <ul class="expect">
              <li v-for="item in expectData" :key="item.desc">
                <p>{{item.num}}</p>
                <p>{{item.desc}}</p>
              </li>
            </ul>
          </div>
          <!-- expect end -->
        </div>
        <!-- core-team  start -->
        <div class="core-team" ref="a1">
          <p style="font-size:26px">核心团队</p>
          <p>创始团队成员来自国内外顶尖公司，共同打造有竞争力的数据服务产品。</p>
          <p><img src="../../assets/images/u1008.png" alt=""></p>
          <span>向永清</span>
          <p>37BigData  创始人&CEO</p>
          <div class="introduce">
            向永清，07年毕业于哈工大软件工程专业，获工学学士学位；2010年毕业于北京大学智能科学系计算机应用专业，获优秀毕业生，期间在微软亚洲研究院，中国船舶等单位实习。曾在中国航天科技集团五院总部工作，负责卫星综合测试系统设计以及卫星任务规划与仿真等工作。2016年创立三七数据科技有限公司，专注于帮助企业、政府和城市的数字化建设和数字化转型发展，应用大数据技术和人工智能技术促进科技、产业和人才的深度融合。
          </div>
        </div>
        <!-- core-team   end -->
        <!-- join us  start -->
        <div class="join-us" ref='a2'>
          <p>加入我们，让大数据世界变得更美好！</p>
          <div class="picture">
            <img width="400px" src="../../assets/images/u1013.png" alt="">
          </div>
        </div>
        <!-- join us  end-->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState} from 'vuex' 
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      bannerSwiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      imgList: [
        {
          imgurl: require('@/assets/images/solution_banner2.jpg')
        },
        {
          imgurl: require('@/assets/images/solution_banner1.jpg')
        },
        {
          imgurl: require('@/assets/images/solution_banner2.jpg')
        }
      ],
      solutionTab: ['关于我们', '核心团队', '加入我们', '联系我们'],
      solutionTabIndex: 0,
      expectData: [
        {
          num: '1500万+',
          desc: '页面访问量'
        },
        {
          num: '30万+',
          desc: '独立终端分析'
        },
        {
          num: '139万+',
          desc: '用户标签收集数据'
        },
        {
          num: '100亿+',
          desc: '用户数据总量'
        },
        {
          num: '500万+',
          desc: '月活终端用户量'
        },
        {
          num: '570万+',
          desc: '终端覆盖量'
        }
      ],
    }
  },
  components: {
    swiper,
    swiperSlide,
    Footer
  },
  computed:{
    ...mapState([
      'routerIndex'
    ])
  },
  watch: {
    routerIndex () {
      console.log(this.routerIndex)
      this.changeSolutionTabIndex(this.routerIndex)
    }
  },
  methods: {
    changeSolutionTabIndex (index) {
      this.solutionTabIndex = index
      // this.$refs.scrollbox.scrolltop = 200
      // document.getElementById("ID").scrollIntoView();
      if (index === 0) {
        document.documentElement.scrollTop = 680
      } else if (index === 1) {
        document.documentElement.scrollTop = 1650
      } else if (index === 2) {
        document.documentElement.scrollTop = 2155
      } else {
        document.documentElement.scrollTop = 2355
      }
    }
  }
}
</script>

<style lang="scss">
  .aboutus {
    .banner {
      width: 100%;
      height: 480px;
      @include minwidth();
      margin: 0 auto;
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
    }
    .aboutus-tab {
      @include minwidth();
      @include wh(100%, auto);
      background: #fff;
      .aboutus-tab-section {
        @include wh(100%, auto);
        background: #f2f2f2;
      }
      .aboutus-more {
        @include wh(75%, auto);
        margin: 0 auto;
        padding: 50px 0px;
        box-sizing: border-box;
        .company-introduction {
          .title {
            font-size: 50px;
            font-weight: bold;
            line-height: 1;
            width: 100px;
            float: left;
            margin-right: 30px;
          }
          .desc {
            font-size: 16px;
            line-height: 28px;
            margin-left: 10px;
          }
        }
        .company-moredesc {
          clear: both;
          margin-top: 50px;
          p {
            font-size: 16px;
            margin-top: 25px;
            line-height: 26px;
          }
        }
      }
      .aboutus-core {
        height: 400px;
        background: yellowgreen;
      }
      .aboutus-join {
        height: 400px;
        background: pink;
      }
      .aboutus-contact {
        height: 400px;
        background: lightcoral;
      }
    }
    .expect-box {
      @include wh(100%, auto);
      @include minwidth();
      padding: 80px;
      box-sizing: border-box;
      background: #fff;
      .expect {
        width: 65%;
        /* background: yellowgreen; */
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 26%;
          height: 140px;
          border: 1px solid #f7f7f7;
          margin: 20px;
          text-align: center;
          align-items: center;
          box-shadow: 0 0 10px #eee;
          border-radius: 10px;
          p {
            color: #f6615b;
            font-weight: bold;
            line-height: 1.1;
          }
          p:first-child {
            font-size: 40px;
            margin: 40px 0 10px 0;
          }
        }
      }
    }
  }
.core-team {
  padding-top: 20px;
  text-align: center;
  height: 485px;
  background: rgba(242, 242, 242, 1);
  p {
    padding: 10px 0;
  }
  .introduce {
    width: 46%;
    margin: 20px auto 0;
    text-align: left;
    line-height: 25px;
    font-size: 16px;
  }
}
.join-us {
  text-align: center;
  padding-top: 120px;
  box-sizing: border-box;
  p {
    margin: 0 0 120px;
    font-size: 28px;
    font-weight: 800;
  }
  /* .picture{
    width: 600px;
    display: flex;
    justify-content: center;
  } */
}
.aboutus-tab-header {
  /* position: fixed;
  top: ; */
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 60px 0px;
  li {
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
  }
  .aboutus-tab-high {
    border-bottom: 4px solid $color-theme;
    font-weight: bold;
  }
}
</style>
