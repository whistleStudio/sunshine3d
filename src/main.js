// import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import {pData} from "views/product/productData.json"
// import VueLazyload from "vue-lazyload"


Vue.config.productionTip = false
Vue.prototype.$pData = pData
Vue.prototype.$cos = "https://sszc-1300400818.cos.ap-nanjing.myqcloud.com"
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://s1.ax1x.com/2022/05/25/XFSyb4.jpg',
  loading: '/loading.gif',
  attempt: 1
})




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
