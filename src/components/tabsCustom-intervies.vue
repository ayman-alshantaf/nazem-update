<template>
  <v-tabs color="deep-purple accent-4">
    <div class="section-top-tabs">
      <div class="main-right-section">
        <div class="right-section">
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </div>
      </div>
      <div class="main-left-section">
        <slot name="header-tabs"></slot>
        <slot name="header-tabs2"></slot>
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

<style lang="scss">
.interviews {
  .v-slide-group.v-item-group > .v-slide-group__next, .v-slide-group.v-item-group > .v-slide-group__prev {
    display: none !important;
  }

  .v-slide-group__content {
    transform: translateY(0px) !important;
  }

  .section-top-tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .main-right-section {
      min-width: 35%;

      .right-section {
        height: 100%;
        min-width: 70%;
        display: inline-flex;
        border-bottom: 2px solid #B4B4B4;
      }
    }

    .main-left-section {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .v-slide-group__content {
    border: none !important;
  }

  .v-slide-group__wrapper {
    display: block !important;

  }
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #707070 !important;
  font-size: 17px;
}
</style>
