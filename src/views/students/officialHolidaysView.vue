<template>
  <!--  start page dashboard-->
  <section class="official-holidays">
    <v-main>
      <div class="section-calendar">
        <template>
          <div class="text-center modal-custom">
            <v-dialog v-model="dialog" width="800">
              <v-card>
                <v-card-title class=" grey lighten-2 py-9" style="background-color: #385B72 ">
                  <div class="btn-close-modal" @click="dialog = false">
                    <i class="fa fa-close"></i>
                  </div>
                  إستثناء طالب من الاجازة
                </v-card-title>

                <v-card-text>
                  <v-row>
                    <v-col cols="12" style="position: relative">
                      <select-input :label="'أختر من هنا الطالب'" :name="'أختر من هنا الطالب'"/>
                    </v-col>
                    <v-col cols="12">
                      <btn-submit value-btn="إستثناء"/>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
        <div class="search-section">
          <form>
            <div class="search">
              <v-row>
                <v-col cols="12" style="padding-left: 4px;display: flex">
                  <search-input :placeholder="'بحث في الفروع'" :style="styleSearch"/>
                  <button>بحث</button>
                </v-col>
              </v-row>
            </div>

          </form>
        </div>
        <div class="select-calender-holiday">
          <select-input :name="'شهر'" :items="[ 'شهر','يوم','سنة']"/>
        </div>
        <v-row>
          <v-col cols="12">
            <div class="calender-right">
              <calender-student/>
            </div>
          </v-col>
        </v-row>

      </div>
    </v-main>
  </section>
  <!--  start page dashboard-->
</template>

<script>
import {mapMutations, mapState} from "vuex";
import CalenderStudent from "@/components/calenderStudent";
import SelectInput from "@/components/select-input";
import BtnSubmit from "@/components/btnSubmit";
import SearchInput from "@/components/search-input";


const gradients = [
  ['#42b3f4'],
]
export default {
  name: "officialHolidaysView",
  components: {SearchInput, BtnSubmit, SelectInput, CalenderStudent},
  data() {
    return {
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",
        color: "red !important"
      },
      events: [
        {
          name: 'Event 1',
          start: '2022-04-01',
          timed: false,
        },
        {
          name: 'Event 2',
          start: '2022-04-05',
          end: '2022-04-07',
        },
        {
          name: 'Event 3',
          start: '2022-04-09T08:00:00',
          end: '2022-04-09T10:00:00',
          timed: true,
        },
      ],
      iconTarget: require('@/assets/image/avatar/target (1).png'),
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [4, 5, 9, 5, 10, 7, 6, 9],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      styleIcon: {
        color: 'red'
      },
      dialog: false,
    }

  },
  computed: {
    ...mapState(['titlePage', 'dataChartCardOne', 'dataChartCardTwo', 'allStudents'])
  },
  methods: {
    ...mapMutations(['pageTitle']),
    onClick() {
      this.dialog = true;
    }
  },
  mounted() {
    this.$el.querySelector('td').addEventListener('click', this.onClick);
  },
  beforeMount() {
    this.pageTitle(' الاجازات الرسمية')
  }
}

</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.official-holidays {
  background-color: $background-main-page;
  padding: 50px 20px 0px 20px;

  .section-calendar {
    background-color: white;
    margin: 40px 0;
    padding: 20px 30px 50px 30px;
    border-radius: 15px;

    .event-date {
      display: flex;
      align-items: center;

      .date-select {
        width: 20%;
      }

      .selectAction {
        width: 20%;
        min-width: 20%;
      }
    }

    .calender-right {
      max-height: 700px;
      overflow: hidden;
    }

    .calender-left {
      padding-top: 43px;

    }

  }


  .search-section {
    width: 55%;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    .search {
      display: flex;
      align-items: center;
      padding: 12px 0;
      margin-bottom: 20px;

      button {
        border: 1px solid #00B5AD;
        padding: 10px 40px;
        font-size: 14px;
        border-radius: 10px;
        color: #00B5AD;
        margin-right: 10px;
      }

      ::placeholder {
        font-size: 12px;
        color: rgba(37, 38, 52, 0.63) !important;
        font-weight: normal;

      }
    }
  }

  .select-calender-holiday {
    position: absolute;
    left: 30px;
    top: 66px;
    z-index: 2;
    @media only screen and (max-width: 1150px) {
      position: unset;
      margin-bottom: 10px;
    }
  }
}
</style>
<style lang="scss">
.official-holidays {
  .section-calendar {
    .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
      border: none !important;
    }

    .theme--light.v-text-field > .v-input__control > .v-input__slot:focus:before {
      border: none !important;
    }

    ::placeholder {
      font-size: 17px !important;
      color: #00B5AD !important;
      font-weight: bold;
    }
  }

  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;
  }

  .my-event.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
  }

  .v-text-field .v-input__append-inner {
    padding-top: 8px !important;
  }

  .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
    background-color: #00B5AD !important;
    border-radius: 15px;
    overflow: hidden;

    .v-label {
      color: white !important;
      background-color: #00B5AD !important;
      font-size: 16px;
      font-weight: bold;
    }

    .v-icon.v-icon {
      color: white;
    }
  }

  .v-input__control {
    height: 43px !important;
  }
}
</style>

