<!-- show info with timeline -->
<template>
  <div id="timeline">
    <div >
      <ul id="line">
        <li class='mark'>
          <div class="dot"></div>
          <div class="info">
            <div>XXXXXXX</div>
            <div>1</div>
            <div>2021</div>
          </div>
          <div class="card"></div>
        </li>
        <li class='mark'>
          <div ><div></div></div>

        </li>
        <li class='mark'>
          <div ><div></div></div>

        </li>
        <li class='mark'>
          <div ><div></div></div>

        </li>
        <li class='mark'>
          <div><div></div></div>

        </li>        
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    components: {},
  }
</script>

<style lang='css' scoped>
  * {
    --left1: calc((1/6)*100%);
    --left3: calc((1/6)*100%);
  }
  #timeline {
    width: 80%;
    height: 65vh;
    background-color: skyblue;  
  }
  #timeline>div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  #line {
    width: 100%;
    height: 2px;
    background-color: grey;
    display: flex;
  }
  .mark {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid black;
    margin-left: var(--left3);
    transform: translate(-50%,-50%);
    background-color: white;
    position: relative;
    cursor: pointer;
  }
  .mark:first-child {
    margin-left: var(--left1);
  }
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    border-radius: 50%;
  }
  .info {
    position: absolute;
    width: 12vw;
    height: 30vh;
    background-color: pink;
    /* transform: translate(-50%, -100%); */
    transform: translateX(calc(-50% + 0.5rem)) translateY(calc(-100% + 0.5rem));
  }

  .mark:hover {
    animation: bigger 0.5s forwards;
  }
  @keyframes bigger {
    from {
      width: 1rem;
      height: 1rem;
    }
    to {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
</style>