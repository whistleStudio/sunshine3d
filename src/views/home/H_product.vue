<template>
  <div id="product">
    <div id="intro"></div>
    <div id="content">
      <ul>
        <li v-for="pro in proContent" :key="pro.id">
          <img src="" alt="">
          <div>{{pro.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proContent: [
        {id: 0, name: "PLA"},
        {id: 1, name: "PLA+"},
        {id: 2, name: "ABS"},
        {id: 3, name: "TPU"}
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped>
  #product {
    background-color: pink;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #intro {
    width: 60%;
    height: 10vh;
    background-color: orange;
  }
  #content {
    width: 80%;
    height: 40vh;
    background-color: olive;
  }
  #content>ul {
    display: flex;
    justify-content: space-evenly;
  }
  #content li {
    width: 22%;
    height: 40vh;
    background-color: skyblue;
  }
</style>