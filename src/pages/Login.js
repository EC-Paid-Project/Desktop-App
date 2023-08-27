import React, { useState } from 'react';
import './Forms.css';

import { useNavigate } from 'react-router-dom';
import {login} from "../action/action"
export default function Login() {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      password: '',
      email: '',
    });
    const [loginError, setLoginError] = useState(false); // New state variable
  
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      console.log(formData); 
const a=await login(formData)
if(a!=null){
      navigate("/")
      setLoginError(false);

}
else{
      navigate("/appointment")
  // show invalid credential 
  setLoginError(true);
}
    };
  
    return (
      <div className="outer">
        <h1 className='center underline'>Login</h1>
        <hr  className='full'/>
  
  
  
        <div className="main" style={{marginTop:"10%"}}>
  
     
          <div className="container">
          <div className="entry-content">
              <div className="entry-img">
                <img src="https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            
            <div className="entry-form-login entry-form" onSubmit={handleSubmit}>

                <div className="form-group "style={{width:"80%",margin:"auto"}} >
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
              { loginError && <p style={{ color: 'red', textAlign: 'center' }}>Invalid credentials</p>}
                  </div>
              <div className="form-submit" style={{marginLeft:"18%"}}>
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
