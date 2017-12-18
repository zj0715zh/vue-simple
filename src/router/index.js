import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Hello from '@/components/Hello'
import Top from '@/components/Top'


Vue.use(Router)
Vue.prototype.$ajax = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/detail/:id',
      name: 'Top',
      component: Top
    },
  ]
})
