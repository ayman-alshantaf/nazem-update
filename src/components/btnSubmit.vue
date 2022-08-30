<template>
  <div class="btn-submit-component">
    <v-btn class="btn-submit" block :color="colorValue">{{ valueBtn }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "btnSubmit",
  props: {
    valueBtn:{
      type:String
    },
    colorValue:{
      type:String,
      default:'#00B5AD'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-submit-component {
  .btn-submit {
    color: white;
    height: 45px
  }
}
</style>
<style lang="scss" >
.btn-submit-component {
  .v-btn__content {
    font-size: 16px !important;
    font-weight: 600;
  }
}
</style>
