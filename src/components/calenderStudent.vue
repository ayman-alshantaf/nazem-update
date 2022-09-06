<template>
  <div class="calenderStudent">
    <FullCalendar :options="calendarOptions"/>

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
        dayMinWidth: '50px',
        eventBackgroundColor: '#00B5AD',
        headerToolbar: {
          start: '',
          center: '',
          end: 'prev,title,next'
        },
        daysOfWeek: [3, 7],
        aspectRatio: 1.2,
        firstDay: 6,
        allDayMaintainDuration: false,
        events: [
          {
            title: 'عيد الاضحي',
            start: '2022-09-11',
            className: "adha",
          },
          {
            title: 'عيد الاضحي',
            start: '2022-09-12',
            className: "adha",

          },
          {
            title: 'عيد الاضحي',
            start: '2022-09-13',
            className: "adha",

          },
          {
            title: 'عيد الاضحي',
            start: '2022-09-14',
            className: "adha",

          },
          {
            daysOfWeek: [ '5' ],
            title: 'إجازة أسبوعية',
            className: "Friday",
          },
        ]
      },
    }
  },

  beforeMount() {
    this.calendarOptions.dayMinWidth = '50px';
  }

}
</script>

<style lang="scss">
.calenderStudent {
  .fc-daygrid-day-top:before {
    content: '+';
    background-color: #D2D5E1;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 5px;
    top: 3px;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
    padding-bottom: 8px;
    padding-left: 2px;
    color: white;
    opacity: 0.8;
    transition: all .3s ease-in-out;
  }

  td.fc-daygrid-day {
    cursor: pointer;
  }
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    margin-top: 25px;
  }
  .fc-daygrid-event{
    background-color: #00C8AE !important;
    opacity: 0.8;
    min-height: 40px;
    border: none !important;
    display: flex;
    align-items: center;
  }
  .fc-event-main{
    width: 100%;
  }
  .Friday{
    background-color: #411FD0 !important;
    opacity: 0.6;
    color: #411FD0;
  }
  .fc .fc-toolbar.fc-header-toolbar{
    min-width: 37%;
    position: absolute;
    top: 59px;
    display: flex;
    margin-top: 8px;
    margin-bottom: 10px;
    @media only screen and (max-width: 1150px) {
      left: 15px;
      justify-content: left;
    }
    @media only screen and (max-width: 600px) {
      position:unset;
      justify-content: center;
      margin-bottom: 30px;
    }
  }
  .fc-toolbar-chunk div{
    display: flex;
    align-items: center;
  }
  //.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
  //  position: absolute;
  //  top: 0;
  //  left: -173px;
  //}
  .fc .fc-toolbar-title{
    font-size: 20px;
    margin-top: 10px;
  }
  .fc .fc-button-primary{
    background-color: transparent !important;
    border: none !important;
    color: #CFD5DA;
    padding: 0;
  }
  .fc .fc-button-primary:focus{
    border: none;
  }

  .fc .fc-button-primary:active{
    border: none;
    box-shadow: none;
    color: black;
  }
  .fc .fc-button-primary:focus{
    border: none !important;
    box-shadow: none !important;
    color: black;
    outline: none !important;
  }
}

</style>
