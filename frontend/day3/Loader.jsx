// Loader.js

import React from 'react';
import '../../assets/css/loader.css'; // Import your loader styles

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
