<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/service.png" alt="">
    </div>
    <ul class="navh">
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
        <img src="../../assets/images/solution_banner1.jpg" alt="">
      </div>
    </div>
    <div class="content">
      <div class="right">
        <img src="../../assets/images/solution_banner1.jpg" alt="">
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
    </div><div class="content">
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
        <img src="../../assets/images/solution_banner1.jpg" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="bot_content">
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
          <li>
            <span><img src="../../assets/images/u1111.png" alt=""> </span><span>需求跟进</span>
          </li>
          <li>
            <span><img src="../../assets/images/u1111.png" alt=""> </span><span>定制化解决方案</span>
          </li>
          <li>
            <span><img src="../../assets/images/u1111.png" alt=""> </span><span>数据清洗提</span>
          </li>
          <li>
            <span><img src="../../assets/images/u1111.png" alt=""> </span><span>交付数据</span>
          </li>
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
      datalists: ['数据清洗', '数据分析', '智能挖掘', '智能获客']
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
  }
  // mounted () {
  //   this.$router.go(0)
  // }
}
</script>

<style>
.line{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 0 auto 50px;
  padding-top: 73px;
}
.line span{
  width: 200px;
  height: 1px;
  background: #eeeeee;
}
.line .point{
  width: 17px;
  margin: 0 2px;
  /* box-sizing: border-box; */
  height: 17px;
  background: #eeeeee;
  border-radius: 50%;
}
.bottom{
  width: 100%;
  height: 287px;
  background: rgba(153, 153, 153, 1);
}
.bot_content{
  width: 50%;
  margin: 0 auto;
}
.bot_list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 16px;
}
.bot_list span:first-child{
  margin-right: 8px;
}
.navh{
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    height: 50px;
    margin-top: 20px;
    font-size: 16px;
    border-bottom: solid 1px #ccc;
    cursor: pointer;
}
.navh li{
  height: 100%;
  line-height: 50px;
}
.navh li:nth-child(3){
  border-bottom: solid 3px rgba(102, 153, 255, 1);
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
.content{
  width: 55%;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  border-bottom: #ccc 1px dashed;
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
