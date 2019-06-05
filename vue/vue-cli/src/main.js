// component imports
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// global components
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App),
})
