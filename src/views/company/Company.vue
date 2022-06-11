<!-- COMPANY -->
<template>
  <div id="company">
    <page-navbar :headImg="headImgSrc" :cate="cateData"/>
    <div id="cpyIntro">
      <h1>公司简介</h1>
      <div>上善增材新材料有限公司于2021年11月注册成立，地址位于南京市栖霞区下坝工业园内。团队核心由5位具有国际视野的博士、硕士高技术人才构成，主要来自瑞士苏黎世联邦理工大学、新加坡国立大学、意大利米兰理工大学与国内河海大学、江苏大学及扬州大学。团队紧紧围绕国家提出的碳中和、碳达峰目标，致力于解决秸秆、塑料垃圾回收利用问题，创新性地研发出新型绿色3D打印原材料。</div>
    </div>
    <div id="cpyCulture">
      <h1>核心价值观</h1>
      <div><img :src="require('img/company/culture2.png')" alt=""><span>Special for you, <span style="color: rgb(50, 187, 169)">Green</span> & Safety</span></div>
    </div>
    <div id="cpyDev">
      <!-- <h1>企业理念</h1> -->
      <div></div>
    </div>
    <div id="cpyPartner">
      <h1>合作伙伴</h1>
      <div></div>
    </div>
    <!-- <div id="cpyGlory">
      <h1>企业荣誉</h1>
      <div></div>
    </div> -->
  </div>
</template>

<script>
  import pageNavBar from "components/common/PageNavBar"
  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/company/header.jpg")})`,
        cateData: ["公司简介", "核心价值观",  "合作伙伴"],
        culture: [
          {title: "企业口号", text: "创造现实 成就梦想", icon: require("img/company/culture0.png")}, 
          {title: "企业愿景", text: "xxxx", icon: require("img/company/culture1.png")}, 
          {title: "企业价值观", text: "xxxx", icon: require("img/company/culture2.png")}, 
          {title: "企业使命", text: "xxxx", icon: require("img/company/culture3.png")}
        ]
      };
    },
    components: {
      "page-navbar": pageNavBar
    },
  }
</script>

<style src="views/company/company.css" scoped></style>
