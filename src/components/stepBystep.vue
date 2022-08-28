<template>
  <div class="step-by-step">

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab ripple href='#tab-1'>
        نوع السؤال
        <div class="dote dote-one">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
      <v-tab ripple href='#tab-2'>
        إضافة السؤال
        <div class="dote dote-tow">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item value='tab-1'>
        <v-card-text>
          <slot name="section-one"></slot>
          <v-btn class="btn-form" block color="#00B5AD" @click="changeTabNext()">{{ valueBtn }}</v-btn>
        </v-card-text>
      </v-tab-item>
      <v-tab-item value='tab-2'>
        <v-card-text>
          <slot name="section-tow"></slot>
          <v-btn class="btn-form" color="#00B5AD" block>اضافة سؤال</v-btn>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "stepBystep",
  data() {
    return {
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tab: 'tab-1',
      valueBtn: 'التالي',
      valueBorder:'50%',
      backgroundColorDote:'#E6E6E6'
    }
  },
  methods: {
    changeTabNext() {
      this.tab = 'tab-2'
      this.valueBorder = '100%'
      this.backgroundColorDote = '#00B5AD'
    },
    // changeTabPrev() {
    //   this.tab = 'tab-1'
    //   this.valueBtn = 'التالي'
    //   this.valueBorder = '50%'
    //   this.backgroundColorDote = '#E6E6E6'
    // }
  },
}
</script>

<style lang="scss" scoped>
.step-by-step {
  .dote {
    position: absolute;
    bottom: -27%;
    z-index: 999;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;


    i {
      font-size: 19px;
      color: white;
      margin-left: 1px;
    }
  }
  .dote-one {
     background-color: #00B5AD;
  }
  .dote-tow {
    background-color: v-bind('backgroundColorDote');
  }
  .btn-form{
    color: white;
  }
}
</style>
<style lang="scss">
.step-by-step {
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }

  .v-tabs-slider-wrapper {
    color: #00B5AD;
  }


  .v-slide-group__content {
    border-bottom: 1.5px solid rgba(180, 180, 180, 0.47);
  }
  .v-slide-group__content:before{
    content: '';
    width: v-bind('valueBorder') ;
    height: 3px;
    background-color: #00B5AD;
    position: absolute;
    bottom: -4%;
    transition: all .2s ease-in-out;
  }

  .v-slide-group__wrapper {
    position: relative;
    overflow: inherit !important;
    contain: inherit;
  }

  .v-tabs-slider{
    display: none;
  }
  .v-tab--active ,.v-tab{
    font-size: 14px !important;
    padding-bottom: 20px;
    font-weight: bold !important;
  }
}
</style>
