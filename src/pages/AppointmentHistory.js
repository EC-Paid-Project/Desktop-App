import React, { useState,useMemo, useEffect } from 'react' 
import {BiSearchAlt} from 'react-icons/bi';
import { getAppointment ,deleteAppointment} from '../action/action';
import "./AppointmentHistory.css"
import NavBar from './NavBar';
const initialAppointments = [
    {
      id: 1,
      name: 'Alice Johnson',
      car_no: 'TE-343',
      date: '2023-08-26',
      time: '09:30 AM',
    },
    {
        id: 2,
        name: 'Bob Smith',
        car_no:"TE-343",
        date: '2023-08-27',
        time: '02:00 PM',
    },
    // Add more initial appointments
];
//get the appoinment with useMemo 



const 
AppointmentComponent = () => {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [searchTerm, setSearchTerm] = useState('');
  
  
  useEffect(() => {
    const fetchData = async () => {
        const a = await  getAppointment()
        if(a!=null){
          setAppointments(a.data)
        }
    };
    fetchData();
  }, []);
  


  const handleDelete = async(id) => {
    const a = await deleteAppointment(id);
    // const a = await deleteAppointment(id);
    console.log(a);
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.car_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <div className="appointments-list">
      <h1 >Appointments</h1>
        <div className='search-bar'>

      <span>
<BiSearchAlt size={25}/>
        </span>
      <input
        type="text"
        placeholder="Search by name, date, or time..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
      {filteredAppointments.length>=1? filteredAppointments.map((appointment) => (
        <div key={appointment.id} className="appointment">
          <h2>Appointment</h2>
          <p>Name: {appointment.name}</p>
          <p>Car NO: {appointment.car_no}</p>
          <p>Date: {appointment.date}</p>
          {/* <p>Time: {appointment.time}</p> */}
          <button onClick={() => handleDelete(appointment.id)}>Delete</button>
        </div>
      )):<div style={{width:"300px",margin:"auto"}}><h1>No Data Found</h1></div>}
    </div>
  );
};

export default AppointmentComponent;
