<!-- HOME -->
<template>
  <div>
    <!-- <h1>home</h1> -->
    <h-nav-list></h-nav-list>
    <h-banner></h-banner>
    <h-product></h-product>
    <h-case></h-case>
    <h-activity></h-activity>

  </div>
</template>

<script>
  import H_banner from "views/home/H_banner"
  import H_product from "views/home/H_product"
  import H_case from "views/home/H_case"
  import H_activity from "views/home/H_activity"
  const H_navlist = ()=>import("views/home/H_navlist")


  export default {
    data () {
      return {
      };
    },
    components: {
      "h-nav-list": H_navlist,
      "h-banner": H_banner,
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