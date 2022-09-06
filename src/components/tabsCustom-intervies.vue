<template>
  <v-tabs color="section-top-tabs-interview deep-purple accent-4">
    <div class="section-top-tabs">
      <div class="main-right-section">
        <div class="right-section">
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </div>
      </div>
      <div class="main-left-section">
        <slot name="header-tabs"></slot>
      </div>
    </div>
    <v-tabs-slider color="#00B5AD"></v-tabs-slider>

    <v-tab-item>
      <v-container fluid>
        <slot name="contentTabOne"></slot>
      </v-container>
    </v-tab-item>

    <v-tab-item>
      <v-container fluid>
        <slot name="contentTabTow"></slot>
      </v-container>
    </v-tab-item>

  </v-tabs>
</template>
<script>
export default {
  name: "tabsCustomInterviews",
  props: ['items'],
  data() {
    return {
      tab: null,

    }
  },
}
</script>
<style lang="scss" scoped>
.section-top-tabs {

  .v-tab--active {
    color: black !important;
    font-weight: bold;
    font-size: 16px;
  }

}
</style>
<style lang="scss">
@media only screen and (max-width: 1140px) {
  .section-top-tabs {
    display: block !important;
  }
  .interviews .v-tabs-bar,
  .alarm-view .v-tabs-bar {
    min-height: 140px !important;
  }
  .interviews .section-top-tabs .main-right-section .right-section,
  .alarm-view .section-top-tabs .main-right-section .right-section {
    min-width: unset !important;
  }

  .interviews .v-tabs-slider-wrapper {
    bottom: 54% !important;
  }
  .interviews .v-tab, .alarm-view .v-tab {
    padding-bottom: 10px !important;
  }
}

@media only screen and (max-width: 1300px) {
  .alarm-view .section-top-tabs .main-left-section {
    display: unset !important;
  }
}

@media only screen and (max-width: 1140px) {

  .alarm-view .v-tabs-slider-wrapper {
    bottom: 71% !important;
  }
}

@media only screen and (max-width: 900px) {
  .alarm-view .way-option {
    display: none;
  }
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #707070 !important;
  font-size: 17px;
}
</style>
