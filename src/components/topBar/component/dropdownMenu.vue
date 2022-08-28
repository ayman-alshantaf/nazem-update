<template>
  <div class="dropdown-menu">
    <v-menu offset-y>
      <template  v-slot:activator="{ on, attrs }">
        <div class="main-container"  v-bind="attrs" v-on="on">
          <div class="image-avatar">
            <img :src="avatar" alt="avata">
          </div>
          <div class="name">
              <small>Ayman Alshantaf</small>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "dropdownMenu",
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    location: 'bottom',
    avatar:require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png')
  }),

}
</script>

<style lang="scss" scoped>
.dropdown-menu{
  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .image-avatar{
      width: 38px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      border: 1px solid #FFD100;
      border-radius: 50%;
      img{
        width: 100%;
      }
    }
    .name{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 5px;
      margin-right: 5px;
      color: #737373;
      font-size: 15px;

      i{
        margin-right: 2px;
      }
    }
  }

}
</style>
