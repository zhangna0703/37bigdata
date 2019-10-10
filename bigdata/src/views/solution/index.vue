<template>
    <div>
    <div class="solution">
        <!-- banner start -->
        <div class="banner">
          <swiper :options="bannerSwiperOption" ref="mySwiper">
              <!-- slides -->
              <swiperSlide v-if="imgList.length>0" v-for="(item,index) in imgList" :key="index">
                  <div
                      :style="{background:'url('+item.imgurl+') center center / cover',height:'724px'}"
                  ></div>
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
                <li v-for="(item,index) in solutionTab" :key="index" :class="index===solutionTabIndex?'solution-tab-high':''" @click="changeSolutionTabIndex(index)">{{item}}</li>
            </ul>
            <div class="solution-tab-section"></div>
        </div>
        <!-- solution tab end -->

        <!-- solution smartUnion start -->
        <div v-if="solutionTabIndex === 0" class="solution-smartUnion">
            <div class="smartUnion"></div>
        </div>
        <!-- solution smartUnion end -->

        <!-- Operational requirements start -->
        <!--<div class="e-business">-->
            <!--<div class="e-business-header">-->
                <!--<div class="line"></div>-->
                <!--<h2>业务需求和挑战（电商）</h2>-->
            <!--</div>-->
            <!--<div class="e-business-section">-->
                <!--<dl v-for="item in businessData" :key="item.title">-->
                    <!--<dt>-->
                        <!--<img :src="item.imgurl" />-->
                    <!--</dt>-->
                    <!--<dd>-->
                        <!--<h2>{{item.title}}</h2>-->
                        <!--<p>{{item.desc}}</p>-->
                    <!--</dd>-->
                <!--</dl>-->
            <!--</div>-->
        <!--</div>-->
        <!-- Operational requirements end -->

        <!-- solution case start -->
        <!--<div class="solution-case">-->
            <!--<div class="solution-case-header">-->
                <!--<div class="line"></div>-->
                <!--<h2>经典场景解决方案</h2>-->
            <!--</div>-->
            <!--<div class="solution-case-section">-->
                <!--<dl v-for="(item,index) in solutionCaseData" :key="index">-->
                    <!--<dt v-show="index%2==0?true:false">-->
                        <!--<img :src="item.imgurl" />-->
                    <!--</dt>-->
                    <!--&lt;!&ndash; 右字 &ndash;&gt;-->
                    <!--<dt v-show="index%2==0?false:true">-->
                        <!--<h2>{{solutionCaseData[1].title}}</h2>-->
                        <!--<p v-for="(it,index) in solutionCaseData[1].desc" :key="index">-->
                            <!--{{it}}-->
                        <!--</p>-->
                    <!--</dt>-->
                    <!--<dd v-show="index%2==0?true:false">-->
                        <!--<h2>{{item.title}}</h2>-->
                        <!--<p v-for="(it,index) in item.desc" :key="index">-->
                            <!--{{it}}-->
                        <!--</p>-->
                    <!--</dd>-->
                    <!--&lt;!&ndash; 右图 &ndash;&gt;-->
                    <!--<dd v-show="index%2==0?false:true">-->
                        <!--<img :src="solutionCaseData[1].imgurl" />-->
                    <!--</dd>-->
                <!--</dl>-->
                <!--&lt;!&ndash; <dl>-->
                    <!--<dt>-->
                        <!--<img :src="solutionCaseData[0].imgurl" />-->
                    <!--</dt>-->
                    <!--<dd>-->
                        <!--<h2>{{solutionCaseData[0].title}}</h2>-->
                        <!--<p v-for="(it,index) in solutionCaseData[0].desc" :key="index">-->
                            <!--{{it}}-->
                        <!--</p>-->
                    <!--</dd>-->
                <!--</dl>-->
                <!--<dl>-->
                    <!--<dt>-->
                        <!--<h2>{{solutionCaseData[1].title}}</h2>-->
                        <!--<p v-for="(it,index) in solutionCaseData[1].desc" :key="index">-->
                            <!--{{it}}-->
                        <!--</p>-->
                    <!--</dt>-->
                    <!--<dd>-->
                        <!--<img :src="solutionCaseData[1].imgurl" />-->
                    <!--</dd>-->
                <!--</dl> &ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
        <!-- solution case end -->
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
      businessData: [{
        imgurl: require('@/assets/images/dianshang_1.png'),
        title: '“进”与“销”的匹配',
        desc: '神策分析提供的SDK和广告渠道标记工具，获取各个渠道的信息，通过建立时间分析模型，分析不同渠道用户浏览或购买的和产品情况；结合留存分析模型，了解不同渠道转化的用户留存情况，从而反推渠道质量和渠道特点优化投放策略。'
      }, {
        imgurl: require('@/assets/images/dianshang_2.png'),
        title: '线下用户的识别',
        desc: '微信、支付宝等更便利的支付方式，让线下用户的识别变成可能。如何利用数据分析，发现不同的门店拉新效果，并深入了解老用户的消费习惯。'
      }, {
        imgurl: require('@/assets/images/dianshang_3.png'),
        title: '线上、线下商品差异化',
        desc: '场景和清净的不同，让线上线下哦那个互锁偏好的商品类型具有较大变化差异。如何通过数据统计发现差异点，实现差异化营销。'
      }],
      solutionCaseData: [{
        imgurl: require('@/assets/images/changjing1.png'),
        title: '线上进销分析',
        desc: ['线上进销分析：线上供货平台，供货商通过建立进销转化漏斗，实现单品的实时管理。根据供需的缺口，适时调整各种（类）商品的进货力度。', '销货特征分布：供货商通过事件分析模型，实时监测商品销售的品牌、类别和地区分布，并跟踪其销售金额和销售量的情况，得到不同（类）商品的销售特征。']
      }, {
        imgurl: require('@/assets/images/changjing2.png'),
        title: '用户画像',
        desc: ['识别具有类似属性／行为特征的用户后，通过漏斗、留存和分布分析，描绘出某类（个）用户的购买品类偏好、复购情况、购买频次分布等。将线上和线下用户的数据打通，了解用户两种消费场景的不同消费习惯和其中的相关性。']
      }]
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
    }
  }
}
</script>

