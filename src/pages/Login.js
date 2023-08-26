import React, { useState } from 'react';
import './Forms.css';

import { useNavigate } from 'react-router-dom';

export default function Login() {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      password: '',
      email: '',
    });
  
  
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData); 
      navigate("/")// You can process the form data here
    };
  
    return (
      <div className="outer">
        <h1 className='center underline'>Login</h1>
        <hr  className='full'/>
  
  
  
        <div className="main">
  
     
          <div className="container">
          <div className="entry-content">
              <div className="entry-img">
                <img src="https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            
            <div className="entry-form-login entry-form" onSubmit={handleSubmit}>

                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <hr />
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
              <div className="form-submit" style={{width:"200px"}}>
                <button className="submit" id="submit" type="submit" onClick={handleSubmit}>Submit</button>
              </div>
                </div>
           
              </div>
              </div>
          </div>
        </div>
      </div>
    );


  
}
