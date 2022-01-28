<!-- PRODUCT -->
<template>
  <div id="product">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"></page-nav-bar>
    <div>
      <ul id="pItems">
        <li></li>
      </ul>
      <div id="navBtn"></div>
    </div>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/product/header.jpg")})`,
        cateData: ["全部", "线型耗材", "树脂耗材", "其他"]
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
  }
</script>

<style lang='css' scoped>
</style>