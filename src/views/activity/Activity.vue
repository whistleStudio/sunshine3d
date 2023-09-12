<!-- ACTIVITY -->
<template>
  <div id="activity">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"  @cateclick="changeContent"></page-nav-bar>
    <item-show2 :_pData="pData" :_actCateIdx="actCateIdx" :_pEndMax="pEndMax" :_isShowDes="isShowDes"></item-show2>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"
  import ItemShow2 from "components/common/ItemShow2/ItemShow2"
  import productData from "views/activity/activityData.json"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/activity/header.jpg")})`,
        cateData: ["全部", "公司动态", "行业资讯", "新品介绍"],
        pData: [],
        actCateIdx: -1,
        pEndMax: 9,
        isShowDes: true
      };
    },
    components: {
      "page-nav-bar": PageNavBar,
      "item-show2": ItemShow2,
    },
    methods: {
      changeContent (i) {
        this.actCateIdx = i-1
      },
    },
    created () {
      this.pData = productData.pData
      console.log(window.screen.width)
      if (window.screen.width < 900) this.isShowDes = false
      // console.log(this.pData)
    }        
  }
</script>

<style lang='css' scoped>
  #activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(250,250,250);
  }
  ::v-deep #pItems {
    width: 60vw;
    height: 60vw;
    --pItemsLiW: 18vw;
    --pItemsLiH: 18vw;
    --pItemsImgW: 17vw;
    --pItemsImgH: 12vw;    
  }  
</style>