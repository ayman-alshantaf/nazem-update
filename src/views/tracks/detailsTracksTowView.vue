<template>
  <section class="tracks-tow-student">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">

        <!--  content tabs 'card follow student'-->
        <div class="all-card">
          <div class="top-bar-search">
            <div class="search-section">
              <form>
                <div class="search">
                  <v-row>
                    <v-col cols="8"  style="padding-left: 0px">
                      <search-input :style="styleSearch">
                      </search-input>
                    </v-col>
                    <v-col cols="4">
                      <div style="display: flex;align-items: center">
                        <button>بحث</button>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </div>
          </div>
          <v-row>
            <v-col v-for="student in allInterview" :key="student.id" cols="12" lg="4" md="6">
              <card-form-tracks
                :name="student.name"
                :class-name="student.className"
                :status="student.executedStatus"
                :status-student="student.executed"
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
import {mapMutations, mapState} from "vuex";
import CardFormTracks from "@/components/cards/card-formTracks";

export default {
  name: "detailsTracksTowView",
  components: {
    CardFormTracks,
     SearchInput, PaginationComponents
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
    ...mapMutations(['pageTitle','showTopTitle', 'subTitleTop'])
  },
  beforeMount() {
    this.pageTitle('المسارات')
    this.subTitleTop(['المسار الاول' , 'الفترة الاولي'])
    this.showTopTitle()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.tracks-tow-student {
  background-color: $background-main-page;
  padding: 40px 15px;
  .name-student {
    display: flex;
    justify-content: right;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    .image {
      width: 70px;
      padding-top: 6px;

      img {
        width: 100%;
      }
    }

    .name {
      width: 100%;
      position: relative;
      margin-right: 10px;


      p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 0;
      }

      span {
        font-size: 13px;
        color: #B4B4B4;
      }
    }
  }

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


</style>
