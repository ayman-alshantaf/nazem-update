<template>
  <div class="text-center modal-custom">
    <v-dialog v-model="dialog" :width="widthSize">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  v-show="showBasicBtn" color="button-modal" dark v-bind="attrs" v-on="on">
          <i class="fa fa-plus" style="font-size: 13px;margin-bottom: 2px"></i>
          {{ nameInput }}
        </v-btn>
        <a class="add-new-option" v-show="showTowBtn"  v-bind="attrs" v-on="on">
          {{ nameInput }}
        </a>
      </template>


      <v-card>
        <v-card-title class=" grey lighten-2 py-9" style="background-color: #385B72 ">
          <div class="btn-close-modal" @click="dialog = false">
            <i class="fa fa-close" ></i>
          </div>
          {{ title }}
        </v-card-title>

        <v-card-text>
          <slot></slot>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogModal",
  props: {
    nameInput:{
      type:String
    },
     title:{
       type:String
     },
    widthSize:{
      type:Number,
      default:700
    },
    showBasicBtn:{
      type:Boolean,
      default:true
    },
    showTowBtn:{
      type:Boolean,
      default:false
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-custom {

  .button-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00B5AD;
    padding: 8px 15px;
    margin-top: 5px;
    border-radius: 5px;

    i {
      font-size: 15px;
      margin-top: 10px;
      margin-left: 5px;
    }
  }


}

</style>
<style lang="scss">
.modal-custom {
  .v-btn__content {
    font-size: 15px !important;
  }
}
</style>
<style lang="scss">
.v-dialog > .v-card > .v-card__text{
  padding-top: 30px;
}
.v-card__title {
  color: #354052 !important;
  font-size: 24px;

}
.v-input__slot input{
  font-size: 16px;
  padding-right: 20px;
}
.btn-close-modal {
  position: absolute;
  left: 10%;
  background-color: rgba(231, 29, 54, 0.28);
  font-size: 15px !important;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #E71D36;
}
.add-new-option {
  position: absolute;
  bottom: -2%;
  left: 2%;
  font-size: 15px;
  text-decoration: underline;
  color: #00B5AD !important;
  font-weight: bold;
}
</style>
