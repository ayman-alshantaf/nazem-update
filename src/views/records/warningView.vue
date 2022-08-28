<template>
  <section class="alarm-view interviews">
    <v-main>
      <div class="container--fluid">
        <!-- start section tabs interview with content tabs-->
        <div class="section-tabs-interview">
          <tabs-custom-interviews :items="items">

            <!-- start   section header top tabs-->
            <template v-slot:header-tabs>
              <div class="header-tabs">
                <div class="import-export-file">
                  <div class="way-option pt-2">
                    <select-option-customer :items="itemsOption"/>
                  </div>
                  <div class="export-file">
                    <import-file :icon="'fa fa-upload'" :name="'رفع ملف اكسل'"/>
                  </div>
                  <div class="import-file">
                    <import-file :icon="'fa fa-cloud-download'" :name="'تصدير الملف'"/>
                  </div>
                  <div class="add-new">
                    <dialog-modal :name-input="'إضافة إنذار جديد'" :title="'إضافة إنذار جديد'">
                      <div class="form-modal">
                        <form>
                          <v-row>
                            <v-col cols="12">
                              <label style="right: 4%">اسم الطالب</label>
                              <select-input :name="'أختر من هنا اسم الطالب'" :items="items"/>
                            </v-col>
                            <v-col cols="12">
                              <label style="right: 4%">اسم المسار</label>
                              <select-input :name="'اسم المسار'" :items="items"/>
                            </v-col>
                            <v-col cols="12">
                              <label style="right: 4%">اسم التحذير</label>
                              <input-text :placeholder="'اسم التحذير'"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label>تحويل التحذير لانذار</label>
                              <select-input :name="'نعم/لا'" :items="['نعم','لا']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label>استبعاد من البرنامج</label>
                              <select-input :name="'نعم/لا/ايقاف مؤقت'" :items="['ايقاف مؤقت','نعم','لا']"/>
                            </v-col>

                            <v-col cols="12" lg="6" md="6">
                              <label>تحديد المده</label>
                              <select-input :name="'شهري'" :items="['شهري','اسبوعي','سنوي']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <label>عدد الانذرات</label>
                              <input-text :placeholder="'عدد الانذرات'"/>
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
                  <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6"
                         style="padding: 10px 9px">
                    <card-inter-view
                        name-btn="تصفيير"
                        :name="student.name"
                        :class-name="student.className"
                        :statusStudent="student.alarm"
                        :status="student.alarmStatus"
                        :items-path-array="student.alarmStudent"
                        :idCardStudent="student.id"
                        :show-btn="false"
                        :show-btn-warning="true"
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
                    <card-inter-view
                        name-btn="تصفيير"
                        :name="student.name"
                        :class-name="student.className"
                        :items-path-array="student.alarmStudent"
                        :idCardStudent="student.id"
                        :show-btn="false"
                        :show-btn-warning="true"
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
import CardInterView from "@/components/cards/card-interView";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import InputText from "@/components/input-text";
import SelectOptionCustomer from "@/components/select-option-customer";


export default {
  name: "alarmView",
  components: {
    SelectOptionCustomer,
    InputText,
    SelectInput,
    DialogModal,
    ImportFile,
    CardInterView, TabsCustomInterviews, PaginationComponents
  },
  data() {
    return {
      items: [
        'المسارات والفصول', 'الفترات',
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

.alarm-view {
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
.alarm-view {
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

  .theme--light.v-tabs > .v-tabs-bar {
    min-height: 65px !important;
  }

}
</style>
