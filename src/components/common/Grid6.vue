<!-- 6 grid display-->
<template>
  <div id="grid6" :style="{'--mainColor': mainColor}">
    <ul id="wrapper">
      <li class="big item" :style="bigStyle"></li>
      <li class="small item">
        <ul>
          <li v-for="i in caseImg" :key="i.id" 
          :style="{backgroundImage: `url(${require('img/'+i.img)})`}">
            <div class="info" v-if="i.id===actId">
              <div class="infoMsg">{{i.msg}}</div>
              <div class="infoBg"></div>
            </div>
          </li>
        </ul>
      </li>
      <li class="big item"></li>
      <li class="nav item">
        <ul>
          <li class="btn" @click="changeActId(0)"><span>&lt;</span></li>
          <li class="btn" @click="changeActId(1)"><span>&gt;</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actId: 0
      };
    },
    props: {
      caseImg: Array,
      mainColor: String
    },
    computed: {
      bigStyle () {
        let actImg = this.caseImg[this.actId].img
        return {
          backgroundImage: `url(${require('img/'+actImg)})`
        }  
      }
    },
    methods: {
      changeActId (i) {
        if (i) {
          if (this.actId != 5) this.actId++
        } else {
          if (this.actId != 0) this.actId--
        }
      }
    }
  }
</script>

<style lang='css' scoped>
  #grid6 {
    width: 80%;
    height: 65vh;
  }
  #wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 8fr 1fr;
    grid-template-areas: "big small"
                         "big nav";
  }
  .item {
    box-sizing: border-box;
  }
  .big {
    grid-area: big;
    background:  center/cover no-repeat;
    /* background-image: url('~img/case0.jpg'); */
  }
  .small {
    grid-area: small;
  }
  .small>ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .small li {
    background:  center/cover no-repeat;
    width: 33.33%;
    height: 50%;
  }
  .nav>ul {
    height: 100%;
    display: flex;
  }
  .nav li {
    flex: 1;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .info {
    height: 100%;
    position: relative;
  }
  .infoMsg {
    color: white;
    left: 50%;
    top: 50%;
    font: 1.2rem 'Microsoft YaHei';
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;
  }
  .infoBg {
    height: 100%;
    background-color: var(--mainColor);
    opacity: 0.7;
  }
  .nav span {
    flex: 1;
  }
  .btn {
    font: 2rem "Microsoft YaHei";
    color: gray;
    cursor: pointer;
    background-color: ghostwhite;
  }
  .btn:hover {
    font-weight: bolder;
    color: var(--mainColor);
    box-shadow: 1px 1px 2px 2px gray inset;
  }
</style>