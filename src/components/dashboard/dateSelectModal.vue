  <template>
    <v-row class="date-pickers">

      <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      <v-spacer></v-spacer>
    </v-row>
  </template>


<script>
export default {
  name: "dateSelectModal",
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),

}
</script>

<style lang="scss" >
.date-pickers{
  .theme--light.v-input input, .theme--light.v-input textarea {
    font-size: 18px;
    font-weight: bold;
    color: black !important;
  }
  .v-input__icon i{
    font-size: 18px;
    font-weight: bold;
    color: black !important;
  }
}

</style>
