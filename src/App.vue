<template>
  <v-app dir="rtl">
<!--    <main-bar-right v-if="showBarRight"/>-->
<!--    <main-bar-top v-if="showBarRight"/>-->
    <mobileright-bar v-if="showBarRight"/>
    <router-view />
  </v-app>
</template>

<script>
// import MainBarRight from "@/components/rightBar/mainBarRight";
// import MainBarTop from "@/components/topBar/mainBarTop";
import {mapState} from "vuex";
import MobilerightBar from "@/components/rightBar/mobilerightBar";

export default {
  name: 'App',
  components: {MobilerightBar},
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['showBarRight'])
  },

};
</script>
<style>

@font-face {
  font-family: "DIN Next LT Arabic";
  src: local("DIN Next LT Arabic"),
  url(./assets/fonts/DINNextLTArabic-Regular-3.ttf) format("truetype");
  /*font-display: swap;*/
}

.v-application {
  font-family: "DIN Next LT Arabic", Helvetica, Arial !important;
  /*font-display: swap;*/
}

main.v-main {
  padding: 1px
}

body {
  font-family: "DIN Next LT Arabic", Helvetica, Arial !important;
  /*font-display: swap;*/
}

* {
  font-size: 20px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*.content-site{*/
/*  background-color: #F8F8F8;*/
/*  min-height: 89vh;*/
/*}*/

</style>
