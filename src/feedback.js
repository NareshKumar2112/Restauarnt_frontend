import React, { useState } from 'react';
// import './Contact.css';
import './feed.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Email } from '@mui/icons-material';

const BookAppointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [issue, setIssue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const[email,setEmail]=useState(localStorage.getItem("username"));
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const out=()=>
  {
 
     const username=localStorage.getItem("username");
     console.log(username+"dfdf");
     axios.delete(`http://localhost:8085/delete/${username}`)
     localStorage.clear();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
  const data={
    email:email,
    result:selectedOption,
  }
try{
  axios.post("http://localhost:8085/feedback",data);
 alert("Thanks for your feedback");
  navigate('/home');}
  catch{
    
  }
 
  };

  return (
    <div>
    <header class="header">
    <div>
    
    </div>
    <nav class="navigation1">
    <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "white", fontFamily: "cursive" }}>Table Diary</h1>
    <div className='navcon'>  
    <Link to='/home'>Home</Link>
    <Link to='/Menudemo'>Menu</Link>
    <Link to='/Display'>My Orders</Link>
    <Link to='/History'>History</Link>
    </div>
    </nav>
    </header>
    <div class="zf">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <div className="zbook-appointment">
    <h2 style={{textAlign:"center"}}>Give your Feedback</h2>
    <br></br>
    <form onSubmit={handleSubmit}>
    {successMessage && <p className="success-message">{successMessage}</p>}
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    
    <label style={{textAlign:"center"}} htmlFor="customerName">Customer Email:</label>
    <input
    id="customerName"
    value={email}
    onChange={(e) => setCustomerName(e.target.value)}
    />
    
    <div className="radio-buttons-container" style={{textAlign:"center", display:"flex",flex:"wrap"}}>
      <label className="radio-label" style={{color:"white"}}>
        <input
          type="radio"
          name="options"
          value="Good"
          required
          checked={selectedOption === 'Good'}
          onChange={handleRadioChange}
        />
        Good
      </label>

      <label className="radio-label" style={{color:"white"}}>
        <input
          type="radio"
          name="options"
          value="Moderate"
          checked={selectedOption === 'Moderate'}
          onChange={handleRadioChange}
        />
        Moderate
      </label>

      <label className="radio-label" style={{color:"white"}}>
        <input
          type="radio"
          name="options"
          value="Bad"
          checked={selectedOption === 'Bad'}
          onChange={handleRadioChange}
        />
        Bad
      </label>

      <h3>Selected option: {selectedOption}</h3>
    </div>
          <br></br>
          <center>
          <button style={{marginLeft:"1cm"}} type="submit">Submit</button>
          </center>
          </form>
          </div>
          </div>
          </div>
          </div>
          );
        };
        
        export default BookAppointment;