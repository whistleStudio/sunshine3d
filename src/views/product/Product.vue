<!-- PRODUCT -->
<template>
  <div id="product">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"  @cateclick="changeContent"></page-nav-bar>
    <div>
      <ul id="pItems">
        <li v-for="(v, i) in pData[actCateIdx].v" :key="i">
          <img src="" alt="">
          <span>{{v.name}}</span>
        </li>
      </ul>
      <div id="pNavBtn">
        <ul>
          <li @click="changePage(-1)">&lt;</li>
          <li v-for="(v, i) in Array(curPages)" :key="i"
          @click="selectPage(i)" :class="{btnActive: curSelectPage == i}"
          >{{i+1}}</li>
          <li @click="changePage(1)">&gt;</li>
        </ul> 
      </div>
    </div>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/product/header.jpg")})`,
        cateData: ["全部", "线型耗材", "树脂耗材", "其他"],
        actCateIdx: 0,
        pData: [
          {id: 1, v: [
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
            {name: "PLA", img: "", msg: "description"},
          ]},
          {id: 2, v: [
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
            {name: "树脂", img: "", msg: "description"},
          ]},
          {id: 3, v: [
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
          ]},
        ],
        curSelectPage: 0,
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
    computed: {
      a:function () {return 1},
      totals: function () {
        let tL = 0
        for(let v of this.pData) {
          tL += v.v.length
        }
        return tL
      },
      curPages: function () {
        return Math.ceil(this.totals / 12)
      }
    },
    methods: {
      changeContent (i) {
        this.actCateIdx = i-1
        if (i == 0) {
          this.curTotals = this.totals
        } else {
          this.curTotals = this.pData[i-1].v.length
        }
      },
      selectPage (i) {
        this.curSelectPage = i
      },
      changePage (i) {
        if (i === -1 && this.curSelectPage !== 0) {
          this.curSelectPage --
        }
        if (i === 1 && this.curSelectPage !== this.curPages-1) {
          this.curSelectPage ++
        }
      }
    },
    mounted () {
      // console.log(this.curPages)
    }
  }
</script>

<style lang='css' scoped>
  #product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #pItems {
    /* margin: 0 auto; */
    display: flex;
    width: 60vw;
    height: 45vw;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-bottom: 3rem;
  }
  #pItems>li {
    width: 14vw;
    height: 14vw;
    background-color: orange;
    /* margin-bottom: 3rem; */
  }
  #pNavBtn {
    margin-bottom: 3rem;
  }
  #pNavBtn>ul{
    display: flex;
    justify-content: center;
  }
  #pNavBtn li {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    border-radius: 3px;
    font: 1.2rem/2rem "Microsoft YaHei";
    text-align: center;
    cursor: pointer;
    color: gray;
  }
  .btnActive {
    color: white !important;
    background-color: var(--rFontColor);
  }

  #pNavBtn li:hover {
    color: var(--rFontColor);
    /* font-weight: bold; */
  }
</style>