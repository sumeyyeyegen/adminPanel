import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  return (
    <div className="container">
    <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin,timeGridPlugin,listPlugin]}
      initialView="dayGridMonth"
      events={[{ title: "today's event", date:new Date() }]}
      weekends={true}
      selectable={true}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      />
      </div>
  )
}

export default Calendar
