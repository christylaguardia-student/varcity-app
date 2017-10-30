import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.momentLocalizer(moment);

// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);
let allViews = ['month'];
const today = new Date();
const year = today.getYear();
const month = today.getMonth();
const eventList = [
  {
    'title': 'Competition',
    'allDay': true,
    'start': new Date(year, month, 0),
    'end': new Date(year, month, 1)
  },{
    'title': 'Game',
    'start': new Date(year, month, 7),
    'end': new Date(year, month, 10)
  },{
    'title': 'Game',
    'start': new Date(year, month, 12),
    'end': new Date(year, month, 12)
  },{
    'title': 'Game',
    'start': new Date(year, month, 27),
    'end': new Date(year, month, 27)
  }
];

export default function CalendarViewer() {
  return (
    <section>
      <BigCalendar
        events={eventList}
        views={allViews}
      />
    </section>
  );
}