<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/service.png" style="width: 100%;" alt="">
    </div>
    <ul class="nav">
      <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
    </ul>
    <div class="content">
      <div class="left">
        <h2><span class="span"></span> 数据分析/清洗</h2>
        <ul class="list">
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>评价内容分类</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>图片类型分类</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>图片标签分类</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span>  <span>垃圾流量清洗</span></li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>有效语音筛选</span> </li>
        </ul>
      </div>
      <div class="right">
        <img src="../../assets/images/report.png" alt="">
      </div>
    </div>
    <div class="bigcontent">
      <div class="content">
      <div class="right">
        <img src="../../assets/images/responsive.png" alt="">
      </div>
      <div class="left">
        <h2><span class="span"></span> 数据校验评估</h2>
        <ul class="list">
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>文本语法校验</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>图片相关性评估</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>搜索相关性评估</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span>  <span>情感倾向性评估</span></li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>质量优劣评估</span> </li>
        </ul>
      </div>
    </div>
    </div>
    <div class="content">
      <div class="left">
        <h2><span class="span"></span> 数据内容提取</h2>
        <ul class="list">
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>图片特定内容提取</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>图片文字提取</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>文本关键词提取</span> </li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span>  <span>语音转写文本</span></li>
          <li><span><img src="../../assets/images/yes.png" alt=""></span> <span>网页摘要撰写</span> </li>
        </ul>
      </div>
      <div class="right">
        <img src="../../assets/images/seo.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="bot_content">
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
      datalists: ['数据清洗', '数据分析', '智能挖掘']
    }
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
  },
  mounted() {
    document.documentElement.scrollTop = 0
  },
}
</script>

<style>
.line{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px;
  padding-top: 39px;
}
.banner img{
  width: 100%;
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
  padding-bottom: 210px;
}
.bot_img{
  padding-top: 180px;
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
.nav{
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
.nav li{
  height: 100%;
  line-height: 70px;
  font-size: 16px;
}
.nav li:first-child{
  border-bottom: solid #313F5B 3px;
}

.left .span{
  width: 7px;
  height: 21px;
  margin-right: 10px;
  background-color: #FE6021;
}
.left h2{
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight:800;
  margin-bottom: 30px;
}
.content{
  width: 55%;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 70px;
  align-items: center;
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
  font-size: 18px;
  line-height: 40px;
  display: flex;
  align-items: center
}
.list li span:first-child{
  margin: 0 10px 8px 0;
}
</style>
