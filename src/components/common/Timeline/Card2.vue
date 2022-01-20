<template>
  <div id="timeCard">
    <!-- <img :src="picUrl"> -->
    <div id="cardTitle">{{cardTitle}}</div>
    <div id="date"></div>
    <div id="more">更多</div>
  </div>
</template>

<script>
export default {
  props: {
    cardPic: String,
    cardTitle: String,
    cardDate: String
  },
  computed:{
    picUrl: function () {
      // return require(`img/${this.cardPic}`)
    }
  }
}
</script>

<style scoped>
  * {
    --mainColor: var(--rFontColor);
    --cardWidth: 15vw;
    --cardHeight: 30vh;
  }
  #timeCard {
    box-sizing: border-box;
    border: 1px solid var(--mainColor);
    padding: 5px;
    width: var(--cardWidth);
    height: var(--cardHeight);
  }
  img {
    width: 100%;
    height: 55%;
    background-color: #f9f9f9;
  }
  #cardTitle {
    height: 15%;
    text-align: center;
    font: 1.5rem "Microsoft YaHei";
  }
</style>