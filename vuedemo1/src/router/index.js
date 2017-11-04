import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Loading from '@/components/loadings'
import Dialog from '@/components/dialog'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      component: Index,
      children:[
        {
          path: 'loading',
          component: Loading
        },
        {
          path: 'dialog',
          component: Dialog
        }
      ]
    },
  ]
})
