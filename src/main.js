// import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import {pData} from "views/product/productData.json"


Vue.config.productionTip = false
Vue.prototype.$pData = pData


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
