import React, { useState } from 'react';
import NavBar from './NavBar';
import Time from './Time';
import './Forms.css';
import {postAppointment} from "../api/index"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function AppointmentForm() {


  const [time, setTime] = useState(null);
  const navigate = useNavigate();
  const initialFormData={
    name: '',
    email: '',
    phone_no: '',
    car_no: '',
    date: '',
    gas: '',
  }
  const [formData, setFormData] = useState(initialFormData);
  const handleReset = () => {
    setFormData(initialFormData);

  };

  function areAllValuesEmpty(formData) {
    for (const value of Object.values(formData)) {
      if (value == '' || value == null ) {
        return false; // At least one value is not empty
      }
    }
    return true; 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    setFormData({...formData,time:time})
    if(!areAllValuesEmpty(formData) || new Date(formData.date) < new Date()){
      toast.error('There is something wrong.'); 
      return
    }
    
    toast.success('Appointment booked successfully.');
    try{
      const a=await postAppointment({...formData,date:formData.date+" "+time});
      // const a=await getAppointment();
      console.log(a);

    }catch{

    }
    // console.log(formData);
    // navigate('/');
  };

  return (
    <div className="outer">

      <h1 className="center underline">Appointment Form</h1>
      <hr className="full" />
      
      <div className="main">
        <div className="container">
          <div className="entry-content">
            <div className="entry-img">
              <img
                src="https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>

            <div className="entry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="phone_no">Phone Number</label>
                    <input
                      type="tel"
                      name="phone_no"
                      id="phone_no"
                      value={formData.phone_no}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="car_no">Car Number</label>
                    <input
                      type="text"
                      name="car_no"
                      id="car_no"
                      value={formData.car_no}
                      onChange={handleChange}
                      required
                      placeholder="Enter car number"
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="date">Appointment Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      placeholder="Select appointment date"
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="gas">Requested Gas (kg)</label>
                    <input
                      type="number"
                      name="gas"
                      id="gas"
                      value={formData.gas}
                      onChange={handleChange}
                      required
                      placeholder="Enter requested gas amount"
                    />
                  </div>
                </div>
                <div style={{ margin: "20% 0", fontWeight: "bold" }}>
                  Time:
                  <Time  setTime={setTime}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-submit">
          <button className="submit" id="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="submit" id="reset" type="reset" onClick={handleReset}>
            Reset
          </button>

          
        </div>
      </div>
      <ToastContainer hideProgressBar={true} bodyStyle={{height:"100px",fontSize:"1.5em"}}/> 
    </div>
  );
}

export default AppointmentForm;
