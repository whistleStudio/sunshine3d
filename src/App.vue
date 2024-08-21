<template>
  <div id="app">
    <s-nav-bar :navStyleFlag="navStyleFlag" v-show="$route.path.length>4"></s-nav-bar>
    <router-view></router-view>
    <s-web-footer v-show="$route.path.length>4"></s-web-footer>
    <div v-if="$route.path.length==1" class="niceshow">
      <a href="https://beian.miit.gov.cn/#/Integrated/index">苏ICP备19068688号-3</a>
    </div>
  </div>
</template>

<script>
  import SNavbar from "components/private/SNavbar"
  import SWebFooter from "components/private/SWebFooter"

  export default {
    name: 'App',
    data () {
      return {
        navStyleFlag: 1
      }
    },
    components: {
      "s-nav-bar": SNavbar,
      "s-web-footer": SWebFooter,

    },
    // computed: {
    //   navStyleFlag () {
    //     return 1
    //   }
    // },
    methods: {
      windowScroll () {
        let s = document.documentElement.scrollTop || document.body.scrollTop
        if (s > window.innerHeight) {
          this.navStyleFlag = 0
        } else this.navStyleFlag = 1
      }
    },
    mounted () {
      window.addEventListener("scroll", this.windowScroll)
      setTimeout(()=>{if(this.$route.path.length>3) window.document.title = "上善增材"}, 500)
    },
    destroyed () {
      window.removeEventListener("scroll", this.windowScroll)
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  .niceshow {
    width: 100vw;
    height: 100vh;
    background: url(https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/home/mainshow/m4.png) center/contain no-repeat;
    a {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      color: #aaa;
    }
  }
</style>
