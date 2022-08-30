<template>
  <!--  tabs top with slide section to replace section-->
  <div class="tabs-top">
    <v-tabs color="deep-purple accent-4">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      <v-tabs-slider color="#00B5AD"></v-tabs-slider>
      <v-tab-item v-for="item in items" :key="item">
        <v-container fluid>
          <slot></slot>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
export default {
  name: "tabsCustom",
  props: ['items'],
  data() {
    return {
      tab: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-top {

  .v-tab--active {
    color: black !important;
    font-weight: bold;
    font-size: 16px;
  }

}
</style>
<style lang="scss">
.tabs-top {
  .v-slide-group__content {
    border-bottom: 1.5px solid rgba(180, 180, 180, 0.47);
  }

  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
    color: #707070 !important;
    font-size: 16px;
  }
}
</style>