<style lang="scss">
.solution{
    .banner{
        @include minwidth();
        .swiper-pagination{
        span{
            width: 100px;
            height: 5px;
            border-radius: 0px;
        }
        .swiper-pagination-bullet-active{
              opacity: 0.4;
              background: $color-theme;
        }
    }
  }
  .solution-tab{
    @include minwidth();
    @include wh(100%,auto);
    background: #fff;
    .solution-tab-header{
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 60px 0px;
        li{
            font-size: 24px;
            padding: 5px;
            cursor: pointer;
        }
        .solution-tab-high{
            border-bottom: 4px solid $color-theme;
        }
    }
    .solution-tab-section{
        @include wh(100%,450px);
        background: #F2F2F2;
    }
  }
  .e-business{
    @include minwidth();
    @include wh(100%,auto);
    background: #fff;
    padding: 110px 0px;
    .e-business-header{
        text-align: center;
        .line{
            @include wh(100px,5px);
            margin: 0 auto;
            margin-bottom: 30px;
            background: #3333CC;
        }
        h2{
            font-size: 30px;
            font-weight: bold;
        }
    }
    .e-business-section{
        width: 75%;
        height: auto;
        margin: 0 auto;
        margin-top: 70px;
        display: flex;
        dl{
            padding: 40px 60px;
            width: 33.3%;
            background: #F8FBFC;
            border-right: 1px solid rgba(189, 186, 186, 0.705);
            dt{
                @include wh(70px,70px);
                background: #fff;
                border-radius: 50%;
                text-align: center;line-height: 70px;
            }
            dd{
                h2{
                    font-size: 24px;
                    font-weight: 500;
                    color: #7D8B92;
                    margin: 30px 0px;
                }
                p{
                    color: #7D8B92;
                }
            }
        }
        dl:last-child{
            border-right: none;
        }
    }
  }
  .solution-case{
    @include minwidth();
    @include wh(100%,auto);
    background: #fff;
    padding: 110px 0px;
    .solution-case-header{
        text-align: center;
        .line{
            @include wh(100px,5px);
            margin: 0 auto;
            margin-bottom: 30px;
            background: #3333CC;
        }
        h2{
            font-size: 30px;
            font-weight: bold;
        }
    }
    .solution-case-section{
        @include wh(75%,auto);
        margin: 0 auto;
        dl{
            padding: 80px 0px;
            display: flex;
        }

        h2{
            font-size: 30px;
            font-weight: bold;
            color:#7D8B92;
        }
        p{
            font-size: 20px;
            margin-top: 25px;
            line-height: 1.5;
            color:#7D8B92;
        }
        dl:nth-child(odd){
            dd{
                padding-left: 2%;
            }
        }
        dl:nth-child(even){
            dd{
                padding-left: 2%;
            }
        }
    }
  }
}
</style>
