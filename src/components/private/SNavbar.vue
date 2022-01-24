<!--  -->
<template>
  <div id="SNavbar">
    <nav-bar :navbarList="navbarList" fontColor="white" :logoStyle="logoStyle"></nav-bar>
  </div>
</template>

<script>
  import Navbar from "components/common/Navbar"

  export default {
    data () {
      return {
        // navbarList: ["主页", "公司", "产品", "动态", "商城", "简介"],
        navbarList:[
          {id: 0, val: [{id: 0, title: "主页", eng: "home"}]},
          {id: 1, val: [{id: 0, title: "公司", eng: "company"}]},
          {id: 2, val: [{id: 0, title: "产品", eng: "product"}, {id: 1, sub: "PLA"}, {id: 2, sub: "ABS"}, {id: 3, sub: "TPU"}]},
          {id: 3, val: [{id: 0, title: "动态", eng: "activity"}]},
          {id: 4, val: [{id: 0, title: "商城", eng: "mall"}, {id: 1, sub: "淘宝"}, {id: 2, sub: "京东"}]},
          {id: 5, val: [{id: 0, title: "联系", eng: "contact"}]}
        ],
        logoStyle: {
          width: "120px",
          backgroundImage: `url(${require("assets/logo.png")})`
        },
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
    top: 2rem;
    width: 100%;
  }
</style>