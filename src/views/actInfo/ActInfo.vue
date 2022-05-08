<template>
  <div id="actInfo">
    <h1>{{temp}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      temp: ""
    }
  },
  created () {
    this.temp = this.$route.query.info
  }
}
</script>

<style scoped>
#actInfo {
  padding-top: 100px;
}
</style>