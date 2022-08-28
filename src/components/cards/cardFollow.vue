<template>
<!--start  component card follow student and  review student -->
  <div class="card-follow-student">
    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" alt="">
      </div>
      <div class="name">
        <p>{{ name }}</p>
        <span>{{ className }}</span>
      </div>
    </div>
    <div class="save-student" v-show="showSaveStudent">
      <div v-if="status === 1" class="save-data" v-show="[showFollowStudent  ]">
        {{ saveStudent }}
      </div>
      <div v-if="status === 0" class="not-save-data" v-show="[showFollowStudent ]">
        {{ saveStudent }}
      </div>
    </div>
    <div class="review-student" v-show="showReviewStudent">
      <div v-if="statusReview === 1" class="save-data" v-show="[showFollowStudent ]">
        {{ reviewStudent }}
      </div>
      <div v-if="statusReview === 0" class="not-save-data" v-show="[showFollowStudent ]">
        {{ reviewStudent }}
      </div>
    </div>
    <div class="exam-degree" v-show="showFollowStudent">
      <span>الدرجة الكــــلية <small>{{ score }}</small></span>
      <span>درجة النجـــــاح <small>{{ passingScore }}</small></span>
    </div>
    <div class="path-time">
      <v-row>
        <v-col cols="6" style="padding-right: 4px;padding-left: 4px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconPath">
            </div>
            <div class="text-path">
              <p>المسار</p>
              <span>المسار الاول</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" style="padding-right: 4px;padding-left: 4px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconTime">
            </div>
            <div class="text-path">
              <p>الفترة</p>
              <span>الفترة الاولة</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" v-show="showVacationsStudent" style="padding-right: 4px;padding-left: 4px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconDay">
            </div>
            <div class="text-path">
              <p>مدة الاجازة</p>
              <span>1/1/2022</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" v-show="showVacationsStudent" style="padding-right: 4px;padding-left: 4px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconDone">
            </div>
            <div class="text-path">
              <p>نوع الاجازة</p>
              <span> غير رسمية</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="text-card">
      <p>{{ description }}</p>
    </div>
    <div class="edit-delete">
      <v-btn disabled class="edit">
        <span>تعديل </span>
        <i class="fa fa-pencil"></i>
      </v-btn>
      <div class="border"></div>
      <v-btn disabled class="delete">
        <span>حذف </span>
        <i class="fa fa-trash-o"></i>
      </v-btn>
    </div>
  </div>
  <!--end  component card follow student and  review student -->
</template>

<script>
export default {
  name: "cardFollow",
  props: {
    showFollowStudent: {
      type: Boolean,
      default: true
    },
    showVacationsStudent: {
      type: Boolean,
      default: false
    },
    showSaveStudent: {
      type: Boolean,
      default: false
    },
    showReviewStudent: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    className: {
      type: String
    },
    saveStudent: {
      type: String
    },
    reviewStudent: {
      type: String
    },
    status: {
      type: Number
    },
    statusReview: {
      type: Number
    },
    score: {
      type: Number
    },
    passingScore: {
      type: Number
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      icons: {
        iconPath: require('@/assets/image/icon/Color.png'),
        iconTime: require('@/assets/image/icon/Group 78359.png'),
        iconDay: require('@/assets/image/icon/Group 77770.png'),
        iconDone: require('@/assets/image/icon/Group 78361.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-follow-student {
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
      width: 18%;
      padding-top: 5px;

      img {
        width: 100%;
      }
    }

    .name {
      margin-right: 12px;

      p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 0;
      }

      span {
        font-size: 14px;
        color: #B4B4B4;
      }
    }
  }

  .save-data {
    background-color: #DBF7F0;
    text-align: center;
    color: #1FD0A3;
    font-size: 15px;
    padding: 10px 0;
    border-radius: 10px;
  }

  .not-save-data {
    background-color: rgba(209, 26, 42, 0.22);
    text-align: center;
    color: #D11A2A;
    font-size: 15px;
    padding: 10px 0;
    border-radius: 10px;
  }

  .exam-degree {
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    span {
      color: #202020;
      font-size: 16px;
    }
  }

  .path-time {
    display: flex;
    justify-content: space-around;
    padding: 15px 10px;

    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    .path {
      display: flex;

      .image {
        background-color: rgba(56, 91, 114, 0.2);
        border-radius: 50%;
        min-width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 20px;
        }
      }

      .text-path {
        margin-right: 10px;

        p {
          margin-bottom: 0;
          color: #0F1222;
          font-size: 15px;
          font-weight: bold;

        }

        span {
          color: #B4B4B4;
          font-size: 13px;
        }
      }
    }
  }

  .text-card {
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    p {
      color: #B4B4B4;
      font-size: 15px;
      line-height: 1.8em;
      margin-top: 15px;
    }
  }

  .edit-delete {
    position: relative;
    display: flex;
    justify-content: space-around;
    color: #B4B4B4;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer !important;

    .edit, .delete {
      padding-top: 20px;
      padding-bottom: 25px;
      cursor: pointer;
    }
    .delete  {
      i{
        padding-left: 3px;
      }
    }
    .v-btn:not(.v-btn--round).v-size--default {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
      color: #B4B4B4 !important;
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
