<template>
  <div>
    <div class="solution">
      <!-- banner start -->
      <div class="banner">
        <img src="../../assets/images/solution/blue.png" alt="">
        <div class="bannerbox">
          <h2 class="animated bounceInUp">物联网+行业数据分析一站式解决方案</h2>
          <p class="animated bounceInUp xia">最全面、安全、可扩展且经济高效的服务组合，旨在帮助您构建数据集和数据分析图解</p>
          <h3 class="animated bounceInUp">了解详情</h3>
        </div>
        <!-- <swiper :options="bannerSwiperOption" ref="mySwiper">
          <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
            <div :style="{background:'url('+item.imgurl+') center center / cover',height:'500px'}"></div>
          </swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
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
              <p><img :src="item.img" alt=""></p>
              <div>
                <h2>{{item.tit}}</h2>
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
          <div class="bigkernel">
            <div class="kernel">
              <div class="lines"></div>
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
                  <dd>智能城市</dd>
                </dl>
              </div>
              <!-- <p><img src="../../assets/images/u1607.png" alt=""></p> -->
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
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 1'>
          <div class="digitalMarket">
            <div class="digitalTitle">
              <div class="title">
                <div class="titleText">数字化与数字链接的超级增长</div>
                <div class="titleLine"></div>
                <div class="name">数字营销是指借助互联网络、电脑、通信技术和数字交互新媒体使用数字化营销渠道来推广产品和服务，从而实现营销目标的新兴营销手段。</div>
              </div>
              <div class="digitalContent">
                <div class="contentItem" v-for="(item,index) in digitalMarket" :key="index">
                  <div v-if="index%2 === 0" class="contentItemText">
                    <div class="itemText"><span>{{ item.num }}</span>{{ item.tit }}</div>
                    <div class="contentItemCon" v-html="item.content"></div>
                  </div>
                  <img :src="item.img" class="contentItemImg" />
                  <div v-if="index%2 === 1" class="contentItemText">
                    <div class="itemText"><span>{{ item.num }}</span>{{ item.tit }}</div>
                    <div class="contentItemCon" v-html="item.content"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentDigital">
              <div class="contentDigitalTitle">数字营销能帮您做什么？</div>
              <div class="contentDigitalCon">
                <div class="contentDigitalItem" v-for="(item,index) in digitalMarketDigital" :key="index">
                  <img :src="item.img" class="contentDigitalItemImg" />
                  <div class="contentDigitalItemCon">
                    <div class="contentDigitalItemTitle">{{ item.tit }}</div>
                    <div class="contentDigitalItemText">{{ item.content }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="digitalCompany">
              <div class="digitalCompanyTitle">适用于企业销售的多种应用场景</div>
              <img src="../../assets/images/jiejue.png" class="digitalCompanyContent" />
            </div>
            <div class="bottom">
              <div class="digitalPartner">
                <div class="digitalPartnerTitle">合作流程</div>
                <div class="bot_content">
                  <ol class="bot_img">
                    <li><img src="../../assets/images/cooperation1.png" alt=""></li>
                    <li><img src="../../assets/images/cooperation2.png" alt=""></li>
                    <li><img src="../../assets/images/cooperation3.png" alt=""></li>
                    <li><img src="../../assets/images/cooperation4.png" alt=""></li>
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
                    <li>提交申请</li>
                    <li>需求评估</li>
                    <li>签署协议</li>
                    <li>结果交付</li>
                  </ul>
                  <!-- <ul class="bot_listbot">
                      <li>了解数据营销平台</li>
                      <li>确定营销需求，签署协议</li>
                      <li>提交公司资料，付费开通账号</li>
                      <li>使用账号进行业务操作</li>
                    </ul> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 2'>
          <div class="riskManage">
            <div class="riskManageTitle">
              <div class="title">
                <div class="titleText">风险管控的数据应用</div>
                <div class="titleLine"></div>
                <div class="name">识别和分析项目风险，是数据应用的顶层表现</div>
              </div>
            </div>
            <div class="riskManageContent">
              <div class="riskManageContentTitle">如何加强风险管理，确保可持续发展？</div>
              <div class="riskManageContentCon">
                随着经济全球化日益加深，市场分工不断细化，环境变化也逐日增快。对企业来说，面对日趋复杂的市场环境，要长期生存，必须不断完善自身，增强抵御各类风险的能力。<br />
                SGS是全球检验、鉴定、测试、认证服务的领导者和创新者，也是公认的品质与诚信的全球基准。SGS利用全球技术资源优势，凭借资深专家审核团队，为您提供专业、系统、先进的环境、能源、安全解决方案，与您一同迈向可持续发展。与全球领导者合作，引领您走进企业承诺的更高层面。
              </div>
            </div>
            <div class="riskManageContentList">
              <div class="riskManageContentLeft">
                <div class="riskManageContentLeftItem" v-for="(item,index) in risk" :key="index">
                  <div class="riskManageContentLeftName">{{ item.name }}</div>
                  <div class="riskManageContentLeftContent" v-html="item.content"></div>
                </div>
              </div>
              <div class="riskManageContentRight">
                <img v-for="(item,index) in riskImg" :key="index" :src="item" />
              </div>
            </div>
          </div>
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 3'>
          <div class="produebox">
            <div class="smallproduce">
              <p class="p">产品功能</p>
              <div class="produce">
                <div class="data" v-for='(item, index) in producedata' :key='index'>
                  <b>{{item.tit}}</b>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
            <div class="crux">
              <div class="smallcrux">
                <p class="p">质量管控能帮您做什么？</p>
                <div class="cruxContext">
                  <div class="cruxBox" v-for='(item, index) in importantvalue' :key='index'>
                    <div class="cruxLeft">
                      <img :src="item.img" alt="">
                    </div>
                    <div class="cruxRight">
                      {{item.tit}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="advantage">
              <div class="advantageTitle">我们的管控优势</div>
              <div class="advantagecontent">
                <div class="info" v-for='(item, index) in advantagecontent' :key='index'>
                  <h2 v-html='item.tit'></h2>
                  <dl>
                    <dt><img :src="item.img" alt=""></dt>
                    <dd v-html='item.content'></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="digitalCompany">
              <div class="digitalCompanyTitle">适用于企业销售的多种应用场景</div>
              <img src="../../assets/images/jiejue.png" class="digitalCompanyContent" />
            </div>
          </div>
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 4'>
          <div class="precisionGuest">
            <div class="precisionGuestTitle">
              <div class="title">
                <div class="titleText">基于大数据和AI的TO B市场分析模型</div>
                <div class="titleLine"></div>
                <div class="name">利用大数据和AI全面提升分析精准度，有效解决To B领域市场规模预测、区域招商推荐等多个市场难题，为中国企业级市场的腾飞助力</div>
              </div>
            </div>
            <div class="precisionGuestContent">
              <img class="img1" src="../../assets/images/solution/guest1.png" />
              <div class="precisionGuestContentModel">
                <div class="precisionGuestContentModelName">模型能帮您做什么？</div>
                <div class="precisionGuestContentModelList">
                  <div class="precisionGuestContentModelItem" v-for="(item,index) in precisionGuest" :key="index">
                    <img :src="item.img" />
                    <div class="model">
                      <div class="modelName">{{ item.tit }}</div>
                      <div class="modelText">{{ item.content }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="precisionGuestContentSize precisionGuestContentSizeColor">
                <div class="precisionGuestContentSizeTitle">适用于企业销售的多种应用场景</div>
                <img class="precisionGuestContentSizeImg" src="../../assets/images/jiejue.png" />
              </div>
              <div class="precisionGuestContentSize precisionGuestContentSizePd">
                <div class="precisionGuestContentSizeTitle">我们的营销优势</div>
                <div class="redbox">
                  <dl v-for='(item, index) in redbox' :key='index'>
                    <dt><img :src="item.img" alt=""></dt>
                    <dd>
                      <h2>{{item.tit}}</h2>
                      <p>{{item.content}}</p>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="bottom">
                  <div class="digitalPartner">
                    <div class="digitalPartnerTitle">合作流程</div>
                    <div class="bot_content">
                      <ol class="bot_img">
                        <li><img src="../../assets/images/cooperation1.png" alt=""></li>
                        <li><img src="../../assets/images/cooperation2.png" alt=""></li>
                        <li><img src="../../assets/images/cooperation3.png" alt=""></li>
                        <li><img src="../../assets/images/cooperation4.png" alt=""></li>
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
                        <li>提交申请</li>
                        <li>需求评估</li>
                        <li>签署协议</li>
                        <li>结果交付</li>
                      </ul>
                      <!-- <ul class="bot_listbot">
                          <li>了解数据营销平台</li>
                          <li>确定营销需求，签署协议</li>
                          <li>提交公司资料，付费开通账号</li>
                          <li>使用账号进行业务操作</li>
                        </ul> -->
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- solution tab end -->
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        redbox: [
          {
            img: require('@/assets/images/solution/1.png'),
            tit: '十大数据搜索',
            content: '企查查、天眼查、工商系统采集；搜索引擎采集；阿里巴巴采集；慧聪网采集；手机搜号宝；饿了么采集；地图采集；百度糯米；招聘采集；全网综合采集'
          }, {
            img: require('@/assets/images/solution/2.png'),
            tit: '用户画像分析',
            content: '可根据企业名称、成立年限、所在地区、所属行业、联系方式等多维度用户画像，精准采集用户数据。'
          }, {
            img: require('@/assets/images/solution/3.png'),
            tit: '自带CRM系统',
            content: '可标记客户等级，客户开发情况，员工开发客户数，企业公海等功能，满足中小企业客户管理需求'
          }, {
            img: require('@/assets/images/solution/4.png'),
            tit: 'QQ/微信营销',
            content: 'QQ营销、微信营销、微信群管理、微信小程序、关键词搜索、更多神秘功能。'
          }, {
            img: require('@/assets/images/solution/5.png'),
            tit: '电商平台优化',
            content: '优化淘宝、京东、拼多多等电商流量；刷腾讯、优酷、爱奇艺、芒果等视频流量；刷抖音、快手、火山、梨视频等人气。'
          }, {
            img: require('@/assets/images/solution/6.png'),
            tit: '企业新闻发布',
            content: '可将企业新闻报道、新闻等发布到今日头条、网易、搜狐、新浪、一点资讯、百家号、凤凰号等媒体平台上。'
          }
        ],
        advantagecontent: [
          {
            tit: '<b>01.</b>出色的跨平台运行能力',
            img:require('@/assets/images/kua1.png'),
            content: '37-bigdata QM 基于PDCA质量管理方法精心研发设计而成，可以科学、高效地帮助企业和组织进行全面的数据质量管理。PDCA循环又叫戴明环，是由美国著名的质量管理专家戴明博士提出，它是全面质量管理所应遵循的科学程序。<br/>PDCA是英语单词Plan（计划）、Do（执行）、Check（检查）和Act（行动）的第一个字母，PDCA循环就是按照这样的顺序进行质量管理，并且循环不止地进行下去的科学程序。科学、高效地帮助企业和组织进行全面的数据质量管理。'
          }, {
            img:require('@/assets/images/kua2.png'),
            tit: '<b>02.</b>领先业界的评价算法',
            content: '37-bigdata  QM 支持多种领先业界的规则评价算法，满足业务系统运行、数据中心建设及数据治理过程中各类规则定义，并支持XML扩展，可完全适应未来三到五年的数据质量管理需求变化。'
          }, {
            img:require('@/assets/images/kua3.png'),
            tit: '<b>03.</b>可兼容多种操作系统',
            content: '可兼容所有支持JDK的操作系统，包括Windows、Linux以及多种采用UNIX内核的操作系统。支持所有符合JDBC2.0规范的数据库，如oracle、DB2、SQLserver、Mysql等。'
          }, {
            img:require('@/assets/images/kua4.png'),
            tit: '<b>04.</b>可跨数据源对比',
            content: '支持在业务系统建设、数据仓库建设各重要阶段设置数据检查监控点，并可实现跨监控点数据源的比较分析，使得通过常规的规则定义便可实现ETL前后的数据一致性比对。'
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
        importantvalue: [
          {
            tit:'统一的企业数据质量检核体系，制定企业统一的数据质量检核体系，统一数据质量度量、执行的规范化步骤，为企业数据质量管控的落实提供技术平台支撑。',
            img:require('@/assets/images/1.png')
          },{
            tit:'数据质量状况分析，引用系统内置度量规则和检核方法对系统表、字段进行多角度的数据质量检核评估，为数据分析、数据状况调研提供数据分析报告，对系统关键业务数据的质量情况进行全方位把握。',
            img:require('@/assets/images/2.png')
          },{
            tit:'数据质量持续监控，确保为将来提供准确、一致和及时数据，使数据始终符合数据质量业务规则，确保企业数据始终保持最高的质量并防止随时间推移导致数据质量下降。',
            img:require('@/assets/images/3.png')
          },{
            tit:'基于企业对数据质量问题处理的要求灵活制定数据质量问题处理流程，方便问题数据的处理和清洗。',
            img:require('@/assets/images/4.png')
          },{
            tit:'快速定位数据质量问题影响范围，通过元数据关联关系分析功能，可定位问题数据出错的源头和受影响的范围，及时通知关联方，降低由数据问题带来的影响。',
            img:require('@/assets/images/5.png')
          } ],
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
          // {
          //   imgurl:
          //     require('@/assets/images/solution_banner1.jpg')
          // },
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
        digitalMarket: [
          {
            num: '01',
            tit: '交易即触点',
            content: '无论是线下门店、平台电商(天猫、京东等)、品牌自营电商，今天的品牌大多完成了全渠道的交易能力。这些交易环节是跟客户直接接触、充分沟通所提供的产品和服务的最重要触点。在完成交易的同时，完成对客户长期沟通渠道的连接，以及对购买习惯、频次、商品偏好、购买渠道偏好等准确洞察。',
            img: require('@/assets/images/solution/dia1.png')
          },
          {
            num: '02',
            tit: '社交-微信',
            content: '微信赋予了品牌强大的和客户(包括潜在客户)进行连接、沟通和互动的可能性，无论是微信广告、公众号、小程序还是微信社群，都能够及其有效的连接客户。由于微信严格的身份体系，品牌可以方便的识别微信环境下的客户个体，做到1对1精准沟通和互动。',
            img: require('@/assets/images/solution/dia2.png')
          },
          {
            num: '03',
            tit: '平台电商',
            content: '今天，几乎全品类的品牌都把以天猫和京东为首的平台电商作为线上销售的主阵地，有些品类在平台电商的销售份额已经超过总量的50%。以天猫和京东为首的平台电商是极其重要的销售渠道，但不仅仅是销售渠道，也是一个高度数字化的，品牌和消费者互动营销的阵地。如何基于平台提供的第二方数据和服务、营销服务(例如会员通)来助力品牌和客户的数字链接和有效长期互动，是每个品牌必须完成的功课。',
            img: require('@/assets/images/solution/dia3.png')
          },
          {
            num: '04',
            tit: '官网、App和小程序',
            content: '官网、App和小程序<br/>除了依赖社交平台、电商平台等,完全由品牌自建和控制的渠道需要坚持。无论是官网、App还是小程序，既可以通过数据监控的方式了解每一个客户的行为， 也可以结合注册环节完成客户的身份识别和建立沟通渠道。',
            img: require('@/assets/images/solution/dia4.png')
          },
          {
            num: '05',
            tit: '线上线下活动',
            content: '每个季节，品牌都会在线上和线下进行大量和客户(潜在客户)直接接触的营销活动。品牌需要建立一个统的数据管理体系，将每一次活动参与的客户建立连接和收集数据。其中也包括了对某些线下活动流程的优化，以增加数字化接触和互动环节。',
            img: require('@/assets/images/solution/dia5.png')
          },
          {
            num: '06',
            tit: '客服',
            content: '今日的客户可能在各个渠道联系品牌，咨询问题或者寻求服务。这些渠道包括官网、微信、电商、邮件、电话等。如果品牌还未建立全渠道客服能力，则必须第一时间补上这块。与此同时，客服过程也成为客户连接和洞察客户的重要一环。',
            img: require('@/assets/images/solution/dia6.png')
          }
        ],
        digitalMarketDigital: [
          {
            img: require('@/assets/images/solution/diadia1.png'),
            tit: '内容营销体系重塑的新风向',
            content: '新媒体的大火不仅让新媒体人对“爆款”进行了重新定义，更让广告主们意识到重新搭建内容营销体系的重要性。'
          },
          {
            img: require('@/assets/images/solution/diadia2.png'),
            tit: '数字营销多重策略的新基础',
            content: '机器学习算法会通过对用户数据的挖掘，让品牌主更精准地触达目标用户，消费者也将更容易找到那些符合自己要求的产品。而算法对于整体数据的管理也将使得营销自动化获得长足发展，通过对整个历史的用户行为分析，未来营销策略的制定也会更加高效，对于延长企业生命周期而言亦有所帮助。'
          }
        ],
        risk: [
          {
            name: '我们的服务将帮助您：',
            content: '-降低生产成本<br/>-提高企业核心竞争力<br/>-减少由各类事故引发的企业危机<br/>-维护企业声誉<br/>-增强企业的可持续发展<br/>-提高客户的满意度'
          },
          {
            name: '综合能效解决方案',
            content: '-能源审计<br/>-快速节能诊断<br/>-能源管理体系建设<br/>-水、电、热平衡测试<br/>-漏水点检查<br/>-用电系统（设备)测试<br/>-供热管网节能测试<br/>-蒸汽加热设备节能测试<br/>-安全管理解决方案<br/>-安全生产标准化培训与评审<br/>-生产现场的安全生产评估<br/>-危险源识别、评价与分级<br/>-危险化学品管理<br/>-安全生产事故应急预案<br/>-安全检查'
          },
          {
            name: '金融风险管理解决方案',
            content: '-结构失衡使风险集中<br/>-金融与财政风险放大<br/>- 非正规金融庞大成隐患<br/>- 机制转化中的风险突出<br/>- 资本管制有效性弱化<br/>- 人民币汇率机制的损失'
          }
        ],
        riskImg: [
          require('@/assets/images/solution/risk1.png'),
          require('@/assets/images/solution/risk2.png')
        ],
        precisionGuest: [
          {
            img: require('@/assets/images/solution/model1.png'),
            tit: '市场规模预测',
            content: '与传统的抽样调研不同，探迹会利用全量的知识图谱数据，精准预测特定领域的市场规模，让客户依托数据科学决策。'
          },
          {
            img: require('@/assets/images/solution/model2.png'),
            tit: '产业结构分析',
            content: '依托独特的业务标签体系，探迹可以提供特定地区细到业务层（如建站等）的产业结构分析，比传统的国标大类更加详细。'
          },
          {
            img: require('@/assets/images/solution/model3.png'),
            tit: '区域招商推荐',
            content: '为地方市场监督局、招商局、企业孵化器招商引资、扶持企业发展提供全局企业分析及企业客户推荐。'
          },
          {
            img: require('@/assets/images/solution/model4.png'),
            tit: '新业务开拓选址',
            content: '企业在开拓新市场时，探迹可以提供候选地区的潜在客户容量评估，帮助企业开拓潜在客户较多的地区，提升销售效率'
          }
        ]
      }
    },
    components: {
      swiper,
      Footer,
      swiperSlide
    },
    computed: {
      ...mapState([
        'routerIndex'
      ])
    },
    watch: {
      routerIndex() {
        this.changeSolutionTabIndex(this.routerIndex)
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0
      this.solutionTabIndex = this.$route.query.index * 1 || this.solutionTabIndex
    },
    methods: {
      changeSolutionTabIndex(index) {
        this.solutionTabIndex = index
        if (index == 0 || index) {
          document.documentElement.scrollTop = 565
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

<style lang="scss">
  .digitalPartner {
            padding: 50px 10%;

            .digitalPartnerTitle {
              margin-bottom: 50px;
              font-size: 28px;
              color: #333;
              text-align: center;
            }

            .digitalPartnerImg {
              width: 100%;
              /* height: 180px; */
            }
          }
  .line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto 20px;
    padding-top: 39px;
  }

  .banner img {
    width: 100%;
  }

  .line span {
    width: 510px;
    height: 8px;
    background: #3B6EF1;
  }

  .bigcontent {
    width: 100%;
    background: #F0F2F5;
    padding-top: 90px;
  }

  .bigcontent .content {
    margin-top: 0;
  }

  .line .point {
    width: 20px;
    margin: 0 -1px;
    /* box-sizing: border-box; */
    height: 20px;
    background: #3B6EF1;
    border-radius: 50%;
  }

  .bottom {
    width: 100%;
    height: auto;
    background: #F5F8FE;
  }

  .bot_content {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 70px;
  }

  .bot_img {
    padding-top: 60px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end
  }

  .bot_img li {
    width: 105px;
    /* height: 102px; */
  }

  .bot_img li img {
    width: 100%;
  }

  .bot_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFang-SC-Medium;
    font-size: 20px;
    color: #313F5B;
  }
.bot_listbot{
  display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    color: #313F5B;
    margin-top: 20px;
}
  .bot_list span:first-child {
    margin-right: 8px;
  }

  .redbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    dl {
      width: 33%;
      padding: 30px 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      dt {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
        }
      }

      dd {
        margin-top: 10px;

        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        p {
          line-height: 26px;
        }
      }
    }
  }

  .advantage {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0 100px 0;

    .advantageTitle {
      margin-bottom: 50px;
      font-size: 28px;
      color: #333;
      text-align: center;
    }

    .advantagecontent {
      display: flex;
      flex-wrap: wrap;

      .info {
        width: 50%;
        padding: 50px;
        box-sizing: border-box;

        h2 {
          margin-bottom: 50px;
          font-size: 24px;
          color: #333;
        }

        dl {
          display: flex;

          dt {

            img {
              width: 100%;
            }
          }

          dd {
            margin-top: 20px;
            flex: 1;
            margin-left: 20px;
          }
        }
      }
    }
  }

  .scene_box {
    background: #fff;
    width: 100%;
  }

  .anli {
    display: flex;
    justify-content: space-between;
    width: 20%;
    background: #f2f2f2;
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

  .produebox {
    width: 100%;
    /* margin: 0 auto; */
    background: #fff;
  }

  .smallproduce {
    width: 80%;
    margin: 0 auto;
  }

  .smallcrux .p,
  .smallproduce .p {
    font-size: 22px;
    color: #FF6633;
    padding: 30px 0 40px 0;
    text-align: center;
    margin-bottom: 40px;
  }

  .characteristic h2 {
    color: #000
  }

  .produce {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
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
  .data {
    width: 25%;
    margin: 0px 40px 30px 28px;
  }

  .data b {
    width: 100%;
    display: flex;
    font-size: 18px;
    letter-spacing: 2px;
    border-bottom: 2px #000 solid;
    padding-bottom: 5px;
    box-sizing: border-box;
  }

  .data p {
    margin-top: 40px;
  }

  .crux {
    width: 100%;
    height: auto;
    background: rgb(242, 242, 242);
    margin-top: 60px;
    padding-top: 30px;
    box-sizing: border-box;
  }

  .smallcrux {
    width: 80%;
    margin: 0 auto;
  }

  .cruxContext {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px #ccc solid;
    margin-left: 25px;
  }

  .cruxBox {
    width: 33%;
    padding-right: 50px;
    padding-bottom: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .cruxLeft{
      margin-right: 20px;
    }
  }

  .fold ul {
    li {
      margin: 20px 0;

      h2 {
        font-weight: 800;
      }
    }
  }

  .fold dl {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #ccc;
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

  .solution {
    .banner {
      @include minwidth();
      position: relative;

      .swiper-pagination {
        span {
          width: 100px;
          height: 5px;
          border-radius: 0px;
        }

        .swiper-pagination-bullet-active {
          /* opacity: 0.4; */
          background: rgba(0, 102, 153, 1);
        }
      }

      .bannerbox {
        height: 100px;
        position: absolute;
        top: 25%;
        left: 10%;
        color: #fff;
        font-size: 30px;
        line-height: 70px;

        h2 {
          font-size: 50px;
        }

        .xia {
          -webkit-animation-delay: .5s;
          animation-delay: .5s;
        }

        h3 {
          margin-top: 10px;
          background: #ff9900;
          /* padding: 3px 10px; */
          border-radius: 8px;
          width: 140px;
          font-size: 20px;
          height: 50px;
          line-height: 50px;
          -webkit-animation-delay: 1s;
          animation-delay: 1s;
          text-align: center;
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

        .digitalMarket {
          background-color: #fff;

          .digitalTitle {
            padding: 0 10%;

            .title {
              padding: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              .titleText {
                font-size: 20px;
                color: #333;
                text-align: center;
              }

              .titleLine {
                width: 163px;
                height: 2px;
                margin-top: 30px;
                margin-bottom: 30px;
                background-color: red;
              }

              .name {
                width: 600px;
                text-align: center;
              }
            }
          }

          .digitalContent {
            width: 70%;
            margin: 0 auto;

            .contentItem {
              display: flex;
              width: 100%;
              margin-bottom: 20px;
              justify-content: space-between;

              .contentItemText {
                width: 385px;

                .itemText {
                  font-size: 20px;
                  color: #333333;
                  display: flex;
                  align-items: center;
                  height: 40px;
                  margin-bottom: 30px;

                  span {
                    font-size: 32px;
                    font-weight: 700;
                    margin-right: 20px;
                  }
                }

                .contentItemCon {
                  font-size: 16px;
                  line-height: 28px;
                  color: #333;
                }
              }

              .contentItemImg {
                width: 280px;
                height: 269px;
              }
            }
          }

          .contentDigital {
            background-color: #f2f2f2;
            padding-top: 0.1px;
            padding-bottom: 40px;

            .contentDigitalTitle {
              color: #333333;
              font-size: 28px;
              margin: 50px 0;
              text-align: center;
            }

            .contentDigitalCon {
              padding: 0 10%;
              display: flex;

              .contentDigitalItem {
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                width: 50%;
                justify-content: space-between;

                .contentDigitalItemImg {
                  width: 230px;
                  height: 197px;
                }

                .contentDigitalItemCon {
                  flex: 1;
                  margin: 0 50px;

                  .contentDigitalItemTitle {
                    font-size: 20px;
                    color: #333;
                    margin-bottom: 20px;
                  }

                  .contentDigitalItemText {
                    font-size: 13px;
                    color: #333;
                    line-height: 28px;
                  }
                }
              }
            }
          }

          .digitalCompany {
            padding-top: 50px;

            .digitalCompanyTitle {
              margin-bottom: 50px;
              font-size: 28px;
              color: #333;
              text-align: center;
            }

            .digitalCompanyContent {
              width: 100%;
            }
          }

          .digitalPartner {
            padding: 50px 10%;

            .digitalPartnerTitle {
              margin-bottom: 50px;
              font-size: 28px;
              color: #333;
              text-align: center;
            }

            .digitalPartnerImg {
              width: 100%;
              /* height: 180px; */
            }
          }
        }

        .riskManage {
          background-color: #fff;
          padding: 0 10% 50px 10%;

          .riskManageTitle {
            .title {
              padding: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              .titleText {
                font-size: 20px;
                color: #333;
                text-align: center;
              }

              .titleLine {
                width: 163px;
                height: 2px;
                margin-top: 30px;
                margin-bottom: 30px;
                background-color: #f29d4b;
              }

              .name {
                width: 600px;
                text-align: center;
              }
            }
          }

          .riskManageContent {
            .riskManageContentTitle {
              font-size: 20px;
              color: #333;
              margin-bottom: 15px;
              font-weight: 700;
            }

            .riskManageContentCon {
              font-size: 16px;
              color: #333;
              line-height: 28px;
            }
          }

          .riskManageContentList {
            display: flex;
            padding-top: 0.1px;

            .riskManageContentLeft {
              width: 45%;

              .riskManageContentLeftItem {
                .riskManageContentLeftName {
                  margin: 50px 0 20px 0;
                  font-size: 20px;
                  color: #ff6633;
                }

                .riskManageContentLeftContent {
                  font-size: 16px;
                  color: #333;
                  line-height: 28px;
                }
              }
            }

            .riskManageContentRight {
              width: 55%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;

              img {
                width: 557px;
                height: 363px;
                margin-top: 50px;
              }
            }
          }
        }

        .precisionGuest {
          background-color: #fff;

          .precisionGuestTitle {
            padding: 0 10% 0 10%;

            .title {
              padding: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              .titleText {
                font-size: 20px;
                color: #333;
                text-align: center;
              }

              .titleLine {
                width: 103px;
                height: 2px;
                margin-top: 30px;
                margin-bottom: 30px;
                background-color: #f29d4b;
              }

              .name {
                width: 600px;
                text-align: center;
              }
            }
          }

          .precisionGuestContent {
            padding-top: 0.1px;

            .img1 {
              padding: 0 10% 0 10%;
              box-sizing: border-box;
              width: 100%;
              margin: 50px 0;
            }

            .precisionGuestContentModel {
              padding: 0 10% 0 10%;
              box-sizing: border-box;

              .precisionGuestContentModelName {
                font-size: 28px;
                color: #333;
                text-align: center;
                margin-bottom: 50px;
              }

              .precisionGuestContentModelList {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .precisionGuestContentModelItem {
                  margin-bottom: 50px;
                  width: 50%;
                  height: 197px;
                  padding: 20px;
                  box-sizing: border-box;
                  display: flex;
                  justify-content: space-between;

                  img {
                    width: 233px;
                    height: 197px;
                  }

                  .model {
                    flex: 1;
                    margin: 0 30px;
                    padding-top: 10px;

                    .modelName {
                      font-size: 20px;
                      color: #333;
                      margin-bottom: 20px;
                    }

                    .modelText {
                      font-size: 13px;
                      line-height: 28px;
                      color: #333;
                    }
                  }
                }
              }
            }

            .precisionGuestContentSize {
              margin-bottom: 50px;
              padding-top: 50px;

              .precisionGuestContentSizeTitle {
                font-size: 28px;
                color: #333;
                text-align: center;
                margin-bottom: 50px;
              }

              .precisionGuestContentSizeImg {
                width: 100%;
              }

              .redImg {
                height: 465px !important;
              }
            }

            .precisionGuestContentSizeColor {
              background-color: #f2f2f2;
            }

            .precisionGuestContentSizePd {
              padding: 50px 10% 50px 10%;
              margin-bottom: 0;
            }

            .precisionGuestContentSizeWidth {
              text-align: center;

              img {
                width: 90% !important;
              }
            }
          }
        }
      }
    }
  }

  .digitalCompany {
    padding-top: 50px;

    .digitalCompanyTitle {
      margin-bottom: 50px;
      font-size: 28px;
      color: #333;
      text-align: center;
    }

    .digitalCompanyContent {
      width: 100%;
    }
  }
</style>