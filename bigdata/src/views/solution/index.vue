<template>
  <div>
    <div class="solution">
      <!-- banner start -->
      <div class="banner">
        <swiper :options="bannerSwiperOption" ref="mySwiper">
          <!-- slides -->
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div :style="{background:'url('+item.imgurl+') center center / cover',height:'520px'}"></div>
          </swiperSlide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
      </div>
      <!-- banner end -->

      <!-- solution tab start -->
      <div class="solution-tab">
        <ul class="solution-tab-header">
          <li v-for="(item,index) in solutionTab" :key="index" :class="index===solutionTabIndex?'solution-tab-high':''"
            @click="changeSolutionTabIndex(index)">{{item}}</li>
        </ul>
        <div class="solution-tab-section" v-if='solutionTabIndex === 0'>
          <ul class="characteristic">
            <li v-for='(item, index) in characteristic' :key='index'>
              <p><img src="../../assets/images/u1388.png" alt=""></p>
              <div>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
          <div class="bigkernel">
            <div class="kernel">
              <div class="line"></div>
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
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 1'>222</div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 2'>333</div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 3'>
          <div class="produebox">
            <div class="smallproduce">
              <p class="p">产品特点</p>
              <div class="produce">
                <div class="data" v-for='(item, index) in producedata' :key='index'>
                  <b>{{item.tit}}</b>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
            <div class="crux">
              <div class="smallcrux">
                <p class="p">关键价值</p>
                <div class="cruxContext">
                  <div class="cruxBox" v-for='(item, index) in importantvalue' :key='index'>{{item}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 4'>555</div>
      </div>
      <!-- solution tab end -->

    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      importantvalue: ['统一的企业数据质量检核体系，制定企业统一的数据质量检核体系，统一数据质量度量、执行的规范化步骤，为企业数据质量管控的落实提供技术平台支撑。', '数据质量状况分析，引用系统内置度量规则和检核方法对系统表、字段进行多角度的数据质量检核评估，为数据分析、数据状况调研提供数据分析报告，对系统关键业务数据的质量情况进行全方位把握。', '数据质量持续监控，确保为将来提供准确、一致和及时数据，使数据始终符合数据质量业务规则，确保企业数据始终保持最高的质量并防止随时间推移导致数据质量下降。', '基于企业对数据质量问题处理的要求灵活制定数据质量问题处理流程，方便问题数据的处理和清洗。', '快速定位数据质量问题影响范围，通过元数据关联关系分析功能，可定位问题数据出错的源头和受影响的范围，及时通知关联方，降低由数据问题带来的影响。'],
      producedata: [
        {
          tit: '数据质量评估',
          content: '提供全方位数据质量评估能力，如数据的重复性、关联性、正确性、完全性、一致性、合规性等，对数据进行全面体验。'
        }, {
          tit: '数据质量检核和执行',
          content: '提供配置化的度量规则和检核方法生成能力，提供建和脚本的定时调度执行和第三方调度工具的调度执行功能。'
        }, {
          tit: '数据质量监控',
          content: '系统提供报警机制，对检核规则或方法进行阀值设置，对超出阀值的规则进行不同级别的警告和通知。'
        }, {
          tit: '流程化问题处理机制',
          content: '对数据问题进行流程处理支持，规范问题处理机制和步骤，强化问题认证，提升数据质量。'
        }, {
          tit: '定制化数据质量报告',
          content: '系统提供了丰富的API可进行定制化数据质量包括开发，另外系统内置了常用质量报告。'
        }, {
          tit: '强大的数据质量问题分析能力',
          content: '提供多种问题分析能力，包括血统分析，影响分析，全链分析，定位问题产生的根源。'
        }
      ],
      changeshow1: '-',
      changeshow2: '-',
      changeshow3: '-',
      changeshow4: '-',
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
      bannerSwiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      imgList: [
        {
          imgurl:
            require('@/assets/images/solution_banner1.jpg')
        },
        {
          imgurl:
            require('@/assets/images/solution_banner2.jpg')
        }
      ],
      solutionTab: ['智能物联', '数字营销', '风险管理', '质量管控', '精准获客'],
      solutionTabIndex: 0,
      characteristic: [
        {
          tit: '低成本',
          content: '提供海量设备数据的存储，并开放了丰富的设备管理接口，省去了用户直接存储和管理数据的成本'
        }, {
          tit: '远程管理',
          content: '提供远程控制、远程调试、远程升级、远程配置设备的能力，不需要连接设备串口，即可管理设备'
        }, {
          tit: '快速检索',
          content: '支持从海量设备中快速检索到指定名称或指定标签的设备，简化了海量设备管理的困难'
        }, {
          tit: '设备数字化',
          content: '通过在平台定义设备的属性、事件、服务的物模型，将设备数字'
        }
      ]
    }
  },
  components: {
    swiper,
    Footer,
    swiperSlide
  },
  methods: {
    changeSolutionTabIndex (index) {
      this.solutionTabIndex = index
    },
    changeWord1 () {
      if (this.changeshow1 === '+') {
        this.changeshow1 = '-'
      } else {
        this.changeshow1 = '+'
      }
    },
    changeWord2 () {
      if (this.changeshow2 === '+') {
        this.changeshow2 = '-'
      } else {
        this.changeshow2 = '+'
      }
    },
    changeWord3 () {
      if (this.changeshow3 === '+') {
        this.changeshow3 = '-'
      } else {
        this.changeshow3 = '+'
      }
    },
    changeWord4 () {
      if (this.changeshow4 === '+') {
        this.changeshow4 = '-'
      } else {
        this.changeshow4 = '+'
      }
    }
  }
}
</script>

