import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/iconfont.css'
import './assets/fonts/daysOne.css'
import i18n from '../src/lang'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
