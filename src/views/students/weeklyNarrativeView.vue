<template>
  <section class="weekly-narrative">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">
        <tabs-custom :items="items">
          <div class="all-card">
            <div class="top-bar-search">
              <div class="search-section">
                <form>
                  <div class="search">
                    <v-row>
                      <v-col cols="12" lg="5" style="padding-left: 4px">
                        <search-input :style="styleSearch">
                        </search-input>
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
                  <dialog-modal :name-input="'إضافة سرد'" :title="'إضافة سرد اسبوعي'">
                    <div class="form-modal">
                      <form>
                        <v-row>
                          <v-col cols="12" lg="6" md="6">
                            <label class="custom-label">أختر الفترة</label>
                            <select-input :name="'أختر الفترة'" :items="items"/>
                          </v-col>
                          <v-col cols="12" lg="6" md="6">
                            <date-customer :label="'أختر يوم السرد'" :name-placeholder="'أختر يوم السرد'"/>
                          </v-col>
                          <v-col cols="12" lg="6" md="6">
                            <label class="custom-label"> أختر من بنود السرد</label>
                            <select-input :name="'أختر من بنود السرد'" :items="items"/>
                          </v-col>
                          <v-col cols="12" lg="6" md="6">
                            <label class="custom-label">اتمام السرد</label>
                            <select-input :name="'نعم'" :items="['نعم','لا']"/>

                          </v-col>
                          <v-col cols="12" class="custom-input">
                            <label style="right: 4%">مقدار البند</label>
                            <input-text :placeholder="'مقدار البند'"/>
                          </v-col>
                          <v-col cols="12" lg="6" md="6" class="custom-input">
                            <label style="right: 7%">من الوجه</label>
                            <input-text :placeholder="'من الوجه'"/>
                          </v-col>
                          <v-col cols="12" lg="6" md="6" class="custom-input">
                            <label style="right: 7%">الى الوجه</label>
                            <input-text :placeholder="'الى الوجه'"/>
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
              <v-col v-for="n in 8" :key="n" cols="12" lg="4" md="6">
                <card-narrative/>
              </v-col>
            </v-row>
          </div>
        </tabs-custom>
        <pagination-components/>
      </div>
    </v-main>
  </section>
</template>

<script>
import PaginationComponents from "@/components/dashboard/paginationComponents";
import TabsCustom from "@/components/tabsCustom";
import SearchInput from "@/components/search-input";
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import CardNarrative from "@/components/cards/cardNarrative";
import SelectInput from "@/components/select-input";
import {mapMutations} from "vuex";
import BtnSearch from "@/components/btnSearch";
import DateCustomer from "@/components/date-customer";
import InputText from "@/components/input-text";

export default {
  name: "weeklyNarrativeView",
  components: {
    InputText,
    DateCustomer,
    BtnSearch,
    SelectInput,
    CardNarrative,
    DialogModal, ImportFile, DateSelectModal, SearchInput, TabsCustom, PaginationComponents
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

  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('السرد الاسبوعي')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.weekly-narrative {
  background-color: $background-main-page;
  padding: 40px 15px;

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
          .input-search{
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

    div {
      margin: 0 5px;
    }
  }

}

</style>
<style lang="scss">
.weekly-narrative {
  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    display: none !important;
    border: none !important;
  }

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

      input {
        font-size: 14px !important;
      }
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
        padding-right: 0px !important;
        margin-bottom: 0px !important;
      }

      .v-text-field .v-label {
        top: 3px !important;
      }
    }

  }

}

//.form-modal {
//  .custom-input {
//    .v-text-field {
//      border: 1px solid rgba(21, 57, 135, 0.28);
//      border-radius: 5px;
//    }
//
//    .v-text-field__details {
//      display: none;
//    }
//
//    label {
//      padding-right: 0px !important;
//      margin-bottom: 0px !important;
//    }
//
//    .v-text-field .v-label {
//      top: 3px !important;
//    }
//  }
//
//  .v-input__slot {
//    margin-bottom: 0 !important;
//
//    input {
//      font-size: 14px !important;
//      padding-right: 9px;
//    }
//  }
//}


</style>
