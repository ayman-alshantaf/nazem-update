<template>
  <!--start page permission-student-->
  <section class="permission-student">
    <v-main>
      <div class="container--fluid">
        <!--section all card with top tabs -->
        <div class="all-card">
          <!-- top bar (search section and import file) -->
          <div class="top-bar-search">
            <div class="search-section">
              <form>
                <div class="search">
                  <v-row>
                    <v-col cols="12" lg="5" style="padding-left: 4px">
                      <search-input :style="styleSearch"></search-input>
                    </v-col>
                    <v-col cols="12" lg="7">
                      <div class="date-top">
                        <div class="container-date">
                          <date-select-modal/>
                        </div>
                        <div class="container-date">
                          <date-select-modal/>
                        </div>
                        <div class="input-search">
                          <btn-search/>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </div>
            <div class="import-export-file">
              <div class="export-file">
                <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
              </div>
              <div class="import-file">
                <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
              </div>
              <div class="add-new">
                <dialog-modal :name-input="'إضافة اذن'" :title="'إضافة اذن جديد'">
                  <div class="form-modal">
                    <form>
                      <v-row>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'أختر الطالب'" :name="'أختر من هنا الطالب'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input label="المسار" :name="'أختر المسار'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="' فترة الاجازة'" :name="'أختر  فترة الاجازة'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'نوع الاجازة'" :name="'اختر نوع الاجازة'" :items="['نعم','لا']"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <date-customer :label="'اختر بداية الاجازة'" :name-placeholder="'اختر بداية الاجازة'"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <date-customer :label="'اختر نهاية الاجازة'" :name-placeholder="'اختر نهاية الاجازة'"/>
                        </v-col>
                        <v-col cols="12">
                          <text-area :value-label="'اضافة الملاحظات'"/>
                        </v-col>
                        <v-col cols="12">
                          <btn-submit :value-btn="'اضافة'"/>
                        </v-col>
                      </v-row>
                    </form>
                  </div>
                </dialog-modal>
              </div>
            </div>
          </div>
          <!--the cads -->
          <v-row>
            <v-col v-for="student in allStudents" :key="student.id" cols="12" lg="4" md="6">
              <card-follow
                  :name="student.name"
                  :class-name="student.className"
                  :saveStudent="student.saveStudent"
                  :description="student.description"
                  :score="student.score"
                  :passing-score="student.passingScore"
                  :status="student.status"
                  :show-vacations-student="true"
                  :show-follow-student="false"/>
            </v-col>
          </v-row>
        </div>
        <pagination-components/>
      </div>
    </v-main>
  </section>
</template>

<script>
import PaginationComponents from "@/components/dashboard/paginationComponents";
import SearchInput from "@/components/search-input";
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import {mapMutations, mapState} from "vuex";
import CardFollow from "@/components/cards/cardFollow";
import DateCustomer from "@/components/date-customer";
import TextArea from "@/components/textArea";
import BtnSubmit from "@/components/btnSubmit";
import BtnSearch from "@/components/btnSearch";

export default {
  name: "permissionsView",
  components: {
    BtnSearch,
    BtnSubmit,
    TextArea,
    DateCustomer,
    CardFollow,
    SelectInput,
    DialogModal, ImportFile, DateSelectModal, SearchInput, PaginationComponents
  },
  data() {
    return {
      items: [
        'ربط ', 'مراجعه', 'تكرار',
      ],
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",

      },
    }
  },
  computed: {
    ...mapState(['allStudents'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('الاذونات')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.permission-student {
  background-color: $background-main-page;
  padding: 40px 15px;

  .container--fluid {
    border-radius: 15px;
    background-color: white;
    padding: 15px
  }

  .top-bar-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

    .search-section {
      width: 55%;
      @media only screen and (max-width: 1200px) {
        width: 100%;
      }

      .date-top {
        display: flex;
        align-items: center;
        @media only screen and (max-width: 1200px) {
          .container-date {
            width: 33%;

            .theme--light.v-input {
              width: 100%;
            }
          }
          .input-search {
            width: 33%;
          }
        }
      }

      .search {
        display: flex;
        align-items: center;
        padding: 12px 0;

        button {
          border: 1px solid #00B5AD;
          padding: 10px 40px;
          font-size: 14px;
          border-radius: 10px;
          color: #00B5AD;
          margin-right: 10px;
        }

      }
    }

  }

  .import-export-file {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 1200px) {
      justify-content: space-around;
      width: 100%;
      div {
        width: 33%;

        label {
          width: 100%;
          display: inline-block;
        }
      }
      .add-new {
        width: 35%;
      }
      .export-file, .import-file {
        margin-top: 8px;
        text-align: center;
      }
      .text-center {
        width: 100%;
      }
    }

    div {
      margin: 0 5px;
    }
  }

}

</style>

