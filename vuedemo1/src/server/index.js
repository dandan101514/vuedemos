import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const userData = (para) =>{ return Vue.resource('/user/people').save()}

