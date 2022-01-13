<!-- HOME -->
<template>
  <div>
    <!-- <h1>home</h1> -->
    <s-banner></s-banner>
  </div>
</template>

<script>
  import SBanner from "views/home/SBanner"

  export default {
    data () {
      return {
      };
    },
    components: {
      "s-banner": SBanner
    },
  }
</script>

<style lang='css' scoped>
</style>