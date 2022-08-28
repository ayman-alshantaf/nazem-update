<template>
  <section class="review-up-student">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">
        <div class="top-bar-search">
          <div class="search-section">
            <form>
              <div class="search">
                <search-input :style="styleSearch"></search-input>
                <div class="input-search">
                  <btn-search/>
                </div>
              </div>
            </form>
          </div>
          <div class="select-way">
            <select-option-customer :items="itemsSelected" :name-section="'طريقة التحديد'"/>
          </div>
        </div>
        <div class="all-card">
          <v-row>
            <v-col v-for="student in allStudents" :key="student.id" cols="12" lg="4" md="6" >
              <card-follow
                  :name="student.name"
                  :class-name="student.className"
                  :saveStudent="student.saveStudent"
                  :description="student.description"
                  :score="student.score"
                  :passing-score="student.passingScore"
                  :status="student.status"
                  :review-student="student.reviewStudent"
                  :show-review-student="true"
                  :status-review="student.statusReview"
              />
            </v-col>
          </v-row>
        </div>
        <pagination-components/>
      </div>
    </v-main>
  </section>
</template>

<script>
import PaginationComponents from "@/components/dashboard/paginationComponents";
import CardFollow from "@/components/cards/cardFollow";
import {mapMutations, mapState} from "vuex";
import SearchInput from "@/components/search-input";
import BtnSearch from "@/components/btnSearch";
import SelectOptionCustomer from "@/components/select-option-customer";

export default {
  name: "reviewStudentView",
  components: {SelectOptionCustomer, BtnSearch, SearchInput, CardFollow, PaginationComponents},
  data() {
    return {
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",
      },
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
      itemsSelected: [
        { title: 'الكل' },
        { title: 'تم المراجعه' },
        { title: 'لم يتم المراجعه' },
      ],
    }
  },
  computed:{
    ...mapState(['allStudents'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('المراجعة')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.review-up-student {
  background-color: $background-main-page;
  padding: 40px 20px;

  .top-bar-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 880px) {
      flex-direction: column;
    }

    .search-section {
      width: 60%;
      @media only screen and (max-width: 880px) {
        width: 100%;
      }

      .search {
        display: flex;
        align-items: center;
        padding: 12px 0;

        button {
          border: 1px solid #00B5AD;
          padding: 12px 50px;
          font-size: 14px;
          border-radius: 10px;
          color: #00B5AD;
          margin-right: 20px;
        }
      }
    }

  }

}
</style>
