<template>
  <section class="interviews">
    <v-main>
      <div class="container--fluid">
        <!-- start section tabs interview with content tabs-->
        <div class="section-tabs-interview">
          <tabs-custom-interviews :items="items">
            <!-- start   section header top tabs-->
            <template v-slot:header-tabs>
              <div class="header-tabs">
                <form>
                  <v-row>
                    <v-col>
                      <select-option-customer :items="itemsOption"/>
                    </v-col>
                    <v-col lg="3" style="padding-right: 1px">
                      <search-input :style="styleSearch"></search-input>
                    </v-col>
                    <v-col lg="2" class="hide-mobile">
                      <date-select-modal/>
                    </v-col>
                    <v-col lg="2" class="hide-mobile">
                      <date-select-modal/>
                    </v-col>
                    <v-col style="padding-left: 0px;padding-right: 5px">
                      <div class="input-search">
                        <btn-search/>
                      </div>
                    </v-col>
                  </v-row>
                </form>
              </div>
            </template>
            <!-- end   section header top tabs-->

            <!-- start   section content 'card' top tabs-->
            <template v-slot:contentTabOne>
              <div class="all-card">
                <v-row>
                  <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6"
                         style="padding: 10px 9px">
                    <card-inter-view :name="student.name"
                                     :class-name="student.className"
                                     :statusStudent="student.Admission"
                                     :status="student.statusAdmission"
                                     :items-path-array="student.detailsRecitation"
                                     :idCardStudent="student.id"

                    />
                  </v-col>
                </v-row>
              </div>
            </template>
            <!-- end   section content 'card' top tabs-->
            <!-- start   section content 'card' top tabs-->

            <template v-slot:contentTabTow>
              <div class="all-card">
                <v-row>
                  <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6"
                         style="padding: 10px 9px">
                    <card-inter-view :name="student.name"
                                     :class-name="student.className"
                                     :statusStudent="student.statusStudent"
                                     :items-path-array="student.detailsRecitation"
                                     :status="student.status"
                                     :idCardStudent="student.id"

                    />
                  </v-col>
                </v-row>
              </div>
            </template>
            <!-- end   section content 'card' top tabs-->

          </tabs-custom-interviews>
        </div>
        <!--  end section tabs interview with content tabs-->

        <!-- start section pagination-->
        <div class="section-pagination">
          <pagination-components/>
        </div>
        <!-- end section pagination-->
      </div>
    </v-main>
  </section>
</template>

<script>
import PaginationComponents from "@/components/dashboard/paginationComponents";
import {mapMutations, mapState} from "vuex";
import TabsCustomInterviews from "@/components/tabsCustom-intervies";
import SearchInput from "@/components/search-input";
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import BtnSearch from "@/components/btnSearch";
import CardInterView from "@/components/cards/card-interView";
import SelectOptionCustomer from "@/components/select-option-customer";


export default {
  name: "interviewsView",
  components: {
    SelectOptionCustomer,
    CardInterView,
    BtnSearch, DateSelectModal, SearchInput, TabsCustomInterviews, PaginationComponents
  },
  data() {
    return {
      items: [
        '???????? ??????????????????', '?????????? ??????????????????',
      ],
      itemsOption: [
        {title: '?????????? '},
        {title: '???????? '},
        {title: '?????? ???????????????? '},

      ],
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",
      },
    }
  },
  computed: {
    ...mapState(['allStudents', 'allInterview'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('??????????????????')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.interviews {
  background-color: $background-main-page;
  padding: 30px 15px;

  .container--fluid {
    border-radius: 15px;
    background-color: white;
    padding: 30px 15px 15px 15px
  }

  .all-card {
    padding-top: 15px;
  }

  .input-search {
    width: 90%;
  }

  .header-tabs {
    padding-top: 5px;
    @media only screen and (max-width: 1140px) {
      width: 100%;
    }
    .row {
      align-items: center;

      .col {
        padding-left: 5px !important;
      }

      @media only screen and (max-width: 1140px) {
        .hide-mobile {
          display: none;
        }
      }
    }
  }

}

</style>
<style lang="scss">
.interviews {
  .theme--light.v-input {
    margin: 0px 2px 0px 9px !important;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    padding: 20px 12px !important;
    border-radius: 10px;

    i {
      margin-right: 1px !important;
    }
  }

  .v-slide-group.v-item-group > .v-slide-group__next, .v-slide-group.v-item-group > .v-slide-group__prev {
    display: none !important;
  }

  .v-slide-group__content {
    transform: translateY(0px) !important;
    border: none !important;
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

  .v-slide-group__wrapper {
    display: block !important;

  }

}
</style>
