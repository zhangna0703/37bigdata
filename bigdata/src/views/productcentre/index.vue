<template>
  <div>
    <div class="product">
      <div class="banner">
        <img src="../../assets/images/service.png" alt="">
      </div>
      <div class="product_title">
        <span @click="setInternetSow" :class="{tit_active:titleState}">IOT物联网平台</span>
        <span @click="setBigSow" :class="{tit_active:!titleState}">DMP大数据平台</span>
      </div>
      <div class="bigTab">
        <!-- 物联网 -->
        <div class="internetThings" v-if='titleState==true'>
          <div class="data_analyse data_package">
            <div class="public_title">
              <hr class="hr_top" />
              <h1 class="data_title">以传感器为载体的物联网系统</h1>
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            <!-- <hr class="hr_bottom" />-->
            </div>
            <div class="analyse_con clearfix">
              <div  v-for="(item,index) in analyseData" :key="index">
                <div class="line"></div>
                <div v-for="(item,index) in item" :key="index" class="analyse_con_detail">
                  <div>
                    <h1>{{item.title}}</h1>
                    <p>{{item.p1}}</p>
                    <label>了解详情>></label>
                  </div>
                  <div class="user">
                    <h2>用户说:</h2>
                    <p class="user_say">{{item.p2}}</p>
                    <div class="img_par"><img src="../../assets/images/service.png"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="data_character data_package clearfix">
            <div class="public_title">
              <hr class="hr_top" />
              <h1 class="data_title">物联网平台产品特点</h1>
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            </div>
            <div v-for="(item,index) in InternetData" :key="index" class="data_character_detail">
              <h1>{{item.title}}</h1>
              <p>{{item.desc}}</p>
            </div>
          </div>
          <div class="data_strengths_bg">
            <div class="data_strengths data_package clearfix">
              <div class="public_title">
                <hr class="hr_top" />
                <h1 class="data_title">物联网应用行业或领域</h1>
                <p>物联网平台应用于工业、农业、智慧城市、物流，采集足够全面的属性、维度、指标，让积累的数据资产更加优质。</p>
              </div>
              <ul class="wlwstrengthsData">
                <li v-for="(item,index) in wlwstrengthsData" :key="index">
                  <p><img :src="item.img"/></p>
                  <h2>{{item.title}}</h2>
                </li>
              </ul>
            </div>
          </div>
          <div class="back">
          <div class="">
            <div class="data_strengths data_package clearfix">
              <div class="public_title">
                <hr class="hr_top" />
                <h1 class="data_title">物联网应用案例</h1>
              </div>
                <div class="application">
                  <div class="applicationLeft">
                    <img src="../../assets/images/u569.png" alt="">
                  </div>
                  <div class="applicationRight">
                    <h2>中关村集成电路产业园</h2>
                    <ul>
                      <li>*  中关村集成电路设计园能源监测系统是基于三七数据物联网平台</li>
                      <li>*  打造的新一代综合能源管理软件：</li>
                      <li>*  监控设备5000+</li>
                      <li>*  移动读数/移动计费</li>
                      <li>*  实时监控/预警</li>
                      <li>*  多维度能源分析/比对</li>
                      <li>*  移动运维/租户服务</li>
                      <li>*  园区综合能源优化</li>
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
                <li>*  全国房车营地水电桩硬件管理</li>
                <li>*  监控设备5000+</li>
                <li>*  移动读数/移动计费</li>
                <li>*  实时监控/预警</li>
                <li>*  多维度能源分析/比对</li>
                <li>*  移动运维/租户服务</li>
                <li>*  软硬件综合能源优化</li>
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
              <hr class="hr_top" />
              <h1 class="data_title">以用户为中心的大数据分析产品</h1>
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            <!-- <hr class="hr_bottom" />-->
            </div>
            <div class="analyse_con clearfix">
              <div  v-for="(item,index) in analyseData" :key="index">
                <div class="line"></div>
                <div v-for="(item,index) in item" :key="index" class="analyse_con_detail">
                  <div>
                    <h1>{{item.title}}</h1>
                    <p>{{item.p1}}</p>
                    <label>了解详情>></label>
                  </div>
                  <div class="user">
                    <h2>用户说:</h2>
                    <p class="user_say">{{item.p2}}</p>
                    <div class="img_par"><img src="../../assets/images/service.png"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="data_character data_package clearfix">
            <div class="public_title">
              <hr class="hr_top" />
              <h1 class="data_title">大数据产品特点</h1>
              <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
            </div>
            <div v-for="(item,index) in characterData" :key="index" class="data_character_detail">
              <h1>{{item.title}}</h1>
              <p>{{item.desc}}</p>
            </div>
          </div>
          <div class="data_strengths_bg">
            <div class="data_strengths data_package clearfix">
              <div class="public_title">
                <hr class="hr_top" />
                <h1 class="data_title">大数据DMP平台核心优势</h1>
                <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
              </div>
              <div v-for="(item,index) in strengthsData" :key="index" class="data_strengths_detail">
                <img :src="item.img"/>
                <div>
                  <h1>{{item.title}}</h1>
                  <p>{{item.desc}}</p>
                </div>
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
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      titleState: true,
      analyseData: [
        [
          { title: '提高转化，低成本获客', p1: '了解用户行为路径，优化核心转化路径，提高转化，把访客变成客户，把流量变成注册和购买。', p2: '一类顾客经常在购买尿布的同时也购买啤酒。看似毫无关联的两个品类的商品其实是一类社会现象所导致的，有很多年轻夫妇女主人在家带孩子，而男主人就去超市买尿布，通常会顺带着买些啤酒。' },
          { title: '提高转化，低成本获客', p1: '了解用户行为路径，优化核心转化路径，提高转化，把访客变成客户，把流量变成注册和购买。', p2: '一类顾客经常在购买尿布的同时也购买啤酒。看似毫无关联的两个品类的商品其实是一类社会现象所导致的，有很多年轻夫妇女主人在家带孩子，而男主人就去超市买尿布，通常会顺带着买些啤酒。' }],
        [
          { title: '提高转化，低成本获客', p1: '了解用户行为路径，优化核心转化路径，提高转化，把访客变成客户，把流量变成注册和购买。', p2: '一类顾客经常在购买尿布的同时也购买啤酒。看似毫无关联的两个品类的商品其实是一类社会现象所导致的，有很多年轻夫妇女主人在家带孩子，而男主人就去超市买尿布，通常会顺带着买些啤酒。' },
          { title: '提高转化，低成本获客', p1: '了解用户行为路径，优化核心转化路径，提高转化，把访客变成客户，把流量变成注册和购买。', p2: '一类顾客经常在购买尿布的同时也购买啤酒。看似毫无关联的两个品类的商品其实是一类社会现象所导致的，有很多年轻夫妇女主人在家带孩子，而男主人就去超市买尿布，通常会顺带着买些啤酒。' }]
      ],
      InternetData: [
        {title: '大接入与存储', desc: '物接入 IoT Hub,物解析 IoT Parser,规则引擎 Rule Engine,时序数据库 TSDB'},
        {title: '交互式分析', desc: '对于交互式分析，三七公司可以使用标准 SQL 查询直接在 S3 和 Glacier 中分析数据。Athena 属于无服务器服务，因此无需设置或管理基础设施。'},
        {title: '实时分析', desc: '对于实时分析，三七公司可以轻松收集、处理和分析流数据，如 IoT 遥测数据、应用程序日志和网站点击流。'}
      ],
      characterData: [
        {title: '大数据处理', desc: '对于使用 Spark 和 Hadoop 框架的大数据处理，三七Zhiku提供了一种托管服务，可以轻松、快速且经济高效地处理海量数据。支持 19 种不同的开源项目，包括 Hadoop、Spark、HBase 和 Presto，通过托管 EMR Notebooks 进行数据工程、数据科学开发和协作。每个项目都会在一个版本发布后的 30 天内在 EMR 中更新，轻松地确保您拥有来自社区的最新、最好的内容.'},
        {title: '交互式分析', desc: '对于交互式分析，三七公司可以使用标准 SQL 查询直接在 S3 和 Glacier 中分析数据。Athena 属于无服务器服务，因此无需设置或管理基础设施。您可以立即开始查询数据，在几秒钟内获得结果，并且仅需为您运行的查询付费。只需指向您存储在 三七公司S3 中的数据，定义架构并使用标准 SQL 开始查询即可。多数结果可在数秒内获取。'},
        {title: '实时分析', desc: '对于实时分析，三七公司可以轻松收集、处理和分析流数据，如 IoT 遥测数据、应用程序日志和网站点击流。这让您可以对传入数据湖的数据进行实时处理和分析并做出响应，无需等到收集完全部数据后才开始进行处理。'},
        {title: '实时分析', desc: '对于实时分析，三七公司可以轻松收集、处理和分析流数据，如 IoT 遥测数据、应用程序日志和网站点击流。这让您可以对传入数据湖的数据进行实时处理和分析并做出响应，无需等到收集完全部数据后才开始进行处理。'}
      ],
      strengthsData: [
        {img: require('@/assets/images/banner1.jpg'), title: '1.大数据处理', desc: '业内唯一整合三大运营商线上源头数据和银联商务线下消费数据，同时积累了海量广告投放数据及交易平台基础数据。'},
        {img: require('@/assets/images/banner1.jpg'), title: '2.交互式分析', desc: '利用大数据及实际投放数据，系统建立了科学的分类逻辑及模型算法。'},
        {img: require('@/assets/images/banner1.jpg'), title: '3.实时分析', desc: '基于持续迭代更新的用户画像体系，在campaign执行过程中根据核心用户画像调整目标人群，及投放策略，实现Campaign优。'},
        {img: require('@/assets/images/banner1.jpg'), title: '4.实时分析', desc: '通过业内领先技术进行线下CRM数据打通，从而实现在单一系统中的全渠道用户洞察。'}
      ],
      wlwstrengthsData: [
        {img: require('@/assets/images/u552.png'), title: '数据云存储与分析'},
        {img: require('@/assets/images/u553.png'), title: '集成数据更新'},
        {img: require('@/assets/images/u554.png'), title: '厂内互联互通'},
        {img: require('@/assets/images/u555.png'), title: '网关应用边缘分析'},
        {img: require('@/assets/images/u556.png'), title: '设备监控维护'},
        {img: require('@/assets/images/u558.png'), title: '生产线远程监控'},
        {img: require('@/assets/images/u559.png'), title: '安全控制'},
        {img: require('@/assets/images/u560.png'), title: '劳动力均衡'}
      ]
    }
  },
  components: {
    Footer
  },
  methods: {
    setInternetSow () {
      this.titleState = true
    },
    setBigSow () {
      this.titleState = false
    }
  }
}
</script>

