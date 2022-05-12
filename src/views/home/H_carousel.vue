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
         {img:'carousel/m1.png',link:[0,1]},
         {img:'carousel/m2.png',link:[0,4]},
         {img:'carousel/m3.png',link:[1,1]},
         {img:'carousel/m1.png',link:[0,1]},
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