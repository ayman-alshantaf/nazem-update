<template>
<!--  start page dashboard-->
  <section class="dashboard">
    <v-main>
      <!--section counter animation number-->
      <div class="section-number">
        <v-row >
          <v-col  v-for="card in dataChartCardOne" :key="card.id" style="padding: 5px">
            <card-number  :title="card.title" :number="card.number" :percent="card.percent">
              <percent-chart :gradients-value="card.gradients" />
            </card-number>
          </v-col>
        </v-row>
      </div>
      <!--section section-calendar-->
      <div class="section-calendar">
        <div class="event-date">
          <div class="selectAction">
            <v-select
                class="dashboard-select"
                :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                placeholder="الاجازات القادمة"
                dense
            ></v-select>
          </div>
          <div class="date-select">
            <date-select-modal/>
          </div>
        </div>
        <v-row>
          <v-col cols="12" lg="9">
            <div class="calender-right">
              <calender-dashboard/>
            </div>
          </v-col>
          <v-col cols="12" lg="3">
            <div class="calender-left">
              <date-pickers/>
            </div>
          </v-col>
        </v-row>
      </div>
      <!--section counter animation number tow-->
      <div class="card-section-number">
        <v-row>
          <v-col cols="12" lg="3" sm="6" v-for="card in dataChartCardTwo" :key="card.id">
            <card-number :show-div="true" :view-show-chart="false" :title="card.title" :number="card.number" :percent="card.percent"/>
          </v-col>
        </v-row>
      </div>
      <!--section statistics-->
      <div class="section-statistics">
        <v-row>
          <v-col cols="12" lg="4" md="4">
            <div class="all-Progress">
              <div class="progress">
                <div class="number">
                  <h5>68%</h5>
                  <small>من الحفظ تم اكمالها في الموعد</small>
                </div>
                <div class="icon-progress">
                  <v-progress-circular
                      :value="80"
                      color="#1D7AB4"
                      :size="70">
                    <img :src="iconTarget" alt="target" style="width: 30px;margin-left: 5px;margin-bottom: 5px">
                  </v-progress-circular>
                </div>

              </div>
              <div class="progress">
                <div class="number">
                  <h5>76%</h5>
                  <small>من السرد ذات تفاعل مع العميل</small>
                </div>
                <div class="icon-progress">
                  <v-progress-circular
                      :value="80"
                      color="#1DB49D"
                      :size="70">
                    <i class="fa fa-file"></i>
                  </v-progress-circular>
                </div>
              </div>
              <div class=""></div>
            </div>
            <div class="profit-stats">
              <small>الارباح</small>
              <div class="chart-right">
                <v-sparkline
                    :value="value"
                    :gradient="gradient"
                    :smooth="radius || false"
                    :padding="padding"
                    :line-width="width"
                    :stroke-linecap="lineCap"
                    :gradient-direction="gradientDirection"
                    :fill="fill"
                    :type="type"
                    :auto-line-width="autoLineWidth"
                    auto-draw
                ></v-sparkline>
              </div>
              <div class="content-stats">
                <div class="percent-stats">
                  <small><i class="fa fa-arrow-down"></i> 1.5% </small>
                  <p>مقارنة ب 27 ريال سعودي الشهر السابق</p>
                </div>
                <div class="cost-stats">
                  <h5>10,254</h5>
                  <h6> ريال سعودي </h6>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="8" md="8">
            <div class="chart-left">
              <div class="container-title">
                <h6>حفظ  الطلاب</h6>
                <div class="date-chart">
                  <span>2022<i class="fa fa-circle" aria-hidden="true"></i></span>
                  <span>2021<i class="fa fa-circle" aria-hidden="true"></i></span>
                </div>
              </div>
              <line-chart :data="{
                '2017-01-01': 11,
                '2017-06-02': 6,
                '2017-09-02': 8,
                '2017-05-02':15,
                '2017-03-02': 3,
                '2017-04-02': 6,
              }"></line-chart>
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
import CalenderDashboard from "@/components/dashboard/calenderDashboard";
import DateSelectModal from "@/components/dashboard/dateSelectModal";
import DatePickers from "@/components/dashboard/datePickers";
import CardNumber from "@/components/dashboard/cardNumber";
import PercentChart from "@/components/dashboard/percentChart";

const gradients = [
  ['#42b3f4'],
]
export default {
  name: "dashboardView",
  components: { PercentChart, CardNumber, DatePickers, DateSelectModal, CalenderDashboard},
  data() {
    return {
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
      styleIcon:{
        color:'red'
      }
    }

  },
  computed: {
    ...mapState(['titlePage', 'dataChartCardOne', 'dataChartCardTwo' , 'allStudents'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle(' الرئيسية')
  }
}

</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.dashboard {
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
      max-height: 400px;
      overflow: hidden;
    }

    .calender-left {
      padding-top: 43px;

    }

  }

  .section-statistics {
    padding: 20px 0;
    margin: 20px 0;
    min-height: 500px;
    .v-progress-circular {
      margin: 1rem;
    }

    .all-Progress {
      background-color: white;
      padding: 0 20px;
      border-radius: 10px;

      .progress {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        @media only screen and (max-width: 960px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          h5 {
            text-align: center !important;
            font-size: 24px;
          }
        }

        &:first-of-type {
          border-bottom: 2px solid #F1F1F5;
          border-radius: 5px;
        }


        .number {
          padding: 0px 10px 0px 20px;

          h5 {
            text-align: left;
            font-size: 24px;
          }

          small {
            font-size: 14px;
          }
        }

      }


    }

    .profit-stats {
      margin: 10px 0;
      padding: 20px;
      background-color: white;
      border-radius: 10px;

      small {
        color: #091B3D;
      }
    }
    .content-stats{
      display: flex;
      .percent-stats{
        padding-left: 10px;
        width: 60%;
        small{
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          display: block;
          color: #FC5A5A;
          i{
            margin-left: 8px;
          }
        }
        p{
          font-size: 15px;
          color:#777777 ;
        }
      }
      .cost-stats{
        text-align: center;
        h5{
          font-size: 27px;
          color: #171725;
        }
        h6{
          font-size: 14px;
          margin-top: 5px;
          color: #171725;
        }

      }
    }
    .chart-left{
      padding:10px 30px 30px 30px ;
      background-color: white;
      height: 100%;
      .container-title{
        margin-top: 20px;
        margin-bottom: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h6{
          font-size: 18px;
          font-weight: 500;
        }

        .date-chart{
          @media only screen and (max-width: 960px) {
            display: none;
          }
          width: 18%;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;

          span{
           font-size:16px ;
            i{
              font-size: 13px;
              margin-right: 10px;
              color: #1D7AB4;

            }


          }
        }
      }
    }
  }
}

</style>
<style lang="scss">
//review code

//.section-calendar{
//  div.v-menu__content {
//    left: 625px !important;
//    background-color: red !important;
//  }
//}
.dashboard {
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
}
</style>

