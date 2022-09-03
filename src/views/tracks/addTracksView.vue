<template>
  <section class="add-tracks">
    <v-main>
      <div class="container--fluid" style="border-radius: 15px; background-color: white; padding: 15px">

        <step-by-step-tracks>
          <template v-slot:section-one>
            <div class="createQuestion-one">
              <div class="mt-3">
                <input-text :label-top="'أكتب هنا إسم المسار'" :placeholder="'أكتب هنا إسم المسار'"/>
              </div>
              <div class="mt-6">
                <date-customer :label="'مدة المسار'" :name-placeholder="'مدة المسار'"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'اجزاء حفظ الطلاب '" :name="'أجزاء حفظ الطلاب'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'البند الرئيسي للمسار'" :name="'الاتقان'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'عدد الفترات'" :name="'عدد الفترات'" :items="['نعم','لا']"/>
              </div>
              <div>
                <text-area :value-label="'أكتب هنا نص التعهد'"/>
              </div>
            </div>
          </template>
          <template v-slot:section-tow>
            <div class="createQuestion-tow" style="height: 50vh">
              <div class="mt-6" style="position: relative">
                <select-input :label="'هل يوجد تكرا اخطاء '" :name="'نعم'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6">
                <input-text :label-top="'عدد تكرار الاخطاء'" :placeholder="'10 مرة '"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'الفروع'" :name="'أختر الفروع'" :items="['نعم','لا']"/>
              </div>
            </div>
          </template>
          <template v-slot:section-three>
            <div class="createQuestion-three">
              <v-row>
                <v-col v-for="student in allInterview" :key="student.id"  cols="12" lg="4" md="6">
                  <card-branches
                      :name="'الفترة الأولي'"
                      :items-path-array="student.detailsTracks"
                      :path-time-section="true"
                      :text-card="false"
                      :show-btn="false"
                      :avatar-branch="false"
                      :show-edit-delete="true"
                      :check-icon-show="false"
                      :path-line="false"
                      :path-link="'detailsBranches'"
                  />
                </v-col>
              </v-row>
            </div>
          </template>
          <template v-slot:section-four>
            <div class="createQuestion-four">
              <div class="mt-6">
                <input-text :label-top="'مقدار الفترة'" :placeholder="'أكتب هنا مقدار الفترة'"/>
              </div>
              <div class="mt-6">
                <input-text :label-top="'مقدار البند'" :placeholder="'مقدار البند'"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'بداية البند '" :name="'مباشر '" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'التنفيد'" :name="'منفذ'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-3">
                <input-text :label-top="'درجة البند'" :placeholder="'درجة البند'"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'حال عدم التنفيذ'" :name="'انذار'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'إنذار'" :name="'نعم'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'إضافة علي مقدار اليوم التالي'" :name="'نعم'" :items="['نعم','لا']"/>
              </div>
              <div class="mt-6" style="position: relative">
                <select-input :label="'مقدار التنفيذ البند اليومي'" :name="'نصف وجه'" :items="['نعم','لا']"/>
              </div>
            </div>
          </template>

        </step-by-step-tracks>
      </div>
    </v-main>
  </section>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import StepByStepTracks from "@/components/stepByStepTracks";
import SelectInput from "@/components/select-input";
import InputText from "@/components/input-text";
import DateCustomer from "@/components/date-customer";
import TextArea from "@/components/textArea";
import CardBranches from "@/components/cards/card-branches";


export default {
  name: "addTracksView",
  components: {
    CardBranches,
    TextArea,
    DateCustomer,
    InputText,
    SelectInput,
    StepByStepTracks,

  },
  data() {
    return {
      items: [
        'الحفظ', 'اتقان', 'سماع', 'تكرار', 'ربط', 'مراجعه', 'تسميع', 'اختبار', 'تلاوة', 'سرد اسبوعي',
      ],
      styleSearch: {
        backgroundColor: 'transparent',
        border: "1px solid #E2E2EA",
        borderRadius: "10px",

      },
    }
  },
  computed: {
    ...mapState(['allInterview'])
  },
  methods: {
    ...mapMutations(['pageTitle'])
  },
  beforeMount() {
    this.pageTitle('الاذونات')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.add-tracks {
  background-color: $background-main-page;
  padding: 40px 15px;

  .date-customer-component label {
    right: 15%;
  }
}

</style>
<style lang="scss">

.add-tracks {
  label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px !important;
    right: 1%;
    z-index: 1;
  }

  .date-customer-component label {
    right: 1%;
    z-index: 1;
  }

  .select-component label {
    top: -12px;
    right: 1%;
    z-index: 1;
  }

  .v-input__slot input {
    padding-right: 12px;
  }

 .v-input__prepend-outer {
    left: 1.5% !important;
  }
  .v-text-field__slot .v-label{
    left: auto !important;
    color:#CBCACA ;
  }
  .date-customer-component .v-text-field__slot{
    padding-bottom: 0 !important;
  }
}
</style>
