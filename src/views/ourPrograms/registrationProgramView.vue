<template>
  <!--  start page registration-program-->
  <section class="registration-program">
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
                    <v-col cols="4" lg="3">
                      <select-option-customer :items="itemsOption"/>
                    </v-col>
                    <v-col cols="4" lg="6" style="padding-right: 1px">
                      <search-input :style="styleSearch"></search-input>
                    </v-col>
                    <v-col cols="4" lg="3" style="padding-left: 0px;padding-right: 5px">
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
                    <card-registration-program
                        :name="student.name"
                        :class-name="student.className"
                        :statusStudent="student.Admission"
                        :status="student.statusAdmission"
                        :items-path-array="student.detailsRegistration"
                        :information-student-array="student.informationStudent"
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
                    <card-registration-program
                        :name="student.name"
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
import BtnSearch from "@/components/btnSearch";
import SelectOptionCustomer from "@/components/select-option-customer";
import CardRegistrationProgram from "@/components/cards/card-registrationProgram";


export default {
  name: "registrationProgramView",
  components: {
    CardRegistrationProgram,
    SelectOptionCustomer,
    BtnSearch, SearchInput, TabsCustomInterviews, PaginationComponents
  },
  data() {
    return {
      items: [
        'كل الطلاب', 'المقبولين', 'المستبعدين'
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
    this.pageTitle('تسجيل في البرامج')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.registration-program {
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
    width: 100%;

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
.registration-program {
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
      width: 60%;
      display: flex;
      align-items: center;
      @media only screen and (max-width: 1140px) {
        width: 100%;
      }
    }
  }

  .v-slide-group__wrapper {
    display: block !important;

  }

}
</style>
