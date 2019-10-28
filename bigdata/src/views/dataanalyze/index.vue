<template>
  <div>
      <div class="banner">
          <img src="../../assets/images/service_new.png" alt="">
          <div class="bannerboxs">
            <h2 class="animated bounceInUp">一切忠实于数据，数据创造价值，数据创造财富</h2>
            <p class="animated bounceInUp xia">忠实客户诉求，忠实真实数据，为企业提供有效的价值曲线，帮助企业走出困境。</p>
          </div>
        </div>
    <ul class="navs">
        <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
      </ul>
    <div class="contents">
      <div class="public_title">
        <h2 class="data_title">搭建为有多种运营需求服务的专业数据分析平台</h2>
        <span></span>
        <p>基于你的业务特点和多部门复合需求，三七数据帮你建立高效的数据指标体系，用先进的事件模型抽象用户行为,提供多维度、多指标的交叉分析能力，全面支撑各个团队的日常数据分析需求，驱动业务决策。</p>
      </div>
      <ul class="wlwstrengthsData">
        <li v-for="(item,index) in list" :key="index">
          <p><img :src="item.img"/></p>
          <!-- <p><img src="../../assets/images/dianshang_3.png" alt=""></p> -->
          <h2>{{item.title}}</h2>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
    <div class="bigbox">
      <div class="characteristics">
        <div class="public_title">
          <h2 class="data_title">产品特点</h2>
          <span></span>
          <p>提供从采集、建模、存储、分析到智能应用的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
        </div>
        <ul>
          <li v-for='(item,index) in characteristic' :key='index'>
            <h3>{{item.tit}}</h3>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="bot_content"><h2>合作流程</h2>
        <ol class="bot_img">
          <li><img src="../../assets/images/check-mark.png" alt=""></li>
          <li><img src="../../assets/images/studying-1.png" alt=""></li>
          <li><img src="../../assets/images/line-chart.png" alt=""></li>
          <li><img src="../../assets/images/chatting.png" alt=""></li>
        </ol>
        <div class="line">
          <span class="point"></span>
          <span></span>
          <span class="point"></span>
          <span></span>
          <span class="point"></span>
          <span></span>
          <span class="point"></span>
        </div>
        <ul class="bot_list">
          <li>需求跟进</li>
          <li>定制化解决方案</li>
          <li>数据清洗</li>
          <li>交付数据</li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      datalists: ['数据清洗', '数据分析', '智能挖掘'],
      list: [
        {
          img: require('@/assets/images/more1.png'),
          title: '多维度',
          content: 'Event + User双表模型手相用户行为，抓取每个行为背后的多维属性，满足多维度的交叉深度分析。'
        }, {
          img: require('@/assets/images/more2.png'),
          title: '多场景',
          content: '构建十大分析模型，分析渠道的拉新和转化，产品核心流程的体验优化，用户分群运营提升活跃和留存，满足多角色、多场景的分析需求。'
        }, {
          img: require('@/assets/images/more3.png'),
          title: '洞察深',
          content: '分析场景锁定人群，深度下钻洞察单一用户特征，行为序列分析还原每个用户的真实场景，让分析从宏观到微观。'
        }, {
          img: require('@/assets/images/more4.png'),
          title: '响应快',
          content: '这里不是有限几个场景预处理的假秒级，这里是全平台分析场景的实时秒级查询。'
        }, {
          img: require('@/assets/images/more5.png'),
          title: '多导出',
          content: '可导出多个阶段的数据，包括采集到的最细颗粒度数据、存储后的建模数据、分析后的结果数据等。'
        }, {
          img: require('@/assets/images/more6.png'),
          title: '可私有',
          content: '支持私有化部署，积累用户行为数据资产，确保数据安全，确保性能的前提下，硬件成本低。'
        }
      ],
      characteristic: [
        {
          tit: '提供丰富的图表类型',
          content: '50余种图表类型，涵盖柱形图、双轴图、漏斗图、帕累托图等。在此基础上，延展出投屏、幻灯片等数据可视化呈现形式，满足绝大多数数据表达需求。'
        }, {
          tit: '提供丰富的数据交互分析操作',
          content: '如钻取、联动、跳转，一键点击 即可层层剖析数据，发现问题。'
        }, {
          tit: '可根据业务、角色，快速搭建数据驾驶舱',
          content: '在垂直领域提炼通用的分析思路和模板，即刻接入您的数据，借鉴行业最佳数据分析实践，并进行自由排版布局。'
        }
      ]
    }
  },
  mounted () {
    document.documentElement.scrollTop = 0
  },
  methods: {
    godata (title) {
      if (title === '数据清洗') {
        this.$router.push({ name: 'datacleansing' })
      } else if (title === '数据分析') {
        this.$router.push({ name: 'dataanalyze' })
      } else if (title === '智能挖掘') {
        this.$router.push({ name: 'intelligentMining' })
      } else {
        this.$router.push({ name: 'SmartGuest' })
      }
    }
  }
}
</script>


