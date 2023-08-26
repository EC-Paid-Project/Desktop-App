import React, { useState } from 'react';
import './Forms.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import {  postGasDetails} from '../api';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {

  const navigate = useNavigate();
  const initialFormData = {
    name: '',
    email: '',
    filled_car_weight: 0.0,
    empty_car_weight: 0.0,
    phone_no: 0,
    carNumber: '',
    lane: 0,
    totalGas: '',
    totalCost: '',
  }
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function areAllValuesEmpty(formData) {
    for (const value of Object.values(formData)) {
      if (value == '' || value == null  ||value ==0) {
        return false; // At least one value is not empty
      }
    }
    return true; 
  }
  const handleSubmit = async(event) => {
    
    event.preventDefault();
    if(!areAllValuesEmpty(formData) && new Date(formData.appointmentDate) < new Date()){
      toast.error('There is something wrong.'); 
      return
    }
    try{

      const a=await postGasDetails(formData)
      console.log(a)
    }catch{

    }
    console.log(formData)
// navigate('/signup // You can process the form data here
  };
  const handleReset = () => {
    setFormData(initialFormData);

  };

  return (
    <div className="outer">
      <h1 className='center underline'>Entry Form (Enter the Filling Details)</h1>
      <hr />
      <NavBar/>
      <div className="main">
        <div className="container">
          <div className="entry-content">
            <div className="entry-img">
              <img src="https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="entry-form">
              <div className="form-row">
                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="name" className="required"> Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label id="name-error" htmlFor="name"></label>
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="email" email="required">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label id="email-error"  htmlFor="email"></label>
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="empty-weight" className="required">Empty Car Weight</label>
                    <input
                      type="number"
                      min={0}
                      name="empty_car_weight"
                      id="empty-weight"
                      value={parseFloat(formData.empty_car_weight)}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="filled_car_weight" className="required">Fill Car Weight</label>
                    <input
                      type="number"
                      name="filled_car_weight"
                      id="fill-car-weight"
                      value={parseFloat(formData.filled_car_weight)}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="phone_no" className="required">Phone number</label>
                    <input
                      type="text"
                      prefix='+92'
                      name="phone_no"
                      id="phone_no"
                      value={formData.phone_no}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-select">
                    <div className="label-flex">
                      <label htmlFor="carNumber">Car Number</label>
                      <a  className="form-link">Car Number</a>
                    </div>
                    <div className="select-list">
                      <select
                        id="car_number"
                        name="carNumber"
                        className="list-item"
                        value={formData.carNumber}
                        onChange={handleChange}
                      >
                        <option value="rt-9411">rt-9411</option>
                        <option value="9413">9413</option>
                        <option value="9415">9415</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-radio">
                    <div className="label-flex">
                      <label htmlFor="lane">Lane</label>
                      <a  className="form-link">Lane Number</a>
                    </div>
                    <div className="form-radio-group">
                      <div className="form-radio-item">
                        <input
                          type="radio"
                          name="lane"
                          id="lane-1"
                          value={1}
                          checked={formData.lane == 1}
                          onChange={handleChange}
                        />
                        <label htmlFor="lane-1">Lane 1</label>
                        <span className="check"></span>
                      </div>
                      <div className="form-radio-item">
                        <input
                          type="radio"
                          name="lane"
                          id="lane-2"
                          value={2}
                          checked={formData.lane == 2}
                          onChange={handleChange}
                        />
                        <label htmlFor="lane-2">Lane 2</label>
                        <span className="check"></span>
                      </div>
                      <div className="form-radio-item">
                        <input
                          type="radio"
                          name="lane"
                          id="lane-3"
                          value={3}
                          checked={formData.lane ==3}
                          onChange={handleChange}
                        />
                        <label htmlFor="lane-3">Lane 3</label>
                        <span className="check"></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="totalGas">Total Gas</label>
                    <input
                      type="text"
                      name="totalGas"
                      id="blank_name"
                      value={formData.totalGas}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="totalCost">Total Cost</label>
                    <input
                      type="text"
                      name="totalCost"
                      id="total-cost"
                      value={formData.totalCost}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="form-submit">
                <button className="submit" id="submit" name="submit"
                onClick={handleSubmit}>Submit</button >
                <button className="submit" id="reset" name="reset" onClick={handleReset}>Reset</button>
              </div>  
        </div>
        <ToastContainer hideProgressBar={true} bodyStyle={{height:"100px",fontSize:"1.5em"}}/>
      </div>
    </div>
  );
}

export default RegistrationForm;
