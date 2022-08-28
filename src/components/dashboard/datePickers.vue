<template>
  <v-row justify="center" dir="ltr" >
    <v-date-picker v-model="picker" color="rgba(232, 241, 247, 0.72)" width="100%"></v-date-picker>
  </v-row>
</template>

<script>
export default {
  name: "datePickers",
  data() {
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
}
</script>

<style scoped>

</style>
<style lang="scss">
.v-application .justify-center{
  justify-content: left !important;
}
.v-picker__body ,.v-application .primary{
  background-color: rgba(232, 241, 247, 0.72) !important;
  color: white !important;

}
.v-date-picker-title{
  color: #385B72;
  text-align: center !important;
}
.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{
  text-align: center;
}
 .v-date-picker-title__year{
  text-align: center;
}
.v-date-picker-title{
  display: block;
}
.v-date-picker-table{
  .v-btn__content{
    font-size: 15px !important;
    font-weight: bold;
  }
  .v-btn.v-btn--active{
    color: #385B72 !important;
  }
  .v-date-picker-table__current{
    color: #00B5AD !important;
  }
}
</style>

