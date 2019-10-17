<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/service.png" alt="">
    </div>
    <ul class="navy">
      <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
    </ul>
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
.banner img{
  width: 100%;
}
.navy{
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    height: 80px;
    margin-top: 20px;
    font-size: 16px;
    border-bottom: solid 1px #ccc;
    cursor: pointer;
}
.navy li{
  height: 100%;
  line-height: 80px;
  font-size: 24px;
}
.navy li:nth-child(4){
  border-bottom: solid 3px rgba(102, 153, 255, 1);
}

</style>
