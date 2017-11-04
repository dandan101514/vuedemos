import dialogcomponent from './dialog.vue'

const dialog = {
    install: function (Vue) {
        Vue.component('Dialog',dialogcomponent)
    }
}

export default dialog