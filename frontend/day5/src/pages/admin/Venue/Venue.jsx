// components/VenueForm.js

import React, { useState } from 'react';

const VenueForm = ({ onAddVenue }) => {
  const [venueName, setVenueName] = useState('');
  const [venueLocation, setVenueLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVenue = {
      id: Date.now(),
      name: venueName,
      location: venueLocation,
    };
    onAddVenue(newVenue);
    setVenueName('');
    setVenueLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Venue Name:
        <input type="text" value={venueName} onChange={(e) => setVenueName(e.target.value)} required />
      </label>
      <label>
        Location:
        <input type="text" value={venueLocation} onChange={(e) => setVenueLocation(e.target.value)} required />
      </label>
      <button type="submit">Add Venue</button>
    </form>
  );
};

export default VenueForm;
