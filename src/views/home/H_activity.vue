<!-- H_activity -->
<template>
  <div id="activity">
    <div id="intro"><span>发展历程</span></div>
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
            {id: 0, sTitle: 2017, bTitle: 7, resume:"扬州增材智能科技有限公司\n创立", img: "act0.jpg"},
            {id: 1, sTitle: 2019, bTitle: 6, resume:"秸秆类3D打印耗材专利\n注册", img: "act1.jpg"},
            {id: 2, sTitle: 2020, bTitle: 3, resume:"南京栖霞区冲之科技工作室\n成立", img: "act2.jpg"},
            {id: 3, sTitle: 2021, bTitle: 9, resume:"绿色3D打印创业团队\n组建", img: "act3.jpg"},
            {id: 4, sTitle: 2021, bTitle: 11, resume:"南京上善增材新材料有限公司\n成立", img: "act4.jpg"},
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
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>