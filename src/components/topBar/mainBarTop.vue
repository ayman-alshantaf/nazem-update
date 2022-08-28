<template>
  <v-app-bar fixed app elevate-on-scroll>
    <section class="main-bar-top">
      <v-container>
        <v-row>
          <v-col cols="4">
            <div class="title-page">
              <span>{{ titlePage }}</span>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="search-page">
              <search-input :placeholder="'ادخل الاسم'"/>
              <div class="notification-message">
                <div class="notification">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                </div>
                <div class="message">
                  <i class="fa fa-commenting-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="2" style="padding-right: 0">
            <dropdown-menu/>
          </v-col>
        </v-row>
      </v-container>

    </section>
  </v-app-bar>
</template>

<script>
// import DropdownMenu from "@/components/dropdownMenu";
import {mapState} from "vuex";
import SearchInput from "@/components/search-input";
import DropdownMenu from "@/components/topBar/component/dropdownMenu";

export default {
  name: "mainBarTop",
  components: {DropdownMenu, SearchInput},
  // components: {SearchInput, DropdownMenu},
  data() {
    return {
      items: [
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me 2'},
      ],

    }
  },
  computed: {
    ...mapState(['titlePage'])
  }
}
</script>

<style lang="scss" scoped>
.main-bar-top {
  width: 100%;
  max-height: 70px;
  background-color: white;
  box-shadow: 1px -5px 6px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  position: relative;
  @media (min-width: 960px) {
    .container {
      max-width: 98% !important;
    }
  }


  .title-page {
    color: #354052;
    font-size: 20px;
    font-weight: 500;
  }

  .v-col {
    display: flex;
    align-items: center;
  }

  .search-page {
    width: 100%;
    min-height: 40px;
    display: flex;

    .notification-message {
      display: flex;
      align-items: center;
      margin-right: 8px;
      border-left: 1px solid rgba(157, 154, 154, 0.6);
      padding-left: 10px;
      padding-bottom: 5px;

      i {
        margin: 0 4px;
        color: #3F3F44;
        font-size: 17px;
        cursor: pointer;
      }
    }
  }
}

</style>
<style>
.v-toolbar__content {
  padding: 0 !important;
}
</style>
