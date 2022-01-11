<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
  import Home from "views/home"

  export default {
    name: 'App',
    components: {
      "home": Home
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
