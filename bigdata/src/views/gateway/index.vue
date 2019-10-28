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
    <div class="gateway">
      <h2>什么是物联网关？</h2>
      <p>
        物联网关是一种工业互联网数据远传终端，通过串口或者以太网连接现场设备PLC、OPC、变频器、仪表等，将数据通过以太网、GPRS、3G、4G、WIFI、ZigBee等方式，走MQTT、HTTP等协议传输到远端的服务器中，完成数据监控、本地逻辑控制、远程升级、故障报警等功能。
        已广泛用在智慧城市、电力、光伏、智能制造、智慧农业等各种智慧建设中。 智能物联网关是物联网系统核心入口， 选择功能强大、稳定可靠、易于扩展的物联网关是物联网项目实施的关键环节之一。</p>
      <h2>我们的物联智能网关</h2>
      <div class="gatewaytu">
        <div class="gatewaytuleft">
          <h2>37Data-gateway01</h2>
          <p class="left"><img src="../../assets/images/lyq.png" alt=""></p>
        </div>
        <div class="gatewayturight">
          <p>产品特点：</p>
          <p>◆ 基于Intel ATOM凌动Baytrail单核/双核/四核工业级低功耗处理器</p>
          <p>◆ 内置4G、WiFi、蓝牙、GPS、LoRa等无线通讯模块</p>
          <p>◆ 工业级-40°~+85°工业宽温设计，10年超长供货周期</p>
          <p>◆ 丰富的输入/输出接口满足工业现场需求：2xEthernet，2xUSB，2xUART，1xCAN，1xVGA Output</p>
          <p>◆ 支持Windows7/8/10操作系统</p>
          <p>◆ 支持各物联网系统下的边缘计算应用，支持远程管理及远程升级</p>
        </div>
      </div>
      <h2>智能网关的优势</h2>
      <div class="info">
        <dl v-for='(item,index) in infoData'>
          <dt><img :src="item.img" alt=""></dt>
          <dd>{{item.tit}}</dd>
        </dl>
      </div>
    </div>
    <div class="cruxss">
      <div class="smallcruxs">
        <p class="p">智能网关能够实现的三个功能</p>
        <div class="cruxsContext">
          <div class="cruxsBox" v-for='(item, index) in importantvalue' :key='index'>
            <div class="cruxsLeft">
              <img :src="item.img" alt="">
            </div>
            <div class="cruxsRight">
              <h2>{{item.tit}}</h2>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backstage">
      <h2>智能网关的后台管理系统</h2>
      <div class="backstagebox">
        <div class="left">
          <h3>物联网平台系统</h3>
          <p>我们提供的工业智能网关互联网解决方案，很好的实现大量设备的入网、数据采集、存储、信息推送及设备监控、管理、远程编程、维护等功能。实现PC、app等移动终端的互联互通，一体管控。</p>
        </div>
        <div class="right">
          <img src="../../assets/images/phone.png" alt="">
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
    mounted() {
      document.documentElement.scrollTop = 0
    },
    data() {
      return {
        importantvalue: [{
          tit: '1、感知网络接入的能力',
          content: '智能网关首先是具有对各节点属性、状态等信息的获取功能，即可以感知各节点的实时状态。其次是具有对节点的远程控制、唤醒、诊断等功能，即实现节点的自动化管理。',
          img: require('@/assets/images/gongn1.png')
        }, {
          tit: '2、异构网络互通的能力',
          content: '智能网关接入必然存在跨域通信的要求，因此需要完善的寻址技术，以确保所有节点的信息都能被准确、高效、安全地进行定位和查询。',
          img: require('@/assets/images/gongn2.png')
        }, {
          tit: '3、通讯与数据格式标准化',
          content: '智能网关必须实现传感网络到传统通信网络的协议转换，将协议适配层上传输的标准格式数据进行统一封装，将广域接入层下发的数据解包成标准格式数据，实现命令的解析，之后转换为感知层协议可以识别的信号和控制指令。',
          img: require('@/assets/images/gongn3.png')
        }],
        infoData: [{
          tit: '高性能、多扩展、高性价比',
          img: require('@/assets/images/luyou1.png')
        }, {
          tit: '支持SDK开发',
          img: require('@/assets/images/luyou2.png')
        }, {
          tit: '低功耗、多串口、Linux系统',
          img: require('@/assets/images/luyou3.png')
        }],
        datalists: ['传感器', '数据采集', '智能网关', '物联SaaS']
      }
    },
    methods: {
      godata(title) {
        if (title === '传感器') {
          this.$router.push({ name: 'sensor' })
        } else if (title === '数据采集') {
          this.$router.push({ name: 'acquisition' })
        } else if (title === '智能网关') {
          this.$router.push({ name: 'gateway' })
        } else if (title === '物联SaaS') {
          this.$router.push({ name: 'SaaS' })
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .backstage {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    box-sizing: border-box;

    h2 {
      font-size: 24px;
      text-align: center;
      padding: 20px 0 30px 0;
      box-sizing: border-box;
    }

    .backstagebox {
      display: flex;
      justify-content: space-between;

      .left {
        width: 40%;

        h3 {
          font-size: 20px;
          margin: 50px 0 20px 0;
        }

        p {
          line-height: 32px;
        }
      }

      .right {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }
  }

  .cruxss {
    width: 100%;
    height: auto;
    background: rgb(242, 242, 242);
    margin-top: 60px;
    padding-top: 30px;
    box-sizing: border-box;

    .smallcruxs {
      width: 80%;
      margin: 0 auto;
      padding-bottom: 30px;

      .p {
        font-size: 24px;
        text-align: center;
        padding: 40px 0 30px 0;
        box-sizing: border-box;
      }

      .cruxsContext {
        display: flex;
        flex-wrap: wrap;
        margin-left: 25px;
      }

      .cruxsBox {
        width: 50%;
        padding-right: 50px;
        padding-bottom: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .cruxsLeft {
          margin-right: 20px;
        }
        .cruxsRight{
          h2{
            font-size:20px;
            margin-bottom:10px;
          }
        }
      }
    }
  }

  .gateway,.boxinfo {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    padding-bottom: 100px;
    box-sizing: border-box;

    h2 {
      font-size: 24px;
      text-align: center;
      padding: 60px 0 30px 0;
      box-sizing: border-box;
    }

    p {
      font-size: 16px;
      line-height: 32px;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;

    dl {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;

      dt {
        width: 80px;
        text-align: center;

        img {
          width: 100%;
        }
      }

      dd {
        margin-top: 20px;
      }
    }

  }

  .gatewaytu {
    display: flex;
    width: 70%;
    border: 3px #ccc dashed;
    border-radius: 30px;
    overflow: hidden;
    padding: 20px 100px 50px 100px;
    margin: 0 auto;
    align-items: center;
    box-sizing: border-box;

    .gatewaytuleft {
      h2 {
        margin-bottom: 20px;
      }
    }

    .left {
      width: 250px;

      img {
        width: 100%;
      }
    }

    .gatewayturight {
      margin-left: 50px;

      h3 {
        font-size: 20px;
        margin-bottom: 20px;
      }

      p {
        padding: 4px 0;
        border-radius: 8px;
        text-align: left;
        font-size: 16px;
      }
    }
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

  .banner {
    height: 500px;
    position: relative;
  }

  .banner img {
    width: 100%;
    height: 100%;
  }

  .xia {
    font-size: 26px;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
  }

  .navs {
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

  .navs li {
    height: 100%;
    line-height: 70px;
    font-size: 16px;
  }

  .navs li:nth-child(3) {
    border-bottom: solid #313F5B 3px;
  }
</style>