<!--  -->
<template>
  <div id="navbar">
    <div>
      <div></div>
      <div>
        <ul>
          <li>主页</li>
          <li>公司</li>
          <li>产品</li>
          <li>动态</li>
          <li>商城</li>
          <li>联系</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbarList: []
    };
  },
  components: {},
}
</script>

<style lang='css' scoped>
  #navbar {
    position: fixed;
    top: 0;
    
  }
</style>