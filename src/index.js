import Vue from 'vue'
import App from './views/app.vue'
import router from './router'
import 'normalize.css'
// 11
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  // store,
  render: createElement => createElement(App),
})
