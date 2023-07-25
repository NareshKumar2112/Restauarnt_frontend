import React from 'react';
import pic1 from "../src/components/g1.jpg";
import pic2 from '../src/components/g2.jpg';
import pic3 from '../src/components/g3.jpg';
import pic4 from '../src/components/g5.jpg';
import pic5 from '../src/components/g6.jpg';
import pic6 from '../src/components/g8.jpg';
 import pic7 from '../src/components/g9.jpg';
 import pic8 from '../src/components/g13.jpg';
 import pic10 from '../src/components/g14.jpg';
import { Link } from 'react-router-dom';
import './abt.css';

function About() {
  return (
<>
<div>
<div className='bod5'>
<header>
<nav class="navigation">
<Link to='/'>Home</Link>
<Link to='ab'>Profile</Link>
<Link to='/res'>Restaurant</Link>
<Link to='/bok'>Booking</Link>
<Link to='/login'>Login</Link>
</nav>    
</header>   
<div className="bod3">
<div id="slideshow">
<div class="slide-wrapper">
<div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
      <img src={pic1} style={{width:"100%",heigth:"100%"}}/></Link>
  </h1>
</div>
<div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic2} width="1200px" heigth="12cm"/>
  </Link>
  </h1>
</div>
<div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic4} width="1200px" heigth="12cm"/>
  </Link>
  </h1>
</div>
<div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic5} width="1200px" heigth="12cm"/>
  </Link>
  </h1>
  </div>
  <div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic7} width="1200px" heigth="12cm"/>
  </Link>
  </h1>
  </div>
  <div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic8} width="1200px" heigth="12cm"/>
  </Link>
  </h1>
  </div>
  <div class="slide">
  <h1 class="slide-number">
  <Link to="/bok">
  <img src={pic10} width="1200px" heigth="12rem"/>
  </Link>
  </h1>
  </div>
  </div>
  </div>
  </div>
  </div>
<div>
<div class="ccgallery">
  
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic1} style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Spicy BBQ
    <br/>
      <span>Chennai,India</span></figcaption>
  </figure>

  <figure class="ccimage">
  <Link to="/bok">
  <img alt="Mitglieder" src={pic2}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Taj Restaurant<br/>
      <span>Mumbai,India</span></figcaption>
  </figure>

  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic3}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Briyani Hunt<br/>
      <span>Bangalore,India</span></figcaption>
  </figure>

  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic4}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>SS Hyderabad Briyani<br/>
      <span>coimbatore,India</span></figcaption>
  </figure>
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic5} style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Kotlin-Res<br/>
      <span>Kerela,India</span></figcaption>
  </figure>
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic6}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Meridian<br/>
      <span>Goa,India</span></figcaption>
  </figure>
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic8}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Amirtha Restaurant<br/>
      <span>Andhra Pradesh,India</span></figcaption>
  </figure>
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic10}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Hot Fry<br/>
      <span>Delhi,India</span></figcaption>
  </figure>
  <figure class="ccimage">  <Link to="/bok">
  <img alt="Mitglieder" src={pic7}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Noma<br/>
      <span>Kolkata,India</span></figcaption>
  </figure>
  
  </div>
</div>
</div>
</>

)
}

export default About