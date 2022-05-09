import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import {pData} from "views/product/productData.json"
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$pData = pData
// Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
