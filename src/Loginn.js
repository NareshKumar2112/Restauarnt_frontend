import React from 'react'
import { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './loginsignup.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import pic1 from'./log1.jpg';


const Login = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleName = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }

    const handleId = (event) => {
        event.preventDefault();
        setId(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validateForm({ name, id, password }));
        try {
            const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {

                email: name,
                password: password

            });
            navigate('/');
            // let token = response.data.token;
            // localStorage.setItem('token', token);
            // console.log(response.status);
            // if (response.status === 200) {
            //     setName("");
            //     setId('');
            //     setPassword('');

            // }

        }
        catch (error) {
            console.log(error);
            setIsSubmit(false);

        }
        // setIsSubmit(true);



    };


    const validateForm = (values) => {
        const errors = {};

        if (values.name.trim() === '') {
            errors.name = 'Email is required';
            setIsSubmit(false);
        }

        else if (values.password.trim() === '') {
            errors.password = 'Password is required';
            setIsSubmit(false);
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            setIsSubmit(false);
        }
        else {
            setIsSubmit(true)
        }
        return errors;

        // setErrors(errors);
    };



    return (
        <div >


            <div className='bod5'>
                <header class="header">
                    <nav class="navigation1">
                        <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "white", fontFamily: "cursive" }}>Table Diary</h1>
                        <div className='navcon'>
                            <Link to='/'>Home</Link>
                            <Link to='/res'>Restaurant</Link>
                            <Link to='/Menudemo'>Menu</Link>
                            <Link to='/bok'>Booking</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                    </nav>
                </header>
                <div style={{ backgroundColor: "red" }}>
                    <div className='container' style={{ marginLeft: "15cm", marginTop: "1cm" }}>
                        <div className='login' style={{ marginLeft: "4.5cm" }}>
                            <form className='login_form' onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <div className='gogo' style={{ padding: "1cm" }}>
                                    <div className='form-floating mb-3' style={{ borderTop: "1cm", marginLeft: "-2cm" }}>
                                        <label for='nm'>Email--</label>

                                        <input style={{ width: "5cm", height: "1.5cm", borderRadius: "2cm" }} type='email' className='form-control'
                                            placeholder='abc@gmail.com'
                                            value={name} id='nm'
                                            onChange={handleName} />
                                    </div>
                                    {errors.name}
                                </div>

                                <div className='loginbox'>
                                    <div className="jo">
                                        <div className='form-floating mb-3' style={{ borderTop: "1cm", marginLeft: "-2cm" }}>
                                            <label for='pwd'>Password--</label>
                                            <input style={{ width: "5cm", height: "1.5cm", borderRadius: "2cm" }}
                                                type='password' className='form-control'
                                                placeholder='password' id='pwd'
                                                value={password}
                                                onChange={handlePassword} />
                                        </div>
                                    </div>
                                    {errors.password && <span>{errors.password}</span>}
                                </div>
                                <div style={{ borderTop: "1cm", marginLeft: "-2cm" }}>
                                    <button type='submit' className='btn btn-secondary' style={{ background: 'black', color: 'white', width: 280, height: 50, margin: 40 ,fontSize:"0.5cm"}}>Sign In</button>
                                </div>
                            </form>
                            <br/>
                            <h4 style={{ borderTop: "1cm", marginLeft: "-2cm" }}>Don't have an account? <a href='/login'>SignUp</a></h4>

                           
                            <br/>
                            <button className='btn btn-secondary'  style={{ background: 'black', color: 'white',marginLeft:"-1cm" }}> <Link to="./sidepannel" style={{color:"white",fontSize:"0.5cm"}}>AdminLogin</Link></button>
                            <br/>
                            <br/>
                        </div>
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
        </div>
    )
}

export default Login