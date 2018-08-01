
import "./main.css";

import Vue from "vue";
import VueRouter from "vue-router";
import VueSocialSharing from "vue-social-sharing";

Vue.use(VueRouter);
Vue.use(VueSocialSharing);

import App from "./App.vue";
import db from "./db";

window.vuevm = new Vue({
  render: r => r(App),
  el: "#app",
});

console.log(`we are on [${process.env.NODE_ENV || "development"}] mode`);
console.log("root vm created under [window.vuevm]");
db.genre.count().then(val => console.log(`we have [${val}] genres available`));
