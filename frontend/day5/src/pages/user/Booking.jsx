// components/BookingForm.js

import React, { useState } from 'react';

const BookingForm = ({ onAddBooking }) => {
  const [userName, setUserName] = useState('');
  const [venue, setVenue] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      userName,
      venue,
      eventDate,
    };
    onAddBooking(newBooking);
    setUserName('');
    setVenue('');
    setEventDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
      </label>
      <label>
        Venue:
        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />
      </label>
      <label>
        Event Date:
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
      </label>
      <button type="submit">Book Venue</button>
    </form>
  );
};

export default BookingForm;
