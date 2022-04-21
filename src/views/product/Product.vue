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
            <div v-if="actProIdx==(10*i+pi)" class="proLiHover" @click="toDetailsPage(pv.name)">
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
      toDetailsPage(p) {
        this.$router.push({
          path: "/product/details",
          query: {pname: p}
        })
      }
    },
    mounted () {
      // console.log(this.actCateIdx)
      // console.log(this.totals)
    },
    created () {

    }
  }
</script>

<style src="./product.css" lang='css' scoped></style>