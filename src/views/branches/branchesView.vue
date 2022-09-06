<template>
  <section class="branches-view">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">
        <div class="all-card">
          <div class="top-bar-search">
            <div class="search-section">
              <form>
                <div class="search">
                  <v-row>
                    <v-col cols="8"  style="padding-left: 4px">
                      <search-input :style="styleSearch">
                      </search-input>
                    </v-col>
                    <v-col cols="4" >
                      <div style="display: flex;align-items: center">
                        <button>بحث</button>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </div>
            <div class="import-export-file">
              <div style="display: flex">
                <div class="export-file">
                  <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
                </div>
                <div class="import-file">
                  <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
                </div>
              </div>
              <div class="add-new">
                <dialog-modal :name-input="'اضافة فرع جديد'" :title="'اضافة فرع جديد'">
                  <div class="form-modal">
                    <form>
                      <v-row>
                        <v-col cols="12">
                          <select-input :label="'اسم الفرع'" :name="'اسم الفرع'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'مكان الفرع'" :name="'أدخل هنا مكان الفرع'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <date-customer :label="'أيام دوام الفرع'" :name-placeholder="'أدخل هنا أيام دوام الفرع'"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'التواصل مع الفرع'" :name="'أونلاين'" :items="['نعم','لا']"/>

                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'موقع الفرع'" :name="'موقع الفرع'" :items="['نعم','لا']"/>
                        </v-col>

                        <v-col cols="12">
                          <v-btn block color="#00B5AD" style="color: white;font-size: 15px;height: 45px">اضافة</v-btn>
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
              <card-branches
                  :name="'الفرع الاول'"
                  :items-path-array="student.detailsAdmission"
                  :show-btn="true"
                  :show-edit-delete="true"
                  :path-link="'detailsBranches'"
              />
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
import CardBranches from "@/components/cards/card-branches";

export default {
  name: "branchesView",
  components: {
    CardBranches,
    DateCustomer,
    SelectInput,
    DialogModal, ImportFile, SearchInput, PaginationComponents
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
    this.pageTitle('الفروع')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.branches-view {
  background-color: $background-main-page;
  padding: 40px 15px;

  .top-bar-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media only screen and (max-width: 1250px) {
      flex-direction: column;
    }

    .search-section {
      width: 55%;
      @media only screen and (max-width: 1250px) {
        width: 100%;
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
          @media only screen and (max-width: 1250px) {
            width: 100%;
          }
        }

      }
    }

  }

  .import-export-file {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    @media only screen and (max-width: 1250px) {
      width: 100%;
      div {
        width: 50%;
        label {
          width: 100%;
          display: inline-block;
        }
      }
      .export-file, .import-file {
        margin-top: 8px;
        text-align: center;
      }
      .text-center{
        width: 100%;
      }
    }
    @media only screen and (max-width: 800px) {
      width: 100%;
      display: unset;
      div {
        width: 100%;
      }
    }
    div {
      margin: 0 5px;
      @media only screen and (max-width: 800px) {
        margin: 0 0px;
      }
    }
  }

}

</style>
<style lang="scss">
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  display: none !important;
  border: none !important;
}

.branches-view {
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
    margin: 0px 10px 0px 16px;
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

.form-modal {
  padding: 15px 0;

  .col-12 {
    position: relative;
  }

  .v-label {
    right: 0 !important;
    left: auto !important;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px;
    background-color: white;
    position: absolute;
    top: 0;
    z-index: 50;
    right: 7%;
  }

  label.custom-label {
    font-size: 14px !important;
  }

  .v-input__slot {
    margin-bottom: 0 !important;
  }

  .custom-input {
    .v-text-field {
      border: 1px solid rgba(21, 57, 135, 0.28);
      border-radius: 5px;
    }

    .v-text-field__details {
      display: none;
    }

    label {
      padding-right: 10px;
      margin-bottom: 10px;
    }

    .v-text-field .v-label {
      top: 3px !important;
    }
  }

}

</style>
