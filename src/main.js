import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/fonts/circular-std/style.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import './assets/libs/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
