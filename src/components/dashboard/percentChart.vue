<template>
<!--section char dashboard in counter number-->
  <v-container fluid>
    <v-sparkline
        :fill="fill"
        :gradient="gradientsValue"
        :line-width="width"
        :padding="padding"
        :smooth="radius || false"
        :value="value"
        auto-draw
    ></v-sparkline>
  </v-container>
</template>

<script>
const gradients = [
  ['#1FD0A3' ,'rgba(31,208,163,0.41)' , 'rgba(255,255,255,0.66)'],
]
export default {
  name: "percentChart",
  props:['gradientsValue'],
  data: () => ({
    fill: true,
    selectedGradient: gradients[0],
    gradients,
    padding: 1,
    radius: 10,
    value: [0, 2, 5, 9, 5,8,10, 1, 0,9, 1, 8, 2,  0],
    width: 5,
  }),
}
</script>

<style scoped>

</style>
