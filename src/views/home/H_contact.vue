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
        <ul>
          <li v-for="icon in qrImg.slice(0,qrImg.length-1)" :key="icon.id" 
          :style="{backgroundImage: icon.link}"></li>
        </ul>
        <img :src="qrImg[qrImg.length-1].link" alt="">
        <div>关注上善增材微信公众号</div>        
      </div>
    </div>
    <div id="ICP">
      <span>版权所有 | 备案号xxxxxxx</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logoSrc: require("assets/logo.png"),
        infoData: [
          {id:0, img:`url(${require("img/contactIcon0.png")})`, text:"13813990536 曹经理 | 13337813756 汪经理"},
          {id:1, img:`url(${require("img/contactIcon1.png")})`, text:"wr79@live.com"},
          {id:2, img:`url(${require("img/contactIcon2.png")})`, text:"南京市栖霞区龙潭街道上坝村下坝工业园区5号"},
        ],
        cateData:[
          {id:0, head:"关于上善", item:[
            {id:0, v:"公司简介"}, {id:1, v:"发展历程"}, {id:2, v:"公司荣誉"}, {id:3, v:"合作伙伴"}
          ]},
          {id:1, head:"产品中心", item:[
            {id:0, v:"3D打印耗材"}, {id:1, v:"加工配件"}, {id:2, v:"案例展示"}
          ]},
          {id:2, head:"在线商城", item:[
            {id:0, v:"淘宝店铺"}, {id:1, v:"京东店铺"}
          ]},
          {id:3, head:"服务支持", item:[
            {id:0, v:"技术文档"}, {id:1, v:"样例模型"}, {id:2, v:"打印教程"}, {id:3, v:"常见问题"}
          ]}
        ],
        qrImg: [
          {id:0, link: `url(${require("img/qr0.png")})`},
          {id:1, link: `url(${require("img/qr1.png")})`},
          {id:2, link: `url(${require("img/qr2.png")})`},
          {id:3, link: require("img/qr3.jpg")}
        ]
      };
    },
    components: {},
  }
</script>

<style lang='css' scoped>
  * {
    /* 需要root样式--rFontColor */
    --mainColor: var(--rFontColor);
    --fontColor: rgba(255, 255, 255, 0.7);
  }
  #contact {
    margin-top: 2rem;
    width: 100%;
    height: 40vh;
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fontColor);
    padding-top: 2rem;
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
  }
  #qrcode>div {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  #ICP {
    margin-top: 2rem;
    box-sizing: border-box;
    /* border-top: 1px solid rgba(255, 255, 255, 0.2); */
    width: 100% !important;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    padding: 1rem;
    align-items: center;
  }
  #ICP>span {
    margin: 0 auto;
  }
</style>