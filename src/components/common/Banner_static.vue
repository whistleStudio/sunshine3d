<!-- common staic banner -->
<template>
  <div>
    <div id="banner" :style="bannerStyle">
      <div>
        <div id="title">ECO-FRIENDLY 3D PRINTING FILAMENTS</div>
        <div id="more">READ MORE</div>
      </div>
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
      bannerName: String,
      fontColor: String,
    },
    components: {},
    computed: {
      bannerStyle: function () {
        return {
          backgroundImage: `url(${require("img/"+this.bannerName)})`,
          "--bannerColor": this.fontColor
        }
      }
    }
  }
</script>

<style lang='css' scoped>
  /* 提供主色 */
  * {
    --mainColor: var(--rFontColor)
  }
  #banner {
    width: 100%;
    height: 100vh;
    background: center/cover no-repeat;
    /* background-color: orange; */
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--bannerColor);
  }
  #banner>div {
    width: 900px;
    height: 300px;
    /* background-color: pink; */
    text-align: center;
  }
  #title {
    padding-top: 4rem;
    font-size: 2.5rem;
    font-weight: bolder;
  }
  #more {
    width: 10rem;
    margin: 1rem auto;
    font-size: 1.2rem;
    border: 2px solid var(--bannerColor);
    border-radius: 5%;
    cursor: pointer;
  }
  #more:hover {
    color: var(--mainColor);
    border-color: none;
    background-color: var(--bannerColor);
  }
</style>