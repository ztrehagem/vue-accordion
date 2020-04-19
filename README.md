# @ztrehagem/vue-accordion

## Usage

1. Install

    ```
    npm install @ztrehagem/vue-accordion
    ```

2. Import default style (optional)

    ```js
    // for css loaders
    import '@ztrehagem/vue-accordion/dist/vue-accordion.css'
    ```
    or
    ```scss
    // for css preprocessors
    @import '~@ztrehagem/vue-accordion/dist/vue-accordion.css'
    ```

3. Use as component

    ```js
    import VueAccordion from '@ztrehagem/vue-accordion'

    export default {
      components: {
        VueAccordion
      }
    }
    ```
    ```html
    <VueAccordion :expanded="isExpanded">
      <strong>Hello World!</strong>
    </VueAccordion>
    ```


## Development setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for publish
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
