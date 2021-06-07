import Vue from 'vue'
import App from './App.vue'

/** 
 * register all components globally using Plugin
 */ 
// import { DesignSystem } from '../dist/esm'
// Vue.use(DesignSystem)

/**
 * register component ala carte
 */
// import { Button } from '../dist/esm'
// Vue.component('JdsButton', Button)
// Vue.component('JdsInputText', InputText)

new Vue({
  el: '#app',
  render: (h) => h(App),
}).$mount('#app')
