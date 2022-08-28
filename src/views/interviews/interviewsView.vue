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
                    <v-col lg="2">
                      <date-select-modal/>
                    </v-col>
                    <v-col lg="2">
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
        'جميع المقابلات', 'نتيجه المقابلات',
      ],
      itemsOption: [
        {title: 'مقبول '},
        {title: 'مرفق '},
        {title: 'قيد المراجهة '},

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
    this.pageTitle('المقابلات')
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

    .row {
      align-items: center;

      .col {
        padding-left: 5px !important;
      }
    }
  }
}

</style>
<style lang="scss">
.interviews {
  .theme--light.v-input input, .theme--light.v-input textarea {
    font-size: 14px !important;
    font-weight: bold !important;
    color: #707070 !important;
    margin-top: 5px;
  }

  .v-input__icon i {
    font-size: 14px !important;
    font-weight: normal !important;
    color: #707070 !important;
  }

  .v-text-field__details {
    display: none;
  }

  .v-input__slot:focus .v-text-field__details {
    border: none !important;
    display: none;

  }

  .v-input__slot:active .v-text-field__details {
    border: none !important;
    display: none;

  }

  .theme--light.v-input {
    margin: 0px 2px 0px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D2D5E1;
    border-radius: 5px;
  }

  .v-calendar-daily__interval-text {
    color: transparent !important
  }

  .v-text-field {
    padding: 0;
  }

  .v-text-field__slot input {
    padding: 2px 0 !important;
  }

  .v-input__prepend-outer {
    margin-right: 3px;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    padding: 20px 12px !important;
    border-radius: 10px;

    i {
      margin-right: 1px !important;
    }
  }


}
</style>
