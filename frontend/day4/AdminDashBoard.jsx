import React, { useState, useEffect } from 'react';
import BookingListComponent from './BookingList';
import '../../assets/css/AdminDashBoard.css';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminDashboard = () => {
  const [bookingData, setBookingData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    const storedEventData = JSON.parse(sessionStorage.getItem('events')) || [];
    const storedUserData = JSON.parse(sessionStorage.getItem('userData')) || [];

    setBookingData(storedBookingData);
    setEventData(storedEventData);
    setUserData(storedUserData);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Calculate the counts of bookings, events, and users
  const bookingCount = bookingData.length;
  const eventCount = eventData.length;
  const userCount = userData.length;

  return (
    <div className='adminpage' >
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <div className="count-boxes-container">
          {/* Left count box */}
          <div className="count-box">
            <h3>Bookings</h3>
            <div className="count">{bookingCount}</div>
          </div>
          {/* Middle count box */}
          <div className="count-box">
            <h3>Events</h3>
            <div className="count">{eventCount}</div>
          </div>
          {/* Right count box */}
          <div className="count-box">
            <h3>Users</h3>
            <div className="count">{userCount}</div>
          </div>
        </div>
        <div className="booking-list-section">
          <BookingListComponent bookings={bookingData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
