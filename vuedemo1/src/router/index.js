import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Loading from '@/components/loadings'
import Dialog from '@/components/dialog'
import List from '@/components/lists'
import Mocks from '@/components/mocks'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'index/loading'
    },
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
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'mocks',
          component: Mocks
        }
      ]
    },
  ]
})
