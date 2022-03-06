<!-- home>banner -->
<template>
  <div >
    <banner :banner-name="bannerName" :font-color="fontColor" />
  </div>
</template>

<script>
  import Banner from "components/common/Banner_static"

  export default {
    data () {
      return {
        bannerName: "homeBanner.jpg",
        fontColor: "white"
      };
    },
    components: {
      Banner
    },
  }
</script>

<style lang='css' scoped>
</style>