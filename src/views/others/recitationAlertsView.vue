<template>
  <section class="recitation-alerts">
    <v-main>
      <div class="container--fluid" style="">
        <div class="all-card">
          <div class="top-bar-search">
            <div class="search-section">
              <form>
                <div class="search">
                  <v-row>
                    <v-col cols="12" lg="8" style="padding-left: 4px">
                      <search-input :style="styleSearch"/>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <div class="main-container-date">
                        <button>بحث</button>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </div>
            <div class="import-export-file">
              <select-option-customer class="mt-2"/>
              <div class="export-file">
                <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
              </div>
              <div class="import-file">
                <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
              </div>
              <div class="add-new">
                <dialog-modal :name-input="' إضافة تسميع جديد'" :title="'إضافة تسميع جديد'">
                  <div class="form-modal">
                    <form>
                      <v-row>
                        <v-col cols="12">
                          <select-input :label="' اسم المقرء'" :name="'أختر من هنا الموظف'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <input-text :label-top="'وقت التسميع'" :placeholder="'أدخل هنا وقت التسميع'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <date-customer :label="'أيام التسميع'" :name-placeholder="'أدخل هنا أيام التسميع'"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'كيفية التسميع'" :name="'أونلاين'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'موقع التسميع '" :name="'موقع التسميع'" :items="['نعم','لا']"/>
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
          <v-row>
            <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6">
              <card-inter-view :name="student.name"
                               :class-name="student.className"
                               :statusStudent="student.Admission"
                               :status="student.statusAdmission"
                               :items-path-array="student.ourPrograms"
                               :idCardStudent="student.id"
                                :show-btn="true"
                               :show-edit-delete="false"
                               :show-line="false"
                               :rout-link="'detailsRecitationAlerts'"
              >
                <div class="degree">
                  <div class="all-degree">
                    <span>الدرجة الكلية:100</span>
                  </div>
                  <div class="success-degree">
                    <span>الدرجة النجاح:50</span>
                  </div>
                </div>
              </card-inter-view>
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
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import {mapMutations, mapState} from "vuex";
import DateCustomer from "@/components/date-customer";
import BtnSubmit from "@/components/btnSubmit";
import SelectOptionCustomer from "@/components/select-option-customer";
import CardInterView from "@/components/cards/card-interView";
import InputText from "@/components/input-text";

export default {
  name: "recitationAlertsView",
  components: {
    InputText,
    CardInterView,
    SelectOptionCustomer,
    BtnSubmit,
    DateCustomer,
    SelectInput,
    DialogModal, ImportFile,  SearchInput, PaginationComponents
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
    ...mapState(['allInterview'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('اجازات الطلاب')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.recitation-alerts {
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
    @media only screen and (max-width: 880px) {
      flex-direction: column;
    }

    .search-section {
      width: 35%;
      @media only screen and (max-width: 880px) {
        width: 100%;
      }

      .search {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 12px 0;
        .main-container-date {
          display: flex;
          align-items: center
        }
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

    div {
      margin: 0 5px;
    }
  }
  .degree {
    display: flex;
    justify-content: space-between;
    color: #202020;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;

    span {
      font-size: 17px !important;
    }
  }
}

</style>
<style lang="scss">
.recitation-alerts {
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
    margin: 0 10px 0 16px;
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


}
</style>
