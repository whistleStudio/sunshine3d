<!-- show info with timeline -->
<template>
  <div id="timeline">
    <div >
      <ul id="line">
        <li class='mark' v-for="a in acts[0].info" :key="a.id">
          <div class="dot"></div>
          <div v-if="a.id%2==0">
            <div class="info infoTop" :class="{disappear: a.id==actCardId}" @mouseover="actCardId=a.id">
              <div class="resume">{{a.resume}}</div>
              <div class="bTitle">{{a.bTitle}}</div>
              <div class="sTitle">{{a.sTitle}}</div>
              <div class="exLine">|</div>
            </div>
            <!-- <div class="card cardTop transparent" v-if="a.id==actCardId" @mouseleave="actCardId=-1">
              <card-2 :cardResume="a.resume" :cardDate="a.sTitle+'-'+a.bTitle" 
                :cardPic="a.img" 
              />
            </div>              -->
          </div>
          <div v-else>
            <div class="info infoBot" :class="{disappear: a.id==actCardId}" @mouseover="actCardId=a.id" >
              <div class="exLine">|</div>
              <div class="bTitle">{{a.bTitle}}</div>
              <div class="sTitle">{{a.sTitle}}</div>
              <div class="resume">{{a.resume}}</div>
            </div>
            <!-- <div class="card cardBot transparent" v-if="a.id==actCardId" @mouseleave="actCardId=-1">
              <card-2 :cardResume="a.resume" :cardDate="a.sTitle+'-'+a.bTitle" 
                :cardPic="a.img" 
              />
            </div>             -->
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
        actCardId: -1
      };
    },
    props: {
      acts: Array
    },
    components: {
      "card-2": Card2
    },
    methods: {
      reappear () {
        actCardId=-1
      }
    }
  }
</script>

<style src='components/common/Timeline/Timeline.css' scoped></style>
<style lang='css' scoped>
  .cardTop {
    transform: translateX(calc(-50% + 0.5rem)) translateY(calc(-102%));
  }
  .cardBot {
    transform: translateX(calc(-50% + 0.5rem)) translateY(calc(10%));
  }
  .disappear {
    display: show;
    /* animation: turnTransparent 0.3s forwards; */
  }

  .transparent:hover {
    animation: showCard 1s forwards;
  }


  @keyframes showCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes turnTransparent {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
  }
  
</style>