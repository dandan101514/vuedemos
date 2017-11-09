import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Loading from '@/components/loadings'
import Dialog from '@/components/dialog'
import List from '@/components/lists'
import Mocks from '@/components/mocks'
import Sweetalert from '@/components/sweetalert'
import Watch from '@/components/watch.computed'
import Propsdemo from '@/components/vue.props'

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
        },
        {
          path: 'sweetalert',
          component: Sweetalert
        },
        {
          path: 'watch',
          component: Watch
        },
        {
          path: 'props',
          component: Propsdemo
        }
      ]
    },
  ]
})
