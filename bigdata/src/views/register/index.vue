<template>
  <div class="big">
    <div class="wrap">
      <div class="left">
        <img src="../../assets/images/u247.png" alt="">
      </div>
      <div class="right">
        <div class="right_top">
          <span class="img"><img src="../../assets/images/u251.png" alt=""></span>
          三七数据产品体验中心
        </div>
        <p>用户名：<input type="text" placeholder="请输入您的用户名或手机号"></p>
        <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="text" placeholder="请输入您的密码"></p>
        <p>验证码：<input type="text" placeholder="请输入您的验证码"></p>
        <button>登录</button>
        <div class="zhuce"><span>忘记密码？</span><span>登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .big{
    width: 100%;
    height: 100%;
    background: #ccc;
  }
  .wrap{
    /* background: #fff; */
    display: flex;
    justify-content: center;
    /* width: 100%; */
    margin: 0 auto;
  }
  .left{
    width: 734px;
    img{
      width: 100%;
    }
  }
  .right{
    background: #fff;
    width: 566px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding-top: 145px;
    align-items: center;
    .right_top{
      display: flex;
      height: 58px;
      align-items:center;
      font-size:26px;
      font-weight:800;
      margin-bottom: 50px;
    }
    .img{
      display: block;
      width: 58px;
      img{
        width: 100%;
      }
    }
    p{
      margin: 10px;
    }
    input{
      border: solid 1px rgba(148, 148, 148, 1);
      width: 267px;
      padding: 5px 2px;
      margin-left: 8px;
    }
    button{
      width: 339px;
      height: 40px;
      background: #169bd5;
      font-size: 16px;
      color: #fff;
      border-radius: 5px;
      margin-top: 16px;
    }
    .zhuce{
      margin: 20px 0 0 240px;
    }
  }
</style>
