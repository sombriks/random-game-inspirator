import "./main.css";

import Vue from "vue";
import VueIdb from "vue-idb";
import VueRouter from "vue-router";

import App from "./App.vue";

Vue.use(VueIdb);
Vue.use(VueRouter);

window.vuevm = new Vue({
  render: r => r(App),
  el: "#app"
});

console.log(`we are on [${process.env.NODE_ENV || "development"}] mode`);
console.log("root vm created under [window.vuevm]");
