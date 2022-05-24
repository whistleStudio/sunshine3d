<!--  -->
<template>
  <div id="SNavbar" :style="SNavStyle">
    <nav-bar :navbarList="navbarList"  :logoStyle="logoStyle" :navCMenuBgc="SNavStyle.backgroundColor"
    :navStyleFlag="navStyleFlag"></nav-bar>
  </div>
</template>

<script>
  import Navbar from "components/common/Navbar"

  export default {
    data () {
      return {
        navbarList:[
          {id: 0, val: [{id: 0, title: "主页", eng: "home"}]},
          {id: 1, val: [{id: 0, title: "公司", eng: "company"}]},
          {
            id: 2, val: [{id: 0, title: "产品", eng: "product"}],
            cmenu: [
              {cate: "通用级材料", v:["PLA","Tough-PETG","PETG-CF","Ordorless ABS","ASA"]},
              {cate: "柔性材料", v:["TPU-95A","TPU-Foam"]},
              {cate: "工业级材料", v:["PETG-ESD","UltraPA","EasePA12-CF","UltraPA-GF","UltraPA-CF"]},
              {cate: "支撑材料", v:["S-Green","S-Purple","S-Blue"]},
              {cate: "辅助工具", v:["FusDry"]}
            ]
          },
          {id: 3, val: [{id: 0, title: "新闻", eng: "activity"}]},
          {id: 4, val: [{id: 0, title: "联系", eng: "contact"}]}
        ],
      };
    },
    components: {
      "nav-bar": Navbar
    },
    props: {
      navStyleFlag: Number
    },
    computed:{
      SNavStyle () {
        if (this.navStyleFlag && this.$route.path === "/home") {
          return {backgroundColor: "white", color: "black", boxShadow: "none"}
        } else {
          return {backgroundColor: "white", color: "black", boxShadow: "0px 1px 2px 2px ghostwhite"}
        }
      },
      logoStyle () {
        if (this.navStyleFlag && this.$route.path === "/home") {
          return {width: "130px", backgroundImage: `url(${require("assets/logo2.png")})`}
        } else {
          return {width: "130px", backgroundImage: `url(${require("assets/logo2.png")})`}
        }
      }
    }
  }
</script>

<style lang='css' scoped>
  #SNavbar {
    position: fixed;
    /* top: 2rem; */
    box-sizing: border-box;
    padding-top: 20px;
    width: 100%;
    height: 95px;
    z-index: 9;
    /* background-color: orange; */
  }
</style>