<style lang="scss">
.produebox{
  width: 100%;
  /* margin: 0 auto; */
  background: #fff;
}
.smallproduce{
  width: 70%;
  margin: 0 auto;
}
.smallproduce .p,.smallcrux .p{
  font-size: 18px;
  font-weight: 800;
  color: #FF9933;
  padding: 30px 0 50px 0;
}
.produce{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px #ccc solid;
    /* margin: 0 auto; */
}
/* .content span{
    display: flex;
    margin-bottom: 50px;
    color: rgb(255, 166, 152);
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
} */
.data{
    width: 25%;
    margin: 0px 40px 30px 28px;
}
.data b{
    width: 100%;
    display: flex;
    font-size: 18px;
    letter-spacing: 2px;
    border-bottom: 2px #000 solid;
    padding-bottom: 5px;
    box-sizing: border-box;
}
.data p{
    margin-top: 40px;
}
.crux{
    width: 100%;
    height: auto;
    background: rgb(242, 242, 242);
    margin-top: 60px;
    padding-top: 30px;
    box-sizing: border-box;
}
.smallcrux{
  width: 70%;
  margin: 0 auto;
}
.cruxContext{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px #ccc solid;
    margin-left: 25px;
}
.cruxBox{
    width: 33%;
    padding-right: 50px;
    padding-bottom: 40px;
    box-sizing: border-box;
}
.fold ul{
  li{
    margin: 20px 0;
    h2{
      font-weight:800;
    }
  }
}
.fold dl{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #ccc;
  height: 63px;
  align-items: center;
  margin: 20px 0;
  dt{
    flex:1;
    font-size:16px;
    padding-left:20px;
    h2{
      color:red;
      font-weight:800;
    }
  }
  dd{
    cursor: pointer;
    width: 43px;
    font-size: 40px;
  }
}
.bigkernel{
  width: 100%;
    padding-top: 35px;
  background: #fff;
  .kernel{
    width: 65%;
    margin:0 auto;
    .line{
      width: 80px;
      height: 3px;
      background: darkblue;
      margin:0 auto 20px;
    }
    >h2{
      font-size:28px;
      text-align: center;
      margin-bottom: 50px;
    }
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
    margin-bottom:75px;
    img{
      width: 90px;
      height: 90px;
    }
    div{
      margin-left: 30px;
      h2{
        font-size:28px;
        margin-bottom: 20px;
      }
      p{
        width: 75%;
      }
    }
  }
}
.solution {
  .banner {
    @include minwidth();
    .swiper-pagination {
      span {
        width: 100px;
        height: 5px;
        border-radius: 0px;
      }

      .swiper-pagination-bullet-active {
        opacity: 0.4;
        background: $color-theme;
      }
    }
  }

  .solution-tab {
    @include minwidth();
    @include wh(100%, auto);
    background: #fff;

    .solution-tab-header {
      width: 50%;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 30px 0px;

      li {
        font-size: 16px;
        padding: 5px;
        cursor: pointer;
      }

      .solution-tab-high {
        border-bottom: 4px solid $color-theme;
        font-weight: 800;
      }
    }

    .solution-tab-section {
      background: #F2F2F2;
    }
  }
}
</style>
