<template>
  <number
      ref="number1"
      :from="from"
      :to="to"
      :format="theFormat"
      :duration="5"
      easing="Power1.easeOut"/>

</template>

<script>
export default {
  name: "counterNumber",
  props:['from','to'],
  methods: {
    theFormat(number) {
      return number.toFixed(0);
    },
    playAnimation() {
      this.$refs.number2.play()
    }
  }
}
</script>

<style scoped>

</style>
