import React from 'react';
import '../App.css';
function RegistrationForm() {
  return (
    <div className="outer">
        <h1 className='center underline'  >Entry Form (Entry the Filling Details)</h1>
        <hr />
      <div className="main">
        <div className="container">
          <div className="entry-content">
            <div className="entry-img">
              <img src="https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              {/* <div className="entry-img-content">
                <h2>Register now</h2>
                <p>while seats are available !</p>
              </div> */}
            </div>
            <div className="entry-form">
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-input">
                      <label htmlFor="first_name" className="required"> Name</label>
                      <input type="text" name="first_name" id="first_name" className="error"  />
                      <label id="first_name-error" className="error" htmlFor="first_name"></label>
                    </div>
                    <div className="form-input">
                      <label htmlFor="last_name" className="required">Email</label>
                      <input type="text" name="last_name" id="last_name" className="error"  />
                      <label id="last_name-error" className="error" htmlFor="last_name"></label>
                    </div>
                    <div className="form-input">
                      <label htmlFor="company" className="required">Empty Car Weight</label>
                      <input type="text" name="company" id="company" />
                    </div>
                    <div className="form-input">
                      <label htmlFor="email" className="required">Fill Car Wigth</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className="form-input">
                      <label htmlFor="phone_number" className="required">Phone number</label>
                      <input type="text" name="phone_number" id="phone_number" />
                    </div>
                  </div>
                  <div className="form-group">
                  <div className="form-select">
  <div className="label-flex">
    <label htmlFor="car_number">Car Number</label>
    <a href="#" className="form-link">Car Number</a>
  </div>
  <div className="select-list">
    <select id="car_number" name="car_number" className="list-item">
      <option value="rt-9411">rt-9411</option>
      <option value="9413">9413</option>
      <option value="9415">9415</option>
    </select>
  </div>
</div>

                    <div className="form-radio">
                      <div className="label-flex">
                        <label htmlFor="payment">Lane</label>
                        <a href="#" className="form-link">Lane Number</a>
                      </div>
                      <div className="form-radio-group">
                        <div className="form-radio-item">
                          <input type="radio" name="payment" id="cash"  />
                          <label htmlFor="cash">Lane 1</label>
                          <span className="check"></span>
                        </div>
                        <div className="form-radio-item">
                          <input type="radio" name="payment" id="cheque" />
                          <label htmlFor="cheque">Lane 2</label>
                          <span className="check"></span>
                        </div>
                        <div className="form-radio-item">
                          <input type="radio" name="payment" id="demand" />
                          <label htmlFor="demand">Lane3</label>
                          <span className="check"></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-input">
                      <label htmlFor="chequeno">Fill car Weight</label>
                      <input type="text" name="chequeno" id="chequeno" />
                    </div>
                    <div className="form-input">
                      <label htmlFor="blank_name">Total Gas</label>
                      <input type="text" name="blank_name" id="blank_name" />
                    </div>
                    <div className="form-input">
                      <label htmlFor="payable">Total Cost</label>
                      <input type="text" name="payable" id="payable" />
                    </div>
                  </div>
                </div>
                <div className="form-submit">
                  <input type="submit" value="Submit" className="submit" id="submit" name="submit" />
                  <input type="submit" value="Reset" className="submit" id="reset" name="reset" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
