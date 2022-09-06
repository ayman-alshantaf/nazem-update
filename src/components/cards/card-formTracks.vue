<template>
  <div class="cardFormTracks">

    <div class="name-student">
      <div class="image">
        <img :src="imageStudent" >
      </div>
      <div class="name">
        <p>{{ name }}</p>
        <span>{{ className }}</span>
        <div v-if="status === 1" class="status-student">
          {{ statusStudent }}
        </div>
        <div v-if="status === 0" style="background-color: rgba(209,26,42,0.23);color: #D11A2A" class="status-student">
          {{ statusStudent }}
        </div>
        <div v-if="status === 2" style="background-color: rgba(56,91,114,0.26);color: #385B72" class="status-student">
          {{ statusStudent }}
        </div>
      </div>
    </div>

    <div class="form-tracks">
      <v-row>
        <v-col cols="12" style="position: relative">
          <select-input style="right: 8%" :label="'التنفيذ'" :name="'غير منفذ'" :items="['نعم','لا']"/>
        </v-col>
        <v-col cols="12" style="position: relative">
          <select-input style="right: 8%" :label="'حال عدم التنفيذ'" :name="'إنذار'" :items="['نعم','لا']"/>
        </v-col>
        <v-col cols="12" style="position: relative">
          <select-input style="right: 8%" :label="'إنذار'" :name="'نعم/لا'" :items="['نعم','لا']"/>
        </v-col>
        <v-col cols="12" style="position: relative">
          <select-input style="right: 8%" :label="'إضافة علي مقدار اليوم التالي'" :name="'نعم/لا'" :items="['نعم','لا']"/>
        </v-col>
        <v-col cols="12" style="position: relative">
          <select-input style="right: 8%" :label="'مقدار التنفيذ البند اليومي'" :name="'نصف وجه'" :items="['نعم','لا']"/>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
import SelectInput from "@/components/select-input";

export default {
  name: "cardFormTracks",
  components: {SelectInput},
  props: {
    name: {
      type: String
    },
    className: {
      type: String
    },
    statusStudent: {
      type: String
    },
    status: {
      type: Number
    },
    itemsPathArray: {
      type: Array
    },
    idCardStudent: {
      type: Number
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    showEditDelete: {
      type: Boolean,
      default: false
    },
    showBtnWarning: {
      type: Boolean,
      default: false
    },
    nameBtn: {
      type: String,
      default: 'تسميع'
    }
  },
  data() {
    return {
      imageStudent: require('@/assets/image/avatar/ebc8fbda-c735-4d9e-a8be-c5329afba775.png'),
      items: [
        'ربط ', 'مراجعه', 'تكرار',
      ],
    }
  }
}
</script>


<style lang="scss" scoped>
.cardFormTracks {
  border: 1px solid #D2D5E1;
  border-radius: 5px;
  padding: 20px 10px 20px 10px;

  .name-student {
    display: flex;
    justify-content: right;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);

    .image {
      width: 70px;
      padding-top: 6px;

      img {
        width: 100%;
      }
    }

    .name {
      width: 100%;
      position: relative;
      margin-right: 10px;


      p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 0;
      }

      span {
        font-size: 13px;
        color: #B4B4B4;
      }
    }
  }

  .status-student {
    position: absolute;
    left: 2%;
    top: -2%;
    background-color: #DBF7F0;
    text-align: center;
    color: #1FD0A3;
    font-size: 11px;
    padding: 10px 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-right: 10px;
  }


  .last-of-type {
    border-bottom: 1px solid rgba(143, 146, 161, 0.26);
    padding-top: 15px;
  }


}
</style>
<style lang="scss">
.cardFormTracks {
  .select-component label {
    right: 7%;
  }
}

</style>


