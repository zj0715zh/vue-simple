import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted(){
  	var html = $('.hello').html();
  	console.log(html)
  }
})
