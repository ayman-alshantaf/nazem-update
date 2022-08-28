import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/css/material-nazem.scss'
import VCalendar from 'v-calendar';
import {Chart} from 'chart.js'
import Chartkick from 'vue-chartkick'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)
Vue.use(Chartkick.use(Chart));
Vue.use(VCalendar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
