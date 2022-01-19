<!-- H_activity -->
<template>
  <div id="activity">
    <div id="intro"><span>公司动态</span></div>
    <timeline />
  </div>
</template>

<script>
  import Timeline from "components/common/Timeline"
  
  export default {
    data () {
      return {
      };
    },
    components: {
      Timeline
    },
  }
</script>

<style lang='css' scoped>
  #activity {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>