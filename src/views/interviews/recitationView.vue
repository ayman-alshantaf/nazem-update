<template>
  <section class="recitation-interview">
    <v-main>
      <div class="container--fluid">
        <!-- section video call-->
        <div class="section-video-call">
          <div class="image-video" :style="{ backgroundImage: 'url(' + imageVideoCall + ')' }">
            <div class="image2-video">
              <img :src="imageVideoCall2" alt="image">
            </div>
            <div class="btn-video">
              <div class="setting-video">
                <span> <img :src="iconBtnVideo.videoSetting" alt="image"></span>
                <span> <img :src="iconBtnVideo.chat" alt="image"></span>
                <span class="btn-close"> <img :src="iconBtnVideo.usersAdd" alt="image"></span>
              </div>
              <div class="close-video">
                <span> <img :src="iconBtnVideo.replaceScreen" alt="image"></span>
                <span> <img :src="iconBtnVideo.video" alt="image"></span>
                <span class="btn-close"> <img :src="iconBtnVideo.closeVideo" alt="image"></span>
                <span> <img :src="iconBtnVideo.mute" alt="image"></span>
                <span> <img :src="iconBtnVideo.fullScreen" alt="image" style="margin-top: 1px"></span>

              </div>
            </div>
          </div>
        </div>
        <div class="details-video">
          <v-row>
            <v-col cols="12" lg="5" md="5" >
              <div class="information-student">
                <div class="name-image">
                  <div class="image">
                    <img :src="imageStudent" alt="image student">
                  </div>
                  <div class="name">
                    <p> إبراهيم علي المالكي</p>
                    <span>طالب في فصل مالك ابن انس</span>
                  </div>
                </div>
                <div class="details-call-student">
                  <v-row>
                    <v-col cols="6" lg="4" md="6" v-for="details in recitationDetails" :key="details.id" style="padding-left: 5px;padding-right: 5px">
                      <div class="path">
                        <div class="image">
                          <img :src="details.icon" alt="image">
                        </div>
                        <div class="text-path">
                          <p> {{ details.title }}</p>
                          <span>{{ details.subTitle }}</span>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="7" md="7">
              <div class="form-recitation">
                <form>
                  <v-row>
                    <v-col cols="12" class="mt-4"> <input-text :label-top="'عدد  الخطأ'" :placeholder="'مرات الخطأ'"/></v-col>
                    <v-col cols="12" class="mt-2" lg="6"> <input-text :label-top="'عدد  اللحن'" :placeholder="'مقدار اللحن'"/></v-col>
                    <v-col cols="12" class="mt-2" lg="6"> <input-text :label-top="'عدد التنبيه'" :placeholder="'مقدار التنبيه'"/></v-col>
                    <v-btn block class="mt-3 pb-6 pt-5" style="color: white" color="#00B5AD">تسميع</v-btn>
                  </v-row>
                </form>
              </div>
            </v-col>

          </v-row>
        </div>
      </div>
    </v-main>
  </section>
</template>

<script>


import {mapMutations, mapState} from "vuex";
import InputText from "@/components/input-text";

export default {
  name: "interviewsView",
  components: {InputText},
  props: ['id'],
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      imageVideoCall: require('@/assets/image/istockphoto-1051420210-170667a.jpg'),
      imageVideoCall2: require('@/assets/image/Rectangle 3240.png'),
      iconBtnVideo: {
        videoSetting: require('@/assets/image/icon/ic-settings-48px 1.png'),
        chat: require('@/assets/image/icon/people_alt.png'),
        usersAdd: require('@/assets/image/icon/chat.png'),
        closeVideo: require('@/assets/image/icon/Vector3.png'),
        replaceScreen: require('@/assets/image/icon/Vector1.png'),
        mute: require('@/assets/image/icon/Vector4.png'),
        video: require('@/assets/image/icon/Vector2.png'),
        fullScreen: require('@/assets/image/icon/Vector.png'),
      },
    }
  },
  computed: {
    ...mapState(['recitationDetails'])
  },
  methods: {
    ...mapMutations(['pageTitle']),
    // currentFilterStudent(){
    //   let id = this.idStudent;
    //   let thisDoc = this;
    //   this.allInterview.forEach(function (e){
    //     if (e.id === id){
    //       thisDoc.currentStudent = e;
    //     }
    //   })
    // }
  },
  beforeMount() {
    this.pageTitle(' المقابلات ');
    // this.currentFilterStudent();
  },


}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.recitation-interview {
  background-color: $background-main-page;
  padding: 20px 15px 40px 15px;

  .container--fluid {
    border-radius: 15px;
    background-color: white;
    padding: 10px 15px 15px 15px;

    .image-video {
      width: 100%;
      height: 90vh;
      margin-bottom: 20px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      border-radius: 20px;
      @media only screen and (max-width: 800px) {
        height: 50vh;
      }
      img {
        width: 100%;
      }

      .image2-video {
        width: 110px;
        position: absolute;
        left: 5%;
        bottom: 5%;
        @media only screen and (max-width: 800px) {
          right: 2%;
          top: 2%;
        }
        img {
          width: 100%;
        }
      }

      .btn-video {
        position: absolute;
        display: flex;
        align-items: center;
        width: 100%;
        bottom: 2%;
        height: 50px;
        padding: 0 30px;
        @media only screen and (max-width: 800px) {
            justify-content: center;
        }
        .setting-video {
          display: flex;
          width: 35%;
          @media only screen and (max-width: 800px) {
            position: absolute;
            right: 0;
            margin-left: 50px;
            display: unset;
            bottom: 50%;
          }
          span {
            margin: 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 43px;
            height: 43px;
            border-radius: 50%;
            cursor: pointer;

            img {
              width: 55%;
            }
          }
        }

        .close-video {
          display: flex;
          align-items: center;

          span {
            margin: 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);
            cursor: pointer;

            img {
              width: 43%;
            }
          }

          .btn-close {
            background-color: red;
            border-radius: 10px;
            width: 48px;
            height: 48px;
            img {
              width: 55%;
            }
          }
        }

      }
    }

    .details-video {
      padding: 10px 0;
      .information-student {
        border-left: 2px solid #D7E4FF;
        padding-left: 50px;
        padding-right: 10px;
        @media only screen and (max-width: 960px) {
          border-left: none;
        }
        .name-image {
          display: flex;
          align-items: center;
          justify-content: right;
          margin-bottom: 15px;

          .image {
            width: 70px;

            img {
              width: 100%;
            }
          }

          .name {
            width: 100%;
            position: relative;
            margin-right: 20px;


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

        .details-call-student {
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
      }
      .form-recitation{
        padding:0 20px;
      }
    }


  }


}

</style>
