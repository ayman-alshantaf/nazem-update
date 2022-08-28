<template>
  <div class="text-center">
    <v-pagination
        v-model="page"
        :length="12"
        :total-visible="7"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "paginationComponents",
  data() {
    return {
      page: 1,
    }
  },
}
</script>

<style scoped>
.text-center {
  background-color: white;
  padding: 30px 0;
}

</style>
<style lang="scss">
.theme--light.v-pagination .v-pagination__item{
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: #7E84A3 !important;
  font-weight: bold !important;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: #FFFFFF !important;
  background-color: #385B72 !important;
}
.theme--light.v-pagination .v-pagination__navigation{
  &[aria-label="Previous page"]{
    .v-icon:before{
      content: "\F0142" !important;
      font-size: 35px;
      color: #7E84A3;
    }
     background-color: transparent !important;
    outline: none !important;
    border: none !important;
    box-shadow: none  !important;
   }
}
.theme--light.v-pagination .v-pagination__navigation{
  &[aria-label="Next page"]{
    .v-icon:before{
      content: "\F0141" !important;
      font-size: 35px;
      color: #7E84A3;

    }
    background-color: transparent !important;
    outline: none !important;
    border: none !important;
    box-shadow: none  !important;
  }
}
</style>
