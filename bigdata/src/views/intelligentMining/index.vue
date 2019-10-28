<template>
  <div>
      <div class="banner">
          <img src="../../assets/images/service_new.png" alt="">
          <div class="bannerboxs">
            <h2 class="animated bounceInUp">一切忠实于数据，数据创造价值，数据创造财富</h2>
            <p class="animated bounceInUp xia">忠实客户诉求，忠实真实数据，为企业提供有效的价值曲线，帮助企业走出困境。</p>
          </div>
        </div>
    <ul class="navh">
      <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
    </ul>
    <div class="capacity_box">
      <div class="public_title">
        <h2 class="data_title">DataMining数据挖掘</h2>
        <span></span>
        <p>用于预测性分析的独立产品，旨在为企业所做的决策提供预测性智能。</p>
        <div>
          数据挖掘平台支持多种高效实用的机器学习算法，包含了分类、回归、聚类、预测、关联，5大类机器学习的成熟算法。其中包含了多种可训练的模型：逻辑回归、决策树、随机森林、朴素贝叶斯、支持向量机、线性回归、K均值、DBSCAN、高斯混合模型。除提供主要算法和建模功能外，Smartbi
          Mining数据挖掘平台还提供了必不可少的数据预处理功能，包括字段拆分、行过滤与映射、列选择、随机采样、过滤空值、合并列、合并行、JOIN、行选择、去除重复值、排序、增加序列号、增加计算字段等。</div>
      </div>
      <div class="BigdataMining">
        <h2>37-BigdataMining数据挖掘产品特色</h2>
        <div class="Bigdata_san">
          <dl v-for='(item,index) in Bigdata_san' :key='index'>
            <dt>
              <p><img :src="item.img" alt=""></p>
              <h2>{{item.tit}}</h2>
            </dt>
            <dd>
              <p v-for='(item,index) in item.content' :key='index'>{{item}}</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="framework">
      <div class="smallframework">
        <h2>37-BigdataMining数据挖掘功能架构</h2>
        <p><img src="../../assets/images/u1493.png" alt=""></p>
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
    <div class="examplebox">
      <h2>数据挖掘应用场景示例</h2>
      <div class="exampletwo">
        <div class="exampletwobox" v-for='(item,index) in exampletwobox' :key='index'>
          <h2>{{item.tit}}</h2>
          <h4>需求分析</h4>
          <p v-html='item.content'></p>
          <div>
            <img :src="item.img" alt="">
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
    components: {
      Footer
    },
    data() {
      return {
        exampletwobox:[
          {
            tit: '电力窃漏电用户自动识别',
            content: '传统的防窃漏电方法主要通过定期巡检、定期校验电表、用户举报窃电、工作人员监控等方法来发现窃电或计量装置故障。但由于终端误报或漏报的情况过多，传统方法无法达到真正快速精确定位窃漏电嫌疑用户的目的。</br>为了精准识别出窃漏电用户，减少对专家的经验知识的依赖性，减少稽查工作人员的工作量，需要建立一个数据挖掘模型，自动检查、判断用户是否存在窃漏电行为。',
            img: require('@/assets/images/u1504.png'),
          },{
            tit: '航空公司客户价值分析',
            content: '信息时代的来临使得企业营销焦点从产品中心转变为客户中心，客户关系管理成为企业的核心问题。客户关系管理的关键问题是客户分类，通过客户分类，区分无价值客户、高价值客户，企业针对不同价值的客户制定优化的个性化服务方案，采取不同营销策略，将有限营销资源集中于高价值客户，实现企业利润最大化目标。准确的客户分类结果是企业优化营销资源分配的重要依据，客户分类越来越成为客户关系管理中亟待解决的关键问题之一。',
            img: require('@/assets/images/u1509.png'),
          }
        ],
        datalists: ['数据清洗', '数据分析', '智能挖掘'],
        Bigdata_san: [
          {
            img: require('@/assets/images/solution/big.png'),
            tit: '适合大型企业',
            content: [
              '分布式云计算，线性扩展，保证性能',
              '与BI平台无缝整合，一键发布挖掘模型',
              '模型库提高知识复用，减少重复投入',
              '支持跨库查询，统一控制数据访问权限',
              '训练自动化、模型自学习，提供企业级模型工厂'
            ]
          }, {
            img: require('@/assets/images/solution/person.png'),
            tit: '适合普通用户',
            content: [
              '直观易上手的流式建模,极简风格的节点配置界',
              '支持可视化探索,轻松理解数据质量和数据关联',
              '流程节点在线帮助，随用随查',
              '模型超参数自动调整,降低使用门槛'
            ]
          }, {
            img: require('@/assets/images/solution/suan.png'),
            tit: '专业算法能力',
            content: [
              '内35大类机器学习成熟算法',
              '支持文本分析处理',
              '支持使用Python扩展挖堀算法',
              '支持使用SQL扩展数据处理能力',
              '自动特征组合，实现有效的特征生成'
            ]
          }
        ]
      }
    },
    mounted() {
    document.documentElement.scrollTop = 0
    },
    methods: {
      godata(title) {
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
    // mounted () {
    //   this.$router.go(0)
    // }
  }
</script>

<style>
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
  .exampletwobox{
    flex:1;
    margin-right: 50px;
  }
  .exampletwobox>h2{
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .exampletwobox>h4{
    font-size: 16px;
    margin-bottom: 30px;
    font-size: 18px;
  }
  .exampletwobox>p{
    line-height: 26px;
    font-size: 17px;
    margin-bottom: 20px;
  }
  .exampletwobox>div{
    width: 100%;
  }
  .exampletwobox div img{
    width: 100%;
  }
  .exampletwo{
    display: flex;
    justify-content: space-between;
  }
  .examplebox{
    width: 80%;
    margin: 0 auto;
    padding: 90px 0 150px 0;
  }
  .examplebox>h2{
    font-size: 26px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 70px;
  }
  .line span {
    width: 510px;
    height: 8px;
    background: #3B6EF1;
  }

  .bigcontent {
    width: 100%;
    background: #F0F2F5;
    padding-top: 90px;
  }

  .bigcontent .content {
    margin-top: 0;
  }

  .line .point {
    width: 20px;
    margin: 0 -1px;
    /* box-sizing: border-box; */
    height: 20px;
    background: #3B6EF1;
    border-radius: 50%;
  }

  .bottom {
    width: 100%;
    height: auto;
    background: #F5F8FE;
  }

  .bot_content {
    width: 80%;
    margin: 0 auto;
    padding:0 0 140px;
  }
  .bot_content h2 { padding-top:50px;
    text-align: center;
    font-size: 26px;
    font-weight: 800;
  }
  .bot_img {
    padding-top: 100px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end
  }

  .bot_img li {
    width: 105px;
    /* height: 102px; */
  }

  .bot_img li img {
    width: 100%;
  }

  .bot_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFang-SC-Medium;
    font-size: 20px;
    color: #313F5B;
  }

  .bot_list span:first-child {
    margin-right: 8px;
  }

  .line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto 20px;
    padding-top: 39px;
  }

  .framework {
    background: #f2f2f2;
    padding: 90px 0;
    width: 100%;
  }

  .smallframework {
    width: 60%;
    margin: 0 auto;
  }

  .smallframework>h2 {
    font-size: 22px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 70px;
  }

  .smallframework p {
    width: 50%;
    margin: 0 auto;
  }

  .smallframework p img {
    width: 100%;
  }

  .BigdataMining {
    width: 60%;
    margin: 0 auto;
    padding: 70px 0;
    box-sizing: border-box;
    color: #313F5B;
  }

  .BigdataMining>h2 {
    font-size: 22px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 70px;
  }

  .Bigdata_san {
    width: 70%;
    margin: 0 auto;
  }

  .Bigdata_san dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .Bigdata_san dl dt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    height: 100px;
  }

  .Bigdata_san dl dt p {
    width: 50px;
    height: 50px;
  }

  .Bigdata_san dl dt h2 {
    font-weight: 800;
  }

  .Bigdata_san dl dt img {
    width: 100%;
  }

  .Bigdata_san dl dd {
    width: 300px;
    line-height: 28px;
    font-size: 14px;
  }

  .capacity_box {
    width: 80%;
    margin: 0 auto;
    padding-top: 90px;
  }

  .public_title span {
    width: 62px;
    height: 5px;
    display: block;
    background-color: #FE6021;
    margin: 0 auto;
  }

  .public_title {
    /* margin-top: 20px; */
    text-align: center;
    color: #313F5B;
  }

  .public_title span {
    width: 128px;
    height: 5px;
    display: block;
    background-color: #FE6021;
    margin: 0 auto;
  }

  .public_title h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .public_title p {
    margin-top: 15px;
    font-size: 16px;
  }

  .public_title div {
    /* width: 1069px; */
    line-height: 28px;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 16px;
    text-align: left;
  }
.banner{
  height: 500px;
  position: relative;
}
  .banner img {
    width: 100%;
    height: 100%;
  }

  .navh{
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
.navh li{
  height: 100%;
  line-height: 70px;
  font-size: 16px;
}

  .navh li:nth-child(3) {
    border-bottom: solid #313F5B 3px;
  }
</style>