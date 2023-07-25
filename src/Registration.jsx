import React from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {
  return (
    <div className='bod1'>
    <header class="header">
    <nav class="navigation">
    
   <Link to='/'>Home</Link>
   <Link to='/res'>Restaurant</Link>
   <Link to='/Menudemo'>Menu</Link>
   <Link to='/bok'>Booking</Link>
   <Link to='/loggin'>Login</Link>
    </nav>    
    </header>
   <div class='content'>
   <div class="content-h1">
        
            <h3>Welcome to TableDiary</h3>
            
            </div>
            <div>
            <br/><br/>
            <h1 style={{fontStyle:"italic",color:"burlywood",marginLeft:"20cm",fontSize:"30px"}}>
            “Need food and a good place to eat? 
            <br/>
            Welcome to
            our humble place where you can eat good food peacefully.”
            </h1>
            <br/><br/>
            <Link to="/bok"><button className='button' style={{padding:"0.5cm"}}>Book Here</button></Link>
        </div>
        </div>
        <br/><br/><br/><br/><br/>
   <div class="footer">
   
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
  )
}
