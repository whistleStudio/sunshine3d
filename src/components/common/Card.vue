<template>
  <div>
    <img :src="picUrl" :alt="cardName">
    <div id="cardName">{{cardName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    cardPic: String,
    cardName: String
  },
  computed:{
    picUrl: function () {
      return require(`img/${this.cardPic}`)
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    height: 85%;
    background-color: #f9f9f9;
  }
  #cardName {
    /* margin-top: 1rem; */
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 15%;
    text-align: center;
    font: 1.5rem sans-serif;
  }
</style>