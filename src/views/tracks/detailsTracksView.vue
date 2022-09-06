<template>
  <section class="tracks-student">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding:30px 15px">
        <!--  content tabs 'card follow student'-->
        <div class="all-card">

          <v-row>
            <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6">
              <card-branches
                  :name="'الفترة الاولي'"
                  :items-path-array="student.detailsTracks"
                  :value-button="'تفاصيل الفترة'"
                  :path-link="'detailsTracksTow'"
                  :path-time-section="true"
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

export default {
  name: "detailsTracksView",
  components: {
    CardBranches,
PaginationComponents
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
    ...mapMutations(['pageTitle', 'showTopTitle', 'subTitleTop'])
  },
  beforeMount() {
    this.pageTitle('المسارات')
    this.subTitleTop(['الفترة الاول'])
    this.showTopTitle()
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
          .button-search {
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
