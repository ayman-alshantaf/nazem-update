<template>
  <section class="admission-requests">
    <v-main>
      <div class="container--fluid">
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
                        <div class="button-search">
                          <button style="width: 100%">بحث</button>
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
                <dialog-modal :name-input="'تحديد موعد مقابلة'" :title="'تحديد موعد مقابلة'">
                  <div class="form-modal">
                    <form>
                      <v-row>
                        <v-col cols="12">
                          <select-input :label="'اسم الطالب'" :name="'أختر من هنا اسم الطالب'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'وقت التسميع'" :name="'أدخل هنا وقت التسميع'" :items="items"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <date-customer :label="'أيام التسميع'" :name-placeholder="'أدخل هنا أيام التسميع'"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'كيفية التسميع'" :name="'أونلاين'" :items="['نعم','لا']"/>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                          <select-input :label="'موقع التسميع'" :name="'موقع التسميع'" :items="['نعم','لا']"/>
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
              <card-inter-view
                  :name="student.name"
                  :class-name="student.className"
                  :statusStudent="student.Admission"
                  :items-path-array="student.detailsAdmission"
                  :status="student.statusAdmission"
                  :idCardStudent="student.id"
                  :show-btn="false"
                  :show-edit-delete="true"
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
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import ImportFile from "@/components/import-file";
import DialogModal from "@/components/dialogModal";
import SelectInput from "@/components/select-input";
import {mapMutations, mapState} from "vuex";
import CardInterView from "@/components/cards/card-interView";
import DateCustomer from "@/components/date-customer";

export default {
  name: "admissionRequestsView",
  components: {
    DateCustomer,
    CardInterView,
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
    ...mapState(['allInterview'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('طلبات القبول')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.admission-requests {
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
          .button-search{
            width: 33%;
          }
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
