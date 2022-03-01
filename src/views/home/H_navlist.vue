<template>
  <div id="navlist">
    <ul>
      <li v-for="(v, i) in Array(8)" :key="i"
      :style="{backgroundImage: `url(${require('img/materialsicon-0'+(i+1)+'.png')})`}"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#navlist {
  background-color: white;
  position: fixed;
  top: 85px;
  /* left: 260px; */
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
  align-items: center;
}
#navlist li {
  width: 80px;
  height: 80px;
  background: center/contain no-repeat;
}
</style>