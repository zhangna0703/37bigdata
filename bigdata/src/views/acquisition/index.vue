<template>
  <div>
    <div class="acquisition">
      <div class="banner">
        <img src="../../assets/images/service.png" ondragstart="return false" alt="">
      </div>
      <ul class="nav">
        <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
      </ul>
      <!--  -->
      <div class="data_analyse data_package">
        <div class="public_title">
          <h1 class="data_title">数据采集，是一切有效分析的前提</h1>
          <hr class="hr_top" />
        </div>
        <div class="public_graph">
          <img src="../../assets/images/graph1.jpg" ondragstart="return false" alt="">
        </div>
        <div  class="public_graph">
          <img src="../../assets/images/graph2.png" ondragstart="return false" alt="">
        </div>
      </div>
      <!--  -->
      <div class="data_analyse data_package" style="background: #f0f2f5;">
        <div class="public_title">
          <hr class="hr_top hr_top_color" />
          <h1 class="data_title">数据采集，是一切有效分析的前提</h1>
          <h4>数据采集要大、全、细、时</h4>
        </div>
      </div>
      <div class="record">
        <div class="record_content">
          <div v-for="(item, index) of acquisitionData" :key="item.id" class="record_wrapper">
            <div  v-if="index%2 == 1" class="record_desc">
              <h1>{{item.title}}</h1>
              <h2>{{item.type}}</h2>
              <h3>了解详情>></h3>
              <div class="record_details">
                <div  class="record_details_icons">
                  <img :src="item.iconImg" ondragstart="return false" alt="">
                </div>
                <p>{{item.desc}}</p>
              </div>
            </div>
            <div class="record_img">
              <img :src="item.recordImg" ondragstart="return false" alt="">
            </div>
            <div v-if="index%2 == 0" class="record_desc">
              <h1>{{item.title}}</h1>
              <h2>{{item.type}}</h2>
              <h3>了解详情>></h3>
              <div class="record_details">
                <div  class="record_details_icons">
                  <img :src="item.iconImg" ondragstart="return false" alt="">
                </div>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 数据采集 -->
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
        datalists: ['传感器', '数据采集', '智能判读'],
        acquisitionData: [
          {
            id: '001',
            title: '业务采集数据库',
            recordImg: require('@/assets/images/acquisition_1.png'),
            iconImg: require('@/assets/images/acquisition_icon.png'),
            type: '数据采集，是一切有效分析的前提数据采集要大、全、细、时采集存储在各个关系型数据库中的业务数据。让用户行为数据与业务数据结合，满足复杂分析场景。',
            desc: '陆游房车才用了三七数据的物联网数据服务，将全国的水电桩链接起来，实现全国管控，并可以预知设备的温度、湿度、元器件的损伤...'
          },
          {
            id: '002',
            title: '数据分析库',
            recordImg: require('@/assets/images/acquisition_2.png'),
            iconImg: require('@/assets/images/acquisition_icon.png'),
            type: '分析数据库是面向分析应用的数据库，与传统的数据库不同，它可以对数据进行在线统计、数据在 线分析、随即查询等发掘信息数据价值的工作，是数据库产品一个重要的分支',
            desc: '陆游房车才用了三七数据的物联网数据服务，将全国的水电桩链接起来，实现全国管控，并可以预知设备的温度、湿度、元器件的损伤...'
          }
        ]
      }
    },
    methods: {
      godata (title) {
        if (title === '传感器') {
          this.$router.push({ name: 'sensor' })
        } else if (title === '数据采集') {
          this.$router.push({ name: 'acquisition' })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.acquisition{
  .banner{
    img{
      width: 100%;
    }
  }
  .nav{
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
  .nav li{
    height: 100%;
    line-height: 50px;
  }
  .nav li:nth-child(2){
    border-bottom: solid 3px rgba(102, 153, 255, 1);
  }
  .data_package {
    padding: 30px 0 50px 0;
    text-align: center;
    // width: 80%;
    // margin: 0 auto;
  }
  .data_analyse {
    background: #fff;
    color: #313F5B;
    .public_title p {
      margin: 0 auto;
      width: 700px;
      line-height: 30px;
    }
    .data_title {
      font-size: 24px;
      padding: 18px 0;
    }
    .hr_top {
      width: 105px;
      height: 3px;
      background-color: #32C188 ;
    }
    .hr_top_color{
      background-color: #3C66B7 ;
    }
  }
  .record{
    // padding: 0 100px;
    background: #f0f2f5;
    .record_content{
      width: 80%;
      margin: 0 auto;
    }
    .record_wrapper{
      display: flex;
      justify-content: space-between;
      padding: 50px 0;
      border-bottom: 1px solid #ccc;
      .record_desc{
        width: 600px;
        h1{
          font-size: 22px;
          line-height: 65px;
        }
        h2{
          font-size: 18px;
          line-height: 25px;
        }
        h3{
          width: 100px;
          height: 35px;
          margin: 25px 0;
          line-height: 35px;
          text-align: center;
          border-radius: 20px;
          color: #fff;
          background: #3C66B7;
        }
        .record_details{
          display: flex;
          .record_details_icons{
            width: 150px;
            height: 120px;
            margin-right: 50px;
            img{
              width: 100%;
            }
          }
          p{
            padding-right: 30px;
          }
        }
      }
      .record_img{
        padding-top: 30px;
        width: 500px;
        img{
          display: inline-block;
          width: 400px;
          height: 300px;          
        }
      }
    }
    .record_wrapper:last-child{
      border: none;
    }
  }
}
</style>
