// components/EventForm.js

import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      eventName,
      eventDate,
      venue,
    };
    onAddEvent(newEvent);
    setEventName('');
    setEventDate('');
    setVenue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
      </label>
      <label>
        Event Date:
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
      </label>
      <label>
        Venue:
        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
