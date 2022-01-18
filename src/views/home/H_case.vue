<!-- H_case -->
<template>
  <div id="case">
    <div id="intro"><span>解决方案</span></div>
    <grid6 :caseImg="caseImg" />
  </div>
</template>

<script>
  import Grid6 from "components/common/Grid6"

  export default {
    data () {
      return {
        caseImg: [
          {id: 0, img: "case0.jpg", msg: "say something about Case0"},
          {id: 1, img: "case1.jpg", msg: "say something about Case1"},
          {id: 2, img: "case2.jpg", msg: "say something about Case2"},
          {id: 3, img: "case3.jpg", msg: "say something about Case3"},
          {id: 4, img: "case4.jpg", msg: "say something about Case4"},
          {id: 5, img: "case5.jpg", msg: "say something about Case5"}
        ]
      };
    },
    components: {
      Grid6
    },
  }
</script>

<style lang='css' scoped>
 #case {
   width: 100%;
   height: 85vh;
   background-color: pink;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
 #intro {
   width: 80%;
   height: 15vh;
 }
</style>