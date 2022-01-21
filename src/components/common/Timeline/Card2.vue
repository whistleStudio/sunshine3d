<template>
  <div id="timeCard">
    <img :src="picUrl">
    <div id="cardResume">{{cardResume}}</div>
    <div id="date">{{cardDate}}</div>
    <div id="more">+</div>
  </div>
</template>

<script>
export default {
  props: {
    cardPic: String,
    cardResume: String,
    cardDate: String
  },
  computed:{
    picUrl: function () {
      return require(`img/${this.cardPic}`)
    }
  }
}
</script>

<style scoped>
  * {
    --mainColor: var(--rFontColor);
    --cardWidth: 15vw;
    --cardHeight: 32vh;
  }
  #timeCard {
    box-sizing: border-box;
    border: 2px solid var(--mainColor);
    padding: 5px;
    width: var(--cardWidth);
    height: var(--cardHeight);
    text-align: center;
    border-radius: 0.2rem;
    background-color: white;
  }
  img {
    width: 100%;
    height: 55%;
    background-color: #f9f9f9;
  }
  #cardResume {
    height: 15%;
    text-align: center;
    font: bold 1.3rem "Microsoft YaHei";
    color: var(--mainColor);
  }
  #date {
    margin-top: 1.2rem;
  }
  #more {
    font-weight: bold;
    color: white;
    margin: 1rem auto;
    width: 60%;
    height: 1.3rem;
    background-color: var(--mainColor);
  }
</style>