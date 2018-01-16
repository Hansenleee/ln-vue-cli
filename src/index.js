import Vue from 'vue'
import App from './views/app.vue'
import router from './router'
// 11

new Vue({
  el: '#app',
  router,
  // store,
  render: createElement => createElement(App),
})
