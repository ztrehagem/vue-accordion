import { defineComponent } from "vue";
import AccordionDemo from "./components/AccordionDemo";
import PackageInformation from "./components/PackageInformation";

export default defineComponent({
  setup() {
    return () => (
      <main>
        <PackageInformation />

        <AccordionDemo />
      </main>
    );
  },
});
