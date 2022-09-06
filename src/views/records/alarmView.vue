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
                              <select-input :label="'اسم الطالب'" :name="'أختر من هنا اسم الطالب'" :items="items"/>
                            </v-col>
                            <v-col cols="12">
                              <select-input :label="'اسم المسار'" :name="'اسم المسار'" :items="items"/>
                            </v-col>
                            <v-col cols="12">
                              <input-text :label-top="'اسم التحذير'" :placeholder="'اسم التحذير'"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <select-input :label="'تحويل التحذير لانذار'" :name="'نعم/لا'" :items="['نعم','لا']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <select-input :label="'استبعاد من البرنامج'" :name="'نعم/لا/ايقاف مؤقت'" :items="['ايقاف مؤقت','نعم','لا']"/>
                            </v-col>

                            <v-col cols="12" lg="6" md="6">
                              <select-input :label="'تحديد المده'" :name="'شهري'" :items="['شهري','اسبوعي','سنوي']"/>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                              <input-text :label-top="'عدد الانذرات'" :placeholder="'عدد الانذرات'"/>
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

  .v-btn:not(.v-btn--round).v-size--default {
    padding: 20px 12px !important;
    border-radius: 10px;

    i {
      margin-right: 1px !important;
    }
  }
  @media only screen and (min-width: 1140px) {
    .theme--light.v-tabs > .v-tabs-bar {
      min-height: 65px !important;
    }
  }


}
</style>
