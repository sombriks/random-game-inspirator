<template>
  <div class="content">
    <router-view></router-view>
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
      { path: "/theinspiration", component: TheInspiration }
    ]
  })
}
</script>
<style scoped>
</style>
