
// export default Loginsignup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import pic1 from'./imgnk1.jpg';
// import './signuppg.css';


const LoginsignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
    alert("registered successfully");
    navigate('/loggin')
    
//     ,{
//     headers: {'Content-Type': 'application/json',
//     'Authorization': 'Bearer ${token}'
//   }
  
// }

// navigate('/');
    // .then(function(response) {
    //   console.log(response);
    // }).catch(function(error) {
    //   console.log(error);
    // })
    // alert("Registered");
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setErrors(validateForm({ name, email, password }));
  //   try {
  //     const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
  //       name: name,
  //       email: email,
  //       password: password

  //     });
  //     console.log(response.status);
  //     if (response.status === 200) {
  //       setName("");
  //       setEmail('');
  //       setPassword('');


  //     }

  //   }
  //   catch (error) {
  //     alert(error);
  //     setIsSubmit(false);

  //   }
  //   if (isSubmit) {
  //     navigate('/');
  //   }
  // };

  // const validateForm = (values) => {
  //   const errors = {};

  //   if (values.name.trim() === '') {
  //     errors.name = 'Username is required';
  //     setIsSubmit(false);
  //   }

  //   if (values.email.trim() === '') {
  //     errors.email = 'Email is required';
  //     setIsSubmit(false);
  //   }

  //   if (values.password.trim() === '') {
  //     errors.password = 'Password is required';
  //     setIsSubmit(false);
  //   } else if (values.password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters long';
  //     setIsSubmit(false);
  //   }

  //   setIsSubmit(Object.keys(errors).length === 0);

  //   return errors;
  };

  return (

    <div className='bod4 '>
      <header class="header">
        <div>

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
      <div className='bod'>
        <div className='login'><center>
          <form className='login_form' onSubmit={handleSubmit}>
            <br></br>
            <div className='container'>
              <div style={{ backgroundColor: "pink", width: "15cm" }}>
                <h1 style={{ textAlign: "center", marginLeft: "-1cm" }}>Register</h1><br />
                <div className='gogo'>
                  <div className='gogo'>
                    <div className='inp12'>
                      <label htmlFor='nm'>Username--</label>
                      <input
                        type='name'
                        className='in'
                        placeholder='username'
                        value={name}
                        id='nm'
                        onChange={handleName}
                      />
                    </div>
                    {errors.name}
                  </div>
                  <div className="gogo">
                    <div className='gogo'>
                      <div className='inp12'>
                        <label htmlFor='email'>Email-Id--</label>
                        <input style={{ backgroundColor: "white", padding: "0.7cm", borderRadius: "2cm", borderColor: "black" }}
                          type='email'
                          className='in'
                          placeholder='email'
                          id='email'
                          value={email}
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
                  type='submit'
                  className='btn btn-secondary'
                  style={{
                    background: 'black',
                    color: "white",
                    width: 280,
                    height: 50,
                    margin:56,
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

export default LoginsignUp;