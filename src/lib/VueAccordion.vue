<template>
  <div class="vue-accordion" ref="root" :class="rootClass" :style="rootStyle">
    <div class="vue-accordion__inner" ref="inner">
      <slot></slot>
    </div>
  </div>
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
      type: Number,
      default: 250,
    },
  },

  data() {
    return {
      animating: false,
    }
  },

  computed: {
    rootStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
      }
    },

    rootClass() {
      return {
        'vue-accordion--trim': this.animating || !this.value,
      }
    },
  },

  watch: {
    value() {
      this.apply()
    },
  },

  mounted() {
    this.setWrapperHeightTo(this.value ? this.getContentHeight() : 0)
  },

  methods: {
    apply() {
      if (this.value) {
        this.expand()
      } else {
        this.collapse()
      }
    },

    async expand() {
      this.animating = true
      this.setWrapperHeightTo(this.getContentHeight())
      await wait(this.duration)
      if (this.value) {
        this.setWrapperHeightTo('auto')
        this.animating = false
      }
    },

    async collapse() {
      this.setWrapperHeightTo(this.getContentHeight())
      await wait()
      if (!this.value) {
        this.setWrapperHeightTo(0)
      }
    },

    getContentHeight() {
      const inner = this.$refs.inner
      return inner.getBoundingClientRect().height
    },

    /**
     * @param {number | 'auto'} height
     */
    setWrapperHeightTo(height) {
      const root = this.$refs.root
      root.style.height = height === 'auto' ? height : `${height}px`
    },
  },
})
</script>

<style lang="stylus" scoped>
.vue-accordion
  transition-timing-function ease
  transition-property height
  height 0

  &__inner
    display table
    width 100%

  &--trim
    overflow hidden
</style>
