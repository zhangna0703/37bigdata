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
          <div class="gatewaybox">
            <div class="gateway">
              <h2>智慧能源解决方案</h2>
              <p>
                该项目将三七网关部署在高科技园区、高校园区、医院、商业建筑等配电室内，监测水、电、冷、暖的电表、电力设备的相关数据，并通过能源管控平台对前端电力网关及电力设备进行远程管理。该网关已支持多种电力专用规约协议，包括Modbus,DLT-645,IEC-60870-101/102/103/104,IEC-61850,CDT91等。并且该网关将采集到的数据上传至智慧能源管控系统进行数据整合，通过精准的大数据分析对园区用户的用电情况进行实时统计，精准预测，方案优化，达到帮助企业节能的目的。
              </p>
              <div class="imgbox">
                <div class="img">
                  <img src="../../assets/images/zhihui.png" alt="">
                </div>
                <div class="img">
                  <img src="../../assets/images/zhihui2.png" alt="">
                </div>
              </div>

            </div>
          </div>
          <div class="boxinfo">
            <h2>园区、建筑、高校等在线能源管控系统</h2>
            <p>
              能耗在线监测系统是一套以节能降耗为核心目的、物联网、大数据分析为基础的能源在线监测与分析管理系统。它是通过对重点用能单位的节能设备、主要工艺设备、主要耗能设备的能耗和工况进行全面监测、诊断与分析，采用设备节能、工艺优化节能、管理策略优化节能等多种手段相结合的方式，为重点用能单位提供适应用户生产线工艺工况差异化特点的系统节能产品、节能策略方案、节能管理与服务平台，进而构建“企业（集团）能源管控中心”，为重点用能单位经济用能、合理用能提供产品、技术、策略、方法和信息支持，使重点用能单位整个生产线实现节能5%-30%。
            </p>
            <div class="zhinengWl">
              <dl v-for='(item,index) in zhinengWl'>
                <dt><img :src="item.img" alt=""></dt>
                <dd>
                  <h5>{{item.tit}}</h5>
                  <h6 v-html='item.content'></h6>
                </dd>
              </dl>
            </div>
            <p>三七能源管控子系统向能源管理要效益，  向用能设备要效益（经济运行和操作指导），服务于领导决策（技改高能耗设备和生产工艺），提高突发故障和异常处理的效率，减少浪费不必要的能源浪费。</p>
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
                    <li>需求跟进</li>
                    <li>定制化解决方案</li>
                    <li>数据清洗</li>
                    <li>交付数据</li>
                  </ul>
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
                    <li>需求跟进</li>
                    <li>定制化解决方案</li>
                    <li>数据清洗</li>
                    <li>交付数据</li>
                  </ul>
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
                      <li>需求跟进</li>
                      <li>定制化解决方案</li>
                      <li>数据清洗</li>
                      <li>交付数据</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
        <div class="solution-tab-section" v-if='solutionTabIndex === 3'>
          <div class="produebox">
            <div class="smallproduce">
              <div class="title">
                <div class="titleText">数据质量管控的产品功能</div>
                <div class="titleLine"></div>
                <div class="name">质量控制是一个系统工程，有其自身的规律和独特的控制方法</div>
              </div>
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
                    <li>需求跟进</li>
                    <li>定制化解决方案</li>
                    <li>数据清洗</li>
                    <li>交付数据</li>
                  </ul>
                </div>
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
                      <li>需求跟进</li>
                      <li>定制化解决方案</li>
                      <li>数据清洗</li>
                      <li>交付数据</li>
                    </ul>
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
        zhinengWl:[{
          img:require('@/assets/images/neng1.png'),
          tit:'能源仓库',
          content:'采集各项能源数据，实现对企业运行数据实时监视、报警、分析、计算、统计等功能。'
        },{
          img:require('@/assets/images/neng2.png'),
          tit:'能源实时监控',
          content:'能源实时监控是对企业电、气、水、暖、空调等各种能源介质在购入存储、加工转换、输送分配和终端使用过程中进行集中的监视、测量、控制和管理，并根据报警信息处理给出合理的调度操作建议和应急预案，确保能源介质在各个环节的安全性和可用性。'
        },{
          img:require('@/assets/images/neng3.png'),
          tit:'报警、日志',
          content:'提供面向安全和能耗异常的报警和日志的查询。<br/>如：主辅关联设备运行异常及处理的记录，帮助用户规范管理、督促考核或通过增加控制策略优化工艺控制减少能源浪费。'
        },{
          img:require('@/assets/images/neng4.png'),
          tit:'能源质量分析',
          content:'通过一定的检验手段，例如：质量统计分析、质量跟踪、趋势评估、越线警告、能源质量报告、交互式的质量数据查询工作等，对外供的水、电、气等各种能源介质进行质量控制，平衡能源介质品质与产品成本的矛盾。'
        },{
          img:require('@/assets/images/neng5.png'),
          tit:'能耗设备管理',
          content:'对重点的能耗设备进行管理，包括：设备参数管理、设备维护管理、设备故障管理等。建立健全设备的电子档案，便于进行设备检修、维护保养等工作，以达到保障设备稳定运行、延长设备使用寿命的目的。'
        },{
          img:require('@/assets/images/neng6.png'),
          tit:'能耗分析',
          content:'通过报表的形式，将能源数据按区域、部门、车间、工序、班次、时间等方式进行统计，实现能源数据的横向、纵向对比分析。'
        },{
          img:require('@/assets/images/neng7.png'),
          tit:'事件记录',
          content:'记录指定事件发生时前后十分钟关联设备关联参数的数据与曲线，通过事故记录功能追溯事故原因，采取有效措施解决潜在隐患，避免同类故障的再次发生。'
        },{
          img:require('@/assets/images/neng8.png'),
          tit:'损耗分析',
          content:'系统中嵌入变压器损耗计算、线路损耗计算方法，计算实时损耗、历史损耗以及模拟损耗。'
        },{
          img:require('@/assets/images/neng9.png'),
          tit:'联动提醒',
          content:'对系统中有关联关系的设备之间建立联动提醒条件，按照条件进行提醒，并提供查询，通过联动提醒功能可有力的提升企业管理水平，避免管理不到位造成的空转空待现象，减少能源浪费。'
        },{
          img:require('@/assets/images/neng10.png'),
          tit:'能耗预测',
          content:'根据上一年度、上一月度的能耗数据、单耗数据、产量数据，结合本年度、月度的能耗计划、单耗指标、产量计划和本年度已进行的月份、本月度已进行的日期的能耗数据，对本年度剩余的月份、本月度剩余的日期的能耗、单耗进行预测。<br/>预测数据与计划数据产生较大偏差时及时提醒。'
        },{
          img:require('@/assets/images/neng11.png'),
          tit:'节能验证',
          content:'该功能用于企业进行所采取的节能措施的节能效果的统计，选择所进行节能改造的对象（区域、设备），再选择改造前后相同的两个时间段，可统计出这两个时间段的能耗数据，并进行对比计算节能量与节能率。'
        }],
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
            img: require('@/assets/images/kua1.png'),
            content: '37-bigdata QM 基于PDCA质量管理方法精心研发设计而成，可以科学、高效地帮助企业和组织进行全面的数据质量管理。PDCA循环又叫戴明环，是由美国著名的质量管理专家戴明博士提出，它是全面质量管理所应遵循的科学程序。<br/>PDCA是英语单词Plan（计划）、Do（执行）、Check（检查）和Act（行动）的第一个字母，PDCA循环就是按照这样的顺序进行质量管理，并且循环不止地进行下去的科学程序。科学、高效地帮助企业和组织进行全面的数据质量管理。'
          }, {
            img: require('@/assets/images/kua2.png'),
            tit: '<b>02.</b>领先业界的评价算法',
            content: '37-bigdata  QM 支持多种领先业界的规则评价算法，满足业务系统运行、数据中心建设及数据治理过程中各类规则定义，并支持XML扩展，可完全适应未来三到五年的数据质量管理需求变化。'
          }, {
            img: require('@/assets/images/kua3.png'),
            tit: '<b>03.</b>可兼容多种操作系统',
            content: '可兼容所有支持JDK的操作系统，包括Windows、Linux以及多种采用UNIX内核的操作系统。支持所有符合JDBC2.0规范的数据库，如oracle、DB2、SQLserver、Mysql等。'
          }, {
            img: require('@/assets/images/kua4.png'),
            tit: '<b>04.</b>可跨数据源对比',
            content: '支持在业务系统建设、数据仓库建设各重要阶段设置数据检查监控点，并可实现跨监控点数据源的比较分析，使得通过常规的规则定义便可实现ETL前后的数据一致性比对。'
          }
        ],
        importantvalue: [
          {
            tit: '统一的企业数据质量检核体系，制定企业统一的数据质量检核体系，统一数据质量度量、执行的规范化步骤，为企业数据质量管控的落实提供技术平台支撑。',
            img: require('@/assets/images/1.png')
          }, {
            tit: '数据质量状况分析，引用系统内置度量规则和检核方法对系统表、字段进行多角度的数据质量检核评估，为数据分析、数据状况调研提供数据分析报告，对系统关键业务数据的质量情况进行全方位把握。',
            img: require('@/assets/images/2.png')
          }, {
            tit: '数据质量持续监控，确保为将来提供准确、一致和及时数据，使数据始终符合数据质量业务规则，确保企业数据始终保持最高的质量并防止随时间推移导致数据质量下降。',
            img: require('@/assets/images/3.png')
          }, {
            tit: '基于企业对数据质量问题处理的要求灵活制定数据质量问题处理流程，方便问题数据的处理和清洗。',
            img: require('@/assets/images/4.png')
          }, {
            tit: '快速定位数据质量问题影响范围，通过元数据关联关系分析功能，可定位问题数据出错的源头和受影响的范围，及时通知关联方，降低由数据问题带来的影响。',
            img: require('@/assets/images/5.png')
          }],
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
      routerIndex(newVal, oldVal) {
        if (newVal >= 0) {
          this.changeSolutionTabIndex(this.routerIndex)
        }
      }
    },
    mounted() {
      if (this.routerIndex === 0 || this.routerIndex) {
        document.documentElement.scrollTop = 420
      } else {
        document.documentElement.scrollTop = 0
      }
      this.solutionTabIndex = this.$route.query.index * 1 || this.solutionTabIndex
    },
    methods: {
      changeSolutionTabIndex(index) {
        this.solutionTabIndex = index
        // if (index === 0 || index) {
        document.documentElement.scrollTop = 420
        // }
      }
    }
  }
