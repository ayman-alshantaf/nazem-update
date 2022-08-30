<template>
  <!-- start page follow up students-->
  <section class="follow-up-student">
    <v-main>
      <div class="container--fluid">
        <!--start section tabs top-->
        <div class="section-tabs">
          <!--content tabs-->
          <tabs-custom :items="items">
            <!--  content tabs 'card follow student'-->
            <div class="all-card">
              <v-row>
                <v-col v-for="student in allStudents" :key="student.id" cols="12" lg="4" md="6">
                  <card-follow :name="student.name"
                               :class-name="student.className"
                               :saveStudent="student.saveStudent"
                               :description="student.description"
                               :score="student.score"
                               :passing-score="student.passingScore"
                               :status="student.status"
                               :show-follow-student="true"
                               :show-save-student="true"/>
                </v-col>
              </v-row>
            </div>
          </tabs-custom>
        </div>
        <!--end section tabs top-->
        <!--start section pagination-->
        <div class="section-pagination">
          <pagination-components/>
        </div>
        <!--end section pagination-->
      </div>
    </v-main>
  </section>
  <!-- end page follow up students-->

</template>

<script>
import TabsCustom from "@/components/tabsCustom";
import CardFollow from "@/components/cards/cardFollow";
import PaginationComponents from "@/components/dashboard/paginationComponents";
import {mapMutations, mapState} from "vuex";

export default {
  name: "FollowUpStudentsView",
  components: {PaginationComponents, CardFollow, TabsCustom},
  data() {
    return {
      items: [
        'الحفظ', 'اتقان', 'سماع', 'تكرار', 'ربط', 'مراجعه', 'تسميع', 'اختبار', 'تلاوة', 'سرد اسبوعي',
      ],
    }
  },
  computed: {
    ...mapState(['allStudents'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle(' المتابعة الطلاب اليومية')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.follow-up-student {
  background-color: $background-main-page;
  padding: 40px 20px;

  .container--fluid {
    border-radius: 15px;
    background-color: white;
    padding: 15px
  }

  .all-card {
    padding-top: 25px;
  }
}

</style>
