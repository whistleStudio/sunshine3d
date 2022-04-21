<!-- PRODUCT -->
<template>
  <div id="product">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"></page-nav-bar>
    <div id="main">
      <div v-for="(v,i) in pData" :key="i" class="proCate">
        <div class="cateName"><span>{{v.cate}}</span></div>
        <ul>
          <li v-for="(pv,pi) in v.v" :key="pi" 
          @mouseenter="actProIdx=10*i+pi" @mouseleave="actProIdx=-1"> 
            <div class="proImg" :style="{backgroundImage: `url(${require('img/'+pv.img)})`}"></div>
            <span class="proName">{{pv.name}}</span>
            <div :class="{proLiHover: actProIdx==(10*i+pi)}">
              <span>{{pv.msg}}</span>
            </div>
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
        pData,
        actProIdx: -1,
      };
    },
    computed: {
      cateData: function () {
        let list = []
        pData.forEach(e => {
          list.push(e.cate)
        })
        return list
      }
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
  #main {
    width: 60vw;
  }
  .cateName {
    width: 60vw;
    height: 30px;
    border-bottom: 2px solid var(--rFontColor);
    box-sizing: border-box;
    position: relative;
  }
  .cateName>span {
    padding: 5px;
    color: white;
    background-color: var(--rFontColor);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
  }
  .proCate {
    margin-bottom: 3vw;
  }
  .proCate>ul {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
  }
  .proCate>ul>li {
    flex: none;
    width: 14vw;
    height: 16vw;
    background-color: ghostwhite;
    box-sizing: border-box;
    margin-top: calc(4vw / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5vw;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }
  .proCate>ul>li:not(:nth-of-type(4n)) {
    margin-right: calc(4vw / 3);
  }
  .proImg {
    width: 13vw;
    height: 13vw;
    background: center/cover no-repeat;
  }
  .proName {
    display: inline-block;
    height: 2vw;
    line-height: 2vw;
    font-size: 1.2rem;
  }
  .proLiHover {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: var(--rFontColorA);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>