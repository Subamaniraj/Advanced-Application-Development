import React from 'react';
import '../../../assets/css/popup.css';

const WarningPopup = ({ message }) => {
  return (
    <div className="warning-popup">
      <p>{message}</p>
    </div>
  );
};

export default WarningPopup;
