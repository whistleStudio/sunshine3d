<template>
  <div id="details">
    <div id="head">
      <div id="hLeft">
        <div></div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="hRight">
        <div>
          <h1>xxx</h1>
          <h2>xxxxxxxxxx</h2>
          <span><i class="iconfont icon-24gf-telephone"></i> 联系电话</span>
        </div>
      </div>
    </div>
    <div id="main">
      <div>详细信息</div>

      <img src="/details/Tough-PETG.png" alt="">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pname: ""
    }
  },
  created () {
    this.pname = this.$route.query.pname
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
    background-color: cyan;
    display: flex;
  }
  #hLeft {
    width: 420px;
    height: 500px;
    background-color: pink;
  }
  #hLeft>div {
    width: 420px;
    height: 420px;
    background-color: olive;
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
    border: 1px solid gray;
  }
  #hRight {
    margin-left: 5rem;
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
  /* #main>div:last-of-type {
    margin-top: 1rem;
    width: 65%;
    height: auto;
    background-color: orange;
  } */
  #main img {
    display: block;
    width: 65vw;
  }
  /* #main img::after {
    margin-bottom: 2rem;
  } */
</style>