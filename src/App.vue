<template>
  <div>
    <transition mame="fade" mode="in-out">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import Inspirator from "./components/inspirator.vue";
import TheInspiration from "./components/theinspiration.vue";
export default {
  name: "App",
  router: new VueRouter({
    routes: [
      { path: "/", redirect: "/inspirator" },
      { path: "/inspirator", component: Inspirator },
      { path: "/theinspiration/:id1/:id2", component: TheInspiration }
    ]
  })
}
</script>
