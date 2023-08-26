import React from 'react';
import "./choose.css"
import { Link } from 'react-router-dom';

function Choose() {
  return (
    <div className="page-container">
      <div className="buttons-container">
        <Link to="/book-appointment" className="button">
          Book Appointment
        </Link>
        
        <div className="separator">---------------------------------or---------------------------------- </div>
        <Link to="/enter-data" className="button">
          Enter Data
        </Link>
      </div>
      <div className="data-entry-container">
        {/* Your data entry form or components go here */}
      </div>
    </div>
  );
}

export default Choose;
