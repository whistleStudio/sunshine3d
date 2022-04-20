<!-- PRODUCT -->
<template>
  <div id="product">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"></page-nav-bar>
    <div id="main">
      <div class="proCate">
        <div class="cateName"><span>通用级材料</span></div>
        <ul>
          <li v-for="(v,i) in pData[0]" :key="i">
            <div class="proImg"></div>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"
  import {pData} from "views/product/productData.json"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/product/header.jpg")})`,
        cateData: ["通用级材料", "柔性材料", "工业级材料", "支撑材料", "辅助工具"],
        pData
      };
    },
    components: {
      "page-nav-bar": PageNavBar,
    },
    methods: {

    },
    mounted () {
      // console.log(this.actCateIdx)
      // console.log(this.totals)
    },
    created () {

    }
  }
</script>

<style lang='css' scoped>
  #product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ::v-deep #pItems {
    width: 60vw;
    height: 45vw;
    --pItemsLiW: 14vw;
    --pItemsLiH: 14vw;
    --pItemsImgW: 13vw;
    --pItemsImgH: 13vw;    
  }
  #main {
    width: 60vw;
  }
  .cateName {
    width: 60vw;
    height: 30px;
    border-bottom: 2px solid var(--rFontColorA);
    box-sizing: border-box;
    position: relative;
  }
  .cateName>span {
    padding: 5px;
    color: white;
    background-color: var(--rFontColorA);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    bottom: 0;
  }
  .proCate>ul {
    width: 60vw;
    display: flex;
    word-wrap: wrap;
    justify-content: space-between;
  }
  .proCate>ul>li {
    flex: 0;
    width: 14vw;
    height: 15vw;
    border: 1px solid gray;
    background-color: yellow;
  }
</style>