<template>

  <FullCalendar
      :options="calendarOptions"
  />

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
  name: "calenderDashboard",
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
        businessHours: true,
        daysOfWeek:  [3,7],
        aspectRatio: 1.6,
        firstDay:6,
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
    this.calendarOptions.dayMinWidth='50px'
  }
}
</script>

<style>

.fc-daygrid-block-event .fc-event-time, .fc-daygrid-block-event .fc-event-title{
  font-size: 14px !important;
  text-align: center !important;
  width: 100%;
}
.fc-col-header-cell a{
  color: #385B72 !important;
  font-size: 12px;

}
.fc-daygrid-day-top a{
  font-size: 13px !important;
  font-weight: bold;
}

</style>
