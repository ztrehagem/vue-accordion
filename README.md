# @ztrehagem/vue-accordion

![](https://img.shields.io/npm/v/@ztrehagem/vue-accordion/latest)
![](https://img.shields.io/npm/dependency-version/@ztrehagem/vue-accordion/peer/vue)
![](https://img.shields.io/npm/types/@ztrehagem/vue-accordion)
![](https://img.shields.io/github/license/ztrehagem/vue-accordion)

## Installation

```sh
npm install @ztrehagem/vue-accordion
```

## Usage

1. (Recommended/Optional) Import default style.

   This is a minimum style for achieving the behavior of accordion. ([source](./src/lib/style.css))

   ```ts
   import "@ztrehagem/vue-accordion/style.css";
   ```

2. Import and use VueAccordion component.

   ```js
   import { VueAccordion } from "@ztrehagem/vue-accordion";

   export default {
     components: {
       VueAccordion,
     },
   };
   ```

   ```html
   <VueAccordion :expanded="isExpanded">
     <strong>Hello World!</strong>
   </VueAccordion>
   ```

See [src](./src) for more examples.
