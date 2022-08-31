<template>
  <section class="detailsBranches-view">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">
        <div class="all-card">
          <v-row>
            <v-col  cols="12" md="6">
              <div class="title-section">
                <h4>مدير الفرع</h4>
              </div>
              <v-row>
                <v-col style="padding-left: 5px" cols="7">
                  <card-branches-details/>
                </v-col>
                <v-col cols="5">
                  <div style="padding-right: 2px;padding-left: 5px;border: 1px solid #D2D5E1;min-width:45%;height: 100%;border-radius: 5px;display: flex;align-items: center;justify-content: center" class="add-employee">
                      <div class="icon" style="text-align: center;color: #00B5AD">
                        <i class="fa fa-plus mb-3" style="font-size: 35px"></i>
                        <h2 style="font-size: 22px">إضافة موظف</h2>
                      </div>
                  </div>
                </v-col>

              </v-row>

            </v-col>
            <v-col  cols="12" md="6">
              <div class="title-section">
                <h4>مدير الفرع</h4>
              </div>
              <v-row>
                <v-col style="padding-left: 5px" cols="7">
                  <card-branches-details/>
                </v-col>
                <v-col cols="5">
                  <div style="padding-right: 2px;padding-left: 5px;border: 1px solid black;min-width:45%;height: 100%" class="add-employee">

                  </div>
                </v-col>

              </v-row>

            </v-col>
            <v-col  cols="12" md="6">
              <div class="title-section">
                <h4>مدير الفرع</h4>
              </div>
              <v-row>
                <v-col style="padding-left: 5px" cols="7">
                  <card-branches-details/>
                </v-col>
                <v-col cols="5">
                  <div style="padding-right: 2px;padding-left: 5px;border: 1px solid black;min-width:45%;height: 100%" class="add-employee">

                  </div>
                </v-col>

              </v-row>

            </v-col>
            <v-col  cols="12" md="6">
              <div class="title-section">
                <h4>مدير الفرع</h4>
              </div>
              <v-row>
                <v-col style="padding-left: 5px" cols="7">
                  <card-branches-details/>
                </v-col>
                <v-col cols="5">
                  <div style="padding-right: 2px;padding-left: 5px;border: 1px solid black;min-width:45%;height: 100%" class="add-employee">

                  </div>
                </v-col>

              </v-row>

            </v-col>

          </v-row>
          <v-row>
            <v-col v-for="student in allInterview" :key="student.id"  cols="12" lg="4" md="6">
              <card-branches
                  :name="'الفرع الاول'"
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
import {mapMutations, mapState} from "vuex";
import CardBranches from "@/components/cards/card-branches";
import CardBranchesDetails from "@/components/cards/card-branchesDetails";

export default {
  name: "detailsBranches",
  components: {
    CardBranchesDetails,
    CardBranches,
PaginationComponents
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
  computed:{
    ...mapState(['allInterview'])
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

.detailsBranches-view {
  background-color: $background-main-page;
  padding: 40px 15px;

  .top-bar-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media only screen and (max-width: 880px) {
      flex-direction: column;
    }

    .search-section {
      width: 55%;
      @media only screen and (max-width: 880px) {
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
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  display: none !important;
  border: none !important;
}

.detailsBranches-view {
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
  .col-12{
    position: relative;
  }
  .v-label {
    right: 0 !important;
    left: auto !important;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px ;
    background-color: white;
    position: absolute;
    top: 0;
    z-index: 50;
    right: 7%;
  }
  label.custom-label{
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
