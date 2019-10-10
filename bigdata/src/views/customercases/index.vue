<template>
    <div>
        <div>
            <div class="nav">
                <p>首页 > 产品与方案 > 案例中心</p>
            </div>
            <div class="content">
                <div class="cont_ent">
                    <div class="left">
                        <h2>客户案例</h2>
                        <ul>
                            <li>场景创新，技术创新</li>
                            <li>做各行业信赖的伙伴；</li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="top">
                            <li>
                                <img src="../../assets/images/u928.png" alt="">
                                <p>智慧房车物联系统</p>
                            </li>
                            <li>
                                <img src="../../assets/images/u924.png" alt="">
                                <p>海信电商方案</p>
                            </li>
                            <li>
                                <img src="../../assets/images/u923.png" alt="">
                                <p>智慧城市</p>
                            </li>
                        </div>
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
  }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }

    .nav {
        background: rgba(0, 51, 102, 1);
        width: 100%;
        height: 62px;
        display: flex;
        align-items: center;
        padding-left: 20px;

    }

    .nav p {
        color: #fff;
    }

    .content {
        /* width: 800px; */
        width: 100%;
        height: 730px;
        display: flex;
        justify-content: center;
    }

    .cont_ent {
        height: 730px;
        display: flex;
        background: url(/u923.png) no-repeat center center
    }

    /* .content img{
    width: 100%;
} */
    .left {
        margin: 35px 120px 0 20px;
    }

    .left h2 {
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 15px
    }

    .top {
        display: flex;
        width: 800px;
        flex-wrap: wrap;
    }

    .top li {

        position: relative
    }

    .top li p {
        border: solid 1px #fff;
        padding: 5px 10px;
        position: absolute;
        box-sizing: border-box;
        top: 10px;
        left: 10px;
        color: #fff
    }
</style>
