// components/BookingListComponent.jsx

import React from 'react';

const BookingListComponent = ({ bookings }) => {
  return (
    <div className="booking-list">
      <h2>Booking List</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <div>User Name: {booking.userName}</div>
            <div>Venue: {booking.venue}</div>
            <div>Event Date: {booking.eventDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingListComponent;
