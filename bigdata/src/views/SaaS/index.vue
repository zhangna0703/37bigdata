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
      <ul class="characteristic">
        <li v-for='(item, index) in characteristic' :key='index'>
          <p><img :src="item.img" alt=""></p>
          <div>
            <h2>{{item.tit}}</h2>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
      <div class="bigkernel">
        <div class="kernel">
          <h2>物联核心功能</h2>
          <div class="fold">
            <dl>
              <dt>
                <h2>设备生命周期管理</h2>
                <p>提供设备周期管理功能，助力企业方便管理设备</p>
              </dt>
              <dd @click='changeWord1'>{{changeshow1}}</dd>
            </dl>
            <ul v-if="changeshow1==='-'">
              <li v-for='(item, index) in equipment1' :key='index'>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
          <div class="fold">
            <dl>
              <dt>
                <h2>远程调试</h2>
                <p>提供远程调试设备功能，方便真实设备开发调试；提供虚拟设备调试，方便应用和平台调试</p>
              </dt>
              <dd @click='changeWord2'>{{changeshow2}}</dd>
            </dl>
            <ul v-if="changeshow2==='-'">
              <li v-for='(item, index) in equipment2' :key='index'>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
          <div class="fold">
            <dl>
              <dt>
                <h2>远程维护</h2>
                <p>提供固件升级、远程配置服务帮助您远程维护设备</p>
              </dt>
              <dd @click='changeWord3'>{{changeshow3}}</dd>
            </dl>
            <ul v-if="changeshow3==='-'">
              <li v-for='(item, index) in equipment3' :key='index'>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
          <div class="fold">
            <dl>
              <dt>
                <h2>远程监控</h2>
                <p>提供日志以及运行数据监控，帮助您更好的监控设备</p>
              </dt>
              <dd @click='changeWord4'>{{changeshow4}}</dd>
            </dl>
            <ul v-if="changeshow4==='-'">
              <li v-for='(item, index) in equipment4' :key='index'>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="scene_box">
        <div class="scene">
          <div class="line"></div>
          <h2>客户实战场景</h2>
          <div class="anli">
            <dl>
              <dt><img src="../../assets/images/anli1.png" alt=""></dt>
              <dd>新能源监控</dd>
            </dl>
            <dl>
              <dt><img src="../../assets/images/anli2.png" alt=""></dt>
              <dd>智慧园区</dd>
            </dl>
          </div>
          <div class="scene_bottom">
            <div class="left">
              <img src="../../assets/images/solution/left.png" alt="">
            </div>
            <div class="right">
              <h2>新能源监控</h2>
              <h3>科技园区实时监控</h3>
              <p>
                能源管理系统由数据服务器、网络交换机、通讯服务器、数据采集器、及计量仪表组成，该系统配置专用服务器和能耗计量系统管理软件，能耗监测数据采取相应的冗余和备份，数据保存时间长。大大减少维护成本，提高园区服务能力。
              </p>
              <h3>能够解决</h3>
              <ul>
                <li v-for='(item, index) in solve' :key='index'>
                  <h3>{{item.tit}}</h3>
                  <p>{{item.content}}</p>
                </li>
              </ul>
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
      mounted() {
        document.documentElement.scrollTop = 0
      },
      data() {
        return {
        changeshow1: '+',
        changeshow2: '+',
        changeshow3: '+',
        changeshow4: '+',
        equipment1: [
          {
            tit: '设备注册',
            content: '您可以自定义设备唯一标识进行单个或者批量注册需要连接的设备'
          }, {
            tit: '设备分组',
            content: '您可以为某些设备创建分组，基于分组搜索或者管理您的海量设备'
          }, {
            tit: '设备拓扑',
            content: '您可以让子设备通过网关接入平台，并且可以基于设备的级联关系管理设备'
          }, {
            tit: '设备标签',
            content: '您可以为设备创建标签，并且可以基于标签搜索管理您的设备'
          }, {
            tit: '设备建模',
            content: '您可以在平台上对物理空间中的设备进行了数字化建模，方便云端应用快速集成'
          }, {
            tit: '设备状态',
            content: '您可以实时从平台获取设备online-offline状态变更通知'
          }, {
            tit: '设备数据采集',
            content: '您可以基于物模型上报设备数据到云端，并且会帮您将设备物模型数据结构化存储下来，您可以随时查询设备数据'
          }, {
            tit: '设备禁用删除',
            content: '您可以对可疑设备进行远程禁用或者删除，避免可疑设备造成不必要的损失'
          }
        ],
        solve: [
          {
            tit: '低成本',
            content: '提供开放API，轻松完成设备整个生命周期的管理，并且以快速检索到指定设备；'
          }, {
            tit: '智能化',
            content: '通过定义光伏逆变器的物模型，快速实现设备的智能化'
          }, {
            tit: '实时监控',
            content: '根据设备状态变化和设备上报数据分析，实现设备的实时监控。'
          }
        ],
        equipment2: [
          {
            tit: '真实设备调试',
            content: '您可以基于平台提供的在线调试功能，与真实设备进行物模型数据交互调试，包括调用设备服务、设置设备属性'
          }, {
            tit: '虚拟设备调试',
            content: '您可以基于平台的虚拟设备功能，基于物模型在云端虚拟设备，上报设备属性和事件，无需真实设备连接即可快速开发应用'
          }
        ],
        equipment3: [
          {
            tit: '远程控制',
            content: '您可以基于平台的远程控制能力，对单个设备或者海量设备下发指令控制'
          }, {
            tit: '固件升级',
            content: '您可以基于平台提供的固件升级能力，对大规模设备进行远程升级'
          }, {
            tit: '远程配置',
            content: '您可以基于平台提供的远程配置能力，对海量设备下发配置文件'
          }
        ],
        equipment4: [
          {
            tit: '日志服务',
            content: '提供设备全链路日志监控，实时知晓设备当前状态，监控设备并排除问题'
          }, {
            tit: '运行数据监控',
            content: '您可以在平台实时监控设备运行时数据，例如监控设备温度曲线'
          }
        ],
          characteristic: [
          {
            tit: '低成本',
            content: '提供海量设备数据的存储，并开放了丰富的设备管理接口，省去了用户直接存储和管理数据的成本',
            img: require('@/assets/images/solution/capacity1.png')
          }, {
            tit: '远程管理',
            content: '提供远程控制、远程调试、远程升级、远程配置设备的能力，不需要连接设备串口，即可管理设备',
            img: require('@/assets/images/solution/capacity2.png')
          }, {
            tit: '快速检索',
            content: '支持从海量设备中快速检索到指定名称或指定标签的设备，简化了海量设备管理的困难',
            img: require('@/assets/images/solution/capacity3.png')
          }, {
            tit: '设备数字化',
            content: '通过在平台定义设备的属性、事件、服务的物模型，将设备数字',
            img: require('@/assets/images/solution/capacity4.png')
          }
        ],
          datalists: ['传感器', '数据采集', '智能网关', '物联SaaS']
        }
      },
      methods: {
        godata (title) {
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
      changeWord1() {
        if (this.changeshow1 === '+') {
          this.changeshow1 = '-'
        } else {
          this.changeshow1 = '+'
        }
      },
      changeWord2() {
        if (this.changeshow2 === '+') {
          this.changeshow2 = '-'
        } else {
          this.changeshow2 = '+'
        }
      },
      changeWord3() {
        if (this.changeshow3 === '+') {
          this.changeshow3 = '-'
        } else {
          this.changeshow3 = '+'
        }
      },
      changeWord4() {
        if (this.changeshow4 === '+') {
          this.changeshow4 = '-'
        } else {
          this.changeshow4 = '+'
        }
      }
      }
    }
  </script>
  
  
