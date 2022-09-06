<template>
  <div class="text-area-component">
    <label class="main-label">{{ label }}</label>
    <v-textarea
        rows="3"
        :placeholder="placeholder"
        required
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "textArea",
  props:['placeholder','label']
}
</script>

<style lang="scss" scoped>
.text-area-component {
  position: relative;
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
  margin-top: 15px;

 textarea {
    font-size: 15px !important;
   padding-top: 5px;
  }
  textarea::placeholder {
    font-size: 14px !important;
    color: #CBCACA !important;
    padding-top: 5px;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px ;
    background-color: white;
    position: absolute;
    top: -12px;
    z-index: 1;
    right: 14px !important;
    padding: 0 !important;
  }
  label.main-label{
    font-weight: bold;
    font-size: 14px !important;
    color: rgba(0,0,0,0.6) !important;
  }

}
</style>
