<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/new.png" alt="">
    </div>
    <ul class="navy">
        <li @click="setInternetSow" :class="{tit_active:titleState}">三七新闻</li>
        <li @click="setBigSow" :class="{tit_active:!titleState}">行业资讯</li>
    </ul>
    <!-- <div class="newcontent" v-if='titleState==true'> -->
    <div class="newcontent">
      <dl v-for='(item,index) in hotspotData'  @click='goDetail(item)' :key='index'>
        <dt><img :src="item.infoImg" alt=""></dt>
        <dd>
          <h2>{{item.infoTitle}}</h2>
          <h3>2019-04-20</h3>
          <p>{{item.infoProfile}}</p>
        </dd>
      </dl>
    </div>
    <!-- <div v-else>
      news
    </div> -->
    <div class="block">
        <el-pagination
           @current-change="nextPage"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import { newsInfoList } from '@/api/frontpage'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      titleState: true,
      datalists: ['三七新闻', '行业资讯'],
      hotspotData:[],
      pageNum:1,
      pageSize:5,
      total:0
    }
  },
  mounted () {
    this.getNewsInfoList()
    this.getNewsInfoLists();
  },
  methods: {
    goDetail(detail){
      this.$router.push({ name: 'hotDetail',params:{detail:detail} })
    },
    setInternetSow() {
        this.titleState = true
      },
      setBigSow() {
        this.titleState = false
      },
    // 获取新闻栏数据
    getNewsInfoList () {
      let data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      newsInfoList(data).then((res) => {
        console.log(res, '9999')
        this.hotspotData = res.data.rows
      })
        .catch((err) => {
          console.log(err)
        })
    },
    getNewsInfoLists(){
      let datas ={
        pageNum: 1,
        pageSize: this.pageSizes
      }
        newsInfoList(datas).then((res) => {
        console.log(res, '9999')
        this.total = res.data.rows.length
      })
    },
    nextPage(e){
      this.pageNum = e
      // this.pageSize++;
      this.getNewsInfoList()
    },
    godata (title) {
      // if (title === '数据清洗') {
      //   this.$router.push({ name: 'datacleansing' })
      // } else if (title === '数据分析') {
      //   this.$router.push({ name: 'dataanalyze' })
      // } else if (title === '智能挖掘') {
      //   this.$router.push({ name: 'intelligentMining' })
      // } else {
      //   this.$router.push({ name: 'SmartGuest' })
      // }
    }
  }
  // mounted () {
  //   this.$router.go(0)
  // }
}
</script>

<style>
  .tit_active {
      border-bottom: 2px solid rgba(102, 153, 255, 1);
      font-weight: bold;
    }
.block{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 100px;
}
.el-pager .number{
  font-size: 18px;
}
.newcontent{
  width: 80%;
  margin: 0 auto;
  padding: 90px 0;
  box-sizing: border-box;
}
.newcontent dl{
  display: flex;
  justify-content: space-between;
  height: 270px;
  box-shadow: 0 4px 12px #ccc;
  margin-bottom: 50px;
}
.newcontent dl dt{
  width: 300px;
  height: 270px;
}
.newcontent dl dt img{
  width: 100%;
  height: 100%;
}
.newcontent dl dd{
  padding: 30px 50px;
  box-sizing: border-box;
  flex: 1;
}
.newcontent dl dd h2{
  font-size: 22px;
  font-weight: 800;
}
.newcontent dl dd h3{
  font-size: 16px;
  color: #666;
  margin: 20px 0 30px 0;
}
.newcontent dl dd p{
  line-height: 26px;
  font-size: 18px;
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
overflow: hidden;
}
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
