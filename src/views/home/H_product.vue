<template>
  <div id="product">
    <div id="intro"><span>主要产品</span></div>
    <div id="content">
      <s-cardlist></s-cardlist>
    </div>
  </div>
</template>

<script>
import SCardList from "components/private/SCardList"

export default {
  data() {
    return {

    }
  },
  components: {
    "s-cardlist": SCardList
  }
}
</script>

<style scoped>
  #product {
    /* background-color: rgb(248, 248, 255); */
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #content {
    width: 80%;
    height: 45vh;
    /* background-color: olive; */
  }

</style>