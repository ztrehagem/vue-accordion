import VueAccordion from './VueAccordion.vue'

function install(Vue, { name = 'vue-accordion' } = {}) {
  Vue.component(name, VueAccordion)
}

export default { install }
