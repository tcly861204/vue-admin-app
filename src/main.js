import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '@/mockjs'
// i18n国际化
import i18n from "@/local"
if (process.env.NODE_ENV === "development") {
  require('element-ui/lib/theme-chalk/index.css')
}
Vue.use(ElementUI, { size: 'mini'})
Vue.config.productionTip = false
import './theme/blue/main.less'
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
