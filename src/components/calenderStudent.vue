<template>
  <div>
    <FullCalendar
        :options="calendarOptions"
    />

  </div>


</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

export default {
  name: "calenderStudent",
  components: {

    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin,],
        initialView: 'dayGridMonth',
        dayMinWidth:'50px',
        eventBackgroundColor:'#00B5AD',
        headerToolbar:{
          start: '', // will normally be on the left. if RTL, will be on the right
          center: '',
          end: '' // will normally be on the right. if RTL, will be on the left
        },
        daysOfWeek:  [3,7],
        aspectRatio: 1.6,
        firstDay:6,
        allDayMaintainDuration:false,
        events: [
          {
            title: 'عيد الاضحي',
            start: '2022-08-02',
          },
          {
            title: 'عيد الاضحي',
            start: '2022-08-03'
          }
        ]
      },
    }
  },

  beforeMount() {
    this.calendarOptions.dayMinWidth='50px';
  }

}
</script>

<style >
.fc-daygrid-day-top:before{
  content: '+';
  background-color: #D2D5E1;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 8px;
  top: 5px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 8px;
  padding-left: 2px;
  color: white;
}
</style>
