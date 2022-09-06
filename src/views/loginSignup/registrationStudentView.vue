<template>
  <section class="registrationStudent">
    <v-main class="main-container">
      <v-row class="ma-0">
        <!-- right section image -->
        <v-col cols="12" md="6" lg="5" class="pa-0">
          <div class="overly">
            <img :src="images.overlay" alt="overlay">
          </div>
        </v-col>

        <!-- left section form -->
        <v-col cols="12 " md="6" lg="7" class="pa-0">
          <section class="left-section">
            <!--   content all section -->
            <div class="content-section">
              <!--  section header image logo-->
              <header-component/>

              <!--  section form-->
              <div class="form-section mt-5">
                <h4>مرحبا بكم معنا في ناظم نسخة البرامج النوعية </h4>
                <h2 class="mb-8">تسجيل طالب</h2>
                <v-form>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>رقم الهوية</label>
                        <v-text-field placeholder="رقم الهوية"></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>كلمه المرور</label>
                        <v-file-input
                            placeholder="ارفع هنا صورة الهوية"
                        ></v-file-input>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">

                        <label>الجنس</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="الجنس"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">

                        <label>دولة الاقامة</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="دولة الاقامة"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>رمز المنطقة</label>
                        <v-text-field placeholder="رمز المنطقة"></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>المؤهل العلمي</label>
                        <v-text-field placeholder="المؤهل العلمي"></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">

                        <label>الجنسية</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="الجنسية"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>مدينة الاقامة</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="مدينة الاقامة"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>الحي السكني</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="الحي السكني"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div class="group-field">
                        <label>الفرع</label>
                        <v-select
                            :items="['ذكر','انثى']"
                            placeholder="الفرع"
                        ></v-select>
                      </div>
                    </v-col>
                  </v-row>
                  <div class="submit-button">
                    <v-btn depressed color="#508ABA" class="text-white btn-custom">
                      تسجيل
                    </v-btn>
                  </div>
                  <div class="create-account">
                    <span>ليس لديك حساب</span>
                    <router-link to="/signup" class="custom-link"> تسجيل جديد</router-link>
                  </div>
                </v-form>
              </div>
              <!--  section copy right -->
              <copyrights-component/>
            </div>
          </section>
        </v-col>
      </v-row>
    </v-main>
  </section>
</template>

<script>
import HeaderComponent from "@/views/loginSignup/components/headerComponent";
import CopyrightsComponent from "@/views/loginSignup/components/copyrightsComponent";
import {mapMutations, mapState} from "vuex";

export default {
  name: "registrationStudentView",
  components: {CopyrightsComponent, HeaderComponent},
  data() {
    return {
      images: {
        overlay: require('@/assets/image/logo/Pateeren.png'),
      },
      show1: false,
      password: 'Password',
    }
  },
  computed: {
    ...mapState(['linkBarRight', 'showBarRight']),
  },
  methods: {
    ...mapMutations(['showRightBar']),
  },
  beforeMount() {
    this.showRightBar();
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";


.registrationStudent {
  @media (min-width: 1280px) {
    .col-lg-7 {
      flex: 0 0 54.3333333333%;
      max-width: 54.3333333333%;
    }
    .col-lg-5 {
      flex: 0 0 45.666667%;
      max-width: 45.666667%;
    }
  }

  .main-container {
    min-height: 100vh;
    background-image: url("@/assets/image/logo/Sign In.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;

    .overly {
      position: absolute;
      right: 0;
      width: 120px;
      opacity: 0.8;

      img {
        width: 100%;
      }
    }

    //start left section

    .left-section {
      padding: 20px 10PX;
      min-height: 100vh;
      background-color: white;
      border-radius: 0 20px 20px 0;
      width: 100%;

      .content-section {
        width: 70%;
        margin: 0 auto;
      }

      .logo-image {
        width: 100%;

        .image {
          width: 70%;

        }
      }

      .form-section {
        .col-12 {
          padding: 7px 10px !important;
        }

        h4 {
          font-size: 17px;
          line-height: 24px;
          margin-bottom: 20px;
          color: #707070;
          font-weight: 600;

        }

        h2 {
          font-size: 38px;
          line-height: 30px;
          margin-bottom: 30px;
          color: #000000;
        }

        label {
          font-size: 18px;
          color: #272727;
          margin-bottom: 10px;
          display: inline-block;
        }

        .remember-login {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .checkbox-input {

            input[type=checkbox] {
              margin-left: 15px;
              padding: 10px;
              transform: scale(1.2);
            }


          }
        }

        .password-remember {
          .custom-link {
            color: $linkColor;
            font-size: 16px;
          }
        }

        .submit-button {
          margin-top: 20px;
          margin-bottom: 20px;

          .btn-custom {
            width: 100%;
            min-height: 64px;
            font-size: 16px;
            color: white;
          }
        }

        .create-account {
          text-align: center;

          .custom-link {
            font-size: 16px !important;
            color: $linkColor;
          }

          span {
            font-size: 16px;
            margin-left: 5px;
            color: $linkColor;
          }
        }
      }
    }

    //end left section
  }
}

</style>

<!--custom style input vuetify-->
<style lang="scss">
.registrationStudent {

  ::placeholder {
    font-size: 15px;
  }


  .v-field__input {
    opacity: .8;
    border: none;
    min-height: 48px;
  }

  //.v-field__outline {
  //  display: none;
  //}
  .group-field {
    position: relative !important;
  }

  .v-input__icon {
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
  }

  .v-messages__message {
    font-size: 16px !important;
    margin-bottom: 10px;
  }

  .v-application--is-ltr .v-messages {
    text-align: right !important;
  }

  .login-page .v-messages__message {
    text-align: center !important;
  }

  .v-text-field {
    padding-top: 0;
    margin-top: 0;
  }

  .group-field {
    line-height: 1em;
  }

  .theme--light.v-input input, .theme--light.v-input textarea {
    padding: 20px;
  }

  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border: none !important;
  }

  .v-text-field > .v-input__control > .v-input__slot:after {
    border: none !important;
  }

  .form-section {
    .remember-login {
      .v-label {
        margin-right: 8px !important;
      }
    }
  }

  .v-input__control {
    border: 1px solid #8692A6;
    min-height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: #FAFBFC;
    text-align: right;
  }

  .v-text-field__details {
    display: none;
  }

  .v-input__slot {
    margin-bottom: 0px;
  }

  .v-label {
    left: auto !important;
    right: 10px !important;
    position: absolute;

  }

  ::placeholder {
    font-size: 15px !important;
  }

  .main-container .left-section .form-section label {
    font-size: 16px !important;
    margin-right: 5px;
  }

  .v-file-input__text {
    font-size: 15px !important;
    padding-right: 10px;
    color: #b0b0b0 !important;
  }

  .v-input__icon {
    transform: translateY(-50%) !important;
  }

  .v-input {
    position: relative !important;
  }

  .v-input__prepend-outer {
    display: none !important;
  }
}

</style>
