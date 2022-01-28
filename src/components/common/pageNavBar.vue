<template>
  <div id="pageNavBar">
    <div id="header" :style="{backgroundImage: headImg}"></div>
    <div id="nav">
      <ul>
        <li v-for="(v, i) in cate" :key="i" @click="actCate(i)"><span>{{v}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    

    }
  },
  props: {
    /* headImg(头图banner, `url(${require("xxxx")})`):, cate：["c1", "c2", ...]*/
    headImg: String,
    cate: Array
  },
  methods: {
    actCate (i) {
      this.$emit('cateclick', i)
    }
  }
}
</script>

<style scoped>
  * {
    --mainColor: var(--rFontColor)
  }
  #pageNavBar {
    width: 100%;
    height: 35vh;
    margin-bottom: 5rem;
    background-color: white;
  }
  #header {
    width: 100%;
    height: calc((7/8) * 35vh);
    background: white center/cover no-repeat;
  }
  #nav {
    width: 100%;
    height: calc((1/7) * 35vh);
    box-shadow: 0px 1px 1px 2px ghostwhite;
  }
  ul {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* background-color: orange; */
  }
  li {
    width: 12.5%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Microsoft YaHei";
  }
  li:hover {
    color: var(--mainColor);
    font-weight: bold;
  }
</style>