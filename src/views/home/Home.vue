<!-- HOME -->
<template>
  <div>
    <!-- <h1>home</h1> -->
    <h-banner></h-banner>
    <h-product></h-product>
    <h-case></h-case>
  </div>
</template>

<script>
  import H_banner from "views/home/H_banner"
  import H_product from "views/home/H_product"
  import H_case from "views/home/H_case"

  export default {
    data () {
      return {
      };
    },
    components: {
      "h-banner": H_banner,
      "h-product": H_product,
      "h-case": H_case
    },
  }
</script>

<style lang='css' scoped>
</style>