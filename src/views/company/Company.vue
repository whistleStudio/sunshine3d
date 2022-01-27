<!-- COMPANY -->
<template>
  <div id="company">
    <page-navbar :headImg="headImgSrc" :cate="cateData"/>
    <div id="cpyIntro">
      <h1>公司简介</h1>
      <div>xxx</div>
    </div>
    <div id="cpyCulture">
      <h1>企业文化</h1>
      <ul>
        <li v-for="(v, i) in culture" :key="i">
          <img :src="v.icon" alt="">
          <div class="cpyCultureContent">
            <h3>{{v.title}}</h3>
            <span>{{v.text}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div id="cpyDev">
      <h1>发展历程</h1>
      <div></div>
    </div>
    <div id="cpyPartner">
      <h1>合作伙伴</h1>
      <div></div>
    </div>
    <div id="cpyGlory">
      <h1>企业荣誉</h1>
      <div></div>
    </div>
  </div>
</template>

<script>
  import pageNavBar from "components/common/PageNavBar"
  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/company/header.jpg")})`,
        cateData: ["公司简介", "企业文化", "发展历程", "合作伙伴", "企业荣誉"],
        culture: [
          {title: "企业口号", text: "xxxx", icon: require("img/company/culture0.png")}, 
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
<style lang='css' scoped>

</style>