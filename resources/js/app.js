// STYLES
//
import '_resources/scss/index.scss'

// MODULES
//

// APP
//
import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import App from '_resources/views/App.vue'

Vue.use(VueRouter)

// import store from './store'

const app = new Vue({
  el: '#app',
  // store: store,
  router: router,
  render: h => h(App)
})
