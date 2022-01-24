<!-- common navbar -->
<template>
  <div id="navbar">
    <div>
      <div id="logo" :style="logoStyle">
        <!-- <img :src=logoSrc alt="" width="55px" height="55px"> -->
      </div>
      <div id="nav">
        <ul id="navMenu">
          <li v-for="item in navbarList" :key="item.id" :style="navLiStyle" 
          @mouseover="actTitleId=item.id">
            <span @click="toPage(item.val[0].eng)">{{item.val[0].title}}</span>
            <ul id="navCMenu" v-if="actTitleId === item.id">
              <li v-for="i in item.val.slice(1)" :key="i.id">{{i.sub}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actTitleId: -1
    };
  },
  props: {
    navbarList: Array,
    fontColor: String,
    logoStyle: Object
  },
  components: {},
  computed: {
    navLiStyle: function () {
      return {"--navColor": this.fontColor}
    }
  },
  methods: {
    toPage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang='css' scoped>
  #navbar {
    width: 90%;
    height: 55px;
    /* background-color: pink; */
    margin: 0 auto;
  }
  #logo {
    width: 160px;
    height: 55px;
    float: left;
    background: center/contain no-repeat;
  }
  #nav {
    float: right;
    /* background-color: olive; */
    height: 55px;
  }
  #navMenu {
    display: flex;
  }
  #navMenu>li {
    font: 17px/55px sans-serif;
    text-align: center;
    width: 90px;
    cursor: pointer;
    color: var(--navColor);
  }
  #navCMenu>li {
    font: 17px/34px sans-serif;
    border-top: 1px solid gainsboro;
  }

  #navMenu>li>span:hover {
    color: var(--rFontColor);
  }
  #navCMenu>li:hover {
    color: var(--rFontColor);
  }
</style>