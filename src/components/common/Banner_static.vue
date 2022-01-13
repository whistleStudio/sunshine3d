<!-- common staic banner -->
<template>
  <div>
    <div id="banner" :style="bannerStyle"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    components: {},
    computed: {
      bannerStyle: function () {
        return {backgroundImage: `url(${require("img/homeBanner.jpg")})`}
      }
    }
  }
</script>

<style lang='css' scoped>
  #banner {
    width: 100%;
    height: 100vh;
    /* background: orange center/cover no-repeat; */
    background-image: url("../../assets/img/homeBanner.jpg");
  }
</style>