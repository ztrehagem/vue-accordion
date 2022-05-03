import { defineComponent, ref } from "vue";
import { VueAccordion } from "../lib/main";

export default defineComponent({
  setup(props, { slots }) {
    const active = ref(false);

    const toggle = () => (active.value = !active.value);

    return () => (
      <div>
        <button type="button" onClick={toggle}>
          toggle
        </button>

        <VueAccordion expanded={active.value}>{slots.default?.()}</VueAccordion>
      </div>
    );
  },
});
