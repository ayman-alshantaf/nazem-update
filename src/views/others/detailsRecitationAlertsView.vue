<template>
  <section class="recitation-alerts">
    <v-main>
      <div class="container--fluid">
        <v-row>
          <v-col cols="12" lg="5">
            <div class="name-student">
              <div class="image">
                <img :src="imageStudent" alt="">
              </div>
              <div class="name">
                <p>إبراهيم علي المالكي</p>
                <span>طالب في فصل مالك ابن انس</span>
              </div>
            </div>
            <div class="quran">
              <div class="image">
                <img :src="imageQuran">
              </div>
              <div class="notes">
                <span><i class="fa fa-circle " style="color: #D11A2A"></i>مقدار الخطأ</span>
                <span><i class="fa fa-circle" style="color: #95347B"></i>مقدار اللحن</span>
                <span><i class="fa fa-circle" style="color: #385B72"></i>مقدار التنبيه</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="7">
            <v-row>
              <v-col cols="6" lg="4" v-for="item in ourPrograms" :key="item">
                <div class="path">
                  <div class="image">
                    <img :src="item.icon">
                  </div>
                  <div class="text-path">
                    <p>{{ item.title }}</p>
                    <span>{{ item.subTitle }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="degree mt-12">
              <div class="all-degree">
                <span>الدرجة الكلية:100</span>
              </div>
              <div class="success-degree">
                <span>الدرجة النجاح:50</span>
              </div>
            </div>
            <div class="form mt-16">
              <v-row>
                <v-col cols="12">
                  <input-text :label-top="'عدد  الخطأ'" :placeholder="'مرات الخطأ'"/>
                </v-col>
                <v-col cols="12" lg="6">
                  <input-text :label-top="'عدد  اللحن'" :placeholder="'مقدار اللحن'"/>
                </v-col>
                <v-col cols="12" lg="6">
                  <input-text :label-top="'عدد التنبيه'" :placeholder="'مقدار التنبيه'"/>
                </v-col>
                <btn-submit style="width: 100%" class="mt-3 mb-4 px-6" >
                  تسميع
                </btn-submit>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </section>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import InputText from "@/components/input-text";
import BtnSubmit from "@/components/btnSubmit";


export default {
  name: "recitationAlertsView",
  components: {BtnSubmit, InputText},
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
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      imageQuran: require('@/assets/image/Image 5.png'),
    }
  },
  computed: {
    ...mapState(['ourPrograms'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('اجازات الطلاب')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.recitation-alerts {
  background-color: $background-main-page;
  padding: 40px 15px;

  .container--fluid {
    border-radius: 15px;
    background-color: white;
    padding:40px 20px;


    .name-student {
      display: flex;
      justify-content: right;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 10px;
      padding-right: 25px;

      .image {
        width: 18%;
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
    .quran{
      .image{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .notes{
        display: flex;
        justify-content: space-around;
        span{
          font-size: 14px;
          font-weight: bold;
          i{
            margin-left: 5px;
            font-size: 10px;
          }
        }
      }
    }
    .path {
      display: flex;

      .image {
        background-color: rgba(56, 91, 114, 0.2);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        min-width: 40px;
        max-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 45%;
        }
      }

      .text-path {
        margin-right: 8px;

        p {
          margin-bottom: 0;
          color: #0F1222;
          font-size: 14px;
          font-weight: bold;
        }

        span {
          color: #B4B4B4;
          font-size: 13px;
        }
      }
    }
  }


  .degree {
    display: flex;
    justify-content: space-around;
    color: #202020;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;

    span {
      font-size: 17px !important;
    }
  }
}

</style>
<style lang="scss">
.recitation-alerts {
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
    margin: 0 10px 0 16px;
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

  .input-text label{
    right: 18px !important;
  }
  .theme--light.v-input input{
    font-weight: normal !important;
    padding-right: 11px !important;
    color: #CBCACA !important;
  }
}
</style>
