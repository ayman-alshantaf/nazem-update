<template>
  <div class="step-by-step-Tracks">

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab ripple href='#tab-1'>
        البيانات العامة
        <div class="dote dote-one">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
      <v-tab ripple href='#tab-2'>
        القوانين الادارية
        <div class="dote dote-tow">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
      <v-tab ripple href='#tab-3'>
        الفترات
        <div class="dote dote-three">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
      <v-tab ripple href='#tab-4'>
        البنود
        <div class="dote dote-four">
          <i class="fa fa-dot-circle-o"></i>
        </div>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item value='tab-1'>
        <v-card-text>
          <slot name="section-one"></slot>
          <v-btn class="btn-form" block color="#00B5AD" @click="changeTabNext2()">{{ valueBtn }}</v-btn>
        </v-card-text>
      </v-tab-item>
      <v-tab-item value='tab-2'>
        <v-card-text>
          <slot name="section-tow"></slot>
          <div style="display: flex">
            <v-btn  class="ml-4" @click="changeTabPrev2()" style="background-color: transparent;color: #00B5AD;border: 1px solid #00B5AD;box-shadow: none">السابق</v-btn>
            <v-btn class="btn-form ml-5" color="#00B5AD" block @click="changeTabNext3()">{{ valueBtn }}</v-btn>
          </div>

        </v-card-text>
      </v-tab-item>
      <v-tab-item value='tab-3'>
        <v-card-text>
          <slot name="section-three"></slot>
          <div style="display: flex">
            <v-btn  class="ml-4 mt-5" @click="changeTabPrev3()" style="background-color: transparent;color: #00B5AD;border: 1px solid #00B5AD;box-shadow: none">السابق</v-btn>
            <v-btn class="btn-form mt-5" color="#00B5AD" block @click="changeTabNext4()">{{ valueBtn }}</v-btn>
          </div>
        </v-card-text>
      </v-tab-item>
      <v-tab-item value='tab-4'>
        <v-card-text>
          <slot name="section-four"></slot>
          <div style="display: flex">
            <v-btn  class="ml-4 mt-6" @click="changeTabPrev4()" style="background-color: transparent;color: #00B5AD;border: 1px solid #00B5AD;box-shadow: none">السابق</v-btn>
            <v-btn class="btn-form mt-6" color="#00B5AD" block>اضافة</v-btn>
          </div>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "stepByStepTracks",
  data() {
    return {
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tab: 'tab-1',
      valueBtn: 'التالي',
      valueBorder: '40%',
      backgroundColorDote2: '#E6E6E6',
      backgroundColorDote3: '#E6E6E6',
      backgroundColorDote4: '#E6E6E6',
    }
  },
  methods: {
    changeTabNext2() {
      this.tab = 'tab-2'
      this.valueBorder = '67%'
      this.backgroundColorDote2 = '#00B5AD'
    },
    changeTabNext3() {
      this.tab = 'tab-3'
      this.valueBorder = '90%'
      this.backgroundColorDote3 = '#00B5AD'
    },
    changeTabNext4() {
      this.tab = 'tab-4'
      this.valueBorder = '100%'
      this.backgroundColorDote4 = '#00B5AD'
    },
    changeTabPrev2() {
      this.tab = 'tab-1'
      this.valueBorder = '40%'
      this.backgroundColorDote2 = '#E6E6E6'
    },
    changeTabPrev3() {
      this.tab = 'tab-2'
      this.valueBorder = '67%'
      this.backgroundColorDote3 = '#E6E6E6'
    },
    changeTabPrev4() {
      this.tab = 'tab-3'
      this.valueBorder = '90%'
      this.backgroundColorDote4 = '#E6E6E6'
    },
  },
}
</script>

<style lang="scss" scoped>
.step-by-step-Tracks {
  .dote {
    position: absolute;
    bottom: -27%;
    z-index: 1;
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
    background-color: v-bind('backgroundColorDote2');
  }

  .dote-three {
    background-color: v-bind('backgroundColorDote3');
  }

  .dote-four {
    background-color: v-bind('backgroundColorDote4');
  }

  .btn-form {
    color: white;
  }
}
</style>
<style lang="scss">
.step-by-step-Tracks {
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }

  .v-tabs-slider-wrapper {
    color: #00B5AD;
  }


  .v-slide-group__content {
    border-bottom: 1.5px solid rgba(180, 180, 180, 0.47);
  }

  .v-slide-group__content:before {
    content: '';
    width: v-bind('valueBorder');
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

  .v-tabs-slider {
    display: none;
  }

  .v-tab--active, .v-tab {
    font-size: 14px !important;
    padding-bottom: 20px;
    font-weight: bold !important;
  }
}
</style>
