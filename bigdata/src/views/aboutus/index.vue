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
        <div class="bannerb">
          <h2 class="animated bounceInUp">核心价值观：客户至上，创新驱动，全员共赢</h2>
          <h3 class="animated bounceInUp">基本素质：自驱动、有担当、能扛事、能抗压、正能量</h3>
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
                  <div class="desc">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三七数据技术有限公司成立于2014年12月，总部位于首都北京，是一家以大数据技术为特色的产业互联网技术公司。过去十年，消费互联网取得了非常快速的发展，未来十年属于产业互联网时代，产业互联网时代，数据是基石，三七数据立志成为成为大数据技术的布道者，产业互联网的领航者。通过对大数据技术的深度创新应用，助力传统产业与互联网深度融合，助力传统产业的转型发展！
                  </div>
                </div>
                <div class="company-moredesc">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三七数据是一家产业互联网公司，致力于为产业提供增值、高效、安全、高质量、国际化的数字化服务。目前，经过五年的专注研发，形成了大数据中台、物联网平台和行业级SaaS应用三大系列核心产品。
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>物联网平台</b>
                    主要解决数据的采集和监控问题，可以应用于百万级别智能设备数的实时采集、存储、分析、监控以及应用，目前该产品已经应用于中国航天科技集团、中关村发展集团、中国联合会等大型企事业单位的物联网系统建设，可以极大降低客户设备运维成本，提高监控和运营效率。
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>大数据中台</b>
                    是服务于企业内部的中枢神经，通过大数据中台技术，可以打通企业内部的数据和业务孤岛，打通企业内部数据和外部数据的连接，让企业内部业务和外部资源有效融合，可以极大地挖掘企业内外部数据资源的价值，促进企业从传统信息化企业向数据智能化企业转型，让数据在企业各部门、各业务之间高效流动，降低企业的运营成本和管理成本。目前该系统已经在国家电网、发现网、陆游房车等企业得到了有效验证和应用，应用了大数据中台技术后，我们所服务的企业运营管理成本节省30%以上。同事，大数据中台技术可以让我们的企业更好地挖掘外部数据资源的价值，可以帮助企业更快地获取更多的精准客户，从而带动营收的强劲增长。
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>行业级物联SaaS平台</b>
                    主要围绕提质、增效、降险三个核心使命展开，通过应用SaaS平台技术改善产品品质，提升企业的品牌形象；通过应用SaaS平台技术，提高企业的运营效率；通过应用SaaS平台技术，可以有效为降低企业运营风险提供决策支持。目前公司的核心SaaS产品包括医院运动康复科SaaS系统、企业级DMP平台以及企业级质量数据管理系统三大系列。运动康复科SaaS系统目前已经在国家体育总局、中煤医院、广西人民医院等组织得到了应用验证，可以有效积累康复运动数据，对数据进行深度定制应用，为用户提供更加贴心的运动康复服务。企业级DMP平台目前主要积累了文旅行业和教育行业的数据，可以为文旅行业和教育行业提供进准获客服务，目前已经在青岛、甘肃以及湖南郴州等景区得到了应用验证，可以大大提高企业的获客效率，降低企业的获客成本。质量数据管理平台目前主要应用于航天和汽车领域，航天领域是一个高度重视质量的行业，通过对历史航天器质量数据的分析和归类，对航天器的质量管理通决策参考；当前，我国汽车工业正处于崛起阶段，通过对汽车评价数据的采集和深度挖掘，了解客户对汽车各零部件的评价，发现汽车产品的缺陷和存在问题，并进行有针对性的改善和提升，全力提升汽车的产品体验和市场知名度，对我国汽车工业的崛起有非常积极的作用。
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前大数据和产业互联网正处于高速发展阶段，事实上，企业的数字化转型与我们国家当前大力主张的供给侧改革是一脉相承的，数字化转型是供给侧改革的核心和主题，因为企业内外部数据的融合，产业互联网上下游的融合，行业和产业的边界正在变得模糊，未来所有的企业都是大数据企业，都是产业互联网企业。
                    三七数据将把握产业互联网时代赋予的机会，继续深耕数据相关科学和技术，将数据技术与产业需求进行无缝结合，围绕知识图谱、企业级DMP平台、企业级质量数据管理平台、企业级数据智能平台、自然语言处理技术、企业级数据中台等核心技术，继续增强数据全产业链服务商这一核心定位，发扬“坚持用户至上，坚持创新驱动，坚持全员共赢”的核心价值观，继续践行用数据为用户解决问题，用数据为客户创造价值这一核心使命。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- aboutus tab end -->
          <!-- expect start -->
          <div class="expect-box">
            <p style="font-size:26px">我们的数据</p>
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
          <p class="core_team" style="font-size:26px">核心团队</p>
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
              <li><b>三七的使命：</b> 精于数据技术，赋能产业转型</li>
              <li><b>公司愿景：</b> 成为最优秀产业数字化服务提供商</li>
              <li><b>服务理念：</b> 真诚、用心、专业</li>
              <li><b style="color: #FF6633;">核心价值观：</b> 用户至上、创新驱动、全员共赢、拥抱变化、追求极致、敢于担当、奋斗不息</li>
              <li><b>三七员工基本精神：</b> 追求极致、舍我其谁、使命必达</li>
              <li><b>三七员工基本素质：</b> 自驱动、有担当、能扛事、能抗压、正能量</li>
            </ul>
          </div>


        </div>
        <!-- <div class="cultures gray">
          <h2 style="font-size:26px">三七员工核心竞争力</h2>
          <ul>
            <li>1. 强大的执行力</li>
            <li>2. 强大的自信力</li>
            <li>3. 强大的学习力</li>
            <li>4. 强大的服务力</li>
            <li>5. 强大的意志力</li>
            <li>6. 强大的融合力</li>
            <li>7. 强大的沟通力</li>
          </ul>
        </div>
        <div class="cultures centers">
          <h2 style="font-size:26px">三七数据的核心价值</h2>
          <div class="hr_red"></div>
          <p>用数据为客户创造价值</p>
          <ul>
            <li>1. 用数据帮企业维护老客户，开拓新客户，提高销售额。</li>
            <li>2. 用数据帮企业提高效率，降低成本。</li>
            <li>3. 用数据帮企业降低运营风险。</li>
            <li>4. 用数据帮企业优化产品和服务质量，提升企业口碑。</li>
            <li>5. 用数据帮企业实现国际化，做全球市场。</li>
          </ul>
        </div>
        <div class="cultures gray centers">
          <h2 style="font-size:26px">三七数据的核心能力及竞争力</h2>
          <div class="hr_red"></div>
          <p>用数据为客户创造价值</p>
          <ul>
            <li>1. 业务咨询及解决方案输出能力。</li>
            <li>2. 软件产品设计能力。</li>
            <li>3. 软件研发工程能力</li>
            <li>4. 大数据及架构输出能力：
              <ol>
                <li>a.帮企业消除数据孤岛。</li>
                <li>b.用数据帮企业实现内部业务的整合。</li>
                <li>c.用数据帮企业实现内部-外部业务的整合。</li>
              </ol>
            </li>
            <li>5. 人工智能以及算法设计能力。</li>
            <li>6. 数字化服务输出能力。</li>
            <li>7. 物联网及传感器技术输出能力。</li>
          </ul>
        </div>
        <div class="cultures centers">
          <h2 style="font-size:26px">三七数据的核心技术</h2>
          <div class="hr_red"></div>
          <ul>
            <li>1. 物联网传感器设计及实时数据采集技术</li>
            <li>2. 基于人工智能的数据实时判读及设备故障诊断技术</li>
            <li>3. 大数据中台技术，帮助客户建立自己的数据资产体系，实现数据价值的最大化。</li>
          </ul>
        </div> -->
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
        <h2>公司地址：海淀区弘祥1989创意产业园5106</h2>
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
            num: '50亿+',
            desc: '累计数据处理'
          },
          {
            num: '30亿+',
            desc: '清洗数据'
          },
          {
            num: '10亿+',
            desc: '数据分组'
          },
          {
            num: '2000+',
            desc: '服务行业客户'
          },
          {
            num: '1000+',
            desc: '合作客户'
          },
          {
            num: '5000+',
            desc: '目标客户'
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
      var that = this;
      setTimeout(function () {
        that.map();
      }, 1000)

      document.documentElement.scrollTop = 0
      console.log(this.$route, 'this.$route.query')
      var index = this.$route.query.index * 1
      if (index === 0) {
        document.documentElement.scrollTop = 680
      } else if (index === 1) {
        document.documentElement.scrollTop = 2150
      } else if (index === 2) {
        document.documentElement.scrollTop = 2655
      } else if (index === 3) {
        document.documentElement.scrollTop = 3260
      } else if (index === 4) {
        document.documentElement.scrollTop = 4800
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
          document.documentElement.scrollTop = 2150
        } else if (index === 2) {
          document.documentElement.scrollTop = 2655
        } else if (index === 3) {
          document.documentElement.scrollTop = 3260
        } else {
          document.documentElement.scrollTop = 4800

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

  .bannerb {
    height: 100px;
    position: absolute;
    top: 25%;
    left: 10%;
    color: #fff;
    font-size: 26px;
    line-height: 70px;
  }

  .bannerb h2 {
    font-size: 46px;
    /* margin-right:100px; */
  }

  .bannerb h3 {
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
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }

  .join_usFour span {
    position: absolute;
    bottom: 40px;
    padding: 4px 19px;
    cursor: pointer;
    border-radius: 15px;
    font-size: 13px;
    color: #fff;
    background: #3064C3;
  }

  .fourbox {
    position: relative;
    text-align: left;
    box-shadow: 0 4px 12px #999;
    background: #fff;
    /* flex: 1; */
    width: 29%;
    height: 350px;
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
  .cultures{
    width: 80%;
    margin: 0 auto;
    padding: 60px 0;
    text-align: center;
  }
  .cultures .hr_red{
    width: 163px;
    height: 2px;
    margin: 20px auto;
    background-color: red;
  }
  .cultures ol{
    margin-left: 30px;
    li{
      line-height:42px;
    }
  }
  .cultures p{
    margin-top: 10px;
  }
  .centers ul{
    text-align: left;
    width: 20%;
    margin:  0 auto;
  }
  .gray {
    background: #f2f2f2;
    width: 100%;
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

  .culture ul{
    margin-top: 30px;
    line-height: 60px;
    font-size: 20px;
  }
  .cultures ul{
    margin-top: 30px;
    line-height: 40px;
    font-size: 18px;
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

      img {
        width: 100%;
        height: 100%;
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
          .titles {
            font-size: 50px;
            font-weight: bold;
            line-height: 1;
            width: 100px;
            float: left;
            margin-right: 30px;
          }

          .desc {
            font-size: 18px;
            line-height: 28px;
          }
        }

        .company-moredesc {
          clear: both;
          margin-top: 30px;

          p {
            font-size: 18px;
            margin-top: 25px;
            line-height: 28px;
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

      p {
        text-align: center;
        margin: 30px 0;
      }

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

    .core_team {
      margin-top: 30px;
    }

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
      font-size: 26px;
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