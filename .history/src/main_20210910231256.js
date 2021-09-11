Vue.config.devtools = true;
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './Login.vue'
import Register from './'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
