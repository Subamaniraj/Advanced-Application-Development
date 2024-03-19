// VenueSelector.jsx

import React, { useState } from 'react';
import '../../assets/css/VenueSelector.css';

const VenueSelector = () => {
  const [selectedVenue, setSelectedVenue] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleVenueChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    // You can use selectedVenue and selectedCity to navigate to the next event page
    console.log('Selected Venue:', selectedVenue);
    console.log('Selected City:', selectedCity);
    // Navigate to the next event page
  };

  return (
    <div className="venue-selector">
      <h2>Select Venue and City</h2>
      <div className="form-group">
        <label htmlFor="venue">Select Venue:</label>
        <select id="venue" value={selectedVenue} onChange={handleVenueChange}>
          <option value="">Select Venue</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="city">Select City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          {/* Depending on the selected venue, you can populate the cities accordingly */}
          {selectedVenue === 'Tamil Nadu' && (
            <>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
            </>
          )}
          {selectedVenue === 'Kerala' && (
            <>
              <option value="Kochi">Kochi</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kozhikode">Kozhikode</option>
            </>
          )}
          {selectedVenue === 'Karnataka' && (
            <>
              <option value="Bangalore">Bangalore</option>
              <option value="Mysore">Mysore</option>
              <option value="Hubli">Hubli</option>
            </>
          )}
          {selectedVenue === 'Andhra Pradesh' && (
            <>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Vijayawada">Vijayawada</option>
            </>
          )}
        </select>
      </div>
      <button onClick={handleSubmit} disabled={!selectedVenue || !selectedCity} style={{color:'black'}}>Next</button>
    </div>
  );
};

export default VenueSelector;