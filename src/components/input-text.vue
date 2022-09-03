<template>
  <div class="input-text">
    <label>{{ labelTop }}</label>
    <v-text-field
        :placeholder="placeholder"
        required
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "input-text",
  props:['labelTop','placeholder']
}
</script>

<style lang="scss" >



.input-text{
  position: relative;
  .v-text-field {
    border: 1px solid rgba(6, 83, 254, 0.18);
    border-radius: 5px;
    padding-top: 5px !important;
  }

  .v-text-field__details {
    display: none;
  }

  label {
    padding-right: 10px;
    margin-bottom: 10px;
  }

  .v-text-field .v-label {
    top: 3px !important;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px ;
    background-color: white;
    position: absolute;
    top: -25%;
    z-index: 50;
    padding: 0 1px;
    right: 2%;
    font-weight: bold;
  }
  label.custom-label{
    font-size: 14px !important;
  }

  .v-input__slot {
    margin-bottom: 0 !important;
    padding-bottom: 5px;
  }
  .v-input__slot input {
    font-size: 14px;
  }

}

</style>
