<!-- CONTACT -->
<template>
  <div id="contact">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"></page-nav-bar>
    <div id="content">
      <div id="cTitle">联系上善</div>
      <div id="cInfo">
        <ul>
          <li v-for="v in infoData" :key="v.id"><div class="cIcon" :style="{backgroundImage: v.img}"></div> <span class="cIconText">{{v.text}}</span></li>
        </ul>
        <div id="cSend">
          <div>留言给我们:</div>
          <div>
            <div><input type="text"></div>
            <div>
              <select name="" id="">
                <option disabled value="">问题分类</option>
                <option v-for="(v,i) in ['产品咨询','技术支持', '商务合作', '其他']" :key="i">{{v}}</option>
              </select>
              <input type="text">
            </div>
            <div><input type="text"> <input type="text"></div>
            <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
          </div>
        </div>
      </div>
      <div id="cOther">xxxxxxx</div>
    </div>
  </div>
</template>

<script>
  import PageNavBar from "components/common/PageNavBar"

  export default {
    data () {
      return {
        headImgSrc: `url(${require("img/contact/header.jpg")})`,
        cateData: [],
        infoData: [
          {id:0, img:`url(${require("img/contactIcon2.png")})`, text:"江苏省南京市江宁区xxx街道xxx大厦"},
          {id:1, img:`url(${require("img/contactIcon0.png")})`, text:"123456789"},
          {id:2, img:`url(${require("img/contactIcon1.png")})`, text:"1234564789@126.com"},
        ],
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
  }
</script>

<style lang='css' scoped>
  #contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #content {
    width: 70vw;
    height: 60vh;
    margin-bottom: 5rem;
    background-color: rgb(250, 250, 250);
    border-radius: 1rem;
  }
  #cTitle {
    height: 10vh;
    /* background-color: pink; */
    color: rgb(100, 100, 100);
    font: 2rem/10vh "Microsoft YaHei";
    text-align: center;
  }
  #cInfo {
    height: 40vh;
    /* background-color: skyblue; */
    display: flex;
    justify-content: center;
  }
  #cInfo>ul {
    width: 32vw;
    height: 100%;
  }
   #cInfo>ul>li {
     display: flex;
     align-items: center;
     margin-bottom: 3rem;
   }
  .cIcon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--rFontColorA) center/60% no-repeat;
  }
  .cIconText {
    vertical-align: middle;
    margin-left: 1rem;
    font: 1.2rem sans-serif;
  }
  #cInfo>div {
    width: 32vw;
    height: 100%;
  }
  #cSend {
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.05);
  }
  #cSend>div:first-child {
    height: 3vh;
    background-color: var(--rFontColor);
    color: white;
    font: 1.5rem/3vh  "Microsoft YaHei";
    padding-left:1rem;
    border-radius: 0.5rem;
  }
  #cOther {
    box-sizing: border-box;
    border-top: 1px solid rgba(0,0,0,0.1);
    width: 64vw;
    height: 10vh;
    margin: 0 auto;
    margin-top: 2rem;
    /* background-color: olive !important; */
  }
</style>