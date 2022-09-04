<template>
  <div class="mobile-bar">
    <v-app-bar >
      <section class="mobile-bar-top" style="width: 100%">
        <v-container>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="min-width: 40%;display: flex;align-items: center">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <div class="title-page" style="margin-bottom: 7px">
                <span style="font-size: 17px">{{ titlePage }}</span>
              </div>
            </div>
            <div>
              <dropdown-menu/>
            </div>
          </div>

<!--            <v-col cols="3" class="pt-4">-->
<!--              <div class="search-page">-->
<!--                <search-input :placeholder="'ادخل الاسم'"/>-->
<!--              </div>-->
<!--            </v-col>-->
        </v-container>

      </section>
    </v-app-bar>
    <v-navigation-drawer
        right
        class="main-bar-right"
        v-model="drawer"
        fixed
        temporary
    >
      <v-list-item class="px-2">
        <div class="logo-bar">
          <img :src="images.logo">
          <div class="close-tap-right pl-2">
            <i class="fa fa-align-right" style="color: white" @click.stop="drawer = !drawer">
            </i>
          </div>
        </div>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <div class="section-link">
          <small class="title-section">المعلومات العامة</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.home" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

        <div class="section-link">
          <small class="title-section">الطلاب</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.students" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

        <div class="section-link">
          <small class="title-section">المقابلات</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.interviews" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>


        <div class="section-link">
          <small class="title-section">السجلات</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.records" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

        <div class="section-link">
          <small class="title-section">برامجنا</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.ourPrograms" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

        <div class="section-link">
          <small class="title-section">الفروع</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.branches" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

        <div class="section-link">
          <small class="title-section">أخري</small>
          <v-list-item :to="{path:link.urlPath}" link v-for="link in linkBarRight.other" :key="link.id">
            <i :class="link.icon"></i>
            <small>{{ link.title }} </small>
          </v-list-item>
        </div>

      </v-list>
    </v-navigation-drawer>
  </div>

</template>
<script>
import {mapState} from 'vuex'
import DropdownMenu from "@/components/topBar/component/dropdownMenu";

export default {
  name: "mobilerightBar",
  components: {DropdownMenu},
  data() {
    return {
      images: {
        logo: require('@/assets/image/logo/Group 75643.png'),
      },
      drawer: false,
    }

  },
  computed: {
    ...mapState(['linkBarRight', 'showBarRight','titlePage'])

  },

}
</script>

<style lang="scss" scoped>
.mobile-bar{
  .main-bar-right {

    .logo-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;

      img {
        width: 40%;
      }
    }

    .section-link {
      i {
        color: white;
      }

      small {
        color: white;
      }

      small.title-section {
        color: #B4B4B4;
        font-size: 14px;
        margin-bottom: 15px;
        margin-top: 20px;
        display: inline-block;
        padding-right: 10px;
      }

      i {
        font-size: 22px;
        margin-left: 13px;
      }
    }

  }
}

</style>

<style lang="scss">
.mobile-bar{
  .v-toolbar__content{
    padding: 0 !important;
  }
  .main-bar-right {

    .v-navigation-drawer__content {
      background-color: #385B72 !important;
      color: white;

      a {
        color: white;
        text-decoration: none;
        font-size: 19px;
      }

      .link {
        padding: 10px 0;

        i {
          font-size: 5px;
        }
      }
    }

    .v-navigation-drawer__content::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #5d5d5d;
      background-color: #5d5d5d;
    }

    .v-navigation-drawer__content::-webkit-scrollbar {
      width: 0px;
    }

    .v-navigation-drawer__content::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px #424242;
      background-color: #424242;
    }

    .v-list-item-title {
      font-size: 14px !important;
    }

    .v-list-item__prepend > .v-icon {
      margin-inline-end: 10px !important;
      font-size: 23px;
    }

    .v-list {
      padding: 0;
    }

  }
}



</style>

