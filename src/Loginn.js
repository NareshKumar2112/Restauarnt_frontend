import React from 'react'
import { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './loginsignup.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import pic1 from'./log1.jpg';
import { login } from './action'

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const [flag,setFlag]=useState("");

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
        axios.get(`http://localhost:8085/valid/${Email}/${password}`)
        .then(response=>{
            setFlag(response.data);
        })
        .catch(error=>{
            console.error("error",error);
        })
       
    }
     const handleReg=()=>
     {
        navigate("/login");
     }
    const validateForm = (values) => {
        const errors = {};

        if (values.name.trim() === '') {
            errors.name = 'Email is required';
            setIsSubmit(false);
        }

        else if (values.password.trim() === '') {
            errors.password = 'Password is required';
            setIsSubmit(false);
        } else if (values.password.length < 4) {
            errors.password = 'Password must be at least 4 characters long';
            setIsSubmit(false);
        }
        else {
            setIsSubmit(true)
        }
        return errors;

        // setErrors(errors);
    };
    const handleNav=()=>
    {
        alert("login successfull")
        navigate("/")
    }

    return(
        <div className='bod5'>
        <header class="header">
          <div>
            {flag?<div>{handleNav}</div>:<div></div>}
          </div>
          <nav class="navigation1">
            <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
            <div className='navcon'>
              <Link to='/'>Home</Link>
              <Link to='/res'>Restaurant</Link>
              <Link to='/Menudemo'>Menu</Link>
              <Link to='/bok'>Booking</Link>
              <Link to='/loggin'>Login</Link>
            </div>
          </nav>
        </header>
        <div className='bod' style={{backgroundColor:"grey"}}>
          <div className='login'><center>
            <form className='login_form' onSubmit={handleSubmit}>
              <br></br>
              <div className='container'>
                <div style={{ backgroundColor: "pink", width: "15cm" }}>
                  <h1 style={{ textAlign: "center", marginLeft: "-1cm" }}>Register</h1><br />
                  <div className='gogo'>
                    <div className="gogo">
                      <div className='gogo'>
                        <div className='inp12'>
                          <label htmlFor='email'>Email-Id--</label>
                          <input style={{ backgroundColor: "white", padding: "0.7cm", borderRadius: "2cm", borderColor: "black" }}
                            type='email'
                            className='in'
                            placeholder='email'
                            id='email'
                            value={Email}
                            onChange={handleEmail}
                          />
                        </div>
                      </div>
                    </div>
                    {errors.email && <span>{errors.email}</span>}
  
                    <div className='loginbox'>
                      <div className="gogo">
                        <div className='gogo'>
                          <div className='inp12'>
                            <label htmlFor='pwd'>Password--</label>
                            <input
                              type='password'
                              className='in'
                              placeholder='password'
                              id='pwd'
                              value={password}
                              onChange={handlePassword}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {errors.password && <span>{errors.password}</span>}
                  </div>
  
                  <button
                  onClick={handleSubmit}
                    type='submit'
                    className='btn btn-secondary'
                    style={{
                      background: 'black',
                      color: "white",
                      width: 280,
                      height: 50,
                      margin: 40,
                    }}
                  >
                    <div style={{ color: "white" }}>
                  
                  Sign In
                    </div>
                    </button>
                    <h3> Don't have a account</h3>
                    <button onClick={handleReg}
                    type='submit'
                    className='btn btn-secondary'
                    style={{
                      background: 'black',
                      color: "white",
                      width: 280,
                      height: 50,
                      margin:28,
                    }}
                  >
                    <div style={{ color: "white" }}>
                  
                  Register
                    </div>
                    </button>
                </div>
              </div>
            </form>
          </center>
          </div>
        </div>
        <div class="footer" style={{ marginTop: "17cm" }}>
  
          <div class="content">
            <div class="services">
              <h4>Services</h4>
              <p><a href="#">Buffet Service</a></p>
              <p><a href="#">Silver Service</a></p>
              <p><a href="#">French Service</a></p>
              <p><a href="#">Gueridon Service</a></p>
            </div>
            <div class="social-media">
              <h4>Social</h4>
              <p>
                <a href="#"
                ><i class="fab fa-linkedin"></i> Linkedin</a
                >
              </p>
              <p>
                <a href="#"
                ><i class="fab fa-twitter"></i> Twitter</a
                >
              </p>
              <p>
                <a href="https://github.com/farazc60"
                ><i class="fab fa-github"></i> Github</a
                >
              </p>
              <p>
                <a href="https://www.facebook.com/codewithfaraz"
                ><i class="fab fa-facebook"></i> Facebook</a
                >
              </p>
              <p>
                <a href="https://www.instagram.com/codewithfaraz"
                ><i class="fab fa-instagram"></i> Instagram</a
                >
              </p>
            </div>
            <div class="links">
              <h4>Quick links</h4>
              <p><a href="#">Home</a></p>
              <p><a href="#">Restaurant</a></p>
              <p><a href="#">Menu</a></p>
              <p><a href="#">Booking</a></p>
            </div>
            <div class="details">
              <h4 class="address">Address</h4>
              <p>
                8/8-2,
                Daniel Street,
                New York,
                US.
              </p>
              <h4 class="mobile">Mobile</h4>
              <p><a href="#">+91-7840298391</a></p>
              <h4 class="mail">Email</h4>
              <p><a href="#">farazc60@gmail.com</a></p>
            </div>
            <footer>
              <hr />
              © 2022 codewithFaraz.
            </footer>
          </div>
        </div>
      </div>
  
    );
  };


export default Login