<!-- PRODUCT -->
<template>
  <div id="product">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"  @cateclick="changeContent"></page-nav-bar>
    <div>
      <ul id="pItems" v-if="actCateIdx != -1">
        <li v-for="(v, i) in pData[actCateIdx].v.slice(pStart, pEnd)" :key="i">
          <img :src="v.img" alt="">
          <span>{{v.name}}</span>
        </li>
      </ul>
      <ul id="pItems" v-else>
        <li v-for="(v, i) in totals.slice(pStart, pEnd)" :key="i">
          <img :src="v.img" alt="">
          <span>{{v.name}}</span>
          <div class="resume">{{v.msg}}</div>
        </li>                    
      </ul>
      <div id="pNavBtn">
        <ul>
          <li @click="changePage(-1)">&lt;</li>
          <li v-for="(v, i) in Array(curPages)" :key="i"
          @click="selectPage(i)" :class="{btnActive: curSelectPage == i}">
          {{i+1}}</li>
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
        actCateIdx: -1,
        pData: [
          {id: 1, v: [
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
            {name: "PLA", img: require("img/product/f2.jpg"), msg: "description"},
          ]},
          {id: 2, v: [
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
            {name: "树脂", img: require("img/product/r0.png"), msg: "description"},
          ]},
          {id: 3, v: [
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
            {name: "其他", img: "", msg: "description"},
          ]},
        ],
        curSelectPage: 0,
        pStart: 0,
        pEnd: 12
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
    computed: {
      totals: function () {
        let t = []
        this.pData.forEach(el => {
          el.v.forEach(e => {
            t.push(e)
          })
        })
        return t
      },
      pLen : function () {
        let pL = []
        this.pData.forEach(el => {
          pL.push(el.v.length)
        })
        return pL
      },
      curPages: function () {
        return Math.ceil(this.curTotals / 12)
      },
      curTotals: function () {
        if (this.actCateIdx == -1) {
          return this.totals.length
        } else {
          return this.pData[this.actCateIdx].v.length
        }
      }
    },
    methods: {
      changeContent (i) {
        this.actCateIdx = i-1
        this.pStart = 0
        this.pEnd = 12
        if (i > 0) {
          let curL = this.pLen[this.actCateIdx]
          if (curL < 12) this.pEnd = curL
        }
      },
      selectPage (i) {
        this.curSelectPage = i
        this.pStart = i * 12
        this.pEnd = (i+1) * 12
      },
      changePage (i) {
        if (i === -1 && this.curSelectPage !== 0) {
          this.curSelectPage --
        }
        if (i === 1 && this.curSelectPage !== this.curPages-1) {
          this.curSelectPage ++
        }
        this.pStart = this.curSelectPage * 12
        this.pEnd = (this.curSelectPage+1) * 12
      }
    },
    mounted () {
      // console.log(this.actCateIdx)
      // console.log(this.totals)
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
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    /* margin-bottom: 3rem; */
    --top: 14vw;
  }
  #pItems img {
    width: 13vw;
    height: 13vw;
  }
  .resume {
    width: 14vw;
    height: 14vw;
    position: absolute;
    z-index: 1;
    top: var(--top);
    color: white;
    background-color: var(--rFontColorA);
    opacity: 1;
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
  #pItems>li:hover {
    animation: highligh 0.5s forwards;
  }
  .resume:hover {
    animation: popup 0.6s forwards;
  }
  @keyframes highligh {
    from {box-shadow: none; --top: 14vw}
    to {box-shadow: 1px 1px 1px 2px gainsboro; --top: 0}
  }
  /* @keyframes popup {
    from {
      opacity: 1;
      top: 14vw;
    }
    to {
      opacity: 1;
      top: 0;
    }
  } */
</style>