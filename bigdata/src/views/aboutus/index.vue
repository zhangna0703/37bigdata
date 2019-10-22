<template>
  <div>
    <div class="aboutus">
      <!-- banner start -->
      <div class="banner">
        <!-- <swiper :options="bannerSwiperOption" ref="mySwiper">
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div :style="{background:'url('+item.imgurl+') center center / cover',height:'500px'}"></div>
          </swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
        <img src="../../assets/images/about_new.png" alt="">
        <div class="bannerboxs">
            <h2 class="animated bounceInUp">客户至上，创新驱动，全员共赢</h2>
            <h3 class="animated bounceInUp">是我们的核心价值观</h3>
          </div>
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
                  <p>围绕帮助客户实现从传统信息化向数字智能化转型的使命，我们为客户提供数字化转型解决方案咨询、设计、研发、培训以及人才外包全链条服务，我们对产品和服务的要求是：High Scalability and
                    High
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
          <p>37BigData 创始人&CEO</p>
          <div class="introduce">
            向永清，07年毕业于哈工大软件工程专业，获工学学士学位；2010年毕业于北京大学智能科学系计算机应用专业，获优秀毕业生，期间在微软亚洲研究院，中国船舶等单位实习。曾在中国航天科技集团五院总部工作，负责卫星综合测试系统设计以及卫星任务规划与仿真等工作。2016年创立三七数据科技有限公司，专注于帮助企业、政府和城市的数字化建设和数字化转型发展，应用大数据技术和人工智能技术促进科技、产业和人才的深度融合。
          </div>
        </div>
        <!-- core-team   end -->
        <div class="cultureImg">
          <img src="../../assets/images/qiye.png" alt="">
          <div class="culture">
            <h2 style="font-size:26px">企业文化</h2>
            <ul>
              <li><b>成立时间：</b> 2014年12月</li>
              <li><b>核心团队：</b> 全部来自北大、清华、哈工大等知名院校</li>
              <li><b>公司坐标：</b> 中关村软件园核心区</li>
              <li><b style="color: #FF6633;">核心价值观：</b> 坚持用户至上、坚持创新驱动、坚持全员共赢</li>
              <li><b>公司愿景：</b> 成为最优秀的数据全产业服务商</li>
              <li><b>公司使命：</b> 精于数据技术，赋能产业转型</li>
            </ul>
          </div>

        </div>
        <!-- join us  start -->
        <div class="join-us" ref='a2'>
          <div class="join-usbox">
            <div class="p">加入我们，让大数据世界变得更美好！</div>
            <div class="join_usFour">
              <div class="fourbox" v-for='(item,index) in getHiringdata' :key='index'>
                <h2>{{item.recruitPost}}</h2>
                <p>岗位职责：</p>
                <ul>
                  <li v-html='item.recruitDuty'></li>
                  <!-- <li v-for='(item,index) in item.recruitDuty' :key='index'>{{item}}</li> -->
                </ul>
                <span>查看详情</span>
              </div>
            </div>

          </div>
        </div>
        <!-- join us  end-->
      </div>
      <div class="companyAddress">
        <h2>公司地址</h2>
        <div id="allmap" ref="allmap"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { Hiring } from '@/api/productcentre'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapState } from 'vuex'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    data() {
      return {
        bannerSwiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        join_us: [
          {
            tit: '广告销售经理',
            content: ['1. 寻找有广告投放需求的客户饼洽谈合作；', '2. 挖掘客户需求、提供合适的解决方案']
          },
          {
            tit: '运营专员',
            content: ['1. 负责移动互眹网目媒体平台的日常运营及推广工作；', '2. 负责能够独立运营微信公众号，为粉丝策划与提供优质、']
          },
          {
            tit: '产品运营',
            content: ['1. 负责公司小程序和微信工作号的运营工作，包括用户；', '2. 通过用户运营、营销推广、产品优化等运营工作，制定关于']
          },
          {
            tit: 'UI设计',
            content: ['1.负责公司业务设计相关工作；', '2.负责营销类小游戏设计（比如天猫双十一营销活动）；']
          }
        ],
        imgList: [
          {
            imgurl: require('@/assets/images/about.png')
          }
          // {
          //   imgurl: require('@/assets/images/solution_banner1.jpg')
          // },
          // {
          //   imgurl: require('@/assets/images/solution_banner2.jpg')
          // }
        ],
        solutionTab: ['关于我们', '核心团队', '企业文化', '加入我们', '联系我们'],
        solutionTabIndex: 0,
        getHiringdata: [],
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
    computed: {
      ...mapState([
        'routerIndex'
      ])
    },
    watch: {
      routerIndex() {
        // console.log(this.routerIndex)
        this.changeSolutionTabIndex(this.routerIndex)
      }
    },
    mounted() {
      this.getHiring()
      this.map()
      document.documentElement.scrollTop = 0
      var index = this.$route.query.index * 1
      if (index === 0) {
        document.documentElement.scrollTop = 680
      } else if (index === 1) {
        document.documentElement.scrollTop = 1630
      } else if (index === 2) {
        document.documentElement.scrollTop = 2155
      } else if (index === 3) {
        document.documentElement.scrollTop = 2765
      } else if (index === 4) {
        document.documentElement.scrollTop = 4256
      }
    },
    methods: {
      getHiring() {
        Hiring().then(res => {
          this.getHiringdata = res.data.rows
          // console.log(res)
        })
      },
      map() {
        let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);// 初始化地图,设置中心点坐标和地图级别
        var point = new BMap.Point(116.2979433943, 40.0654116658)
        map.centerAndZoom(point, 18)
        var marker = new BMap.Marker(point) // 创建标注
        map.addOverlay(marker)    // 将标注添加到地图中
        var opts = {
          width: 200,     // 信息窗口宽度    
          height: 70,     // 信息窗口高度    
          title: "公司地址"  // 信息窗口标题   
        }
        var infoWindow = new BMap.InfoWindow("北京市海淀区唐家岭路甲1号弘祥1989创意产业园5106", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, map.getCenter());
        map.addControl(new BMap.MapTypeControl({//添加地图类型控件
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      },
      changeSolutionTabIndex(index) {
        this.solutionTabIndex = index
        // this.$refs.scrollbox.scrolltop = 200
        // document.getElementById("ID").scrollIntoView();
        if (index === 0) {
          document.documentElement.scrollTop = 680
        } else if (index === 1) {
          document.documentElement.scrollTop = 1600
        } else if (index === 2) {
          document.documentElement.scrollTop = 2155
        } else if (index === 3) {
          document.documentElement.scrollTop = 2765
        } else {
          document.documentElement.scrollTop = 4256

        }
      }
    }
  }
</script>

<style lang="scss">
  #allmap {
    height: 500px;
    overflow: hidden;

  }
  .bannerboxs {
    height: 300px;
    position: absolute;
    top: 30%;
    right: 20%;
    color: #fff;
    font-size: 50px;text-align: right;
    line-height: 100px;
  }
  .bannerboxs h2{
    margin-right:100px;
  }
  .bannerboxs h3{
    animation-delay: .5s;
      -webkit-animation-delay: .5s;
  }
  .cultureImg {
    height: 610px;
    position: relative;
  }

  .cultureImg img {
    width: 100%;
    height: 100%;
  }

  .join-usbox,
    {
    width: 80%;
    margin: 0 auto;
  }

  .join_usFour {
    display: flex;
    justify-content: space-between;
    height: 350px;
    position: relative;
  }

  .join_usFour span {
    position: absolute;
    bottom: 40px;
    padding: 4px 19px;
    border-radius: 15px;
    font-size: 13px;
    color: #fff;
    background: #3064C3;
  }

  .fourbox {
    text-align: left;
    box-shadow: 0 4px 12px #999;
    background: #fff;
    flex: 1;
    margin: 20px;
    padding: 30px;
    line-height: 26px;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
  }

  .fourbox li {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;

  }

  .fourbox h2 {
    font-size: 20px;
  }

  .fourbox p {
    margin: 10px 0;
  }

  .culture,
  .companyAddress {
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    text-align: center;
  }

  .culture {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .companyAddress h2 {
    font-size: 26px;
    margin-bottom: 30px;
  }

  .culture ul {
    margin-top: 30px;
    line-height: 60px;
    font-size: 20px;
  }

  .aboutus {
    .banner {
      position: relative;
      width: 100%;
      height: 500px;
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
    padding: 100px 0;
    background: #f2f2f2;
    box-sizing: border-box;

    .p {
      margin: 0 0 50px;
      font-size: 28px;
      font-weight: 800;
    }
  }

  .aboutus-tab-header {
    /* position: fixed;
  top: ; */
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px 0px;

    li {
      font-size: 16px;
      padding: 5px;
      cursor: pointer;
    }

    .aboutus-tab-high {
      border-bottom: 4px solid $color-theme;
      font-weight: bold;
    }
  }
</style>