<template>
  <div class="faq-accordion-combo">
    <button
      class="faq-accordion-combo__trigger"
      type="button"
      @click.prevent="toggle"
    >
      <div class="faq-accordion-combo__trigger-inner">
        <div class="faq-accordion-combo__trigger-label">{{ label }}</div>
      </div>
    </button>
    <VueAccordion :expanded="active" :duration="duration">
      <div class="faq-accordion-combo__content">
        <slot></slot>
      </div>
    </VueAccordion>
  </div>
</template>

<script>
import Vue from 'vue'
// import VueAccordion from '../../'
// import '../../dist/vue-accordion.css'
import VueAccordion from '../lib/VueAccordion.vue'

export default Vue.extend({
  components: {
    VueAccordion,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    active: true,
    duration: {
      enter: 1000,
      leave: 2000,
    },
  }),

  methods: {
    toggle() {
      this.active = !this.active
    },
  },
})
</script>

<style lang="stylus" scoped>
.faq-accordion-combo
  font-size inherit
  border 1px solid orange

  & + &
    margin-top 10px

  &__trigger
    width 100%
    background none
    border none
    appearance none

    &:focus
      outline none

  &__trigger-inner
    padding 12px 16px
    display flex
    justify-content flex-start
    align-items center

  &__trigger-label
    text-align left
    margin-right 16px

  &__content
    padding 12px 16px
    border-top 1px solid orange
</style>
