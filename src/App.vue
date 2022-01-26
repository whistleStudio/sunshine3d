<template>
  <div id="app">
    <s-nav-bar :navStyleFlag="navStyleFlag"></s-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SNavbar from "components/private/SNavbar"

  export default {
    name: 'App',
    data () {
      return {
        navStyleFlag: 1
      }
    },
    components: {
      "s-nav-bar": SNavbar
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
    },
    destroyed () {
      window.removeEventListener("scroll", this.windowScroll)
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
