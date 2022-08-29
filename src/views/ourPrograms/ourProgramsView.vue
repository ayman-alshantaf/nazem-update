<template>
  <section class="ourProgramsView interviews">
    <v-main>
      <div class="container--fluid">
        <!-- start section tabs interview with content tabs-->
        <div class="section-tabs-interview">
          <tabs-custom-interviews :items="items">

            <!-- start   section header top tabs-->
            <template v-slot:header-tabs>
              <div class="header-tabs">
                <div class="import-export-file">
                  <div class="search pt-2" style="display: flex">
                    <search-input :style="styleSearch"/>
                    <btn-search style="width: 100px"/>
                  </div>
                  <div class="export-file">
                    <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
                  </div>
                  <div class="import-file">
                    <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
                  </div>
                  <div class="add-new">
                    <dialog-modal :name-input="'إضافة فترة جديد'" :title="'إضافة فترة جديد'">
                      <div class="form-modal">
                        <form>
                          <v-row>
                            <v-col cols="12">
                              <label style="right: 4%">اسم الطالب</label>
                              <select-input :name="'أختر من هنا اسم الطالب'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6">
                              <label style="right: 7%">اسم المسار</label>
                              <select-input :name="'أختر المسار'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6">
                              <label style="right: 7%">الفصل</label>
                              <select-input :name="'أختر  الفصل'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label style="right: 7%">مقدار الفترة</label>
                              <input-text :placeholder="'مقدار الفترة'"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label>نوعه</label>
                              <select-input :name="'عرض'" :items="['نعم','لا']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                                <date-customer :label="'تاريخ الاختبار'" :name-placeholder="'أدخل هنا أيام التسميع'"/>
                            </v-col>

                            <v-col cols="12" lg="6" md="6">
                              <label>وقت الاختبار</label>
                              <select-input :name="'وقت الاختبار'" :items="['شهري','اسبوعي','سنوي']"/>
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
            </template>
            <template v-slot:header-tabs2>
              <div class="header-tabs">
                <div class="import-export-file">
                  <div class="search pt-2" style="display: flex">
                    <search-input :style="styleSearch"/>
                    <btn-search style="width: 100px"/>
                  </div>
                  <div class="export-file">
                    <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
                  </div>
                  <div class="import-file">
                    <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
                  </div>
                  <div class="add-new">
                    <dialog-modal :name-input="'إضافة فترة جديد'" :title="'إضافة فترة جديد'">
                      <div class="form-modal">
                        <form>
                          <v-row>
                            <v-col cols="12">
                              <label style="right: 4%">اسم الطالب</label>
                              <select-input :name="'أختر من هنا اسم الطالب'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6">
                              <label style="right: 7%">اسم المسار</label>
                              <select-input :name="'أختر المسار'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6">
                              <label style="right: 7%">الفصل</label>
                              <select-input :name="'أختر  الفصل'" :items="items"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label style="right: 7%">مقدار الفترة</label>
                              <input-text :placeholder="'مقدار الفترة'"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label>نوعه</label>
                              <select-input :name="'عرض'" :items="['نعم','لا']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <date-customer :label="'تاريخ الاختبار'" :name-placeholder="'أدخل هنا أيام التسميع'"/>
                            </v-col>

                            <v-col cols="12" lg="6" md="6">
                              <label>وقت الاختبار</label>
                              <select-input :name="'وقت الاختبار'" :items="['شهري','اسبوعي','سنوي']"/>
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
            </template>
            <!-- end   section header top tabs-->

            <!-- start   section content 'card' top tabs-->
            <template v-slot:contentTabOne>
              <div class="all-card">
                <v-row>
                  <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6" style="padding: 10px 9px">
                    <card-inter-view name-btn="إعادة الاختبار" :name="student.name"
                        :class-name="student.className" :items-path-array="student.ourPrograms"
                        :idCardStudent="student.id" :show-btn="false" :show-btn-warning="true">
                      <div class="form-program py-5">
                        <v-row>
                          <v-col cols="12">
                            <input-text label-top="مقدار الخطأ" :placeholder="'مرات الخطأ'"/>
                          </v-col>
                          <v-col cols="12" lg="6" style="padding-left: 0">
                            <input-text label-top="مقدار اللحن" :placeholder="'مقدار اللحن'"/>
                          </v-col>
                          <v-col cols="12" lg="6" style="padding-right: 0">
                            <input-text label-top="مقدار التنبيه" :placeholder="'مقدار التنبيه'"/>
                          </v-col>
                        </v-row>
                        <div class="degree">
                          <div class="all-degree">
                            <span>الدرجة الكلية:100</span>
                          </div>
                          <div class="success-degree">
                            <span>الدرجة النجاح:50</span>
                          </div>
                        </div>
                      </div>
                    </card-inter-view>
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
                    <card-test/>

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
import CardInterView from "@/components/cards/card-interView";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import InputText from "@/components/input-text";
import SearchInput from "@/components/search-input";
import BtnSearch from "@/components/btnSearch";
import CardTest from "@/components/cards/cardTest";
import DateCustomer from "@/components/date-customer";


export default {
  name: "ourPrograms",
  components: {
    DateCustomer,
    CardTest,
    BtnSearch,
    SearchInput,
    InputText,
    SelectInput,
    DialogModal,
    ImportFile,
    CardInterView, TabsCustomInterviews, PaginationComponents
  },
  data() {
    return {
      items: [
        'الأختبارات', 'العرض',
      ],
      itemsOption: [
        {title: 'الفصل '},
        {title: 'المسار '},

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

.ourProgramsView {
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

    .import-export-file {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      div {
        margin: 0 5px;
      }
    }
  }


}

</style>
<style lang="scss">
.ourProgramsView {


  .theme--light.v-input input, .theme--light.v-input textarea {
    font-size: 14px !important;
    font-weight: bold !important;
    color: #707070 !important;
    margin-top: 5px;
  }

  .form-program {
    border-bottom:1px solid rgba(143, 146, 161, 0.26);
    .input-text label {
      right: 5% !important;
    }

    .theme--light.v-input input, .theme--light.v-input textarea {
      font-size: 13px !important;
      padding-right: 10px !important;
      color: #CBCACA !important;
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

  .theme--light.v-tabs > .v-tabs-bar {
    min-height: 65px !important;
  }

  .main-right-section {
    min-width: 28% !important;
  }
  .edit-delete{
    .v-btn:not(.v-btn--round).v-size--default {
      padding: 25px 12px !important;
      border-radius: 10px;

      i {
        margin-right: 10px !important;
      }
    }
  }
}
.btn-done{
  .v-btn:not(.v-btn--round).v-size--default{
    min-height: 45px !important;
  }
}


</style>
