<!-- contact -->
<template>
  <div id="contact">
    <div>
      <div id="info">
        <img :src="logoSrc" alt="上善增材">
        <div><img src="" alt=""><span>123456789</span></div>
        <div><img src="" alt=""><span>1234564789@126.com</span></div>
        <div><img src="" alt=""><span>江苏省南京市江宁区xxx街道xxx大厦</span></div>
      </div>
      <div id="cate">
        <ul>
          <li>关于上善</li>
          <li>公司简介</li>
          <li>发展历程</li>
          <li>公司荣誉</li>
          <li>合作伙伴</li>
        </ul>
        <ul>
          <li>产品中心</li>
          <li>3D打印耗材</li>
          <li>加工配件</li>
          <li>案例展示</li>
        </ul>    
        <ul>
          <li>在线商城</li>
          <li>淘宝店铺</li>
          <li>京东店铺</li>
        </ul>
        <ul>
          <li>服务支持</li>
          <li>技术文档</li>
          <li>样例模型</li>
          <li>打印教程</li>
          <li>常见问题</li>
        </ul>            
      </div>
      <div id="qrcode">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img src="" alt="">
        <div></div>        
      </div>
    </div>
    <div id="ICP">
      <span>备案号</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logoSrc: require("assets/logo.png")
      };
    },
    components: {},
  }
</script>

<style lang='css' scoped>
  * {
    --mainColor: var(--rFontColor)
  }
  #contact {
    width: 100%;
    height: 40vh;
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #contact>div {
    width: 80%;
    display: flex;
  }
  #info {
    height: 90%;
    flex: 4;
    padding-top: 2rem;
    background-color: yellow;
  }
  #info>img {
    width: 40%;
  }
  #cate {
    height: 90%;
    flex: 5;
    background-color: orange;
  }
  #qrcode {
    height: 90%;
    flex: 1;
    background-color: pink;
  }
  #ICP {
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 10%;
  }
</style>