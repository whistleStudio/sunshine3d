<!-- common navbar -->
<template>
  <div id="navbar">
    <div>
      <div id="logo" :style="logoStyle">
        <!-- <img :src=logoSrc alt="" width="55px" height="55px"> -->
      </div>
      <div id="nav">
        <ul id="navMenu">
          <li v-for="item in navbarList" :key="item.id" 
          @mouseover="actTitleId=item.id">
            <span @click="toPage(item.val[0].eng)">{{item.val[0].title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <ul v-if="navbarList[actTitleId]&&navbarList[actTitleId].cmenu"  @mouseleave="actTitleId=-1" class="navCMenu">
      <li v-for="(v,i) in navbarList[actTitleId].cmenu" :key="i" class="cMenuLi">
        <h3>{{v.cate}}</h3>
        <span v-for="(cv, ci) in v.v" :key="ci" @click="toDetail(i,ci)">{{cv}}</span>
      </li>
    </ul>
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
    logoStyle: Object,
    navCMenuBgc: String
  },
  components: {},
  computed: {
    // navLiStyle () {
    //   return {"--navColor": this.fontColor}
    // }
  },
  methods: {
    toPage (path) {
      this.$router.push("/"+path)
    },
    toDetail (i,ci) {
      let pv = this.$pData[i].v[ci] 
      sessionStorage.setItem("pDetail", JSON.stringify(pv))
      this.$router.push("/product")
      setTimeout(()=>{
        this.$router.push({
        path: "/product/details",
        query: {pv}
      })
      },1)

    }    
  }
}
</script>

<style lang='css' scoped>
  /* root样式 需要rFontColor*/
  #navbar {
    width: 100%;
    height: 55px;
    /* background-color: pink; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
  }
  #navbar>div {
    width: 80%;
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
    /* margin-top: 15px; */
    display: flex;
  }
  #navMenu>li {
    color: rgb(100,100,100);
    font: bold 1.3rem/55px "Microsoft YaHei";
    text-align: center;
    /* width: 100px; */
    margin-left: 60px;
    cursor: pointer;
    /* color: var(--navColor); */
  }
  #navMenu>li>span:hover {
    color: var(--rFontColor);
    font-weight: bold;
  }
  .navCMenu {
    position: absolute;
    top: 55px;
    width: 80%;
    height: 200px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 1rem;
    border-top: 1px solid ghostwhite;
    border-bottom: 1px solid gainsboro;
  }
  .cMenuLi {
    width: 20%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    box-sizing: border-box;
    border-right: 2px solid var(--rFontColorAA);
  }
  .cMenuLi:last-of-type {
    border-right: none;
  }
  .cMenuLi>h3 {
    color: rgb(100,100,100);
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .cMenuLi>span {
    color: rgb(125,125,125);
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
  .cMenuLi>span:hover {
    color: var(--rFontColorA);
    font-weight: bold;
  }

</style>