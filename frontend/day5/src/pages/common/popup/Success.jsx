import React from 'react';
import '../../../assets/css/popup.css';
const SuccessPopup = ({ message }) => {
  return (
    <div className="success-popup">
      <p>{message}</p>
    </div>
  );
};

export default SuccessPopup;
