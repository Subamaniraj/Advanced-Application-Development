import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/NotFound.css'; // Import your CSS file

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/landingPage">Go back to Home</Link>
  </div>
);

export default NotFound;
