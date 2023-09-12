<template>
  <div>
    <ul id="pItems" v-if="actCateIdx != -1" >
      <li v-for="(v, i) in pData[actCateIdx].v.slice(pStart, pEnd)" :key="i" 
      @mouseover="triggerHover(i)"  @mouseout="removeHover(i)" @click="getInfo(i)">
        <!-- <div class="pic" :style="{backgroundImage: `url(${require('img/'+v.img)})`}"></div> 之前本地版--> 
        <div class="pic" :style="{backgroundImage: `url(${v.img})`}"></div>
        <div class="resume">
          <h3>{{v.sub}}</h3>
          <div v-if="_isShowDes">{{v.des}}</div>
          <span v-if="_isShowDes">了解更多</span>
        </div>
      </li>
    </ul>
    <ul id="pItems" v-else >
      <li v-for="(v, i) in totals.slice(pStart, pEnd)" :key="i" 
      @mouseover="triggerHover(i)"  @mouseout="removeHover(i)" @click="getInfo(i)">
        <!-- <div class="pic" :style="{backgroundImage: `url(${require('img/'+v.img)})`}"></div> 之前本地版-->
        <div class="pic" :style="{backgroundImage: `url(${v.img})`}"></div>
        <div class="resume">
          <h3>{{v.sub}}</h3>
          <div v-if="_isShowDes">{{v.des}}</div>
          <span v-if="_isShowDes">了解更多</span>
        </div>
      </li>                    
    </ul>
    <div id="pNavBtn">
      <ul>
        <li @click="changePage(-1)">&lt;</li>
        <li v-for="(v, i) in Array(curPages)" :key="i"
        @click="selectPage(i)" :class="{btnActive: curSelectPage == i}">
        {{i+1}}</li>
        <li @click="changePage(1)">&gt;</li>
      </ul> 
    </div>
  </div>  
</template>

<script>

export default {
  data () {
    return {
      pData: this._pData,
      curSelectPage: 0, 
      actCateIdx: this._actCateIdx,
      pStart: this._pStart,
      pEnd: this._pEndMax,    
    }
  },
  computed: {
    totals: function () {
      let t = []
      this.pData.forEach(el => {
        el.v.forEach(e => {
          t.push(e)
        })
      })
      return t
    },
    pLen : function () {
      let pL = []
      this.pData.forEach(el => {
        pL.push(el.v.length)
      })
      return pL
    },
    curPages: function () {
      return Math.ceil(this.curTotals / this._pEndMax)
    },
    curTotals: function () {
      if (this.actCateIdx == -1) {
        return this.totals.length
      } else {
        return this.pData[this.actCateIdx].v.length
      }
    }    
  },
  props: {
    _pData: Array,
    _actCateIdx: {
      type: Number,
      default: -1
    },
    _pEndMax: Number,
    _isShowDes: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectPage (i) {
      this.curSelectPage = i
      this.pStart = i * this._pEndMax
      this.pEnd = (i+1) * this._pEndMax
    },
    changePage (i) {
      if (i === -1 && this.curSelectPage !== 0) {
        this.curSelectPage --
      }
      if (i === 1 && this.curSelectPage !== this.curPages-1) {
        this.curSelectPage ++
      }
      this.pStart = this.curSelectPage * this._pEndMax
      this.pEnd = (this.curSelectPage+1) * this._pEndMax
    },
    triggerHover (i) {
      let idx = i%this._pEndMax
      document.querySelectorAll(".pic")[idx].classList.add("picHover")
      document.querySelectorAll(".resume>span")[idx].classList.add("spanHover")
    },
    removeHover (i) {
       let idx = i%this._pEndMax
       document.querySelectorAll(".pic")[idx].classList.remove("picHover")
      document.querySelectorAll(".resume>span")[idx].classList.remove("spanHover")
    },
    getInfo (i) {
      let pInfo = this.actCateIdx<0 ? this.totals[i] : this.pData[this.actCateIdx].v[i]
      if (pInfo.link2) {
        this.$router.push({
          path: "/activity/actInfo",
          query: {info: pInfo.link2}
        })
      } else {
        window.open(pInfo.link)
      }
    }    
  },
  watch: {
    _actCateIdx (v) {
      this.actCateIdx = v
      this.curSelectPage = 0
      this.pStart = 0
      this.pEnd = this._pEndMax
      this.selectPage(0)
      if (v >= 0) {
        let curL = this.pLen[this.actCateIdx]
        if (curL < this._pEndMax) this.pEnd = curL
      }      
    },
  }
}
</script>

<style  src="components/common/ItemShow2/ItemShow2.css" scoped> </style>
<style scoped>

</style>