<template>
  <div class="content row center-xs middle-xs">
    <div class="col-xs-12">
      <button @click="inspire" class="big">GET {{more}}INSPIRATION</button>
    </div>
  </div>
</template>

<script>
import db from "../db";
export default {
  name: "Inspirator",
  data: _ => ({ more: "", g1: null, g2: null, c: 0, count: 0 }),
  created() {
    db.genre.count().then(c => this.c = c);
  },
  methods: {
    inspire() {
      if (this.count == 0) {
        this.count++
        this.more = "MORE "
        this.g1 = Math.floor(Math.random() * this.c)
        if (this.g1 == 0) {
          this.count--;
          this.inspire();
        }
      } else if (this.count >= 1) {
        this.g2 = Math.floor(Math.random() * this.c)
        if (this.g2 == 0) this.inspire()
        if (this.g1 == this.g2) this.inspire()
        this.$router.push(`/theinspiration/${this.g1}/${this.g2}`);
      }
    }
  }
}
</script>

