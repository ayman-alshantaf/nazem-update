<template>
  <section class="recitation-interview">
    <v-main>
      <div class="container--fluid">
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
                <span class="number">50</span>
                <span class="close-icon"><i class="fa fa-times"></i></span>
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
        <div class="container-question">
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
                <span class="number">50</span>
                <span class="close-icon"><i class="fa fa-times"></i></span>
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

export default {
  name: "questionInterviewsView",
  components: {InputText, SelectInput, StepBystep, DialogModal},
  data() {
    return {
      imageIcon: {
        squareIcon: require('@/assets/image/icon/Group 78247.png'),
        squareIcon2: require('@/assets/image/icon/Group 78248.png'),
        blockIcon: require('@/assets/image/icon/Icon ionic-md-remove-circle-outline.png'),
      },
      radioGroup: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.recitation-interview {
  background-color: $background-main-page;
  padding: 20px 15px 40px 15px;

  .container--fluid {
    border-radius: 15px;
    padding: 10px 15px 15px 15px;
  }

  .container-question {
    background-color: white;
    border-radius: 20px;
    padding-bottom: 30px;
    overflow: hidden;
    margin-bottom: 30px;

    .number-question {
      display: flex;
      background-color: rgba(56, 91, 114, 0.16);
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
        }
      }

      .left-section {
        .degree {
          display: flex;

          h3 {
            font-size: 22px !important;
            color: #272727;
            margin-left: 10px;
          }

          span.number {
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
          }
        }
      }
    }

    .content-question {
      padding: 30px 50px;

      .question {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
          margin-left: 20px;


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

  .v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
    margin-bottom: 0;
  }

}
</style>
<style lang="scss">
.recitation-interview {
  .v-btn:not(.v-btn--round).v-size--default {
    padding-top: 22px !important;
    padding-bottom: 24px !important;
  }
  .v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
    color: #00B5AD !important;
    margin-bottom: 7px;
  }

  .v-application .primary--text {
    color: #00B5AD !important;
  }

  .v-icon.v-icon {
    font-size: 20px !important;
  }

  .v-input--radio-group--column .v-radio[data-v-ae2cdb60]:not(:last-child):not(:only-child) {
    margin-bottom: 0;
    width: 100% !important;
    position: absolute !important;
    z-index: 55;
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

  .modal-custom .button-modal[data-v-5b6df5e5] {
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
  .v-btn:not(.v-btn--round).v-size--default {
    padding-top: 22px !important;
    padding-bottom: 24px !important;
  }
}
.v-btn__content{
  font-size: 18px;
}
</style>
