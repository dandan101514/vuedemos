// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock'
import server from './server'
import loading from './views/loading'
import dialog from './views/dialog'
import ElementUI from 'element-ui'
import sweetalert from 'sweetalert'
import 'element-ui/lib/theme-chalk/index.css'


mock()

Vue.use(ElementUI)
Vue.use(loading)
Vue.use(dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mock,
  template: '<App/>',
  components: { App }
})