<style scoped>
  .banner{
  height: 500px;
  position: relative;
}
.bot_content h2 { padding-top:50px;
    text-align: center;
    font-size: 26px;
    font-weight: 800;
}
  .banner img {
    width: 100%;
    height: 100%;
  }
  .bannerboxs {
    height: 100px;
    position: absolute;
    top: 25%;
    left: 10%;
    color: #fff;
    font-size: 46px;
    line-height: 70px;

  }

  .xia {
    font-size: 26px;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
  }
.line span{
  width: 510px;
  height: 8px;
  background: #3B6EF1;
}
.bigcontent{
  width: 100%;
  background: #F0F2F5;
  padding-top: 90px;
}
.bigcontent .content{
  margin-top: 0;
}
.line .point{
  width: 20px;
  margin: 0 -1px;
  /* box-sizing: border-box; */
  height: 20px;
  background: #3B6EF1;
  border-radius: 50%;
}
.bottom{
  width: 100%;
  height: auto;
  background: #F5F8FE;
}
.bot_content{
  width: 80%;
  margin: 0 auto;
  padding:0 0 140px 0;
}
.bot_img{
  padding-top: 100px;
  height: 120px;
  display: flex;
  justify-content:space-between;
  align-items: flex-end
}
.bot_img li{
  width: 105px;
  /* height: 102px; */
}
.bot_img li img{
  width: 100%;
}
.bot_list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PingFang-SC-Medium;
  font-size: 20px;
  color: #313F5B;
}
.bot_list span:first-child{
  margin-right: 8px;
}
.line{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px;
  padding-top: 39px;
}
.bigbox{
  width: 100%;    
  margin: 30px 0 97px 0;
}
.characteristics{
  width: 80%;
  margin: 0 auto;
  padding-top: 60px;
  box-sizing: border-box;
  color:#313F5B;
}
.characteristics .public_title span{
  width: 62px;
  height: 5px;
  display: block;
  background-color: #FE6021;
  margin: 0 auto;
}
.characteristics ul{
  margin-top: 105px;
  display: flex;
  justify-content: space-between;
}
.characteristics ul li{
  flex: 1;
  margin: 0 20px;
}
.characteristics ul li h3{
  margin-bottom: 15px;
  font-size: 19px;
  font-weight: 800;
  color: #FF9933;
}
.characteristics ul li p{
  font-size: 16px;
color: #5E6B84;
line-height: 26px;
margin-bottom: 30px;
width: 402px;
}
.characteristics ul li:first-child{
  margin-left: 0
}
.characteristics h2{
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 20px
}
.wlwstrengthsData{
  display: flex;
  justify-content: space-between;
  /* background: #eeeeee; */
  flex-wrap: wrap;
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
  margin-top: 40px;
}
.wlwstrengthsData li{
  box-shadow: 0 5px 10px 10px rgba(18,33,88,0.05);
  width: 31%;
  height: 300px;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  box-sizing: border-box;
  padding: 0 25px;
  box-sizing: border-box;
  /* font-size: 16px; */
  /* justify-content: center; */
}
.wlwstrengthsData li p:first-child{
  margin-top: 40px;
}
.wlwstrengthsData h2{
  font-family: PingFangSC-Medium;
  font-size: 20px;
  font-weight: 800;
  color: #313F5B;
  text-align: center;
  margin: 30px 0 20px 0;
}
.wlwstrengthsData p{
  font-family: PingFang-SC-Medium;
  font-size: 16px;
  color: #5E6B84;
  text-align: center;
  line-height: 26px;
}
.public_title{
  /* margin-top: 20px; */
  text-align: center;
  color:#313F5B;
}
.public_title span{
  width: 128px;
  height: 5px;
  display: block;
  background-color: #FE6021;
  margin: 0 auto;
}
.public_title h2{
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
}
.public_title p{
  margin-top: 15px;
  font-size: 16px;
}
.navs{
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    height: 70px;
    margin-top: 20px;
    font-size: 16px;
    border-bottom: solid 1px #ccc;
    cursor: pointer;
}
.navs li{
  height: 100%;
  line-height: 70px;
  font-size: 16px;
}
.navs li:nth-child(2){
  border-bottom: solid #313F5B 3px;
}

.left .span{
  width: 4px;
  height: 25px;
  margin-right:8px;
  background-color:rgba(102, 153, 255, 1);
}
.left h2{
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight:800;
  margin-bottom: 30px;
}
.contents{
  width: 80%;
  margin: 0 auto;
  margin-top: 90px;
  /* display: flex;
  justify-content: space-between;
  border-bottom: #ccc 1px dashed; */
  padding-bottom: 70px;
}
.left{
  width: 40%;
}
.right{
  width: 500px;
}
.right img{
  width: 100%;
  height: 100%;
}
.list li{
  font-size: 16px;
  line-height: 40px;
  display: flex;
  align-items: center
}
.list li span:first-child{
  margin: 0 10px 8px 0;
}
</style>
