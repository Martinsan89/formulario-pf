import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
