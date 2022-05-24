<!-- contact -->
<template>
  <div id="contact">
    <div>
      <div id="info">
        <img :src="logoSrc" alt="上善增材">
        <div v-for="i in infoData" :key="i.id">
          <div :style="{backgroundImage: i.img}"></div>
          <span>{{i.text}}</span>
        </div>
      </div>
      <div id="cate">
        <ul v-for="c in cateData" :key="c.id">
          <li>{{c.head}}</li>
          <li v-for="i in c.item" :key="i.id">{{i.v}}</li>
        </ul>       
      </div>
      <div id="qrcode">
        <!-- <ul>
          <li v-for="icon in qrImg.slice(0,qrImg.length-1)" :key="icon.id" 
          :style="{backgroundImage: icon.link}"></li>
        </ul> -->
        <!-- <img :src="qrImg[qrImg.length-1].link" alt=""> -->
        <img :src="require('img/map.png')" @click="qrJump" alt="点击获取详细信息">
        <a target="_blank" ref="qrA" href="https://map.baidu.com/search/%E5%8D%97%E4%BA%AC%E5%B8%82%E6%A0%96%E9%9C%9E%E5%8C%BA%E9%BE%99%E6%BD%AD%E8%A1%97%E9%81%93%E4%B8%8A%E5%9D%9D%E6%9D%91/@13271085.535,3767168.87,19z?querytype=s&da_src=shareurl&wd=%E5%8D%97%E4%BA%AC%E5%B8%82%E6%A0%96%E9%9C%9E%E5%8C%BA%E9%BE%99%E6%BD%AD%E8%A1%97%E9%81%93%E4%B8%8A%E5%9D%9D%E6%9D%91&c=315&src=0&pn=0&sug=0&l=16&b=(13267807.352074299,3765797.440304313;13273638.400616158,3768659.8169973865)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"></a>
        <!-- <div>关注上善增材微信公众号</div>         -->
      </div>
    </div>
    <div id="ICP">
      <span>{{ICP}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      };
    },
    props: {
      logoSrc: String,
      infoData: Array,
      cateData: Array,
      qrImg: Array,
      ICP: String
    },
    methods: {
      qrJump () {
        this.$refs.qrA.click()
      }
    }
  }
</script>

<style lang='css' scoped>
  * {
    /* 需要root样式--rFontColor */
    --mainColor: var(--rFontColor);
    --fontColor: rgba(255, 255, 255, 0.7);
  }
  #contact {
    /* margin-top: 2rem; */
    width: 100%;
    height: 40vh;
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fontColor);
    padding-top: 2rem;
    position: relative;
  }
  #contact>div {
    width: 80%;
    display: flex;
  }
  #info {
    height: 90%;
    flex: 3;
    /* background-color: yellow; */
  }
  #info>img {
    width: 40%;
  }
  #info>div {
    margin-top: 1.5rem;
  }
  #info>div>div {
    display: inline-block;
    width: 3.5vh;
    height: 3.5vh;
    background: rgba(255, 255, 255, 0.2) center/60% 60% no-repeat;
    opacity: 0.8;
    border-radius: 50%;
    margin-right: 1rem;
  }
  #info>div>span {
    display: inline-block;
    height: 3.5vh;
    vertical-align: top;
    line-height: 3.5vh;
    font-size: 0.9rem;
  }
  #cate {
    height: 90%;
    flex: 5;
    margin-top: 1rem;
    /* background-color: orange; */
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
  }
  #cate>ul {
    margin-right: 5rem;
  }
  #cate>ul>li {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  #cate>ul>li:first-child {
    margin-top: 3rem;
    color: white;
    font-size: 1rem;
  }
  #qrcode {
    height: 90%;
    flex: 2;
    /* background-color: pink; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #qrcode>ul {
    /* background-color: green; */
    display: flex;
    justify-content: center;
  }
  #qrcode li {
    width: 3.5vh;
    height: 3.5vh;
    background: rgba(255, 255, 255, 0.2) center/60% 60% no-repeat;
    border-radius: 50%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  #qrcode>img {
    margin-top: 1rem;
    width: 60%;
    cursor: pointer;
  }
  #qrcode>div {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  #ICP {
    position: absolute;
    bottom: 0;
    /* margin-top: 2rem; */
    box-sizing: border-box;
    /* border-top: 1px solid rgba(255, 255, 255, 0.2); */
    width: 100% !important;
    height: 40px;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    /* padding: 1rem; */
    align-items: center;
  }
  #ICP>span {
    margin: 0 auto;
  }
</style>