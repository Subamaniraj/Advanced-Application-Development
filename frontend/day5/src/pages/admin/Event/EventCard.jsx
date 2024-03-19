// EventCard.js
import React from 'react';
import '../../../assets/css/EventCard.css'
function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.eventImage} alt={event.eventName} />
      <h3>{event.eventName}</h3>
      <p>{event.eventDescription}</p>
      <p>Date: {event.eventDate}</p>
    </div>
  );
}

export default EventCard;
