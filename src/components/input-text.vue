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
    border: 1px solid rgba(6, 83, 254, 0.18) !important;
    border-radius: 5px;
    padding-top: 5px !important;
  }

  .v-text-field__details {
    display: none;
  }

  label {
    padding-right: 0px !important;
    margin-bottom: 10px;
  }

  .v-text-field .v-label {
    top: 3px !important;

  }

  input::placeholder {
    color: #CBCACA !important;
    font-size: 13px !important;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px !important;
    background-color: white;
    position: absolute;
    top: -13px !important;
    z-index: 1;
    padding: 0 1px;
    right: 11px !important;
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
