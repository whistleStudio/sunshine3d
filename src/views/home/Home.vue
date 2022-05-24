<!-- HOME -->
<template>
  <div id="home">
    <h-carousel />
    <h-activity />
    <h-mainshow />
  </div>
</template>

<script>

  import H_activity from "views/home/H_activity"
  const H_carousel = ()=>import("views/home/H_carousel")
  const H_mainshow = ()=>import("views/home/H_mainshow")

  export default {
    data () {
      return {

      };
    },
    components: {
      "h-carousel": H_carousel,
      "h-activity": H_activity,
      "h-mainshow": H_mainshow
    },
    computed: {

    },

  }
</script>

<style lang='css' scoped>

</style>