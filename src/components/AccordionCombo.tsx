import { VueAccordion } from "../lib/main";
import { defineComponent, ref } from "vue";
import {
  content,
  root,
  trigger,
  triggerInner,
  triggerLabel,
} from "./AccordionCombo.css";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      default: 250,
    },
  },

  setup(props, { slots }) {
    const active = ref(false);

    const toggle = (e: Event) => {
      e.preventDefault();
      active.value = !active.value;
    };

    return () => (
      <div class={root}>
        <button type="button" onClick={toggle} class={trigger}>
          <span class={triggerInner}>
            <span class={triggerLabel}>{props.label}</span>
          </span>
        </button>

        <VueAccordion expanded={active.value} duration={props.duration}>
          <div class={content}>{slots.default?.()}</div>
        </VueAccordion>
      </div>
    );
  },
});
