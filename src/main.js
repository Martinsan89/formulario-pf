import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "./store/index";
import router from "./routers/router";

createApp(App).use(router).mount("#app");
