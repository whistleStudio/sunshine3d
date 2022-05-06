<template>
  <div id="mainshow">
    <div :style="{backgroundImage: `url(${require('img/lvse'+actLi+'.png')})`}">
      <ul>
        <li v-for="(v, i) in Array(3).fill(0)" :key="i" @click="actLi=i" :class="{actLi: actLi===i}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actLi: 0
    }
  }
}
</script>

<style scoped>
  #mainshow {
    margin: 50px auto;
    width: 80%;
    height: calc(80vw / 1.9375);
  }
  #mainshow>div {
    width: 100%; 
    height: 100%;
    background: center/cover no-repeat; 
    position: relative;
    /* background-color: cyan; */
  }
  #mainshow ul {
    width: 150px;
    height: 20px;
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    bottom: 50px;
    display: flex;
    justify-content: space-between;
  }
  #mainshow li {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    box-sizing: border-box;
  }
  .actLi {
    background-color: var(--rFontColorA) !important;
    border: 3px solid white;
  }
  #mainshow li:hover {
    background-color: var(--rFontColorAA);
  }
</style>