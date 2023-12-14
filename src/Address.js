import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import img1 from'../src/components/addres.JPG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Address = () => {
 

  const[name,setName]=useState("");
  const[email,setEmail]=useState(localStorage.getItem("username"));
  const[phoneNumber,setPhoneNumber]=useState("");
  const[doorNo,setDoorno]=useState("");
  const[Street,setStreet]=useState("");
  const[place,setPalce]=useState("");
 const navigate=useNavigate();
  const handleEmail=(e)=>
  {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handleName=(e)=>
  {
    e.preventDefault();
    setName(e.target.value);
  }
  const handlePhoneNumber=(e)=>
  {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  }
  const handleDoorNo=(e)=>
  {
    e.preventDefault();
    setDoorno(e.target.value);
  }
  const handleStreet=(e)=>
  {
    e.preventDefault();
    setStreet(e.target.value);
  }
  const handlePlace=(e)=>
  {
    e.preventDefault();
    setPalce(e.target.value);
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const data ={
      name:name,
      email:email,
      phoneNo:phoneNumber,
      doorNo:doorNo,
      Street:Street,
      place:place
    }
   if(name.length>4&&phoneNumber.length>=10&&doorNo.length>=1&&Street.length>=5&&place.length>=5)
   {
     const data1=axios.post("http://localhost:8085/customer",data)
     console.log(data1);
       alert("Order placed successfully");
       navigate("/Thankyou");
   }
   else
   {
    alert("Fill the details correctly");
   }
  }
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
    <div className="loginPage">
    <div style={{background: "linear-gradient(to bottom, #87CEEB, #3498db)",marginRight:"18cm",height:"15cm",width:"15cm",padding:"2.3cm"}}>
    <h2 style={{textAlign:"center"}}>Customer Details Form</h2>
    <br></br>
    <div className="loginContent21">
    <form>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">
    Email 
    </label>
    <input
    required
    style={{marginLeft:"2cm"}}
    className="form-control"
    id="name"
    name="name"
    value={email}
    onChange={handleEmail}
    />
    </div>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
          required
          style={{marginLeft:"2cm"}}
          type="text"
          className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
            />
            </div>


            <div className="mb-3">
            <label htmlFor="name" className="form-label" >
            DoorNo
            </label>
            <input
            required
            style={{marginLeft:"1.6cm"}}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={doorNo}
            onChange={handleDoorNo}
            />
            </div>


            <div className="mb-3">
            <label htmlFor="name" className="form-label">
            Street
            </label>
            <input
            required
            style={{marginLeft:"2cm"}}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={Street}
            onChange={handleStreet}
            />
            </div>


            <div className="mb-3">
            <label htmlFor="name" className="form-label">
            Place
            </label>
            <input
            required
            style={{marginLeft:"2.2cm"}}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={place}
            onChange={handlePlace}
            />
            </div>


            <div className="mb-3">
            <label htmlFor="name" className="form-label">
            phoneNo
            </label>
            <input
            required
            style={{marginLeft:"1.4cm"}}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            />
            </div>
            </form>

            <button type="submit" style={{alignItems:"center"}} onClick={handleSubmit} className="btn btn-primary">
            Submit
            </button>
            </div>
    </div>
    </div>
    
    </div>
  );
};

export default Address;
