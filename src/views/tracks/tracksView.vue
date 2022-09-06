<template>
  <section class="tracks-student">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">
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
            <div style="display: flex">
              <div class="export-file">
                <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
              </div>
              <div class="import-file">
                <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
              </div>
            </div>
            <div class="add-new">
              <btn-submit style="height: 35px" :value-btn="'إضافة مسار جديد'" :route-link="'/addTracks'">
                <i class="fa fa-plus ml-3 mt-2"></i>
              </btn-submit>
            </div>
          </div>
        </div>
        <tabs-custom :items="items">
          <!--  content tabs 'card follow student'-->
          <div class="all-card mt-5">
            <v-row>
              <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6">
                <card-branches
                    :name="'المسار الاول'"
                    :items-path-array="student.tracks"
                    :value-button="'تفاصيل المسار'"
                    :path-link="'detailsTracks'"
                    :path-time-section="true"
                    :show-edit-delete="true"
                />
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
import SearchInput from "@/components/search-input";
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import ImportFile from "@/components/import-file";
import {mapMutations, mapState} from "vuex";
import CardBranches from "@/components/cards/card-branches";
import TabsCustom from "@/components/tabsCustom";
import BtnSubmit from "@/components/btnSubmit";
import BtnSearch from "@/components/btnSearch";

export default {
  name: "tracksView",
  components: {
    BtnSearch,
    BtnSubmit,
    TabsCustom,
    CardBranches,
    ImportFile, DateSelectModal, SearchInput, PaginationComponents
  },
  data() {
    return {
      items: [
        'الحفظ', 'اتقان', 'سماع', 'تكرار', 'ربط', 'مراجعه', 'تسميع', 'اختبار', 'تلاوة', 'سرد اسبوعي',
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
    this.pageTitle('المسارات')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.tracks-student {
  background-color: $background-main-page;
  padding: 40px 15px;

  .top-bar-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media only screen and (max-width: 1300px) {
      flex-direction: column;
    }

    .search-section {
      width: 55%;
      @media only screen and (max-width: 1300px) {
        width: 100%;
      }
      .date-top {
        display: flex;
        align-items: center;
        @media only screen and (max-width: 1300px) {
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
    @media only screen and (max-width: 1300px) {
      width: 100%;
      div {
        width: 50%;
        label {
          width: 100%;
          display: inline-block;
        }
        .btn-submit-component{
          width: 100%;
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
        padding: 0 5px;

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

.tracks-student {
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

  .add-new {
    .btn-submit-component .btn-submit {
      height: 38px !important;
      margin-top: 2px;
    }
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
