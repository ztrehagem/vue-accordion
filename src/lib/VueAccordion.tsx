import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  ref,
  Transition,
} from "vue";

export default defineComponent({
  props: {
    expanded: {
      type: Boolean,
      required: true,
    },

    duration: {
      type: Number,
      default: 250,
    },
  },

  setup(props, { slots }) {
    const elWrapper = ref<HTMLElement | undefined>();
    const elInner = ref<HTMLElement | undefined>();

    const wrapperStyle = computed<Partial<CSSProperties>>(() => ({
      transitionDuration: `${props.duration}ms`,
    }));

    const onEnter = (el: Element): void => {
      const { height } = elInner.value!.getBoundingClientRect();
      (el as HTMLElement).style.height = `${height}px`;
    };

    const onAfterEnter = (el: Element): void => {
      (el as HTMLElement).style.height = "auto";
    };

    const onBeforeLeave = (el: Element): void => {
      const { height } = (el as HTMLElement).getBoundingClientRect();
      (el as HTMLElement).style.height = `${height}px`;
    };

    const onLeave = (el: Element): void => {
      (el as HTMLElement).style.height = "0px";
    };

    onMounted(() => {
      if (props.expanded) {
        elWrapper.value!.style.height = "auto";
      }
    });

    return () => (
      <Transition
        onEnter={onEnter}
        onAfterEnter={onAfterEnter}
        onBeforeLeave={onBeforeLeave}
        onLeave={onLeave}
      >
        {props.expanded && (
          <div class="vue-accordion" ref={elWrapper} style={wrapperStyle.value}>
            <div class="vue-accordion__inner" ref={elInner}>
              {slots.default?.()}
            </div>
          </div>
        )}
      </Transition>
    );
  },
});
