<template>
  <div class="content row center-xs middle-xs">
    <div class="col-xs-12">
      <h1 :style="{color:c1}" v-if="g1">{{g1.title}}</h1>
      <small>with</small>
      <h1 :style="{color:c2}" v-if="g2">{{g2.title}}</h1>
    </div>
    <div class="col-xs-12">
      <social-sharing :url="$route.url" title="Game inspiration" 
        :description="`How about ${g1.title} with ${g2.title} ?`" :quote="`How about ${g1.title} with ${g2.title} ?`"
        hashtags="inspiration,game,vue" twitter-user="sombriks" inline-template>
        <div>
          <network network="email">
            <i class="fa fa-envelope"></i> Email
          </network>
          <network network="facebook">
            <i class="fa fa-facebook"></i> Facebook
          </network>
          <network network="telegram">
            <i class="fa fa-telegram"></i> Telegram
          </network>
          <network network="twitter">
            <i class="fa fa-twitter"></i> Twitter
          </network>
          <network network="whatsapp">
            <i class="fa fa-whatsapp"></i> Whatsapp
          </network>
        </div>
      </social-sharing>
    </div>
    <div class="col-xs-12">
      <button @click="$router.push('/inspirator')" class="big">TRY AGAIN</button>
    </div>
  </div>
</template>

<script>
import db from "../db";
import randomcolor from "randomcolor";

export default {
  name: "TheInspiration",
  data: _ => ({ g1: null, g2: null, c1: null, c2: null }),
  created() {
    this.c1 = randomcolor({ luminosity: 'dark' });
    this.c2 = randomcolor({ luminosity: 'dark' });
    db.genre.get(parseInt(this.$route.params.id1)).then(g => this.g1 = g)
    db.genre.get(parseInt(this.$route.params.id2)).then(g => this.g2 = g)
  }
}
</script>

