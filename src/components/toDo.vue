<template>
  <div class="todo shadow-lg  rounded-3">
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
          <div class="content-answer" v-for="(todo, index) in todos" :key="index">
            <div class="image-option">
              <div class="image">
                <img :src="imageIcon.squareIcon2">
              </div>
              <div class="number-option">
                <span>{{ todo.numberOption }}</span>
              </div>
            </div>
            <div class="answer">
              <v-radio-group v-model="radioGroup" dir="ltr">
                <div class="container-radio">
                  <v-radio
                      :label="'الاجابة الصحيحة'"
                      :value="todo.name"
                  ></v-radio>
                  <p>{{ todo.name }}</p>
                </div>
              </v-radio-group>
            </div>
            <div class="delete-option" @click="deleteTodo(index)">
              <img :src="imageIcon.blockIcon">
            </div>
          </div>
          <dialog-modal :title="'اضافة خيار جديد'" :name-input="'اضافة اخيار'" :show-basic-btn="false"
                        :show-tow-btn="true">
            <div class=" mb-5">
              <v-row class="form-add-new-answer">
                <v-col cols="12" lg="6">
                  <v-text-field
                      placeholder="اضافة السؤال"
                      solo
                      v-model="newTodo"
                      class="form-add-newAnswer"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                      placeholder="رقم السؤال مثلا السؤال السادس"
                      solo
                      v-model="newNumberOption"
                      class="form-add-newAnswer"

                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn block color="#00B5AD" type="submit" class="submit-btn px-3 py-2" @click="addTodo()">اضافة
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </dialog-modal>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import DialogModal from "@/components/dialogModal";

export default {
  name: "toDo",
  components: {DialogModal},
  data() {
    return {
      newTodo: "",
      newNumberOption: "",
      indexEditTodo: null,
      todos: [
        {
          name: "عبدالله بن عباس",
          numberOption: 'الخيار الاول'
        },
        {
          name: "أبو الحسن علي بن أبي طالب الهاشمي",
          numberOption: 'الخيار الثاني'
        },
        {
          name: "طَلْحَة بن عُبَيْد اللّه التَّيمي القُرشي",
          numberOption: 'الخيار الثالث'
        },
        {
          name: "عبد الرّحمن بن عوف القرشيّ الزهري",
          numberOption: 'الخيار الرابع'
        },
      ],
      imageIcon: {
        squareIcon: require('@/assets/image/icon/Group 78247.png'),
        squareIcon2: require('@/assets/image/icon/Group 78248.png'),
        blockIcon: require('@/assets/image/icon/Icon ionic-md-remove-circle-outline.png'),
      },
      radioGroup: 1,
      displayShow: 'block'
    };

  },
  methods: {
    addTodo() {
      if (this.newTodo.length === 0) return;
      if (this.indexEditTodo === null) {
        this.todos.push({
          name: this.newTodo,
          numberOption: this.newNumberOption,
        });
      } else {
        this.todos[this.indexEditTodo].name = this.newTodo;
        this.todos[this.indexEditTodo].numberOption = this.newNumberOption;
        this.indexEditTodo = null;
      }
      this.newTodo = "";
      this.newNumberOption = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    hideQuestion() {
      this.displayShow = 'none'
    }
  },
}
</script>

<style lang="scss" scoped>
.todo {
  .container-question {
    display: v-bind('displayShow');
    background-color: white;
    border-radius: 20px;
    padding-bottom: 30px;
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
        }
      }

      .left-section {
        .degree {
          display: flex;

          h3 {
            font-size: 22px !important;
            color: #272727;
            margin-left: 10px;

            @media only screen and (max-width: 700px) {
              font-size: 18px !important;
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

          input.number:focus {
            outline: none;
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
      @media only screen and (max-width: 700px) {
        padding: 30px 15px !important;
      }
      .question {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .type-question{
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
          width: 14%;
          display: flex;
          align-items: center;
          margin-bottom: 19px;
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
          width: 80%;
          @media only screen and (max-width: 700px) {
            width: 100% !important;
          }
          .container-radio {
            border: 1px solid rgba(6, 83, 254, 0.21);
            border-radius: 5px;
            padding: 25px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media only screen and (max-width: 700px) {
              .v-label{
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
        left: 15%;
        font-size: 14px;
        text-decoration: underline
      }
    }
  }

  .form-input {
    border: 1px solid black;
  }

  .v-input--radio-group--column .v-radio {
    margin-bottom: 0 !important;
  }
}

</style>
<style lang="scss">


.todo {


}
.form-add-new-answer{
  .v-btn__content {
    color: white !important;
  }
    .v-text-field__details{
      display: none !important;
    }
    .v-text-field.v-text-field--solo > .v-input__control > .v-input__slot{
      box-shadow: none !important;
      margin-bottom: 0 !important;
    }
    .form-add-newAnswer {
      background-color: transparent !important;
      border: 1px solid rgba(6, 83, 254, 0.2) !important;
    }
    .v-text-field.v-text-field--solo .v-input__control input{
      padding-right: 0px !important;
      font-size: 15px;
    }
}
//label{
//  font-weight: bold;
//  color: #272727;
//  font-size: 14px !important;
//}
//.v-btn__content{
//  font-size: 17px !important;
//}
//.date-customer .theme--light.v-input{
//  border: 1px solid rgba(6, 83, 254, 0.13) !important;
//}
</style>
