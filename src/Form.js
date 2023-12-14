import "./Form.css"
import Register from "./Register";

import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import { redirect, useNavigate } from 'react-router-dom';
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Form() {
    
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [flag,setFlag]=useState("");
    
 
    const handleReg=()=>
    {
          navigate("/Register");
    }
    const handleEmail=(e)=>
    {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>
    {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>
    {
      e.preventDefault();
        axios.get(`http://localhost:8085/valid/${Email}/${password}`)
        .then(response=>{
          
            setFlag(response.data);
            console.log(response.data);
            if(response.data)
            {
              localStorage.setItem("username",Email);
              navigate("/home");

            }
            else{
              alert("Invalid username/password")
            }
        })
        .catch(error=>{
          alert("Login failed")
            console.error("error",error);
        })
       
    }
    const out=()=>
 {

    const username=localStorage.getItem("username");
    console.log(username+"dfdf");
    axios.delete(`http://localhost:8085/delete/${username}`)
    localStorage.clear();
 }
    
  return (
    <>
    <div>
    <header class="header">
    <div>
    </div>
    <nav class="navigation1">
    <div className='food-offer bouncing-food'>
    <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
    </div>
          <div className='navcon'>
          <Link to='/Admin' style={{marginLeft:"9cm"}}>Admin Login</Link>
          </div>
          </nav>
          </header>
          </div>
    <div className="loginPage">
    <div style={{background: "linear-gradient(to bottom, #87CEEB, #3498db)",marginRight:"18cm",height:"15cm",width:"15cm",padding:"2.3cm"}}>
    <div className="loginContent">
    <span className="loginTitle">Login</span>
    <br></br>
    <form action="" className="loginForm">
    <label style={{textAlign:"center"}}>Email Id</label>
    <input type="text" value={Email} onChange={handleEmail} id="" placeholder="Enter Your Email ID" />
    <label style={{textAlign:"center"}}>Password</label>
    <input type="password" name="" value={password} onChange={handlePassword} id="" placeholder="Enter Your Password" />
    <button style={{marginLeft:"1cm"}} className="loginBtn" onClick={handleSubmit}>Login</button>
    </form>
                <div className="registerLink">
                <br></br>
                <h3>Don't have an account click</h3>
                <div style={{textAlign:"center"}} >
                <br></br>
                <button style={{marginLeft:"1cm"}} className="regBtn1" onClick={handleReg}>Register</button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </>
                )
              }