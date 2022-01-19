<!--  -->
<template>
  <div>
    <ul>
      <li v-for="pro in proContent" :key="pro.id">
        <card :cardPic="pro.pic" :cardName="pro.name" />
      </li>
    </ul>    
  </div>
</template>

<script>
  import Card from "components/common/Card"

  export default {
    data () {
      return {
        proContent: [
          {id: 0, name: "PLA", pic: "PLA.png"},
          {id: 1, name: "PLA+", pic: "PLA+.png"},
          {id: 2, name: "ABS", pic: "ABS.png"},
          {id: 3, name: "TPU", pic: "TPU.png"}
        ]        
      };
    },
    components: {
      Card
    },
  }
</script>

<style lang='css' scoped>
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 22%;
    height: 100%;
    /* background-color: skyblue; */
    border: 2px solid rgb(240, 240, 240);
    border-radius: 1%;
    cursor: pointer;
    box-shadow: none;
  }

  li:hover {
    animation: floatup 0.5s forwards;
  }

  @keyframes floatup {
    from {box-shadow: none;}
    to {box-shadow: 1px 1px 2px 2px rgba(220, 220, 220, 0.5)}
  }
</style>