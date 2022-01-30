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
          <li>&lt;</li>
          <li></li>
          <li>&gt;</li>
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
        ]
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
    methods: {
      changeContent (i) {
        this.actCateIdx = i-1
        console.log(i)
      }
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
    width: 2.5rem;
    height: 2.5rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    border-radius: 3px;
    font: 1.5rem/2.5rem "Microsoft YaHei";
    text-align: center;
    cursor: pointer;
    color: gray;
  }

  #pNavBtn li:hover {
    color: var(--rFontColor);
    font-weight: bold;
  }
</style>