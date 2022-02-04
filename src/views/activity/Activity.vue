<!-- ACTIVITY -->
<template>
  <div id="activity">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"  @cateclick="changeContent"></page-nav-bar>
    <item-show :_pData="pData" :_actCateIdx="actCateIdx" :_pEndMax="pEndMax" ></item-show>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"
  import ItemShow from "components/common/ItemShow/ItemShow"
  import productData from "views/activity/activityData.json"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/activity/header.jpg")})`,
        cateData: ["全部", "公司动态", "行业资讯", "新品介绍"],
        pData: [],
        actCateIdx: -1,
        pEndMax: 12,
      };
    },
    components: {
      "page-nav-bar": PageNavBar,
      "item-show": ItemShow,
    },
    methods: {
      changeContent (i) {
        this.actCateIdx = i-1
      },
    },
    created () {
      this.pData = productData.pData
      console.log(this.pData)
    }        
  }
</script>

<style lang='css' scoped>
  #activity {
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
</style>