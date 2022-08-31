<template>
  <div class="card-branchesDetails">
    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" alt="">
      </div>
      <div class="name">
        <p>عبدالرحمن بن علي عثمان العيد</p>
        <span>مدير ادارة الموارد البشرية</span>
      </div>
    </div>
    <div class="text-card">
      <p>معلومات التواصل</p>
      <div class="information-student">
        <div class="path">
          <div class="image">
            <img :src="iconImage.mail">
          </div>
          <div class="text-path">
            <p>asd2498@gmail.com</p>
          </div>
        </div>
        <div class="path">
          <div class="image">
            <img :src="iconImage.phone">
          </div>
          <div class="text-path">
            <p>966505142048</p>
          </div>
        </div>
        <div class="path">
          <div class="image">
            <img :src="iconImage.id">
          </div>
          <div class="text-path">
            <p>1008137554</p>
          </div>
        </div>

      </div>
      <div class="section-skills">
        <small>المهارات</small>
        <div class="skills">
          <span> Designer</span>
          <span>UI/UX</span>
          <span> Designer</span>
          <span>Visual Design</span>
          <span>Interaction Design</span>
        </div>
      </div>
<!--      <div class="btn-done">-->
<!--        <btn-submit :value-btn="' تفاصيل الفرع'" :to="{name: 'recitationView' , params:{id:idCardStudent}}"-->
<!--                    class="mt-3 mb-4"/>-->
<!--      </div>-->
<!--      <div class=" last-of-type" style="width: 100% "></div>-->
    </div>
    <div v-show="showEditDelete" class="edit-delete">
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
</template>

<script>

export default {
  name: "card-branchesDetails",
  props: {
    showBtn: {
      type: Boolean,
      default: true
    },
    showEditDelete: {
      type: Boolean,
      default: false
    },
    showBtnWarning: {
      type: Boolean,
      default: false
    },
    nameBtn: {
      type: String,
      default: 'تسميع'
    }
  },
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      iconImage: {
        mail: require('../../assets/image/informationStudent/Repeat Grid 9.png'),
        phone: require('../../assets/image/informationStudent/Repeat Grid 5.png'),
        id: require('../../assets/image/informationStudent/Repeat Grid 4.png'),
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.card-branchesDetails {
  border: 1px solid #D2D5E1;
  border-radius: 5px;
  padding: 20px 10px 20px 10px;

  .name-student {
    display: flex;
    justify-content: right;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    .image {
      width: 20%;
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

  .text-card {

    p {
      color: #B4B4B4;
      font-size: 14px;
      line-height: 2em;
      margin-bottom: 10px;
    }

    .information-student {
      display: flex;
      flex-direction: column;

      .path {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .image {
          border-radius: 50%;
          min-width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 5px;

          img {
            width: 100%;
          }
        }

        .text-path {
          margin-right: 5px;
          width: 100%;

          p {
            margin-bottom: 0;
            color: #535875;
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

    .section-skills {
      small{
        color: #0F1222;
        font-size: 13px;
        margin-bottom: 5px;
        display: inline-block;
      }
      .skills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        span {
          min-width: 29%;
          display: inline-block;
          font-size: 14px;
          text-align: center;
          background-color: #F7F7F7;
          margin: 5px;
          border-radius: 5px;
          padding: 3px 8px;
        }
      }

    }
  }

  .avatar-branch {
    display: flex;
    align-items: center;

    span {
      margin-right: -3%;
      width: 27px;
      height: 27px;
      border-radius: 50%;

      img {
        width: 100%;
      }
    }

    span:first-child {
      margin-right: 0;
    }

    span.icon-plus {
      background-color: #1FD0A3;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: white;
      border: 2px solid white;

      i {
        margin-top: 2px;
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

    .v-btn:not(.v-btn--round).v-size--default {
      background-color: transparent !important;
      border: none;
      outline: none;
      box-shadow: none;
      color: #B4B4B4 !important;
      cursor: pointer !important;
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
.card-branchesDetails {
  .v-btn:not(.v-btn--round).v-size--default {
    background-color: #00B5AD !important;
    font-size: 14px !important;
    color: white;
    border-radius: 5px !important;
  }

}

</style>
