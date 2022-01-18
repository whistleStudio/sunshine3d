<!-- 6 grid display-->
<template>
  <div id="grid6">
    <ul id="wrapper">
      <li class="big item">xxx</li>
      <li class="small item">
        <ul>
          <li v-for="i in caseImg" :key="i.id" 
          :style="{backgroundImage: `url(${require('img/'+i.img)})`}"
          @mouseover="actImg=i.id">
            <div v-if="i.id===actImg">{{i.msg}}</div>
          </li>
        </ul>
      </li>
      <li class="big item"></li>
      <li class="nav item">
        <ul>
          <li class="btn"><span>&lt;</span></li>
          <li class="btn"><span>&gt;</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actImg: 0
      };
    },
    props: {
      caseImg: Array
    },
    created () {
      console.log(this.actImg)
    }
  }
</script>

<style lang='css' scoped>
  #grid6 {
    width: 80%;
    height: 65vh;
  }
  #wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 8fr 1fr;
    grid-template-areas: "big small"
                         "big nav";
  }
  .item {
    box-sizing: border-box;
  }
  .big {
    grid-area: big;
    background-color: red;
  }
  .small {
    grid-area: small;
  }
  .small>ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .small li {
    background: skyblue center/cover no-repeat;
    width: 33.33%;
    height: 50%;
    cursor: pointer;
  }
  .nav>ul {
    height: 100%;
    display: flex;
  }
  .nav li {
    flex: 1;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .nav span {
    flex: 1;
  }
  .btn {
    cursor: pointer;
  }
</style>