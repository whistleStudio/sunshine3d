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
         {img:`https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8.assets/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241202152417.jpg`,link:[-1, "https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8.html"]},
         {img:`https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/%E5%90%AF%E8%BF%AA%E8%9E%8D%E8%B5%84/%E5%90%AF%E8%BF%AA%E8%9E%8D%E8%B5%84.assets/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231222111438.jpg`,link:[-1, "https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/%E5%90%AF%E8%BF%AA%E8%9E%8D%E8%B5%84/%E5%90%AF%E8%BF%AA%E8%9E%8D%E8%B5%84.html"]},
         {img:`${this.$cos}/home/carousel/c1.png`,link:[0,3]},
         {img:`${this.$cos}/home/carousel/c2.png`,link:[1,0]},
         {img:`${this.$cos}/home/carousel/c3.png`,link:[0,5]},
         {img:`https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8.assets/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241202152417.jpg`,link:[-1, "https://sszc-1300400818.cos.ap-nanjing.myqcloud.com/activity/content/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8/2024%E5%8D%97%E4%BA%AC%E5%8D%81%E5%85%AB%E7%B2%89%E4%B8%9D%E8%8A%82%E6%B4%BB%E5%8A%A8.html"]},
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