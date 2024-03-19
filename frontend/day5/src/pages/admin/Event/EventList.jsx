// EventList.js

import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import AddEvent from './AddEvent';
import '../../../assets/css/EventList.css';

function EventList() {
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  useEffect(() => {
    const storedEvents = JSON.parse(sessionStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const addEventToList = (eventData) => {
    const updatedEvents = [...events, eventData];
    setEvents(updatedEvents);
    sessionStorage.setItem('events', JSON.stringify(updatedEvents));
    setShowEventForm(false);
  };

  const closeForm = () => {
    setShowEventForm(false);
  };

  return (
    <div className="event-list-container">
      {showEventForm && (
        <div className="event-form-overlay">
          <AddEvent addEventToList={addEventToList} closeForm={closeForm} />
        </div>
      )}
      <h2>Event List</h2>
      {!showEventForm && (
        <button className='new-event' onClick={() => setShowEventForm(true)}>New Event</button>
      )}
      <div className='card-container'>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
