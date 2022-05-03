import { createApp } from "vue";
import App from "./App";

const app = createApp(App);
app.mount("#app");

Object.defineProperty(window, "app", { value: app });
