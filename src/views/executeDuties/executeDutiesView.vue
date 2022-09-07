<template>
  <section class="executeDutiesView">
    <v-main>
      <div class="container--fluid">
        <div class="read-lesson">
          <h2 style="font-size: 25px" class="mb-4">قراءة الشرح</h2>
          <div class="image-lesson">
            <span class="number-page">القراءة من صفحة (13) ال(22)</span>
            <div class="image">
              <img :src="imageLesson">
            </div>
            <div class="question-lesson">
              <span style="font-size: 19px">هل تمت قراءة الشـــــــــــــــــرح المـــــــــقرر؟</span>
              <div class="btn-question">
                <btn-submit color-value="#00B5AD" value-btn="نعم"/>
                <btn-submit class="no-btn" color-value="transparent" value-btn="لا"/>
              </div>
            </div>
          </div>
          <h2 style="font-size: 25px" class="mt-5 mb-3">الأسئلة </h2>
        </div>
        <div class="container-question">
          <div class="number-question">
            <div class="right-section">
              <div class="icon">
                <img :src="imageIcon.squareIcon" alt="image icon">
              </div>
              <h3> السؤال الأول</h3>
            </div>
            <div class="left-section">
              <div class="degree">
                <h3>درجة السؤال</h3>
                <input type="text" placeholder="50" class="number ml-4">
                <span @click="hideQuestion()" class="close-icon"><i class="fa fa-times"></i></span>
              </div>
            </div>
          </div>
          <div class="content-question">
            <div class="question">
              <h5>عبدالله بن عباس.. لماذا لقب بـ حبر الأمة وترجمان القرآن؟</h5>
              <span class="type-question">سؤال أختر</span>
            </div>
            <div class="all-answer">
              <div class="content-answer">
                <div class="image-option">
                  <div class="image">
                    <img :src="imageIcon.squareIcon2">
                  </div>
                  <div class="number-option">
                    <span>السؤال الاول</span>
                  </div>
                </div>
                <div class="answer">
                  <v-radio-group v-model="radioGroup" dir="ltr">
                    <div class="container-radio">
                      <p>عبدالله بن عباس</p>
                    </div>
                  </v-radio-group>
                </div>
                <div class="true-answer active " @click="asasas($event)" ref="trueAnswer">
                  <span>
                      <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>
              <div class="content-answer">
                <div class="image-option">
                  <div class="image">
                    <img :src="imageIcon.squareIcon2">
                  </div>
                  <div class="number-option">
                    <span>السؤال الثاني</span>
                  </div>
                </div>
                <div class="answer">
                  <v-radio-group v-model="radioGroup" dir="ltr">
                    <div class="container-radio">
                      <p>أبو الحسن علي بن أبي طالب الهاشمي </p>
                    </div>
                  </v-radio-group>
                </div>
                <div class="true-answer"  @click="asasas($event)">
                     <span>
                      <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>
              <div class="content-answer">
                <div class="image-option">
                  <div class="image">
                    <img :src="imageIcon.squareIcon2">
                  </div>
                  <div class="number-option">
                    <span>السؤال الثالث</span>
                  </div>
                </div>
                <div class="answer">
                  <v-radio-group v-model="radioGroup" dir="ltr">
                    <div class="container-radio">
                      <p>طَلْحَة بن عُبَيْد اللّه التَّيمي القُرشي</p>
                    </div>
                  </v-radio-group>
                </div>
                <div class="true-answer"  @click="asasas($event)">
                      <span>
                      <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>
              <div class="content-answer">
                <div class="image-option">
                  <div class="image">
                    <img :src="imageIcon.squareIcon2">
                  </div>
                  <div class="number-option">
                    <span>السؤال الرابع</span>
                  </div>
                </div>
                <div class="answer">
                  <v-radio-group v-model="radioGroup" dir="ltr">
                    <div class="container-radio">
                      <p>عبد الرّحمن بن عوف القرشيّ الزهريّ</p>
                    </div>
                  </v-radio-group>
                </div>
                <div class="true-answer"  @click="asasas($event)">
                  <span>
                      <i class="fa fa-check"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="container-question" style="margin-bottom: 0">
          <div class="number-question">
            <div class="right-section">
              <div class="icon">
                <img :src="imageIcon.squareIcon" alt="image icon">
              </div>
              <h3>السؤال الأول</h3>
            </div>
            <div class="left-section">
              <div class="degree">
                <h3>درجة السؤال</h3>
                <input type="text" placeholder="50" class="number ml-4">
                <span class="close-icon" @click="hideQuestion()"><i class="fa fa-times"></i></span>
              </div>
            </div>
          </div>
          <div class="content-question">
            <div class="question">
              <h5>أكمل قوله تعالى: (يا أيها الناس اتقوا ربكم واخشوا يوماً لا يجزي والد عن ولده)</h5>
              <span class="type-question">حقل نصي</span>
            </div>
            <div class="all-answer">
              <v-textarea
                  solo
                  name="input-7-4"

              ></v-textarea>
              <span class="rows-number">2000 سطر</span>
            </div>
          </div>
        </div>
        <dialog-modal :width-size="800" :nameInput="'اضافة سؤال أخر'" :title="'إضافة سؤال جديد'">
          <step-bystep>
            <template v-slot:section-one>
              <div class="createQuestion-one">
                <label class="custom-label-recitation-interview">أختر هنا نوع السؤال</label>
                <select-input :name="'أختر هنا نوع السؤال'"></select-input>
              </div>
            </template>
            <template v-slot:section-tow>
              <div class="createQuestion-one">
                <div class="container-question-modal">
                  <div class="content-question">
                    <div class="question">
                      <input-text :label-top="'اكتب سؤال'" style="width: 100%;margin-bottom: 20px"/>
                    </div>
                    <div class="all-answer">
                      <div class="content-answer">
                        <div class="image-option">
                          <div class="image">
                            <img :src="imageIcon.squareIcon2">
                          </div>
                          <div class="number-option">
                            <span>الأختيار الأول</span>
                          </div>
                        </div>
                        <div class="answer">
                          <v-radio-group v-model="radioGroup" dir="ltr">
                            <div class="container-radio">
                              <v-radio
                                  :label="'الاجابة الصحيحة'"
                                  :value="'عبدالله بن عباس'"
                              ></v-radio>
                              <p>عبدالله بن عباس</p>
                            </div>
                          </v-radio-group>
                        </div>
                        <div class="delete-option">
                          <img :src="imageIcon.blockIcon">
                        </div>
                      </div>
                      <div class="content-answer">
                        <div class="image-option">
                          <div class="image">
                            <img :src="imageIcon.squareIcon2">
                          </div>
                          <div class="number-option">
                            <span>الأختيار الثاني</span>
                          </div>
                        </div>
                        <div class="answer">
                          <v-radio-group v-model="radioGroup" dir="ltr">
                            <div class="container-radio">
                              <v-radio
                                  :label="'الاجابة الصحيحة'"
                                  :value="'أبو الحسن علي بن أبي طالب الهاشمي '"
                              ></v-radio>
                              <p>أبو الحسن علي بن أبي طالب الهاشمي </p>
                            </div>
                          </v-radio-group>
                        </div>
                        <div class="delete-option">
                          <img :src="imageIcon.blockIcon">
                        </div>
                      </div>
                      <div class="content-answer">
                        <div class="image-option">
                          <div class="image">
                            <img :src="imageIcon.squareIcon2">
                          </div>
                          <div class="number-option">
                            <span>الأختيار الثالث</span>
                          </div>
                        </div>
                        <div class="answer">
                          <v-radio-group v-model="radioGroup" dir="ltr">
                            <div class="container-radio">
                              <v-radio
                                  :label="'الاجابة الصحيحة'"
                                  :value="'طَلْحَة بن عُبَيْد اللّه التَّيمي القُرشي'"
                              ></v-radio>
                              <p>طَلْحَة بن عُبَيْد اللّه التَّيمي القُرشي</p>
                            </div>
                          </v-radio-group>
                        </div>
                        <div class="delete-option">
                          <img :src="imageIcon.blockIcon">
                        </div>
                      </div>
                      <div class="content-answer">
                        <div class="image-option">
                          <div class="image">
                            <img :src="imageIcon.squareIcon2">
                          </div>
                          <div class="number-option">
                            <span>الأختيار الرابع</span>
                          </div>
                        </div>
                        <div class="answer">
                          <v-radio-group v-model="radioGroup" dir="ltr">
                            <div class="container-radio">
                              <v-radio
                                  :label="'الاجابة الصحيحة'"
                                  :value="'عبد الرّحمن بن عوف القرشيّ الزهريّ'"
                              ></v-radio>
                              <p>عبد الرّحمن بن عوف القرشيّ الزهريّ</p>
                            </div>
                          </v-radio-group>
                        </div>
                        <div class="delete-option">
                          <img :src="imageIcon.blockIcon">
                        </div>
                      </div>
                      <a class="add-new-option">
                        اضافة اختيار
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </step-bystep>
        </dialog-modal>
      </div>
    </v-main>
  </section>
