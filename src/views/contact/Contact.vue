<!-- CONTACT -->
<template>
  <div id="contact">
    <page-nav-bar :headImg="headImgSrc" :cate="cateData"></page-nav-bar>
    <div id="content">
      <div id="cTitle">联系上善</div>
      <div id="cInfo">
        <ul>
          <li v-for="v in infoData.slice(0,2)" :key="v.id"><div class="cIcon" :style="{backgroundImage: v.img}"></div> <span class="cIconText">{{v.text}}</span></li>
          <li>
            <div class="cIcon" :style="{backgroundImage: infoData[2].img}"></div> 
            <div>
              <span class="cIconText" v-for="(v,i) in infoData[2].text" :key="i">{{v[0]}}<br>{{v[1]}}</span>
            </div>
          </li>
        </ul>
        <div id="cSend">
          <div>留言给我们:</div>
          <div>
            <div id="cSend1" ><input type="text" placeholder="公司"></div>
            <div id="cSend2">
              <select name="" id="" class="sendHalf">
                <option disabled value="">问题分类</option>
                <option v-for="(v,i) in ['产品咨询','技术支持', '商务合作', '其他']" :key="i">{{v}}</option>
              </select>
              <input type="text" placeholder="*姓名" class="sendHalf">
            </div>
            <div id="cSend3" style="height: 2.5vh"><input type="text" placeholder="*邮箱(我们会在24小时内回复您)" class="sendHalf"> <input type="text" placeholder="*所在地" class="sendHalf"></div>
            <div id="cSend4"><textarea name="" id="" cols="30" rows="10" placeholder="*详情描述"></textarea></div>
            <div id="cSubmit">提交</div>
          </div>
        </div>
      </div>
      <div id="cOther">
        <div>关注我们</div>
        <ul>
          <li v-for="(v, i) in Array(5)" :key="i" :style="{backgroundImage: `url(${require('img/contact/o'+i+'.png')})`}"></li>
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
        headImgSrc: `url(${require("img/contact/header.jpg")})`,
        cateData: [],
        infoData: [
          {id:0, img:`url(${require("img/contactIcon2.png")})`, text:"江苏省南京市江宁区xxx街道xxx大厦"},
          {id:1, img:`url(${require("img/contactIcon0.png")})`, text:"123456789"},
          {id:2, img:`url(${require("img/contactIcon1.png")})`, text:[["(商务合作)","1234564789@126.com"],["(加入我们)","987654321@126.com"]]},
        ],
      };
    },
    components: {
      "page-nav-bar": PageNavBar
    },
  }
</script>

<style src="views/contact/contact.css" scoped></style>
<style lang='css' scoped>
</style>