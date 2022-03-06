<!-- HOME -->
<template>
  <div id="home">
    <h-carousel></h-carousel>
    <h-product></h-product>
    <h-case></h-case>
    <h-activity></h-activity>

  </div>
</template>

<script>
  // import H_banner from "views/home/H_banner"
  import H_product from "views/home/H_product"
  import H_case from "views/home/H_case"
  import H_activity from "views/home/H_activity"
  // const H_navlist = ()=>import("views/home/H_navlist")
  const H_carousel = ()=>import("views/home/H_carousel")


  export default {
    data () {
      return {
      };
    },
    components: {
      // "h-nav-list": H_navlist,
      "h-carousel": H_carousel,
      // "h-banner": H_banner,
      "h-product": H_product,
      "h-case": H_case,
      "h-activity": H_activity,
    },
    computed: {

    },

  }
</script>

<style lang='css' scoped>

</style>