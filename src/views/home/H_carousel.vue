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
         {img:'https://s1.ax1x.com/2022/05/24/XPtp4A.png',link:[0,1]},
         {img:'https://s1.ax1x.com/2022/05/24/XPYQmD.png',link:[0,4]},
         {img:'https://s1.ax1x.com/2022/05/24/XPY8kd.png',link:[1,1]},
         {img:'https://s1.ax1x.com/2022/05/24/XPtp4A.png',link:[0,1]},
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