<style lang="scss" scoped>
.product{
  .public_title{padding-bottom:66px;}
  /* .banner{box-sizing: border-box;height: 0;padding-bottom: 30.8%;overflow: hidden;background:url('../../assets/images/service.png');background-size: auto 100%;background-position-x: center;} */
  .banner{
    height: 480px;
    width: 100%;
    img{
      width: 100%;
    }
  }
  .product_title{text-align: center;padding:26px 0;
    span{display: inline-block; padding:20px 0;margin-right:50px;font-size:24px;}
  }
  .hr_top{width:50px;height: 2px;background-color:rgba(102, 153, 255, 1);}
  .data_title{font-size:24px;padding:18px 0;font-weight: bold;}
  .hr_bottom{width:80%;margin:0 auto;margin-top:50px;margin-bottom: 60px}
  .data_package{padding:30px 0 60px 0;text-align: center;}
  .data_analyse{background-color:rgba(242, 242, 242, 1);
    .analyse_con{width:80%;margin:0 auto;text-align: left;
      .line{border-bottom: 1px solid #D3D3D3;height:1px;clear: both;margin-bottom:36px;}
      .analyse_con_detail{width:32%;float:left;overflow: hidden;margin-right:10%;padding:36px 0;
      label{display:inline-block;padding:8px 26px;border-radius:20px;background:rgba(0, 153, 255, 1);color:$color-white;font-size:12px;margin:20px 0;}
      h1{font-size:18px;font-weight: bold;padding-bottom:20px;}
      .user{position:relative;
      h2{font-size:18px;margin:36px 0 12px 0;}
        .user_say{font-size:12px;width:58%;}
        .img_par{background:$color-white;width:66px;height:66px;position:absolute;top: 0;right:0;text-align:center;line-height: 66px;
          img{border-radius:360px;width:56px;height:56px;}
        }
      }
      }
    }
  }
  .analyse_con .analyse_con_detail:nth-child(2n){float: right;margin-right: 0;}
  .data_character{width:80%;margin:0 auto;}
  .data_character_detail{width:23%;text-align:left;float:left;margin-right:15%;padding-bottom:20px;
    h1{font-weight: bold;font-size:18px;margin-bottom:16px;}
    h1:before{content: '▉';color:rgba(25, 158, 216, 1);}
    p{padding-left:4%;}
  }
  .data_character_detail:nth-child(3n+1){margin-right:0;}
  .data_strengths_bg{background:rgba(242, 242, 242, 1);}
  .data_strengths{width:80%;margin:0 auto;}
  .data_strengths_detail{width:45%;float:left;margin-right:10%;display:flex;padding-bottom:52px;
    img{width:200px;height:200px;padding-right:5%;flex-shrink:0;}
    div{display:flex;flex-direction: column;text-align: left;
      h1{font-size:18px;margin-bottom:16px;padding-top:10px;}
    }
  }
  .data_strengths .data_strengths_detail:nth-child(2n+1){margin-right:0;}
  .tit_active{border-bottom:2px solid rgba(102, 153, 255, 1);font-weight:bold;}
}
.wlwstrengthsData {
  width: 70%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  li{
    width: 25%;
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    h2{
      margin-top: 10px;
    }
    p{
      width: 48%;
      height: 145px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.application{
  width:70%;
  margin: 0 auto;
  display: flex;
  .applicationRight{
    margin-left: 50px;
    line-height:32px;
    text-align: left;
    h2{
      color:#ff6633;
      font-size: 24px;
      margin-bottom: 10px;
    }
    li{
      font-size: 16px;
    }
  }
  .applicationRights{
    width: 587px;
    margin-right: 50px;
    line-height:32px;
    margin-left: 135px;
    text-align: left;
    h2{
      color:#ff6633;
      font-size: 24px;
      margin-bottom: 10px;
    }
    li{
      font-size: 16px;
    }
  }
  .applicationLeft{
    width: 50%;
    img{
      width: 100%;
    }
  }
  .applicationLefts{
    width: 50%;
    img{
      width: 100%;
    }
  }
}
  .ccc{
    background: rgba(242, 242, 242, 1);
    width: 100%;
    padding: 50px 0;
  }
  .bigTab .internetThings .back{
    width: 100%;
    background: #ffff;
  }
</style>
