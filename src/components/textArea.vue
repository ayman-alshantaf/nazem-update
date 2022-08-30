<template>
  <div class="text-area-component">
    <label></label>
    <v-textarea
        rows="3"
        :label="valueLabel"
        required
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "textArea",
  props:['valueLabel']
}
</script>

<style lang="scss" scoped>
.text-area-component {
  .v-textarea {
    font-size: 15px !important;
  }

  .v-text-field {
    border: 1px solid rgba(21, 57, 135, 0.28);
    border-radius: 5px;
    padding: 0 10px;
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

}
</style>
<style lang="scss">
.text-area-component {

 textarea {
    font-size: 15px !important;
  }

}
</style>
