<!-- HOME -->
<template>
  <div id="home">
    <h-carousel />
    <h-product /> 
    <h-case />
    <h-activity />

  </div>
</template>

<script>
  import H_product from "views/home/H_product"
  import H_case from "views/home/H_case"
  import H_activity from "views/home/H_activity"
  const H_carousel = ()=>import("views/home/H_carousel")


  export default {
    data () {
      return {

      };
    },
    components: {
      "h-carousel": H_carousel,
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