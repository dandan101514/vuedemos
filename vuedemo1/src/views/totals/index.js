import totalcomponent from './totals.vue'

const total = {
    install:function(Vue){
        Vue.component('Total',totalcomponent)
    }
}

export default total