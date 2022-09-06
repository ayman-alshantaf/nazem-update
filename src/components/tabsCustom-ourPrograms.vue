<template>
  <v-tabs color="section-top-tabs-ourPrograms deep-purple accent-4">
    <div class="section-top-tabs">
      <div class="main-right-section">
        <div class="right-section">
          <v-tab @click="showTestSection">الأختبارات</v-tab>
          <v-tab @click="showViewSection">العرض</v-tab>
        </div>
      </div>
      <div class="main-left-section">
        <div class="header-tabs">
          <div class="import-export-file">
            <div style="display: flex;align-items: center">
              <div v-if="showTest" class="search-ourPrograms pt-2" style="display: flex">
                <search-input :style="styleSearch"/>
                <btn-search style="width: 100px"/>
              </div>
              <div v-if="showView" class="select-way-ourPrograms mt-1">
                <select-option-customer :items="itemsSelected" :name-section="'طريقة التحديد'"/>
              </div>
              <div class="export-file">
                <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
              </div>
              <div class="import-file">
                <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
              </div>
            </div>
            <div v-if="showTest" class="add-new">
              <dialog-modal :name-input="'إضافة عرض جديد'" :title="'إضافة عرض جديد'">
                <div class="form-modal">
                  <form>
                    <v-row>
                      <v-col cols="12">
                        <select-input :label="'اسم الطالب'"  :name="'أختر من هنا اسم الطالب'" :items="items"/>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <select-input :label="'المسار'" :name="'أختر المسار'" :items="items"/>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <select-input :label="'الفصل'"  :name="'أختر  الفصل'" :items="items"/>
                      </v-col>
                      <v-col cols="12" lg="6" md="6">
                        <input-text  :label-top="'مقدار الفترة'" :placeholder="'مقدار الفترة'"/>
                      </v-col>
                      <v-col cols="12" lg="6" md="6">
                        <select-input :label="'نوعه'" :name="'عرض'" :items="['نعم','لا']"/>
                      </v-col>
                      <v-col cols="12" lg="6" md="6">
                        <date-customer  :label="'تاريخ الاختبار'" :name-placeholder="'أدخل هنا أيام التسميع'"/>
                      </v-col>

                      <v-col cols="12" lg="6" md="6">
                        <select-input :label="'وقت الاختبار'" :name="'وقت الاختبار'" :items="['شهري','اسبوعي','سنوي']"/>
                      </v-col>
                      <v-col cols="12">
                        <v-btn block color="#00B5AD" style="color: white;font-size: 15px;height: 45px">اضافة
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </div>
              </dialog-modal>
            </div>
            <div v-if="showView" class="add-new">
              <dialog-modal :name-input="'إضافة فترة جديد'" :title="'إضافة فترة جديد'">
                <div class="form-modal">
                  <form>
                    <v-row>
                      <v-col cols="12">
                        <select-input :label="'اسم الطالب'" :name="'أختر من هنا اسم الطالب'" :items="items"/>
                      </v-col>
                      <v-col cols="12" >
                        <select-input :label="'طريقة العرض'" :name="'طربقة العرض'" :items="items"/>
                      </v-col>
                      <v-col cols="12" lg="6" md="6">
                        <input-text :label-top="'من صفحة'" :placeholder="'أدخل رقم الصفحة'"/>
                      </v-col>
                      <v-col cols="12" lg="6" md="6">
                        <input-text :label-top="'الي صفحة'" :placeholder="'أدخل رقم الصفحة'"/>
                      </v-col>
                      <v-col cols="12">
                        <v-btn block color="#00B5AD" style="color: white;font-size: 15px;height: 45px">اضافة
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </div>
              </dialog-modal>
            </div>
          </div>
        </div>
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
import SearchInput from "@/components/search-input";
import BtnSearch from "@/components/btnSearch";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import DateCustomer from "@/components/date-customer";
import SelectOptionCustomer from "@/components/select-option-customer";
import InputText from "@/components/input-text";

export default {
  name: "tabsCustomOurPrograms",
  components: {
    InputText,
    SelectOptionCustomer, DateCustomer, SelectInput, DialogModal, ImportFile, BtnSearch, SearchInput},
  props: ['items'],
  data() {
    return {
      tab: null,
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",
      },
      itemsSelected: [
        {title: 'الاجزاء'},
        {title: 'السور'},
        {title: 'الاوجه'},
      ],
      showTest: true,
      showView: false
    }
  },
  methods: {
    showTestSection() {
      this.showTest = true
      this.showView = false
    },
    showViewSection() {
      this.showTest = false
      this.showView = true
    }
  }
}
</script>
<style lang="scss" scoped>
.section-top-tabs {

  .v-tab--active {
    color: black !important;
    font-weight: bold;
    font-size: 16px;
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

    .import-export-file {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      @media only screen and (max-width: 1140px) {
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
        .text-center {
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
}
</style>
<style lang="scss">
@media only screen and (max-width: 1140px) {
  .section-top-tabs {
    display: block !important;
  }
  .ourProgramsView .v-tabs-bar {
    min-height: 140px !important;
  }
  .ourProgramsView .section-top-tabs .main-right-section .right-section {
    min-width: unset !important;
  }

  .ourProgramsView .v-tabs-slider-wrapper {
    bottom: 60% !important;
  }
  .ourProgramsView .v-tab {
    padding-bottom: 10px !important;
  }

}
@media only screen and (max-width: 800px) {
  .ourProgramsView .v-tabs-bar {
    min-height: 160px !important;
  }
  .ourProgramsView .v-tabs-slider-wrapper {
    bottom: 70% !important;
  }

}


@media only screen and (max-width: 1000px) {
  .select-way-ourPrograms{
    display: none;
  }
 .search-ourPrograms {
    display: none !important;
  }
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #707070 !important;
  font-size: 17px;
}
</style>
