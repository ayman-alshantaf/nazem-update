<template>
  <div class="card-registrationProgram">
    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" alt="">
      </div>
      <div class="name">
        <p>{{ name }}</p>
        <span>{{ className }}</span>
      </div>
    </div>
    <div class="information-student">
      <v-row>
        <v-col cols="6" v-for="itemPath in informationStudentArray" :key="itemPath.id">
          <div class="path">
            <div class="image">
              <img :src="itemPath.icon">
            </div>
            <div class="text-path">
              <p>{{ itemPath.title }}</p>
            </div>
          </div>
        </v-col>
        <div class=" last-of-type" style="width: 100% "></div>
      </v-row>
    </div>

    <div class="path-time">
      <v-row>
        <v-col cols="6" v-for="itemPath in itemsPathArray" :key="itemPath.id">
          <div class="path">
            <div class="image">
              <img :src="itemPath.icon">
            </div>
            <div class="text-path">
              <p>{{ itemPath.title }}</p>
              <span>{{ itemPath.subTitle }}</span>
            </div>
          </div>
        </v-col>
        <div class=" last-of-type" style="width: 100% "></div>
      </v-row>
    </div>
    <slot></slot>
    <div class="btn-done">
      <v-row>
        <v-col cols="12" lg="6">
          <btn-submit :value-btn="'قبول'"  class="mt-3 mb-4" />
        </v-col>
        <v-col class="btn-reject" cols="12" lg="6">
          <btn-submit  :color-value="'transparent'" style="color: black" :value-btn="'رفض'"  class="mt-3 mb-4" />
        </v-col>
      </v-row>

    </div>


<!--    <div v-show="showEditDelete" class="edit-delete">-->
<!--      <v-btn disabled class="edit">-->
<!--        <span>تعديل </span>-->
<!--        <i class="fa fa-pencil"></i>-->
<!--      </v-btn>-->
<!--      <div class="border"></div>-->

<!--      <v-btn disabled class="delete">-->
<!--        <span>حذف </span>-->
<!--        <i class="fa fa-trash-o"></i>-->
<!--      </v-btn>-->
<!--    </div>-->
  </div>
</template>

<script>
import BtnSubmit from "@/components/btnSubmit";
export default {
  name: "card-registrationProgram",
  components: {BtnSubmit},
  props: {
    name: {
      type: String
    },
    className: {
      type: String
    },
    statusStudent: {
      type: String
    },
    status: {
      type: Number
    },
    itemsPathArray: {
      type: Array
    },
    informationStudentArray: {
      type: Array
    },
    idCardStudent: {
      type: Number
    },
    // showEditDelete: {
    //   type: Boolean,
    //   default: false
    // },

    nameBtn: {
      type: String,
      default: 'تسميع'
    }
  },
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
    }
  }
}
</script>


<style lang="scss" scoped>
.card-registrationProgram {
  border: 1px solid #D2D5E1;
  border-radius: 5px;
  padding: 20px 10px 0px 10px;

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

  .status-student {
    position: absolute;
    left: 2%;
    top: -2%;
    background-color: #DBF7F0;
    text-align: center;
    color: #1FD0A3;
    font-size: 11px;
    padding: 10px 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-right: 10px;
  }

  .information-student {
    display: flex;
    justify-content: space-around;
    padding: 15px 10px;


    .col {
      padding-right: 2px;
      padding-left: 2px
    }

    .path {
      display: flex;

      .image {
        border-radius: 50%;
        min-width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }

      .text-path {
        margin-right: 5px;
        width: 100%;
        p {
          margin-bottom: 0;
          color: #0F1222;
          font-size: 13.5px;
          font-weight: bold;
        }

        span {
          color: #B4B4B4;
          font-size: 13px;
        }
      }
    }
  }

  .path-time {
    display: flex;
    justify-content: space-around;
    padding: 15px 10px;


    .col {
      padding-right: 2px;
      padding-left: 2px
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

  .last-of-type {
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);
    padding-top: 15px;
  }


  .edit-delete {
    display: flex;
    justify-content: space-around;
    color: #B4B4B4;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer !important;

    .edit, .delete {
      padding-top: 20px;
      padding-bottom: 25px;

    }

    .delete {
      i {
        padding-left: 3px;
      }
    }

    .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
      background-color: transparent !important;
    }

    i {
      font-size: 15px;
      margin-right: 10px;
      margin-top: 5px;
      background-color: #FAFCFE;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid #D2D5E1;
    }

    i.fa-pencil {
      padding-left: 5px;
    }

    .border {
      border-right: 1px solid rgba(143, 146, 161, 0.26);
      padding: 0;
    }

    span {
      font-size: 15px;
    }

  }


}
</style>
<style lang="scss">
.card-registrationProgram {


  .btn-reject{
    .btn-submit-component .btn-submit{
      color: #00B5AD !important;
      box-shadow: none;
      border: 1px solid #00B5AD !important;
    }
  }


}

</style>
