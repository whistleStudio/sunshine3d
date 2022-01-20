<!-- H_activity -->
<template>
  <div id="activity">
    <div id="intro"><span>公司动态</span></div>
    <timeline :acts="activities"/>
  </div>
</template>

<script>
  import Timeline from "components/common/Timeline/Timeline"
  
  export default {
    data () {
      return {
        activities: [
          {cate: 2022, info:[
            {id: 0, sTitle: 2022, bTitle: 4, resume:"3D打印一个你的爱豆\n红豆", img: ""},
            {id: 1, sTitle: 2022, bTitle: 3, resume:"3D打印一个你的爱豆\n黑豆", img: ""},
            {id: 2, sTitle: 2022, bTitle: 3, resume:"3D打印一个你的爱豆\n绿豆", img: ""},
            {id: 3, sTitle: 2022, bTitle: 2, resume:"3D打印一个你的爱豆\n黄豆", img: ""},
            {id: 4, sTitle: 2022, bTitle: 2, resume:"3D打印一个你的爱豆\n巧克力豆", img: ""},
          ]},
          {cate: 2021, info:[
            {id: 0, sTitle: 2021, bTitle: 4, resume:"3D打印两个个你的爱豆\n红豆红豆", img: ""},
            {id: 1, sTitle: 2021, bTitle: 3, resume:"3D打印两个个你的爱豆\n黑豆黑豆", img: ""},
            {id: 2, sTitle: 2021, bTitle: 3, resume:"3D打印两个个你的爱豆\n绿豆绿豆", img: ""},
            {id: 3, sTitle: 2021, bTitle: 2, resume:"3D打印两个个你的爱豆\n黄豆黄豆", img: ""},
            {id: 4, sTitle: 2021, bTitle: 2, resume:"3D打印两个个你的爱豆\n巧克力豆巧克力豆", img: ""},
          ]}     
        ]
      };
    },
    components: {
      Timeline
    },
  }
</script>

<style lang='css' scoped>
  #activity {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>