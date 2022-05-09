<template>
  <div id="details">
    <div id="head">
      <div id="hLeft">
        <div :style="{backgroundImage: `url(/details/${pv.dimg[actImgIdx]})`}"></div>
        <ul>
          <li v-for="(v, i) in pv.dimg" :key="i" :style="{backgroundImage: `url(/details/${v})`}"
          @click="actImgIdx=i"></li>
        </ul>
      </div>
      <div id="hRight">
        <div>
          <h1>{{pv.chname}}</h1>
          <h2>{{pv.feat}}</h2>
          <span><i class="iconfont icon-24gf-telephone"></i> 联系电话</span>
        </div>
      </div>
    </div>
    <div id="main">
      <div>详细信息</div>
      <img :src="`/details/${pv.name}.png`" alt="">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pv: {},
      actImgIdx: 0
    }
  },
  created () {
    this.pv = JSON.parse(sessionStorage.getItem("pDetail"))


  }
}
</script>

<style src="./iconfont.css" scoped></style>
<style scoped>
  #details {
    width: 100%;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #head {
    width: 65%;
    height: 500px;
    display: flex;
  }
  #hLeft {
    width: 420px;
    height: 500px;
  }
  #hLeft>div {
    width: 420px;
    height: 420px;
    box-sizing: border-box;
    background: center/cover no-repeat;
  }
  #hLeft>ul {
    width: 100%;
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
  #hLeft li {
    width: 60px;
    height: 60px;
    margin-right: 0.5rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    border-radius: 5px;
    background: center/cover no-repeat;
    cursor: pointer;
  }
  #hRight {
    margin-left: 7rem;
    display: flex;
    align-items: center;
  }
  #hRight h1 {
    font-size: 50px;
  }
  #hRight h2 {
    font-size: 30px;
    margin-bottom: 1rem;
  }
  #hRight span {
    margin-top: 1rem;
    font-size: 20px;
  }
  #hRight span:hover {
    cursor: pointer;
    color: var(--rFontColor);
  }

  #main {
    margin-top: 3rem;
    width: 65%;
    height: auto;
  }
  #main>div:first-of-type {
    height: 35px;
    line-height: 35px;
    background-color: var(--rFontColorA);
    text-indent: 1rem;
    font-size: 1.2rem;
    color: white;
  }
  #main>div:last-of-type {
    margin-bottom: 1rem;
  }

  #main img {
    display: block;
    width: 65vw;
  }

</style>