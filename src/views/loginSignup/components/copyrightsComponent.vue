<template>
  <section class="copyRight">
    <div class="main-container">
      <div class="image">
        <v-img :src="images.logo"></v-img>
      </div>
      <div class="copyRight">
        <i class="fa fa-copyright"></i>
        <span>جميع الحقوق محفوظة لبرامج النوعية </span>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "copyrightsComponent",
  data(){
    return{
      images: {
        logo: require('@/assets/image/logo/Group 75561.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.copyRight{
  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 50px;
    .image{
      width: 30%;
      margin-left: 30px;
    }
    .copyRight{
      span{
        font-size: 18px;
        color: #385B72;

      }
      i{
        margin-left: 10px;
      }

    }
  }
}

</style>
