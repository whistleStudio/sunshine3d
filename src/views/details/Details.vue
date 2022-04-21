<template>
  <div id="details">
    <h1>{{pname}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pname: ""
    }
  },
  created () {
    this.pname = this.$route.query.pname
  }
}
</script>

<style scoped>
  #details {
    padding-top: 95px;
  }
</style>