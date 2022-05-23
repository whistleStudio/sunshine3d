<template>
  <web-footer :logoSrc="logoSrc" :infoData="infoData" 
  :cateData="cateData" :qrImg="qrImg" ICP="版权所有 | 备案号xxxxxxx"></web-footer>
</template>

<script>
import WebFooter from "components/common/WebFooter"
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
    }
  },
  components: {
    "web-footer": WebFooter
  }
}
</script>

<style>

</style>