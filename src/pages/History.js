import React, { useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import './History.css'; 
import NavBar from './NavBar';// Import your custom CSS file

const History = () => {
    // src/dummyData.js
const dummyData = [
    {
      car_no: 'ABC123',
      name: 'John Doe',
      date: '2023-08-25',
      time: '10:00 AM',
      requested_fuel: '50 liters',
    },
    {
      car_no: 'XYZ789',
      name: 'Jane Smith',
      date: '2023-08-24',
      time: '2:30 PM',
      requested_fuel: '35 liters',
    },
    // Add more dummy data as needed
  ];
  
  
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = dummyData.filter(
    (entry) =>
      entry.car_no.includes(searchTerm) || entry.name.includes(searchTerm)
  );

  return (
    <div className="history-page">
      <h1>Fuel History</h1>
      <NavBar/>
      <div className="search-bar" >
        <span><BiSearchAlt size={25}/></span><input
          type="text"
          placeholder="Search by car number or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>Car No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Requested Fuel</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length>=1? filteredData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.car_no}</td>
                <td>{entry.name}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.requested_fuel}</td>
              </tr>
            )):<tr><td colSpan="5">No Data Found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
