<template>
  <div class="date-customer">
        <v-menu v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <label class="custom-label">{{ label }}</label>
            <v-text-field
                v-model="date"
                :placeholder="namePlaceholder"
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
  </div>
</template>

<script>
export default {
  name: "date-customer",
  props: ['namePlaceholder','label'],
  data: () => ({
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>

<style lang="scss" scoped>
.date-customer {
  position: relative;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px;
    background-color: white;
    position: absolute;
    top: -12px;
    z-index: 50;
    right: 5%;
  }

  label.custom-label {
    font-size: 14px !important;
  }


}
</style>
<style lang="scss">
.date-customer{
    .v-text-field__slot{
      padding: 7px 0 !important;
    }
  .theme--light.v-input {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D2D5E1;
    border-radius: 5px;
  }

  .v-calendar-daily__interval-text {
    color: transparent !important
  }

  .v-text-field {
    padding: 0;
  }


  .v-input__prepend-outer {
    margin-right: 3px;
  }

.v-text-field__details{
  display: none;
}
  .theme--light.v-input {
    position: relative;
  }
  .v-input__prepend-outer {
    margin-right: 3px !important;
    position: absolute !important;
    left: 3% !important;

  }
  .v-input__append-outer .v-icon, .v-input__prepend-outer .v-icon{
    font-size: 20px !important;
    color: #385B72 !important;
  }
  .v-input--is-readonly{
    margin-top: 0px !important;
  }
  .v-input__slot input{
    color: #CBCACA !important;
    font-size: 13px !important;
    padding-right: 10px;
  }
}
</style>
