<template>
<div id="Hcarousel">
    <h-nav-list />
    <div>
      <carousel :imgLink="carouselImg" />
    </div>
</div>

</template>

<script>
const Carousel = ()=>import("components/common/carousel/Carousel") 
const H_navlist = ()=>import("views/home/H_navlist")

export default {
  data () {
    return {
        carouselImg: [
         {img:`${this.$cos}/home/carousel/c1.png`,link:[0,3]},
         {img:`${this.$cos}/home/carousel/c2.png`,link:[1,0]},
         {img:`${this.$cos}/home/carousel/c3.png`,link:[0,5]},
         {img:`${this.$cos}/home/carousel/c1.png`,link:[0,3]},
        ]
    }
  },
  components: {
    "h-nav-list": H_navlist,
    carousel: Carousel
  }
}
</script>

<style scoped>
  #Hcarousel {
    width: 100%;
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #Hcarousel>div:last-of-type {
    width: 80%;
    height: 35vw;
  }
</style>