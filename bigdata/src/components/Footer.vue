<template>
  <footer class="footer">
    <div class="smallfooter_top">
      <div class="footer_top">
        <div><img src="../assets/images/erWeiMa.jpg" height="180px" /></div>
        <div class="flex_item">
          <h1 class="connect_us">联系我们，让您的产品和世界物联起来</h1>
          <div class="write">
            <input type="text" placeholder="姓名" v-model='iptname' />
            <input type="text" placeholder="请输入您的联系方式" v-model='iptphone' />
            <label class="submit" @click='submit'>提交需求</label>
            <!-- <label class="free">免费体验</label> -->
          </div>
          <h2 class="connect_us">客服热线：010-86468827(分机：901-906)&nbsp;&nbsp;&nbsp;&nbsp;业务合作：13261021687（孙先生） 18911151119 （向先生）</h2>
        </div>
      </div>
    </div>
    <div class="smallfooter_center">
      <div class="footer_center">
        <div class="center_content" v-for="(item,index) in data" :key="index">
          <h1>{{item.title}}</h1>
          <span v-for="(item,index) in item.con" :key="index"
            @click='godetail(item.url,item.params)'>{{item.url_name}}</span>
        </div>
      </div>
      <div class="center_contentbox">
        <!-- <h2>友情链接：<span @click='gohangT'>航天智慧科技</span> <span @click='goFaX'>发现网</span></h2> -->
        <p>Copyright@ 北京三七数据有限公司 ALL Rights Reserved 版权所有 备案号：京ICP16024662号-1</p>
      </div>
    </div>
    <!-- <div class="footer_bottom">
        <p v-for="item in coptright" :key="item">{{item}}</p>
      </div> -->
  </footer>
</template>

<script>
  import { contact } from '@/api/frontpage'
  export default {
    data() {
      return {
        data: [
          {
            title: '产品中心',
            con: [
              { url_name: '物联网平台', url: 'productcentre', params: true },
              { url_name: '传 感 器', url: 'sensor' },
              { url_name: '数据采集', url: 'acquisition' },
              { url_name: '智能硬件', url: '' },
              { url_name: '大数据中台', url: 'productcentre', params: false },
              { url_name: '数据清洗', url: 'datacleansing' },
              { url_name: '数据分析', url: 'dataanalyze' },
              { url_name: '智能挖掘', url: 'intelligentMining' }
            ]
          },
          {
            title: '解决方案',
            con: [
              { url_name: '智能物联', url: 'solution', params: '0' },
              { url_name: '数字营销', url: 'solution', params: '1' },
              { url_name: '质量管控', url: 'solution', params: '3' },
              { url_name: '精准获客', url: 'solution', params: '4' }
            ]
          },
          {
            title: '关于我们',
            con: [
              { url_name: '公司简介', url: 'aboutus', params: '0' },
              { url_name: '企业文化', url: 'aboutus', params: '2' },
              { url_name: '加入我们', url: 'aboutus', params: '3' },
              { url_name: '联系我们', url: 'aboutus', params: '4' }
            ]
          },
          {
            title: '友情链接',
            con: [
              { url_name: '发现网', url: 'https://www.finding.com.cn/' },
              { url_name: '网易科技', url: '' },
              { url_name: '搜狐科技', url: '' },
              { url_name: '智慧科技', url: '' }
            ]
          }
        ],
        coptright: ['Copyright@ 北京三七数据有限公司  ALL Rights  Reserved 版权所有  备案号：京ICP16024662号-1',
          '地址:北京市海淀区唐家岭甲1号 弘祥1989科技文化产业园5106',
          '邮箱:37@37bigdata.com'],
        iptname: '',
        iptphone: ''
      }
    },
    methods: {
      submit() {
        let data = {
          contactName: this.iptname,
          contactDetails: this.iptphone
        }
        if(!data.contactName==''&&!data.contactDetails==''){
           contact(data).then(res => {
          if (res.data.code == 200) {
            this.$message({
              message: '提交信息成功',
              type: 'success'
            });
            this.iptname = '';
            this.iptphone = ''
          }
        })
        }
       
      },
      goFaX() {
        location.href = 'https://www.finding.com.cn/'
      },
      gohangT() {
        location.href = 'http://www.spacesystech.com/'
      },
      godetail(url, value) {
        if (url === 'https://www.finding.com.cn/') {
          location.href = url
        } else {
          this.$router.push({ name: url, query: { index: value } })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .center_contentbox {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 100px;

    h2 {
      padding-bottom: 10px;
      cursor: pointer;
    }

    p {
      width: 100%;
      border-top: solid 1px #ccc;
      text-align: right;
      padding-top: 10px;

    }
  }

  .footer {
    width: 100%;
  }

  .smallfooter_top {
    width: 100%;
    background: $color-base;
  }

  .footer_top {
    width: 80%;
    padding: 65px 0;
    display: flex;
    box-sizing: border-box;
    margin: 0 auto
  }

  .connect_us {
    color: $color-white;
  }

  .flex_item {
    flex: 1;
    padding-left: 4%;

    h1 {
      height: 36px;
      font-size: 36px;
      line-height: 36px;
    }

    h2 {
      font-size: 22px;
      font-weight: bold;
      height: 24px;
      line-height: 24px;
      padding-top: 20px;
    }

    .write {
      margin: 32px 0;

      input {
        height: 34px;
        line-height: 34px;
        width: 21%;
        margin-right: 2%;
        padding-left: 1%;
      }

      label {
        display: inline-block;
        height: 34px;
        line-height: 34px;
        padding: 0 4%;
      }

      .submit {
        cursor: pointer;
        background: rgba(51, 204, 255, 1);
        margin-right: 2%;
      }

      .free {
        background: rgba(255, 153, 0, 1)
      }
    }
  }

  .smallfooter_center {
    width: 100%;
    background: rgba(51, 51, 51, 1);
    color: #F2F2F2;
  }

  .footer_center {
    display: flex;
    padding: 60px 0;
    width: 80%;
    margin: 0 auto;
  }

  .center_content {
    margin-right: 2%;

    h1 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 36px;
    }

    span {
      display: inline-block;
      margin-bottom: 12px;
      color: #F2F2F2;
      cursor: pointer;
    }
  }

  .center_content:nth-child(1) {
    width: 40%;
  }

  .center_content:nth-child(2) {
    width: 20%;
  }

  .center_content:nth-child(3) {
    width: 20%;
  }

  .center_content:nth-child(4) {
    width: 20%;
  }

  .center_content:nth-child(1) span {
    width: 24%;
  }

  .center_content:nth-child(2) span {
    width: 50%;
  }

  .center_content:nth-child(3) span {
    width: 50%;
  }

  .center_content:nth-child(4) span {
    width: 50%;
  }

  .center_content:nth-child(1) span:nth-child(2) {
    font-weight: bold;
  }

  .center_content:nth-child(1) span:nth-child(6) {
    font-weight: bold;
  }

  .footer_bottom {
    background: rgba(153, 153, 153, 1);
    text-align: center;
    padding: 30px 0;
  }
</style>