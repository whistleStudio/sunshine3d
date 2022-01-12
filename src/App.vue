<template>
  <div id="app">
    <s-nav-bar></s-nav-bar>
  </div>
</template>

<script>
  import SNavbar from "components/private/SNavbar"

  export default {
    name: 'App',
    components: {
      "s-nav-bar": SNavbar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
