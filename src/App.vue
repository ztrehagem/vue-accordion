<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AccordionCombo v-model="active" label="accordion">
      <div>
        <strong>Hello World!</strong>
      </div>
    </AccordionCombo>
  </div>
</template>

<script>
import Vue from 'vue'
import AccordionCombo from './components/AccordionCombo.vue'

export default Vue.extend({
  components: {
    AccordionCombo,
  },

  data: () => ({
    active: false,
  }),
})
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