</script>

<style lang="scss">
  .gatewaybox {
    background: #fff;

  }
.zhinengWl{
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  dl{
    width: 33%;
    display: flex;
    padding:60px 30px;
    box-sizing: border-box;
    dt{
      width: 130px;
      img{
        width: 100%;
      }
    }
    dd{
      flex:1;
      margin-left: 30px;
      h5{
        font-size:20px;
        margin-bottom:20px;
      }
    }
  }
}
  .gateway,
  .boxinfo {
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

    .img {
      margin: 0 auto;
      width: 500px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .imgbox{
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
  }

  .gatebottom {
    padding: 70px 0;
    box-sizing: border-box;
    line-height: 32px;
    text-align: center;
    font-size: 16px;
  }

  .gatewaytu {
    background: #fff;
    display: flex;
    width: 40%;
    border: 3px #ccc dashed;
    border-radius: 30px;
    overflow: hidden;
    padding: 20px 100px;
    margin: 50px auto 50px;
    align-items: center;
    box-sizing: border-box;

    .left {
      width: 250px;

      img {
        width: 100%;
      }
    }

    .right {
      margin-left: 50px;

      h3 {
        font-size: 20px;
        margin-bottom: 20px;
      }

      p {
        padding: 4px 0;
        border-radius: 8px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background: #3064C3;
      }
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
    height: 100%;
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
    padding-top: 30px;
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
    padding: 50px 0 50px 0;

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
    border-bottom: 2px #eee solid;
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

    .cruxLeft {
      margin-right: 20px;
    }
  }


  .solution {
    .banner {
      height: 500px;
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
        font-size: 26px;
        line-height: 70px;

        h2 {
          font-size: 46px;
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
            padding: 80px 10%;

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
                background-color: red;
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
                background-color: red;
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
</style>