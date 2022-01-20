<!-- show info with timeline -->
<template>
  <div id="timeline">
    <div >
      <ul id="line">
        <li class='mark' v-for="a in acts[0].info" :key="a.id">
          <div class="dot"></div>
          <div v-if="a.id%2==0">
            <div class="info infoTop">
              <div class="resume">{{a.resume}}</div>
              <div class="bTitle">{{a.bTitle}}</div>
              <div class="sTitle">{{a.sTitle}}</div>
              <div class="exLine">|</div>
            </div>
            <div class="card infoTop">
              <card-2 />
            </div>             
          </div>
          <div v-else>
            <div class="info infoBot">
              <div class="exLine">|</div>
              <div class="bTitle">{{a.bTitle}}</div>
              <div class="sTitle">{{a.sTitle}}</div>
              <div class="resume">{{a.resume}}</div>
            </div>
            <div class="card infoBot">
              <card-2 />
            </div>            
          </div>

        </li>      
      </ul>
    </div>
  </div>
</template>

<script>
  import Card2 from "components/common/Timeline/Card2.vue"

  export default {
    data () {
      return {
      };
    },
    props: {
      acts: Array
    },
    components: {
      "card-2": Card2
    },
  }
</script>

<style src='components/common/Timeline/Timeline.css' scoped></style>
<style lang='css' scoped>
  /* @import "~components/common/Timeline/Timeline.css"; */
</style>