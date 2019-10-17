<template>
  <div>
    <div class="sensor">
      <div class="banner">
        <img src="../../assets/images/service.png" ondragstart="return false" alt="">
      </div>
      <ul class="nav">
        <li v-for='(item,index) in datalists' :key='index' @click='godata(item)'>{{item}}</li>
      </ul>
      <div class="data_analyse data_package">
        <div class="public_title">
          <h1 class="data_title">传感器与无线技术融合</h1>
          <hr class="hr_top" />
          <p>将传感器、通信和网络连接融和为一体的多项关键技术，这多种技术的融合有助于提高娱乐、安全、医疗、工控、资源管理、消费产品监测、资产跟踪等各种设备的价值。</p>
        </div>
        <div class="sensor_type">
          <h1>传感器的种类很多,目前没有统一的分类方法,常采用的分类方法有以下几种:</h1>
          <h3>1、按输入量分；</h3>
          <h3 class="type_paddingLeft"> 输入量分别为温度、压力、位移、速度、气体等非电量，则相应的是温度传感器、压力传感器等。</h3>
          <h3>2、按测量原理分；</h3>
          <h3 class="type_paddingLeft"> 主要是基于电磁原理和固体物理学理论，根据变电阻的原理，有相应的应变式传感器；根据变磁阻原理，有相应的电感式、电涡流式传感器；根据半导体有关理论，有相应的半导体力敏传感器、气敏传感器等。</h3>
        </div>
      </div>
      <!-- 传感器 -->
      <div class="performance" v-for="item of performanceData" :key="item.id">
        <div class="performance_wrapper">
          <h1>{{item.title}}</h1>
          <h3 class="performance_desc">{{item.desc}}</h3>
          <div class="characteristic">
            <div class="characteristic_left">
              <!-- 性能特点 -->
              <div v-if="item.characteristicChilds.length > 0">
                <div class="left_til left_lot">性能特点：</div>
                <p class="left_p" v-for="(list, index) of item.characteristicChilds" :key="index">— {{list}}</p>
              </div>
              <!-- 基本原理 -->
              <div v-if="item.principlesChids.length > 0">
                <div class="left_chara left_til">基本原理：</div>
                <p class="left_p" v-for="(list, index) of item.principlesChids" :key="index">— {{list}}</p>
              </div>
              <!-- 主要特征 -->
              <div v-if="item.MainCharacteristics.length > 0">
                <div class="left_chara left_til">主要特征：</div>
                <p class="left_p" v-for="(list, index) of item.MainCharacteristics" :key="index">— {{list}}</p>
              </div>
            </div>
            <div class="characteristic_right">
              <img v-for="(imgs,index) of item.characteristicImgs" :key="index" :src="imgs" ondragstart="return false" class="right_imgs" alt="">
            </div>
          </div>
          <div v-if="item.application.length > 0" class="application">
            <div class="application_title">典例应用</div>
            <div class="application_desc" v-for="(exemplars, index) of item.application" :key="index">{{exemplars}}</div>
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
        datalists: ['传感器', '数据采集', '智能判读'],
        performanceData: [
          {
            id: '001',
            title: '集成单片温度传感器——DS18B20',
            desc: '',
            characteristicChilds: [
              '独特的单线接口',
              '通过并联可实现多点组网功能；',
              '无需外部器件；',
              '供电电压范围为3.0~5.5V；',
              '零待机功耗；',
              '温度以9或12位数字量读出；',
              '用户可定义的非易失性温度报警设置；',
              '报警搜索命令识别并标志超过程序限定温度的器件；',
              '负电压特性，电源极性接反时，温度计不会烧毁；',
            ],
            principlesChids: [],
            MainCharacteristics: [],
            characteristicImgs: [
              require('@/assets/images/sensor1_1.png'),
              require('@/assets/images/sensor1_2.png')
            ],
            application: [
              '产品适用于冷冻库，粮仓，储罐，电讯机房，电力机房，电缆线槽等测温和控制领域。轴瓦，缸体，纺机，空调，等狭小空间工业设备测温和控制。汽车空调、冰箱、冷柜、以及中低温干燥箱等。供热/制冷管道热量计量，中央空调分户热能计量和工业领域测温和控制。'
            ]
          },
          {
            id: '002',
            title: '集成单片温度传感器——AD590',
            desc: 'AD590是美国ANALOG DEVICES公司的单片集成两端感温电流源，其输出电流与绝对温度成比例。在4V至30V电源电压范围内，该器件可充当一个高阻抗、恒流调节器，调节系数为1 µA/K。',
            characteristic: '性能特点：',
            characteristicChilds: [
              '线性电流输出：1 A/K；',
              '测温范围宽：55～+150℃；',
              '二端器件：电压输入，电流输出；',
              '激光微调使定标精度达±0.5（AD590M）；',
              '线性度极好：在整个测温范围内；',
              '非线性误差小于±0.3℃（AD590M）；',
              '工作电压范围宽：4～30 V；',
              '器件本身与外壳绝缘；',
              '成本低。',
            ],
            principlesChids: [],
            MainCharacteristics: [],
            characteristicImgs: [
              require('@/assets/images/sensor2_1.png'),
              require('@/assets/images/sensor2_2.png')
            ],
            application: [
              '可广泛应用于各种冰箱、空调器、粮仓、 冰库、工业仪器配套和各种温度的测量和控制等领域'
            ]
          },
          {
            id: '003',
            title: '压阻式压力传感器',
            desc: '',
            characteristic: '性能特点：',
            characteristicChilds: [
              '利用压阻效应将压力信号变换为电阻变化信号的传感器；',
              '利用检测电路把压阻式压力传感器的电阻变化转变为电压输出，即可被电子系统处理；',
              '检测电路通常是采用惠斯通电桥构成的。'
            ],
            principlesChids: [],
            MainCharacteristics: [],
            characteristicImgs: [
              require('@/assets/images/sensor3_1.png'),
              require('@/assets/images/sensor3_2.png')
            ],
            application: [
              '低成本电子秤中的应用'
            ]
          },
          {
            id: '004',
            title: 'MEMS传感器',
            desc: 'MEMS的全称是微型电子机械系统（Micro-ElectroMechanical System），相对于传统的机械，它们的尺寸更小，最大的不超过一个厘米，甚至仅仅为几个微米，其厚度就更加微小。采用以硅为主的材料，电气性能优良，硅材料的强度、硬度和杨氏模量与铁相当，密度与铝类似，热传导率接近钼和钨。采用与集成电路（IC）类似的生成技术，可大量利用IC生产中的成熟技术、工艺，进行大批量、低成本生产，使性价比相对于传统“机械”制造技术大幅度提高。',
            characteristic: '主要特点',
            characteristicChilds: [],
            principlesChids: [],
            MainCharacteristics: [
              '体积小：MEMS器件体积小、重量轻、耗能低、惯性小、谐振频率高、响应时间短。',
              '以硅为主要材料，机械电器性能优良：硅的强度、硬度和杨氏模量与铁相当，密度类似铝，热传导率接近钼和钨。',
              '功耗低:用硅微加工工艺在一片硅片上可同时制造成百上千个微型机电装置或完整的MEMS。批量生产可大大降低生产成本。',
              '可以把不同功能、不同敏感方向或致动方向的多个传感器或执行器集成于一体，或形成微传感器阵列、微执行器阵列，甚至把多种功能的器件集成在一起，形成复杂的微系统。微传感器、微执行器和微电子器件的集成可制造出可靠性、稳定性很高的MEMS。',
              '易于集成：多学科交叉：MEMS涉及电子、机械、材料、制造、信息与自动控制、物理、化学和生物等多种学科，并集约了当今科学技术发展的许多尖端成果。'
            ],
            characteristicImgs: [
              require('@/assets/images/sensor4_1.png'),
              require('@/assets/images/sensor4_2.png')
            ],
            application: [
              'MEMS传感器已在消费电子产品、汽车工业、医疗保健、机器人及自动化工业、太空卫星、运载火箭、航空航天设备等领域有着广泛的应用，其中消费类电子已经成为了MEMS传感器的第一大应用市场，2014年全球销售额已达30亿美元。'
            ]
          },
          {
            id: '005',
            title: '霍尔传感器',
            desc: '根据霍尔效应制作的一种磁场传感器。霍尔效应：如果把通有电流的导体放在垂直于它的磁场中，则在导体的两侧会产生一电势差，它与电流及磁感应强度成正比，与导体厚度成反比。',
            characteristic: '基本原理',
            characteristicChilds: [],
            principlesChids: [],
            MainCharacteristics: [
              '霍尔传感器具有灵敏度高,线性度和稳定性好,体积小,耐高温等特点。'
            ],
            characteristicImgs: [
              require('@/assets/images/sensor2_1.png'),
              require('@/assets/images/sensor2_2.png')
            ],
            application: [
              '霍尔传感器的典型应用——测量转速',
              '霍尔传感器是全球排名第三的传感器产品，它被广泛应用到工业、汽车业、电脑、手机以及新兴消费电子领域。',
              '未来几年，随着越来越多的汽车电子和工业设计企业转移到中国，霍尔传感器在中国市场的年销售额将保持20%到30%的高速增长'
            ]
          },
          {
            id: '006',
            title: '光电传感器',
            desc: '根据霍尔效应制作的一种磁场传感器。霍尔效应：如果把通有电流的导体放在垂直于它的磁场中，则在导体的两侧会产生一电势差，它与电流及磁感应强度成正比，与导体厚度成反比。',
            characteristic: '基本原理',
            characteristicChilds: [],
            principlesChids: [
              '利用人体发出的红外线进行检测，产生电信号输出。',
              '人体发射的10UM左右的红外线通过菲泥尔滤光片增强后聚集到红外感应源上。',
              '采用热释电元件制成的红外感应源在接收到人体红外辐射温度发生变化时输出0.1~10Hz，1mV左右的微弱信号'
            ],
            MainCharacteristics: [
              '1.光谱响应相当宽',
              '2.所测的光强范围宽，即可对强光响应，也可对弱光响应。',
              '3.无极性之分，使用方便，成本低，寿命长。',
              '4.灵敏度高，工作电流大，可达数毫安。'
            ],
            characteristicImgs: [
              require('@/assets/images/sensor6_1.png'),
              require('@/assets/images/sensor6_2.png')
            ],
            application: []
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
.sensor{
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
  .nav li:first-child{
    border-bottom: solid 3px rgba(102, 153, 255, 1);
  }
  .data_package {
    padding: 30px 0 20px 0;
    width: 80%;
    margin: 0 auto;
    text-align: center;
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
      background-color: #FE6021;
    }
    .sensor_type{
      text-align: left;
      margin: 30px 0;
      .type_paddingLeft{
        padding-left: 20px;
      }
      h1{
        font-size: 18px;
        margin-bottom: 20px;
      }
      h3{
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .performance:nth-of-type(even){
    background: #f0f2f5;
  }
  .performance{
    text-align: left;
    padding: 30px 0;
    .performance_wrapper{
      width: 80%;
      margin: 0 auto;
    }
    h1{
      font-size: 22px;
      line-height: 60px;
      color: #FE6021;
    }
    .performance_desc{
      line-height: 25px;
    }
  }
  .characteristic{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .characteristic_left{
      width: 600px;
    }
    .left_til{
      line-height: 60px;
    }
    .left_lot{
      color: #333;
      font-size: 20px;
      font-weight: 600;
    }
    .left_chara{
      color: #FE6021;
      font-size: 20px;
    }
    .left_p{
      line-height: 30px;
      font-size: 16px;
    }
    .characteristic_right{
      // flex: 1;
      padding: 20px 10px;
      .right_imgs{
        margin-left: 20px;
        width: 200px;
        height: 200px;
      }
    }
  }
  .application{
    .application_title{
      font-size: 18px;
      line-height: 60px;
      color: #FE6021;
    }
    .application_desc{
      font-size: 16px;
    }
  }
}
</style>
