/* 排列样式还有些问题 */
<template>
  <div>
    <ul id="pItems" v-if="actCateIdx != -1" >
      <li v-for="(v, i) in pData[actCateIdx].v.slice(pStart, pEnd)" :key="i" @mouseover="triggerHover(i)"  @mouseout="removeHover(i)">
        <img :src="require('img/'+v.img)" alt="">
        <span>{{v.name}}</span>
        <div class="resume">{{v.msg}}</div>
      </li>
    </ul>
    <ul id="pItems" v-else >
      <li v-for="(v, i) in totals.slice(pStart, pEnd)" :key="i" @mouseover="triggerHover(i)"  @mouseout="removeHover(i)">
        <img :src="require('img/'+v.img)" alt="">
        <span>{{v.name}}</span>
        <div class="resume">{{v.msg}}</div>
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
      // pItemsStyle: {
      //   width: "60vw",
      //   height: "45vw"
      // }        
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
      return Math.ceil(this.curTotals / 12)
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
    _pEndMax: Number
  },
  methods: {
    selectPage (i) {
      this.curSelectPage = i
      this.pStart = i * 12
      this.pEnd = (i+1) * 12
    },
    changePage (i) {
      if (i === -1 && this.curSelectPage !== 0) {
        this.curSelectPage --
      }
      if (i === 1 && this.curSelectPage !== this.curPages-1) {
        this.curSelectPage ++
      }
      this.pStart = this.curSelectPage * 12
      this.pEnd = (this.curSelectPage+1) * 12
    },
    triggerHover (i) {
      let idx = i%12
      document.querySelectorAll(".resume")[idx].classList.add("resumeHover")
    },
    removeHover (i) {
       let idx = i%12
      document.querySelectorAll(".resume")[idx].classList.remove("resumeHover")
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
        if (curL < 12) this.pEnd = curL
      }      
    },
  }
}
</script>

<style scoped>
  /* 宫格长宽--pItemsLiW, --pItemsLiH，图片长宽--pItemsImgW, --pItemsImgH */

  #pItems {
    display: flex;
    /* width: 60vw;
    height: 45vw; */
    /* width: var(--pItemsW);
    height: var(--pItemsH); */
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-bottom: 3rem;
  }
  #pItems>li {
    width: var(--pItemsLiW);
    height: var(--pItemsLiH);
    /* width: 14vw;
    height: 14vw; */
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    /* margin-bottom: 3rem; */
  }
  #pItems img {
    width: var(--pItemsImgW);
    height: var(--pItemsImgH);
  }
  .resume {
    width: var(--pItemsLiW);
    height: var(--pItemsLiH);
    position: absolute;
    z-index: 1;
    top: var(--pItemsLiH);
    color: white;
    background-color: var(--rFontColorA);
    opacity: 1;
  }
  .resumeHover {
    animation: popup 0.6s forwards;
  }
  #pNavBtn {
    margin-bottom: 3rem;
  }
  #pNavBtn>ul{
    display: flex;
    justify-content: center;
  }
  #pNavBtn li {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    border-radius: 3px;
    font: 1.2rem/2rem "Microsoft YaHei";
    text-align: center;
    cursor: pointer;
    color: gray;
  }
  .btnActive {
    color: white !important;
    background-color: var(--rFontColor);
  }

  #pNavBtn li:hover {
    color: var(--rFontColor);
    /* font-weight: bold; */
  }
  #pItems>li:hover {
    animation: highligh 0.5s forwards;
  }

  @keyframes highligh {
    0% {box-shadow: none; }
    100% {box-shadow: 1px 1px 1px 2px gainsboro; }
  }
  @keyframes popup {
    from {
      opacity: 1;
      top: var(--pItemsLiH);;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
</style>