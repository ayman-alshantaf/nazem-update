<template>
  <div class="card-follow-student">
    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" alt="">
      </div>
      <div class="name">
        <p>عبدالرحمن بن علي</p>
        <span>طالب في فصل مالك ابن انس</span>
        <div class="save-data">
          تم السرد
        </div>
      </div>

    </div>

    <div class="path-time">
      <v-row>
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
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
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
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
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconDay">
            </div>
            <div class="text-path">
              <p>يوم السرد</p>
              <span>1334\1\1</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconDone">
            </div>
            <div class="text-path">
              <p>اتمام السرد</p>
              <span>نعم</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconTime">
            </div>
            <div class="text-path">
              <p>من الوجه</p>
              <span>الوجه الاول</span>
            </div>
          </div>
        </v-col>
        <v-col cols="6" style="padding-right: 2px;padding-left: 2px">
          <div class="path">
            <div class="image">
              <img :src="icons.iconTime">
            </div>
            <div class="text-path">
              <p>الي الوجه</p>
              <span> الوجه الرابع</span>
            </div>
          </div>
        </v-col>
        <div class=" last-of-type" style="width: 100% "></div>
      </v-row>
    </div>


    <div class="edit-delete">
      <v-btn disabled class="edit">
        <span class="ml-1">تعديل </span>
        <i class="fa fa-pencil mb-1"></i>
      </v-btn>
      <div class="border"></div>

      <v-btn disabled class="delete mb-1">
        <span class="ml-1">حذف </span>
        <i class="fa fa-trash-o"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardNarrative",
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      icons:{
        iconPath:require('@/assets/image/icon/Color.png'),
        iconTime:require('@/assets/image/icon/Group 78359.png'),
        iconDay:require('@/assets/image/icon/Group 77770.png'),
        iconDone:require('@/assets/image/icon/Group 78361.png')
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
      width: 70px;
      padding-top: 6px;
      img {
        width: 100%;
      }
    }

    .name {
      width: 100%;
      position: relative;
      margin-right: 12px;

      p {
        font-size: 14px;
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
    position: absolute;
    left: 0;
    top: -2%;
    background-color: #DBF7F0;
    text-align: center;
    color: #1FD0A3;
    font-size: 11px;
    padding: 8px 8px;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-right: 10px;
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
    padding:15px 10px ;

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
    .edit , .delete{
      padding-top: 20px ;
      padding-bottom: 25px;
    }
    .delete  {
      i{
        padding-left: 3px;
      }
    }
    .v-btn:not(.v-btn--round).v-size--default {
      background-color: transparent !important;
      border: none;
      outline: none;
      box-shadow: none;
      color: #B4B4B4 !important;
    }
    .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
      background-color: transparent !important;
    }

    i{
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
    i.fa-pencil{
      padding-left: 5px;
    }
    .border{
      border-right: 1px solid rgba(143, 146, 161, 0.26);
      padding: 0;
    }

    span {
      font-size: 15px;
    }

  }
}
</style>
