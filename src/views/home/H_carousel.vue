<template>
<div id="Hcarousel">
    <h-nav-list />
    <div>
      <carousel />
    </div>
</div>

</template>

<script>
const Carousel = ()=>import("components/common/carousel/Carousel") 
const H_navlist = ()=>import("views/home/H_navlist")

export default {
  data () {
    return {

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