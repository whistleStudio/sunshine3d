<!-- common navbar -->
<template>
  <div id="navbar">
    <div>
      <div></div>
      <div>
        <ul>
          <li v-for="item in navbarList" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
    navbarList: Array
  },
  components: {},
}
</script>

<style lang='css' scoped>
  #navbar {
    width: 80%;
    height: 55px;
    background-color: pink;
    margin: 0 auto;
  }
</style>