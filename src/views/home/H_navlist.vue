<template>
  <div id="navlist">
    <ul>
      <li v-for="(v, i) in materials" :key="i">
        <div :style="{backgroundImage: `url(${require('img/materialsicon-0'+(i+1)+'.png')})`}"></div>
        <span>{{v}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      materials: ["PLA", "ABS", "PETG", "ASA", "TPU", "PA", "DryBox"]
    }
  }
  
}
</script>

<style scoped>
#navlist {
  background-color: white;
  width: 100%;
  height: 150px;
}
#navlist>ul {
  background-color: var(--rFontColorAA);
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
}
#navlist li {
  color: var(--rFontColor);
  height: 100%;
  width: 100px;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#navlist li>div {
  width: 80px;
  height: 80px;
  background: center/contain no-repeat;
}
</style>