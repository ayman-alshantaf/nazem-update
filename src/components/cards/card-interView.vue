<template>
  <div class="card-interview">
    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" alt="">
      </div>
      <div class="name">
        <p>{{ name }}</p>
        <span>{{ className }}</span>
        <div v-if="status === 1" class="status-student">
          {{ statusStudent }}
        </div>
        <div v-if="status === 0" style="background-color: rgba(209,26,42,0.23);color: #D11A2A" class="status-student">
          {{ statusStudent }}
        </div>
        <div v-if="status === 2" style="background-color: rgba(56,91,114,0.26);color: #385B72" class="status-student">
          {{ statusStudent }}
        </div>
      </div>
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
        <div class=" last-of-type" v-show="showLine" style="width: 100% "></div>
      </v-row>
    </div>
    <slot></slot>
    <div class="btn-done">
      <v-btn v-show="showBtn" :to="routLink" class="mt-3 mb-4" block>
        تسميع
      </v-btn>
      <v-btn v-show="showBtnWarning" class="mt-3 mb-4" block>
        {{ nameBtn }}
      </v-btn>
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
  name: "card-interView",
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
    idCardStudent: {
      type: Number
    },
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
    },
    showLine: {
      type: Boolean,
      default: true
    },
    routLink:{
      type: String,
      default: 'recitationView'
    },
  },
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
    }
  }
}
</script>


<style lang="scss" scoped>
.card-interview {
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
.card-interview {
  .v-btn:not(.v-btn--round).v-size--default {
    background-color: #00B5AD !important;
    font-size: 14px !important;
    color: white;
    border-radius: 5px !important;
  }

  .btn-done {
    .v-btn {
      .v-btn__content {
        font-size: 18px !important;
      }
    }

  }
}

</style>
