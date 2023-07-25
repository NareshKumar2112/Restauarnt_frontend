import React, { Component } from 'react'
import './Res.css';
import pic1 from './sd1.jpg';
import pic2 from './sd2.jpg';
import pic4 from './sd4.jpg';
import pic5 from './sd5.png';
import pic7 from './sd6.png';
import pic8 from './sd7.png';
import pic10 from './sd8.jpg';
import ic1 from "../src/components/g1.jpg";
import ic2 from '../src/components/g2.jpg';
import ic3 from '../src/components/g3.jpg';
import ic4 from '../src/components/g5.jpg';
import ic5 from '../src/components/g6.jpg';
import ic6 from '../src/components/g8.jpg';
 import ic7 from '../src/components/g9.jpg';
 import ic8 from '../src/components/g13.jpg';
 import ic10 from '../src/components/g14.jpg';
import { Link } from 'react-router-dom';
import './abt.css';


export default class Rest extends Component {
  render() {
    return (
      <div>
      <div className='bod5'>
      <header>
      <nav class="navigation1">
      <h1 style={{marginLeft:"3cm",fontSize:"45px",color:"white",fontFamily:"cursive"}}>Table Diary</h1>
      <div className='navcon'>
     <Link to='/'>Home</Link>
     <Link to='/res'>Restaurant</Link>
     <Link to='/Menudemo'>Menu</Link>
     <Link to='/bok'>Booking</Link>
     <Link to='/loggin'>Login</Link>
     </div>
      </nav>    
      </header>   
<div className="bod3">
<div id="slideshow">
<div class="slide-wrapper">
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
            <img src={pic1} style={{width:"100%",heigth:"10cm"}}/></Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic2} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic4} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic5} style={{width:"100%",heigth:"20cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic7} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic8} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic10} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div>
        <>
        <div style={{backgroundColor:"#ff90a2"}}>
        <br/><br/><br/>
        <div>
  <div class="vvtext">
  </div>
</div>
        <div className="ccgalery" style={{display:"flex", flexWrap: "wrap",padding:"150px",textAlign:"center"}}>
        <figure class="ccimage" style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic1} style={{ width: "300px",height: "225px"}}/></Link>
    <figcaption>Spicy BBQ
    <br/>
      <span>Chennai,India</span></figcaption>
  </figure>

  <figure class="ccimage" style={{padding:"50px"}}>
  <Link to="/bok">
  <img alt="Mitglieder" src={ic2}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Taj Restaurant<br/>
      <span>Mumbai,India</span></figcaption>
  </figure>

  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic3}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Briyani Hunt<br/>
      <span>Bangalore,India</span></figcaption>
  </figure>

  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic4}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>SS Hyderabad Briyani<br/>
      <span>coimbatore,India</span></figcaption>
  </figure>
  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic5} style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Kotlin-Res<br/>
      <span>Kerela,India</span></figcaption>
  </figure>
  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic6}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Meridian<br/>
      <span>Goa,India</span></figcaption>
  </figure>
  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic8}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Amirtha Restaurant<br/>
      <span>Andhra Pradesh,India</span></figcaption>
  </figure>
  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic10}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Hot Fry<br/>
      <span>Delhi,India</span></figcaption>
  </figure>
  <figure class="ccimage"style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic7}  style={{width: "300px",height: "225px"}}/></Link>
    <figcaption>Noma<br/>
      <span>Kolkata,India</span></figcaption>
  </figure>
  <div/>
  </div>
  </div>
  
  </>

</div>
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
            <p><a href="#">+91-12225*****</a></p>
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
    }
    