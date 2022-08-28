<template>
  <div class="card-number">
    <h6>{{ title }}</h6>
    <h5>
      <counter-number :from="500" :to="number" />
    </h5>
    <div class="percent-container">
      <div style="display: flex">
        <small class="percent" v-if="percent >= 10" >
          {{ percent }}%+
          <i class="fa fa-long-arrow-up"  style="transform: rotate(30deg);margin-right: 5px"></i>
        </small>
        <small class="percent" v-if="percent < 10"  style="color: red">
          {{ percent }}%+
          <i class="fa fa-long-arrow-down"   style="transform: rotate(30deg);margin-right: 5px;"></i>
        </small>

      </div>
      <div class="chart-percent" v-show="viewShowChart">
        <slot></slot>
      </div>
    </div>
    <small v-show="showDiv" style="color: #777777"> مقارنة ب ٢٧ طالب سنة ٢٠٢١</small>


  </div>
</template>

<script>


import CounterNumber from "@/components/counterNumber";
export default {
  name: "cardNumber",
  components: {CounterNumber},
  props: {
    title: {
      type: String,
      default: "عدد الطلاب الاجمالي"
    },
    number: {
      type: Number,
      default: 9698
    },
    percent: {
      type: String,
      default: '+20.01%'
    },
    viewShowChart: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'fa fa-long-arrow-up',
    },
    showDiv: {
      type: Boolean,
      default: false
    },

  },

}
</script>

<style lang="scss" scoped>
.card-number {

  background-color: white;
  padding: 20px 15px 20px 0;
  border-radius: 10px;

  h6 {
    font-size: 16px;
    color: #202020;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 32px;
    color: #014271;
    margin-bottom: -2.5%;
    span{
      font-size: 35px !important;
    }

  }

  small {
    color: #04B78A;
    font-size: 14px;
  }

  .percent-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .chart-percent {
      width: 65%;
    }
  }
}
</style>