</template>

<script>
import DialogModal from "@/components/dialogModal";
import StepBystep from "@/components/stepBystep";
import SelectInput from "@/components/select-input";
import InputText from "@/components/input-text";
import {mapMutations} from "vuex";
import BtnSubmit from "@/components/btnSubmit";

export default {
  name: "executeDutiesView",
  components: {BtnSubmit, InputText, SelectInput, StepBystep, DialogModal},
  data() {
    return {
      imageIcon: {
        squareIcon: require('@/assets/image/icon/Group 78247.png'),
        squareIcon2: require('@/assets/image/icon/Group 78248.png'),
        blockIcon: require('@/assets/image/icon/Icon ionic-md-remove-circle-outline.png'),
      },
      imageLesson: require('@/assets/image/informationStudent/Image 6.png'),
      radioGroup: 1,
      displayShow: 'block',
      isActive: false
    }
  },
  methods: {
    ...mapMutations(['pageTitle']),
    hideQuestion() {
      this.displayShow = 'none'
    },
    asasas(e){
      let as = document.querySelectorAll('.true-answer');
      let i;
      for ( i = 0 ; i < as.length ; i++){
        as[i].classList.remove('active');
      }
      e.currentTarget.className += ' active';
    }
  },
  beforeMount() {
    this.pageTitle('تنفيذ الواجب')
    this.asasas()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.executeDutiesView {
  background-color: $background-main-page;
  padding: 20px 15px 40px 15px;
  @media only screen and (max-width: 700px) {
    padding: 20px 8px 40px 8px;

  }


  .container--fluid {
    border-radius: 20px;
    padding: 10px 15px 50px 15px;
    background-color: white;
  }

  .read-lesson {
    background-color: white;
    border-radius: 30px;
    padding: 25px;

    .image-lesson {
      width: 85%;
      margin: 0 auto;

      span.number-page {
        text-align: center;
        display: block;
        margin-bottom: 20px;
      }

      .image {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .question-lesson {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      span {
        width: 50%;
      }

      .btn-question {
        width: 100%;
        display: flex;

        .no-btn {
          width: 30%;
          margin-right: 15px;

          .btn-submit {
            color: black !important;
          }
        }
      }
    }
  }

  .container-question {
    display: v-bind('displayShow');
    background-color: white;
    border-radius: 20px;
    padding-bottom: 20px;
    overflow: hidden;
    margin-bottom: 30px;

    .number-question {
      display: flex;
      background-color: rgba(56, 91, 114, 0.16);
      padding: 25px 30px;
      justify-content: space-between;
      align-items: center;

      .right-section {
        display: flex;
        align-items: center;

        .icon {
          width: 28px;
          margin-left: 15px;
          display: flex;
          align-items: center;

          img {
            width: 100%;
          }
        }

        h3 {
          font-size: 22px !important;
          font-weight: bold !important;
          color: #354052;
          @media only screen and (max-width: 700px) {
            font-size: 16px !important;
          }
        }
      }

      .left-section {
        .degree {
          display: flex;
          align-items: center;

          h3 {
            font-size: 22px !important;
            color: #272727;
            margin-left: 10px;
            @media only screen and (max-width: 700px) {
              font-size: 16px !important;
            }
          }

          input.number {
            width: 40px;
            background-color: #FAFBFC;
            padding: 4px 8px;
            border: 1px solid rgba(6, 83, 254, 0.2);
            border-radius: 10px;
            color: #385B72;
            margin-left: 50px;
            margin-right: 5px;
            font-size: 18px;
            display: inline-block;

          }

          span.close-icon {
            margin-left: 10px;
            background-color: rgba(231, 29, 54, 0.25);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: 300 !important;
            font-size: 15px;
            color: rgba(231, 29, 54, 0.76);
            @media only screen and (max-width: 700px) {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }

    .content-question {
      padding: 30px 50px;
      @media only screen and (max-width: 700px) {
        padding: 30px 15px !important;
      }

      .question {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .type-question {
          @media only screen and (max-width: 700px) {
            display: none;
          }
        }

        h5 {
          color: #272727;
          font-size: 18px;
          margin-bottom: 20px;
          @media only screen and (max-width: 700px) {
            font-size: 16px;
          }
        }

        span {
          font-size: 15px;
          color: #385B72;
        }
      }
    }

    .all-answer {
      width: 100%;
      position: relative;

      .content-answer {
        display: flex;
        align-items: center;

        .image-option {
          width: 12%;
          display: flex;
          align-items: center;
          margin-bottom: 19px;
          margin-left: 20px;
          @media only screen and (max-width: 700px) {
            display: none !important;
          }

          .image {
            width: 22px;
            margin-top: 5px;

            img {
              width: 100%;
            }
          }

          .number-option {
            margin-right: 10px;
            margin-bottom: 7px;

            span {
              font-size: 15px !important;
            }
          }

        }

        .answer {
          width: 83%;

          .container-radio {
            border: 1px solid rgba(6, 83, 254, 0.21);
            border-radius: 5px;
            padding: 25px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media only screen and (max-width: 700px) {
              .v-label {
                display: none !important;
              }
            }

            p {
              margin-bottom: 0;
              font-size: 16px;
              text-align: right;
              position: absolute;
              right: 2%;
              @media only screen and (max-width: 700px) {
                font-size: 14px;
              }

            }
          }
        }

        .delete-option {
          border: 1px solid rgba(6, 83, 254, 0.21);
          border-radius: 5px;
          margin-right: 5px;
          display: flex;
          align-items: center;
          padding: 14px 5px;
          cursor: pointer;
          margin-bottom: 19px !important;

          img {
            width: 22px;
          }
        }

        .true-answer {
          border: 1px solid rgba(6, 83, 254, 0.21);
          border-radius: 5px;
          margin-right: 5px;
          display: flex;
          align-items: center;

          cursor: pointer;
          margin-bottom: 19px !important;

          i {
            display: none;
            padding: 14px 5px;
            background-color: #00C8AE;
            color: white
          }

          span {
            width: 30px;
            height: 50px;
            color: white;
            overflow: hidden;

          }
        }

        .true-answer.active {
          i {
            background-color: #00C8AE;
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }

      .rows-number {
        display: inline-block;
        position: absolute;
        left: 5%;
        bottom: 25%;
        font-size: 12px;
        color: #272727;

      }

      .add-new-option {
        position: absolute;
        bottom: -2%;
        left: 1%;
        font-size: 14px;
        text-decoration: underline
      }
    }
  }

  .v-input--radio-group--column .v-radio {
    margin-bottom: 0;
  }

}
</style>
<style lang="scss">
.executeDutiesView {
  .true-answer .v-input--selection-controls__input {
    background-color: aquamarine;
    margin-right: 0 !important;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .v-size--default {
    padding-top: 22px !important;
    padding-bottom: 24px !important;
  }

  .read-lesson {

    .question-lesson {
      .btn-question {
        .no-btn {
          width: 30%;
          margin-right: 15px;

          .btn-submit {
            color: #00B5AD !important;
            box-shadow: none;
            border: 1px solid #00B5AD !important;

          }
        }
      }
    }
  }

  .v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
    color: #00B5AD !important;
    margin-bottom: 7px;
    @media only screen and (max-width: 700px) {
      font-size: 13px;
    }
  }

  .v-application .primary--text {
    color: #00B5AD !important;
  }

  .v-icon.v-icon {
    font-size: 20px !important;
  }

  .v-input--radio-group--column .v-radio {
    margin-bottom: 0;
    width: 100% !important;
    position: absolute !important;
    z-index: 1;
  }

  .v-input--selection-controls.v-input {
    margin-top: 0px !important;
  }

  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow: none !important;
    border: 1px solid rgba(6, 83, 254, 0.15);

  }

  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control {
    padding-top: 15px;
  }

  .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {
    font-size: 16px !important;
  }

  .modal-custom .button-modal {
    width: 100%;
  }


}


label.custom-label-recitation-interview {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: white;
  position: absolute;
  top: 14%;
  z-index: 50;
  right: 4%;
}

label.custom-label-recitation-interview {
  font-size: 14px !important;
}

.createQuestion-one {
  padding: 20px 0;
}

.container-question-modal {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;

  .content-question {
    padding: 10px 10px;

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .type-question {
        @media only screen and (max-width: 700px) {
          display: none;
        }
      }

      h5 {
        color: #272727;
        font-size: 18px;
        margin-bottom: 20px;
      }

      span {
        font-size: 15px;
        color: #385B72;
      }
    }
  }

  .all-answer {
    width: 100%;
    position: relative;

    .content-answer {
      display: flex;
      align-items: center;

      .image-option {
        display: flex;
        align-items: center;
        margin-bottom: 19px;
        margin-left: 10px;
        @media only screen and (max-width: 700px) {
          display: none !important;
        }

        .image {
          width: 22px;
          margin-top: 5px;

          img {
            width: 100%;
          }
        }

        .number-option {
          margin-right: 10px;
          margin-bottom: 7px;

          span {
            font-size: 15px !important;
          }
        }

      }

      .answer {
        width: 77%;
        @media only screen and (max-width: 700px) {
          width: 100%;
        }

        .container-radio {
          border: 1px solid rgba(6, 83, 254, 0.21);
          border-radius: 5px;
          padding: 25px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            margin-bottom: 0;
            font-size: 16px;
            text-align: right;
            position: absolute;
            right: 2%;
          }
        }
      }

      .delete-option {
        border: 1px solid rgba(6, 83, 254, 0.21);
        border-radius: 5px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        padding: 14px 5px;
        cursor: pointer;
        margin-bottom: 19px !important;

        img {
          width: 22px;
        }
      }
    }

    .rows-number {
      display: inline-block;
      position: absolute;
      left: 5%;
      bottom: 25%;
      font-size: 12px;
      color: #272727;

    }

    .add-new-option {
      position: absolute;
      bottom: -2%;
      left: 1%;
      font-size: 14px;
      text-decoration: underline
    }
  }

}

.v-dialog {
  .v-input--selection-controls {
    margin-top: 0 !important;
  }

  .container-question-modal .all-answer .content-answer .answer .container-radio {
    padding: 10px !important;
  }

  .v-size--default {
    padding-top: 22px !important;
    padding-bottom: 24px !important;
  }
}

.v-btn__content {
  font-size: 18px;
}
</style>
