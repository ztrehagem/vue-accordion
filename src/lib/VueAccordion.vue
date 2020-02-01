<template>
  <transition
    :duration="duration"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
  >
    <div class="vue-accordion" ref="wrapper" :style="wrapperStyle" v-if="value">
      <div class="vue-accordion__inner" ref="inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

export default Vue.extend({
  props: {
    // v-model
    value: {
      type: Boolean,
      required: true,
    },

    duration: {
      type: [Number, Object],
      default: 250,
    },
  },

  computed: {
    wrapperStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
      }
    },

    enterDuration() {
      return typeof this.duration === 'number'
        ? this.duration
        : this.duration.enter
    },

    leaveDuration() {
      return typeof this.duration === 'number'
        ? this.duration
        : this.duration.leave
    },
  },

  mounted() {
    if (this.value) {
      this.setWrapperHeightTo('auto')
    }
  },

  methods: {
    async onEnter(el, done) {
      this.setWrapperHeightTo(this.getContentHeight(), el)
      await wait(this.enterDuration)
      done()
    },

    onAfterEnter(el) {
      this.setWrapperHeightTo('auto', el)
    },

    onBeforeLeave(el) {
      this.setWrapperHeightTo(this.getContentHeight(), el)
    },

    async onLeave(el, done) {
      window.getComputedStyle(el).height
      this.setWrapperHeightTo(0, el)
      await wait(this.leaveDuration)
      done()
    },

    getContentHeight() {
      const inner = this.$refs.inner
      return inner.getBoundingClientRect().height
    },

    /**
     * @param {number | 'auto'} height
     */
    setWrapperHeightTo(height, el = this.$refs.wrapper) {
      el.style.height = height === 'auto' ? height : `${height}px`
    },
  },
})
</script>

<style lang="stylus">
.vue-accordion
  transition-timing-function ease
  transition-property height
  height 0
  overflow hidden

  &__inner
    display table
    width 100%
</style>
