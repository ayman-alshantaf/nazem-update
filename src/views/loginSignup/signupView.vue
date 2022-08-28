<template>
  <section class="login-page">
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
              <div class="form-section">
                <h4>مرحبا بكم معنا في ناظم نسخة البرامج النوعية </h4>
                <h2>تسجيل الدخول </h2>
                <v-form>
                  <div class="group-field">
                    <label>اسم المستخدم</label>
                    <v-text-field placeholder="اكتب اسم المستخدم"></v-text-field>
                  </div>
                  <div class="group-field">
                    <label>البريد الالكتروني</label>
                    <v-text-field placeholder="أكتب البريد الالكتروني"></v-text-field>
                  </div>
                  <div class="group-field">
                    <label>كلمه المرور</label>
                    <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        placeholder="اكتب كلمه المرور"
                        required
                    ></v-text-field>
                  </div>
                  <div class="group-field">
                    <label>كلمه المرور</label>
                    <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        placeholder="اكتب كلمه المرور"
                        required
                    ></v-text-field>
                  </div>


                  <div class="submit-button">
                    <v-btn depressed color="#508ABA" class="text-white btn-custom">
                      تسجيل جديد
                    </v-btn>
                  </div>
                  <div class="create-account">
                    <span> لديك حساب</span>
                    <router-link to="/login" class="custom-link"> تسجيل الدخول</router-link>
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
  name: "loginView",
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


.login-page {
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
.login-page {
  input {
    background-color: #FAFBFC !important;
    padding-right: 20px !important;
    opacity: 0.8;
    color: #385B72 !important;
    font-size: 17px !important;
    border-radius: 6px !important;
    border: 1px solid #8692A6;
    width: 100%;
  }

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
}

</style>
