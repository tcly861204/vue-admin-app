import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '@/mockjs';
// i18n国际化
import i18n from "@/local";

process.env.NODE_ENV === "development" && import('element-ui/lib/theme-chalk/index.css')
Vue.use(ElementUI, { size: 'mini'});
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
