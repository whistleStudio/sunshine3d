<!-- COMPANY -->
<template>
  <div>
    <page-navbar :headImg="headImgSrc" :cate="cateData"/>
  </div>
</template>

<script>
  import pageNavBar from "components/common/pageNavBar"
  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/company/header.jpg")})`,
        cateData: ["公司简介", "企业文化", "发展历程", "合作伙伴", "联系我们"]
      };
    },
    components: {
      "page-navbar": pageNavBar
    },
  }
</script>

<style lang='css' scoped>
</style>