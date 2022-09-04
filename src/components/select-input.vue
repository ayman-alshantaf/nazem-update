<template>
  <div class="select-component">
    <label class="main-label"> {{ label }}</label>
    <v-select
        :items="items"
        :label="name"
        solo
        required
    ></v-select>
  </div>

</template>

<script>
export default {
  name: "select-input",
  props: ['name', 'items','label'],
  data(){
    return{

    }
  }

}
</script>

<style lang="scss">
.select-component {
  width: 100%;


  .v-text-field.v-text-field--solo .v-label {
    right: 0 !important;
    left: auto !important;
  }

  .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }

  .v-text-field.v-text-field--solo .v-input__control {
    width: 170px;
    min-width: 100px;
  }

  .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
    background-color: transparent !important;
    width: 100%;
    border: 1px solid rgba(6, 83, 254, 0.13);
    font-size: 14px;
  }

  .v-select__selection--comma {
    font-size: 14px;
  }

  .v-text-field.v-text-field--solo > .v-input__control > .v-input__slot {
    box-shadow: none;
  }

  .v-text-field.v-text-field--solo .v-label {
    color: #CBCACA !important;
    font-size: 13px !important;
  }

  .v-label {
    right: 0 !important;
    left: auto !important;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px ;
    background-color: white;
    position: absolute;
    top: 0;
    z-index: 1;
    right: 25px !important;
  }
  label.main-label{
    font-weight: bold;
    font-size: 14px !important;
    color: rgba(0,0,0,0.6) !important;
  }

}

</style>