<style lang="scss" scoped>
  
  .fold ul {
    padding-left: 20px;
    li {
      margin: 20px 0;

      h2 {
        font-weight: 800;
      }
    }
  }
  .scene_box {
    background: #fff;
    width: 100%;
  }

  .scene {
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    box-sizing: border-box;

    >h2 {
      font-size: 28px;
      text-align: center;
      margin-bottom: 50px;
    }

    p {
      text-align: center;
    }
  }

  .scene_bottom {
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
    box-shadow: 0 4px 12px #ccc;
    padding: 50px;
    box-sizing: border-box;

    .left {
      width: 50%;

      img {
        width: 100%;
      }
    }

    .right {
      flex: 1;
      margin-left: 50px;
      text-align: left;

      h2 {
        font-size: 20px;
        color: red;
        text-align: left;

      }

      h3 {
        font-size: 16px;
        font-weight: 800;
        margin: 10px 0;
        text-align: left;

      }

      p {
        line-height: 26px;
        text-align: left;

      }
    }
  }

  .anli {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin: 0 auto;
    padding: 20px 50px;

    dl {
      display: flex;
      flex-direction: column;
      align-items: center;

      dt {
        margin-bottom: 10px;
        width: 50px;

        img {
          width: 100%;
        }
      }

      dd {
        font-size: 16px;
        color: #555;
      }
    }
  }

  .fold dl {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #EEFAFC;
    height: 63px;
    align-items: center;
    margin: 20px 0;

    dt {
      flex: 1;
      font-size: 16px;
      padding-left: 20px;

      h2 {
        font-weight: 800;
      }
    }

    dd {
      cursor: pointer;
      width: 43px;
      font-size: 40px;
    }
  }

   .characteristic {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 100px 0 25px 0;

    li {
      width: 50%;
      display: flex;
      margin-bottom: 75px;

      img {
        width: 90px;
        height: 90px;
      }

      div {
        margin-left: 30px;

        h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        p {
          width: 75%;
        }
      }
    }
  }
   .bigkernel {
    width: 100%;
    padding-top: 35px;
    padding-bottom: 35px;

    /* background: #fff; */
    .kernel {
      width: 65%;
      margin: 0 auto;

      .lines {
        width: 80px;
        height: 3px;
        background: darkblue;
        margin: 0 auto 20px;
      }

      >h2 {
        font-size: 28px;
        text-align: center;
        margin-bottom: 50px;
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
    .banner{
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
  .navs li:nth-child(4){
    border-bottom: solid #313F5B 3px;
  }
    </style>