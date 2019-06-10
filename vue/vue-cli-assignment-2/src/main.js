import Vue from 'vue'
import App from './App.vue'

// serverBus for passing data between children components
export const serverBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
