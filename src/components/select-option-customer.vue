<template>
  <div class="text-center select-radio">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="custom-select" dark v-bind="attrs" v-on="on" >
          طريقة التحديد
          <i class="fa fa-angle-down"></i>
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
          <v-list-item-title>
            <v-radio-group >
              <v-radio
                  v-for="item in items"
                  :key="item"
                  :label="item.title"
                  :value="item"
              ></v-radio>
            </v-radio-group>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "select-option-customer",
  props:['nameSection','items'],
}
</script>

<style lang="scss" >

.select-radio{
    .v-input--selection-controls__input{
      background-color: red !important;
    }
  .v-btn:not(.v-btn--round).v-size--default{
    background-color: transparent !important;
    border: 1px solid #D2D5E1 !important;
    color: #ADB2BE !important;
    box-shadow: none !important;
    padding: 20px 20px !important;
    i{
      font-size: 18px;
      margin-top: 5px;
      margin-right: 20px;
      font-weight: bold;
      color: #00B5AD;
    }
    .v-btn__content{
      font-size: 14px !important;
    }
  }
}
.v-radio{
  .v-label{
    margin-right:5px;
    font-size: 16px;
  }
}


</style>
