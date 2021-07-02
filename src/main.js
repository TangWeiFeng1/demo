import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import VueDND from 'awe-dnd'
import 'default-passive-events'

Vue.use(VueDND)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueDND,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
