<template>
  <v-app dir="rtl">
    <div v-if="showDesk">
      <main-bar-right  v-if="showBarRight "/>
    </div>
    <div v-if="showDesk">
    <main-bar-top v-if="showBarRight"/>
    </div>
    <div v-if="showMobile">
      <mobileright-bar v-if="showBarRight"/>
    </div>
    <router-view />
  </v-app>
</template>

<script>
import {mapState} from "vuex";
import MobilerightBar from "@/components/rightBar/mobilerightBar";
import MainBarRight from "@/components/rightBar/mainBarRight";
import MainBarTop from "@/components/topBar/mainBarTop";

export default {
  name: 'App',
  components: {MainBarTop, MainBarRight, MobilerightBar},
  data: () => ({
    showDesk:true,
    showMobile:false,
  }),
  computed: {
    ...mapState(['showBarRight'])
  },
  methods:{
    showBar(){
      console.log("s");
      if (window.innerWidth < 998){
        this.showDesk = false
        this.showMobile = true
      }else {
        this.showDesk = true
        this.showMobile = false
      }
    }
  },
  beforeMount() {
  this.showBar();
    window.addEventListener('resize', this.showBar)
  }

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
