<template>
  <div>
    <h1>@ztrehagem/vue-accordion</h1>
    <AccordionCombo label="accordion">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        blanditiis ipsam pariatur, optio omnis explicabo similique laudantium
        ratione dolore temporibus. Alias voluptate qui, recusandae in ea
        mollitia molestias hic adipisci.
      </p>
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
})
</script>
