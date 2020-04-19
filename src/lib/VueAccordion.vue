<template>
  <transition
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div
      class="vue-accordion"
      ref="wrapper"
      :style="wrapperStyle"
      v-if="expanded"
    >
      <div class="vue-accordion__inner" ref="inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

const ENTER = 'enter'
const LEAVE = 'leave'

export default Vue.extend({
  props: {
    expanded: {
      type: Boolean,
      required: true,
    },

    duration: {
      type: [Number, Object],
      default: 250,
    },
  },

  data: (vm) => ({
    previousMove: vm.expanded ? ENTER : LEAVE,
  }),

  computed: {
    wrapperStyle() {
      const duration =
        this.previousMove === ENTER ? this.leaveDuration : this.enterDuration

      return {
        transitionDuration: `${duration}ms`,
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
    if (this.expanded) {
      this.setWrapperHeightTo('auto')
    }
  },

  methods: {
    async onEnter(el) {
      this.setWrapperHeightTo(this.getContentHeight(), el)
    },

    onAfterEnter(el) {
      this.setWrapperHeightTo('auto', el)
      this.previousMove = ENTER
    },

    onBeforeLeave(el) {
      this.previousMove = LEAVE
      this.setWrapperHeightTo(this.getContentHeight(), el)
    },

    async onLeave(el) {
      el.scrollHeight
      this.setWrapperHeightTo(0, el)
    },

    onAfterLeave() {
      this.previousMove = LEAVE
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
