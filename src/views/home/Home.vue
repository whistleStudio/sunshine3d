<!-- HOME -->
<template>
  <div>
    <!-- <h1>home</h1> -->
    <h-banner></h-banner>
    <h-product></h-product>
  </div>
</template>

<script>
  import H_banner from "views/home/H_banner"
  import H_product from "views/home/H_product"

  export default {
    data () {
      return {
      };
    },
    components: {
      "h-banner": H_banner,
      "h-product": H_product
    },
  }
</script>

<style lang='css' scoped>
</style>