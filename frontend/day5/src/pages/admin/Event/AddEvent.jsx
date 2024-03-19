import React, { useState } from 'react';
import '../../../assets/css/AddEvent.css';
import SuccessPopup from '../../common/popup/Success'; // Import the SuccessPopup component
import WarningPopup from '../../common/popup/Warning'; // Import the WarningPopup component

function AddEvent({ addEventToList, closeForm }) {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventImage: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setEventData({ ...eventData, eventImage: reader.result });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.eventName && eventData.eventDescription && eventData.eventDate) {
      addEventToList(eventData);
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        closeForm();
      }, 3000); // Hide success popup after 3 seconds
    } else {
      setShowWarningPopup(true);
      setTimeout(() => {
        setShowWarningPopup(false);
      }, 3000); // Hide warning popup after 3 seconds
    }
  };

  return (
    <div className="add-event-container">
      {showSuccessPopup && <SuccessPopup message="Event added successfully!" />}
      {showWarningPopup && <WarningPopup message="Please fill in all fields." />}
      <button className="close-btn" onClick={closeForm}>
        {/* Cross icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit} className="add-event-form">
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Event Description:
          <textarea
            name="eventDescription"
            value={eventData.eventDescription}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Event Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
