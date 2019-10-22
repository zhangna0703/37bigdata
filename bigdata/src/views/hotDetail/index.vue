<template>
  <div class="city">
    <div class="city_left">
      <div class="city_lTop">
        <h2>{{dataLists.infoTitle}}</h2>
        <p>原创：{{dataLists.infoAuthor}}</p>
        <p>{{dataLists.infoAtptime}}</p>
        <div class="city_content" v-html='dataLists.infoDetails'></div>
      </div>
    </div>
    <div class="city_right">
      <h2>三七数据</h2>
      <p>
        北京三七数据技术有限公司成立于2014年10月，公司总部位于首都北京中关村科学城，在成都、长沙、深圳设有研发中心，是国家双软认定企业和国家高新技术企业。公司名字取名于一种中药材，其有散郁止血，肿定痛之功效，借鉴此含义作为三七数据的立家之本。公司致力于研究和应用大数据技术、物联网技术以及区块链技术，以解决社会问题和民生问题为己任，帮助企业、政府和社会组织从传统信息化向数字智能化转型，帮助个人实现更加美好的生活。
      </p>
      <p>公司的标语是：数据创造财富。一直以来，我们秉承真诚沟通、用心服务的企业核心文化理念，坚持用户至上，坚持创新驱动，坚持全员共赢，为百度、华为、中科软、中科院、航天五院、汕头航宇、韩旭化妆品、
        民生银行、中关村发展集团、三众能源、衡东县政府等企业政府组织提供了数字智能化转型技术服务和咨询服务。自公司成立以来，我们始终坚持客户至上的基本原则，我们认为，只有为客户提供超预期的产品和服务，我们才能立于不败之地。
      </p>
      <p>围绕帮助客户实现从传统信息化向数字智能化转型的使命，我们为客户提供数字化转型解决方案咨询、设计、研发、培训以及人才外包全链条服务，我们对产品和服务的要求是：High Scalability and High
        Availability. 我们的核心产品包括多位一体的客户关系管理系统、智慧园区整体解决方案及配套系统、复杂装备自动化测试解决方案及平台、新零售全套解决方案设备及平台、金融科技风控系统解决方案以及区块链解决方案。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataLists:{}
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0
    this.dataLists = JSON.parse(localStorage.getItem('detail'))
    console.log(this.dataLists)
  }
}
</script>
<style>

/* .header-menu{
  color: #000;
} */
.city{
  display: flex;
  width: 80%;
  margin: 100px auto 0;
}
.city_left{
  width: 78%;
  border-right: solid 1px #ccc;
}
.city_left h2{
  font-size: 18px;
  font-weight: 800;
}
.city_lTop>p{
  margin: 20px 0;
}
.city_right{
  padding-left: 30px;
  box-sizing: border-box;
  flex: 1
}
.city_right h2{
  font-weight: 800;
  margin-bottom: 20px;
  font-size: 16px;
}
.city_right p{
  margin-bottom: 20px;
}
.city_content{
  padding-right: 50px;
}
</style>
