import loadingcomponent from './loading.vue'

const loading = {
    install: function (Vue) {
        Vue.component('Loading',loadingcomponent)
    }
}

export default loading