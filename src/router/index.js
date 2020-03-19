import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import GNSB from '@/views/domestictrademark.vue'
import GJSB from '@/views/internationaltrademark.vue'
import BQFW from '@/views/copyrightServer.vue'
import ZLFW from '@/views/patentServer.vue'
import GY from '@/views/about.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gnsb',
      component: GNSB
    },
    {
      path: '/gjsb',
      component: GJSB
    },
    {
      path: '/bqfw',
      component: BQFW
    },
    {
      path: '/zlfw',
      component: ZLFW
    },
    {
      path: '/gy',
      component: GY
    }
  ]
})
