<template>
  <section class="logo-image">
    <v-img class="image" :src="images.logo" alt="logo"></v-img>
  </section>
</template>
<script>
export default {
  name: "headerComponent",
  data() {
    return {
      images: {
        logo: require('@/assets/image/logo/logo.png')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.logo-image {
  width: 100%;
  margin-bottom: 10px;
.image {
  width: 50%;

}
}
</style>
