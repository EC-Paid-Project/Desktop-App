import React from 'react';
import './navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <Link to="/appointment">Book Appointment</Link>
      <Link to="/entry">Entry Fueling Detail</Link>
      <Link to="/appointmentHistory">Appointments</Link>
      <Link to="/history">History</Link>
      <div className="mobile-menu">
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
