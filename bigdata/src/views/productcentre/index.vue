<template>
  <div>
    <div class="product">
      <div class="banner">
        <img src="../../assets/images/service.png" alt="">
      </div>
      <div class="product_title">
        <span @click="setInternetSow" :class="{tit_active:titleState}">物联网平台</span>
        <span @click="setBigSow" :class="{tit_active:!titleState}">DMP大数据平台</span>
      </div>
      <div class="bigTab">
        <!-- 物联网 -->
        <div class="internetThings" v-if='titleState==true'>
          <div class="data_analyse data_package">
            <div class="public_title">
              <h1 class="data_title">以传感器为载体的物联网系统</h1>
              <hr class="hr_top" />
              <p>
                物联网平台是三七数据的核心产品之一，由感知层、传输层和应用层三层组成，可以为园区、城市提供实时数据监控、实时预警、移动缴费、移动运维、多维分析以及能源优化服务，为园区运营的安全提供保障，提高园区运营效率，降低园区运营成本。
              </p>
              <!-- <hr class="hr_bottom" />-->
            </div>
            <div class="analyse_con clearfix">
              <div v-for="(item,index) in wlwUser" :key="index" class="analyse_con_detail">
                <div>
                  <h1>{{item.titleEn}}</h1>
                  <h2>{{item.titleCn}}</h2>
                  <p class="p1">{{item.titleExplain}}</p>
                  <label style="cursor: pointer;"  @click='goDetails(item.titleCn)'>了解详情>></label>
                </div>
                <div class="user">
                  <div>
                    <div class="img_par">
                      <img :src="item.sayUserImg" />
                    </div>
                    <h2>用户说:</h2>
                  </div>
                  <p class="user_say">{{item.sayContent}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="data_character data_package clearfix">
            <div class="public_title">
              <h1 class="data_title">物联网平台产品特点</h1>
              <hr class="hr_top" />
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            </div>
            <div class="character_center">
              <div class="san">
                <h1><span></span>大接入与存储</h1>
                <ul>
                  <li>物接入 IoT Hub</li>
                  <li>物解析 IoT Parser</li>
                  <li>规则引擎 Rule Engine</li>
                  <li>时序数据库 TSDB</li>
                </ul>
              </div>
              <div class="san">
                <h1><span></span>分析与应用</h1>
                <ul>
                  <li>物可视 IoT Visualization</li>
                  <li>时序洞察 IoT EasyInsight</li>
                  <li>位置服务 DuMap</li>
                </ul>
              </div>
              <div class="san">
                <h1><span></span>控制面板和可视化</h1>
                <p>对于控制面板和可视化，三七公司为您提供快速，基于云的商业分析服务，使您可以轻松构建可从任何浏览器或移动设备访问的精致可视化效果和内容丰富的控制面板。</p>
              </div>
            </div>
          </div>
          <div class="data_strengths_bg">
            <div class="data_strengths data_package clearfix">
              <div class="public_title">
                <h1 class="data_title">物联网应用行业或领域</h1>
                <hr class="hr_top" />
                <p>物联网平台应用于工业、农业、智慧城市、物流，采集足够全面的属性、维度、指标，让积累的数据资产更加优质。</p>
              </div>
              <swiper :options="bannerSwiperOption" ref="mySwiper">
                <!-- slides -->
                <swiperSlide v-if="wlwstrengthsData.length>0" class="wlwstrengthsData"
                  v-for="(item,index) in wlwstrengthsData" :key="index">
                  <ul>
                    <li v-for="(item,index) in item.dataList" :key="index">
                      <p><img :src="item.img" /></p>
                      <h2>{{item.title}}</h2>
                    </li>
                  </ul>
                </swiperSlide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
              </swiper>
            </div>
          </div>
          <div class="back">
            <div class="">
              <div class="data_strengths data_package clearfix">
                <div class="public_title">
                  <h1 class="data_title">物联网应用案例</h1>
                  <hr class="hr_top" />
                </div>
                <div class="application">
                  <div class="applicationLeft">
                    <img src="../../assets/images/u569.png" alt="">
                  </div>
                  <div class="applicationRight">
                    <h2>中关村集成电路产业园</h2>
                    <ul>
                      <li>* 中关村集成电路设计园能源监测系统是基于三七数据物联网平台打造的新一代综合能源管理软件</li>
                      <li>* 监控设备5000+</li>
                      <li>* 移动读数/移动计费</li>
                      <li>* 实时监控/预警</li>
                      <li>* 多维度能源分析/比对</li>
                      <li>* 移动运维/租户服务</li>
                      <li>* 园区综合能源优化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ccc">

            <div class="application">
              <div class="applicationRights">
                <h2>陆游房车水电桩物联管控系统</h2>
                <ul>
                  <li>* 全国房车营地水电桩硬件管理</li>
                  <li>* 监控设备5000+</li>
                  <li>* 移动读数/移动计费</li>
                  <li>* 实时监控/预警</li>
                  <li>* 多维度能源分析/比对</li>
                  <li>* 移动运维/租户服务</li>
                  <li>* 软硬件综合能源优化</li>
                </ul>
              </div>
              <div class="applicationLefts">
                <img src="../../assets/images/u616.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!-- 大数据 -->
        <div class="bigdata" v-else>
          <div class="data_analyse data_package">
            <div class="public_title">
              <h1 class="data_title">以用户为中心的大数据分析产品</h1>
              <hr class="hr_top" />
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
              <!-- <hr class="hr_bottom" />-->
            </div>
            <div class="analyse_con clearfix">
              <div v-for="(item,index) in bigdataUser" :key="index" class="analyse_con_detail">
                <div>
                  <h1>{{item.titleEn}}</h1>
                  <h2>{{item.titleCn}}</h2>
                  <p class="p1">{{item.titleExplain}}</p>
                  <label style="cursor: pointer;" @click='goDetails(item.titleCn)'>了解详情>></label>
                </div>
                <div class="user">
                  <div>
                    <div class="img_par">
                      <img :src="item.sayUserImg" />
                    </div>
                    <h2>用户说:</h2>
                  </div>
                  <p class="user_say">{{item.sayContent}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="data_character data_package clearfix">
            <div class="public_title">
              <h1 class="data_title">大数据产品特点</h1>
              <hr class="hr_top" />
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            </div>
            <div class="application_center">
              <div v-for="(item,index) in characterData" :key="index" class="center_bot">
                <div class="charRight">
                  <h1><span></span>{{item.title}}</h1>
                  <p v-html='item.desc'></p>
                </div>
              </div>
            </div>
          </div>
          <div class="data_strengths_bg">
            <div class="data_strengths data_package clearfix">
              <div class="public_title">
                <h1 class="data_title">大数据DMP平台核心优势</h1>
                <hr class="hr_top" />
                <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
              </div>
              <div v-for="(item,index) in strengthsData" :key="index" class="data_strengths_detail">
                <img :src="item.img" />
                <div>
                  <h1>{{item.title}}</h1>
                  <p>{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="back">
            <div class="">
              <div class="data_strengths data_package clearfix">
                <div class="public_title">
                  <h1 class="data_title">大数据应用案例</h1>
                  <hr class="hr_top" />
                </div>
                <div class="application">
                  <div class="applicationLeft">
                    <img src="../../assets/images/u1028.png" alt="">
                  </div>
                  <div class="applicationRight">
                    <p>航天物资部供应商</p>
                    <!-- <h2>中关村集成电路产业园</h2>
                        <ul>
                          <li>*  中关村集成电路设计园能源监测系统是基于三七数据物联网平台</li>
                          <li>*  打造的新一代综合能源管理软件：</li>
                          <li>*  监控设备5000+</li>
                          <li>*  移动读数/移动计费</li>
                          <li>*  实时监控/预警</li>
                          <li>*  多维度能源分析/比对</li>
                          <li>*  移动运维/租户服务</li>
                          <li>*  园区综合能源优化</li>
                        </ul> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ccc">
            <div class="application">
              <div class="applicationRights">
                <p>航天物资部供应商</p>
                <!-- <h2>陆游房车水电桩物联管控系统</h2>
                  <ul>
                    <li>*  全国房车营地水电桩硬件管理</li>
                    <li>*  监控设备5000+</li>
                    <li>*  移动读数/移动计费</li>
                    <li>*  实时监控/预警</li>
                    <li>*  多维度能源分析/比对</li>
                    <li>*  移动运维/租户服务</li>
                    <li>*  软硬件综合能源优化</li>
                  </ul> -->
              </div>
              <div class="applicationLefts">
                <img src="../../assets/images/u1028.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { produce } from '@/api/productcentre'
  import Footer from '@/components/Footer.vue'
  import { mapState } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        titleState: true,
        analyseData: [
          [
            { title: '37-Sensor transmission', p1: '物联网业务一般以集中监测为主、控制为辅。', p2: '传感器传输' },
            { title: '37-Location review', p1: '基于传感器、移动终端、工业系统、楼控系统、家庭智能设施、视频监控系统等GPS（或其他卫星定位，如北斗）和无线通信技术，或只依赖于无线通信技术的定位，如基于移动基站的定位、RTLS等。', p2: '定位追溯' }],
          [
            { title: '37-Data collection', p1: '是指从传感器和其它待测设备等模拟和数字被测单元中自动采集非电量或者电量信号,送到上位机中进行分析，处理。数据采集系统是结合基于计算机或者其他专用测试平台的测量软硬件产品来实现自定义的测量系统。', p2: '数据采集' },
            { title: '37-Intelligent hardware', p1: '基于时间排程和事件响应规则的指挥、调度和派遣功能。或者对硬件的远程管控、指派维修管理、维护回传数据等。', p2: '智能硬件' }]
        ],
        analyseDatas: [
          [
            { title: '37-Data cleaning ', p1: '数据清洗主要是把有用的数据留下，无用的数据删掉。<br/>1.去除重复的数据；<br/>2.补全缺少数据的处理；', p2: '数据清洗' },
            { title: '37-Data analysis', p1: '数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，提取有用信息和形成结论而对数据加以详细研究和概括总结的过程。', p2: '数据分析' }],
          [
            { title: '37-Bigdata KDD', p1: '以用户为中心，通过对用户的深入分析，形成用户画像，深入理解用户需求，个性化的改造社区使其更有温度、更具黏性。同时基于对用户的理解，使得社群电商能够进行精准化的推荐，深入了解用户的需求。', p2: '智能挖掘' },
            { title: '37-Bigdata RV(receive visitors)', p1: '了解用户行为路径，优化核心转化路径，提高转化，把访客变成客户，把流量变成注册和购买。', p2: '智能获客' }]
        ],
        InternetData: [
          { title: '大接入与存储', desc: '物接入 IoT Hub,物解析 IoT Parser,规则引擎 Rule Engine,时序数据库 TSDB' },
          { title: '交互式分析', desc: '对于交互式分析，三七公司可以使用标准 SQL 查询直接在 S3 和 Glacier 中分析数据。Athena 属于无服务器服务，因此无需设置或管理基础设施。' },
          { title: '实时分析', desc: '对于实时分析，三七公司可以轻松收集、处理和分析流数据，如 IoT 遥测数据、应用程序日志和网站点击流。' }
        ],
        characterData: [
          { title: '大数据处理', desc: '公司将各行业客户业务和管理的需求痛点充分提炼并标准化，总结出一套严谨科学的方法论。<br/>将大数据分析及历史数据分析全部功能整合到一个平台，为您提供不同应用场景的大数据分析解决方案，持续地保护智能分析资产，提升数据洞察力，拓展业务视角，为智慧决策管理提供数据支持，为数字化转型提供动力引擎。' },
          { title: '实时分析',  desc: '对于实时分析，三七公司可以轻松收集、处理和分析流数据，如 IoT 遥测数据、应用程序日志和网站点击流。这让您可以对传入数据湖的数据进行实时处理和分析并做出响应，无需等到收集完全部数据后才开始进行处理。' },
          { title: '运营分析', desc: '对于运营分析（如应用程序监控、日志分析和点击流分析），三七公司允许您近乎实时地搜索、浏览、过滤、聚合和可视化数据。三七公司可以提供各种易于使用的 API 和实时分析功能，还可以实现生产工作负载需要的可用性、可扩展性和安全性。' },
          { title: '控制面板和可视化', desc: '对于控制面板和可视化，三七公司为您提供快速，基于云的商业分析服务，使您可以轻松构建可从任何浏览器或移动设备访问的精致可视化效果和内容丰富的控制面板。' }
        ],
        strengthsData: [
          { title: '1. 大数据处理', img: require('@/assets/images/finance1.png'), desc: '业内唯一整合三大运营商线上源头数据和银联商务线下消费数据，同时积累了海量广告投放数据及交易平台基础数据。' },
          { title: '2. 数据分析能力', img: require('@/assets/images/finance2.png'), desc: '利用大数据及实际投放数据，系统建立了科学的分类逻辑及模型算法。' },
          { title: '3. 线上Campaign优化能力', img: require('@/assets/images/finance3.png'), desc: '基于持续迭代更新的用户画像体系，在campaign执行过程中根据核心用户画像调整目标人群，及投放策略，实现Campaign优化。' },
          { title: '4. 完整的用户洞察', img: require('@/assets/images/finance4.png'), desc: '通过业内领先技术进行线下CRM数据打通，从而实现在单一系统中的全渠道用户洞察。' },
          { title: '5. 营销渠道优化能力', img: require('@/assets/images/finance5.png'), desc: '通过多维归因模型全方面分析渠道效率及贡献度。' }
        ],
        wlwstrengthsData: [
          {
            dataIndex: 1,
            dataList: [
              { img: require('@/assets/images/data1.png'), title: '数据云存储与分析' },
              { img: require('@/assets/images/data2.png'), title: '集成数据更新' },
              { img: require('@/assets/images/data3.png'), title: '厂内互联互通' },
              { img: require('@/assets/images/data4.png'), title: '网关应用边缘分析' },
              { img: require('@/assets/images/data5.png'), title: '设备监控维护' },
              { img: require('@/assets/images/data6.png'), title: '生产线远程监控' },
              { img: require('@/assets/images/data7.png'), title: '安全控制' },
              { img: require('@/assets/images/data8.png'), title: '劳动力均衡' }
            ]
          },
          {
            dataIndex: 2,
            dataList: [
              { img: require('@/assets/images/data1.png'), title: '数据云存储与分析' },
              { img: require('@/assets/images/data2.png'), title: '集成数据更新' },
              { img: require('@/assets/images/data3.png'), title: '厂内互联互通' },
              { img: require('@/assets/images/data4.png'), title: '网关应用边缘分析' },
              { img: require('@/assets/images/data5.png'), title: '设备监控维护' },
              { img: require('@/assets/images/data6.png'), title: '生产线远程监控' },
              { img: require('@/assets/images/data7.png'), title: '安全控制' },
              { img: require('@/assets/images/data8.png'), title: '劳动力均衡' }
            ]
          },
          {
            dataIndex: 3,
            dataList: [
              { img: require('@/assets/images/data1.png'), title: '数据云存储与分析' },
              { img: require('@/assets/images/data2.png'), title: '集成数据更新' },
              { img: require('@/assets/images/data3.png'), title: '厂内互联互通' },
              { img: require('@/assets/images/data4.png'), title: '网关应用边缘分析' },
              { img: require('@/assets/images/data5.png'), title: '设备监控维护' },
              { img: require('@/assets/images/data6.png'), title: '生产线远程监控' },
              { img: require('@/assets/images/data7.png'), title: '安全控制' },
              { img: require('@/assets/images/data8.png'), title: '劳动力均衡' }
            ]
          }
        ],
        wlwUser: [],
        bigdataUser: [],
        bannerSwiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      swiper,
      Footer,
      swiperSlide
    },
    computed: {
      ...mapState([
        'titleStateFlage'
      ])
    },
    watch: {
      titleStateFlage() {
        this.titleState = this.titleStateFlage
      }
    },
    mounted() {
      this.getproduceList()
      this.titleState = this.titleStateFlage
    },
    methods: {
      // 获取用户评论
      getproduceList() {
        produce().then((res) => {
          res.data.rows.forEach((item, i) => {
            if (item.sayType === 1) {
              this.wlwUser.push(item)
            } else {
              this.bigdataUser.push(item)
            }
          })
        })
          .catch((err) => {
            console.log(err)
          })
      },
      setInternetSow() {
        this.titleState = true
      },
      setBigSow() {
        this.titleState = false
      },
      goDetails(title) {
        console.log(title)
        if (title === '数据分析') {
          this.$router.push({ name: 'dataanalyze' })
        } else if (title === '数据清洗') {
          this.$router.push({ name: 'datacleansing' })
        } else if (title === '智能挖掘') {
          this.$router.push({ name: 'intelligentMining' })
        } else if (title === '传感器传输') {
          this.$router.push({ name: 'sensor' })
        } else if (title === '数据采集') {
          this.$router.push({ name: 'acquisition' })
        } else {
          this.$router.push({ name: 'SmartGuest' })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .public_title p {
    margin: 0 auto;
    width: 1200px;
    line-height: 30px;
  }

  .product {
    .public_title {
      padding-bottom: 66px;
    }

    /* .banner{box-sizing: border-box;height: 0;padding-bottom: 30.8%;overflow: hidden;background:url('../../assets/images/service.png');background-size: auto 100%;background-position-x: center;} */
    .banner {
      /* height: 480px; */
      width: 100%;

      img {
        width: 100%;
      }
    }

    .swiper-container {
      height: 510px;

      span {
        width: 92px;
        height: 5px;
        background: #000;
        opacity: 0.2;
      }
    }

    .product_title {
      text-align: center;
      padding: 26px 0;
      cursor: pointer;

      span {
        display: inline-block;
        padding: 20px 0;
        margin-right: 50px;
        font-size: 24px;
      }
    }

    .character_center {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
    }

    .application_center {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
      flex-wrap: wrap;

      .center_bot {
        width: 35%;
        text-align: left;
        margin-bottom: 90px;
        display: flex;
        align-items: center;

        p {
          margin-right: 40px;
          line-height: 26px;
          font-size: 16px;
        }
      }

      span {
        width: 7px;
        height: 21px;
        margin-right: 10px;
        background-color: #FE6021;
      }

      h1 {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 20px;
      }
    }

    .san {
      flex: 1;
      text-align: left;

      span {
        width: 7px;
        height: 21px;
        margin-right: 10px;
        background-color: #FE6021;
      }

      h1 {
        display: flex;
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 30px;
      }

      ul li,
      p {
        line-height: 26px;
        font-size: 16px;
      }
    }

    .hr_top {
      width: 105px;
      height: 3px;
      background-color: #FE6021;
    }

    .data_title {
      font-size: 24px;
      padding: 18px 0;
    }

    .hr_bottom {
      width: 80%;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 60px
    }

    .data_package {
      padding: 30px 0 100px 0;
      text-align: center;
    }

    .data_analyse {
      background: #f0f2f5;
      color: #313F5B;

      .analyse_con {
        width: 80%;
        line-height: 26px;
        margin: 0 auto;
        text-align: left;
        display: flex;
       flex-wrap: wrap;
        .line {
          border-bottom: 1px solid #D3D3D3;
          height: 1px;
          clear: both;
          margin-bottom: 36px;
        }

        .analyse_con_detail {
          width: 50%;
          overflow: hidden;
          margin-right: 10%;
          margin: 0 0 36px 0;
          padding: 60px;
           box-sizing: border-box;
          label {
            display: inline-block;
            padding: 8px 26px;
            border-radius: 20px;
            background: #313F5B;
            color: $color-white;
            font-size: 14px;
            margin: 20px 0;
          }

          h1 {
            font-size: 18px;
            font-weight: bold;
          }

          h2 {
            font-size: 19px;
            padding: 10px 0;
            font-weight: 800;
          }

          .p1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }

          .user {
            margin-top: 150px;

            >div {
              display: flex;
              align-items: center;
            }

            h2 {
              font-size: 18px;
              margin: 36px 0 12px 15px;
            }

            .img_par {
              width: 66px;
              height: 66px;
              text-align: center;
              line-height: 66px;

              img {
                border-radius: 360px;
                width: 56px;
                height: 56px;
              }
            }
          }
        }
      }
    }
    .data_character {
      width: 80%;
      margin: 0 auto;
      color: #313F5B;
    }

    .data_character_detail {
      width: 23%;
      text-align: left;
      float: left;
      margin-right: 15%;
      padding-bottom: 20px;

      h1 {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 16px;
      }

      h1:before {
        content: '▉';
        color: rgba(25, 158, 216, 1);
      }

      p {
        padding-left: 4%;
      }
    }

    .data_character_detail:nth-child(3n+1) {
      margin-right: 0;
    }

    .data_strengths_bg {
      background: #f0f2f5;
      color: #313F5B;
    }

    .data_strengths {
      width: 80%;
      margin: 0 auto;
    }

    .data_strengths_detail {
      width: 34%;
      float: left;
      margin-left: 10%;
      display: flex;
      padding-bottom: 90px;

      img {
        width: 150px;
        height: 150px;
        padding-right: 5%;
        flex-shrink: 0;
      }

      div {
        display: flex;
        flex-direction: column;
        text-align: left;

        h1 {
          font-size: 20px;
          margin-bottom: 16px;
          padding-top: 10px;
        }

        p {
          line-height: 26px;
        }
      }
    }

    .data_strengths .data_strengths_detail:nth-child(2n+1) {
      margin-right: 0;
    }

    .tit_active {
      border-bottom: 2px solid rgba(102, 153, 255, 1);
      font-weight: bold;
    }
  }

  .wlwstrengthsData {
    color: #313F5B;

    ul {
      width: 80%;
      display: flex;
      margin: 0 auto;
      flex-wrap: wrap;
      color: #313F5B;
      font-size: 20px;

      li {
        width: 25%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          margin-top: 10px;
        }

        p {
          /* width: 48%;
          height: 65%; */

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .application {
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding-top: 50px;

    .applicationRight {
      margin-left: 50px;
      line-height: 32px;
      text-align: left;

      h2 {
        color: #ff6633;
        font-size: 24px;
        margin-bottom: 10px;
      }

      li {
        font-size: 16px;
        margin-top: 6px;
      }
    }

    .applicationRights {
      width: 587px;
      margin-right: 50px;
      line-height: 32px;
      margin-left: 135px;
      text-align: left;

      h2 {
        color: #ff6633;
        font-size: 24px;
        margin-bottom: 10px;
      }

      li {
        font-size: 16px;
        margin-top: 6px;
      }
    }

    .applicationLeft {
      width: 50%;

      img {
        width: 100%;
      }
    }

    .applicationLefts {
      width: 50%;

      img {
        width: 100%;
      }
    }
  }

  .ccc {
    background: rgba(242, 242, 242, 1);
    width: 100%;
    padding: 7px 0 150px 0;

    .application {
      padding-top: 150px;
    }
  }

  .bigTab .internetThings .back {
    width: 100%;
    background: #ffff;
  }
</style>