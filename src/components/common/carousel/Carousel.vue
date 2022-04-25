<template>
  <div id="carousel">
    <ul ref="carouselUl" @mouseenter="startFlag=0" @mouseleave="startFlag=1">
      <li ref="carouselLi" v-for="(v, i) in imgLink" :key="i" :style="{backgroundImage: `url(${require('img/'+v)})`}" 
      class="showItem"></li>
    </ul>
    <div id="swapBtn">
        <span  @click="actChange(0)">&lt;</span>
        <span  @click="actChange(1)">&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tim: 0, startFlag: 1,
      pos: 0
    }
  },
  props: {
    // 最后一张图需与第一张图相同，也就是至少3张图
    imgLink: Array
  },
  computed: {
    imgL: function () {
      return this.imgLink.length
    }
  },
  methods: {
    scrollImg () {
      // 步长，间隔，停留时间
      let step = 0.2, inv=10, stopTime = 3000
      let flag=1, count=0
      this.tim = setInterval(()=>{
        if (flag) {
          this.pos -= step
          let pp = this.pos%-100
          if (pp>=-5) step+=0.03
          if (pp<=-95) step-=0.03          

          if (pp<=-99) {
            flag = 0
            this.pos = (parseInt(this.pos/-100)+1)*-100
          }
        } else {
          count += 1
          if (count >= (stopTime/inv)&&this.startFlag) {
            flag = 1
            count = 0
          }
        }
        if (this.pos <= -100*(this.imgL-1)) {this.pos = 0; step = 0.2}
        if (this.pos > 0) {this.pos = -100*(this.imgL-2); step = 0.2}
        this.$refs.carouselUl.style.left = this.pos + '%'
      }, inv)
    },
    /* 左右切换 */
    actChange (i) {
      let change = i ? 100 : -100
      this.pos += change
    }
  },
  mounted () {
    this.tim = setTimeout(()=>{this.scrollImg()},3000)
  },
  beforeDestroy () {
    //3s以内clear timeout；以外 interval
    clearInterval(this.tim)
  }
}
</script>

<style scoped>
#carousel {
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  position: relative;
  overflow: hidden;
}
#carousel>ul {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  /* overflow: hidden; */
}
#carousel>ul>li {
  cursor: pointer;
}
.showItem {
  width: 100%;
  height: 100%;
  flex: none;
  background: white center/cover no-repeat;
}
#swapBtn {
  width: 100%;
  position: absolute;
  top: 50%;
}
#swapBtn>span {
  color: gainsboro;
  font: 3rem sans-serif;
  text-align: center;
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
#swapBtn>span:first-of-type {
  float: left;
}
#swapBtn>span:last-of-type {
  float: right;
}

#swapBtn>span:hover {
  color: var(--rFontColorA);
}

</style>