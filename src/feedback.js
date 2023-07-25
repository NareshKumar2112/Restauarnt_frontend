import React, { useState } from 'react';
// import './Contact.css';
import './feed.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
//   const [appointmentDate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  const data={
    name:customerName,
    email:mobileModel,
    description:issue
  }
  axios.post("http://localhost:8081/addsupport",data);

  };

  return (
    <div>
    <header class="header">
    <div>
    
    </div>
    <nav class="navigation1">
    <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "white", fontFamily: "cursive" }}>Table Diary</h1>
    <div className='navcon'>
    <Link to='/'>Home</Link>
    <Link to='/res'>Restaurant</Link>
    <Link to='/Menudemo'>Menu</Link>
    <Link to='/bok'>Booking</Link>
    <Link to='/loggin'>Login</Link>
    </div>
    </nav>
    </header>
    <div class="zf">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="zbook-appointment">
    <h2>Give your Feedback</h2>
    <br></br>
    <form onSubmit={handleSubmit}>
    {successMessage && <p className="success-message">{successMessage}</p>}
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    
    <label htmlFor="customerName">Customer Name:</label>
    <input
    type="text"
    id="customerName"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    />
    
    <label htmlFor="mobileModel">Customer Email:</label>
    <input
    type="email"
    id="mobileModel"
          value={mobileModel}
          onChange={(e) => setMobileModel(e.target.value)}
          />
          
          <label htmlFor="issue">Issue:</label>
          <textarea
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          />
          <br></br>
          <br></br>
          <center>
          <button type="submit">Submit</button>
          </center>
          </form>
          </div>
          </div>
          </div>
          );
        };
        
        export default BookAppointment;