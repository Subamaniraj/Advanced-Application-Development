import React from 'react';
import '../../assets/css/userLayout.css'; 

function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <header className="header">
        {/* Your header content goes here */}
        <h1>My App</h1>
        {/* You can add any other header content as needed */}
      </header>
      <nav className="navbar">
        {/* Your navigation bar content goes here */}
        <ul>
          <li><a href="/">Events</a></li>
          <li><a href="/bookingform">Booking</a></li>
          <li><a href="/venue">Venue</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
