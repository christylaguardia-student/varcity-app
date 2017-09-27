import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.momentLocalizer(moment);

const events = [];
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);

export default function CalendarViewer() {
  return (
    <section>
      <BigCalendar
        events={events}
        views={allViews}
      />
    </section>
  );
}