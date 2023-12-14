import "./Register.css";

import { redirect, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
    
    const handleSubmit =(e) =>{
      e.preventDefault();
      const data ={
        name:name,
        email:email,
        password:password,
      }
      const data1=axios.post("http://localhost:8085/post",data)
      console.log(data1);
      if(name.length>5&&email.length>10&&password.length>5)
      {
        alert("registered successfully");
        navigate('/')
      }
      else{
        alert("registration fail");
      }
    };
    
  return (
    <div>
    <header class="header">
    <nav class="navigation1">
    
    <div className='food-offer bouncing-food'>
    <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
    </div>
    
    <div className='navcon'>
    <Link to='/Admin' style={{marginLeft:"9cm"}}>Admin Login</Link>
    </div>
    </nav>
    </header>
            <div className="registerPage">
            <div style={{background: "linear-gradient(to bottom, #87CEEB, #3498db)",marginRight:"18cm",height:"15cm",width:"15cm",padding:"2.3cm"}}>
            <div className="registerContent">
            <span className="registerTitle">Register</span>
            <br></br>
            <form action="" className="registerForm">
            <label style={{textAlign:"center"}}>UserName</label>
            <input type="text"  id="" value={name} onChange={handleName} placeholder="Enter Your Name" />
            <label style={{textAlign:"center"}}>Email Id</label>
            <input type="text"  id="" value={email} onChange={handleEmail} placeholder="Enter Your Email ID"  />
            <label style={{textAlign:"center"}}>Password</label>
            <input type="password" id="" value={password} onChange={handlePassword} placeholder="Enter Your Password"  />
            </form>
            <button style={{marginLeft:"1cm"}} className="regBtn1" onClick={handleSubmit}>Register</button>
            </div>
            </div>
            </div>
    </div>
    )
}