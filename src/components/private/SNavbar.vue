<!--  -->
<template>
  <div id="SNavbar">
    <nav-bar :navbarList="navbarList" ></nav-bar>
  </div>
</template>

<script>
  import Navbar from "components/common/Navbar"

  export default {
    data () {
      return {
        navbarList: ["主页", "公司", "产品", "动态", "商城", "简介"]
      };
    },
    components: {
      "nav-bar": Navbar
    },
  }
</script>

<style lang='css' scoped>
  #SNavbar {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>