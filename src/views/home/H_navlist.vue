<template>
  <div id="navlist">
    <ul>
      <li v-for="(v, i) in materials" :key="i" @click="toDetail(v)">
        <div :style="{backgroundImage: `url(${require('img/materialsicon-0'+(i+1)+'.png')})`}"></div>
        <span>{{v.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // materials: ["PLA", "ABS", "PETG", "ASA", "TPU", "PA", "DryBox"],
      materials: [
        {name: "PLA", idx:[0,0]},
        {name: "ABS", idx:[0,3]},
        {name: "PETG", idx:[0,1]},
        {name: "ASA", idx:[0,4]},
        {name: "TPU", idx:[1,1]},
        {name: "PA", idx:[2,1]},
        {name: "DryBox", idx:[4,0]},
      ]
    }
  },
  methods: {
    toDetail (v) {
      let pv = this.$pData[v.idx[0]].v[v.idx[1]] 
      console.log(pv)
      sessionStorage.setItem("pDetail", JSON.stringify(pv))
      this.$router.push({
        path: "/product/details",
        query: {pv}
      })
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