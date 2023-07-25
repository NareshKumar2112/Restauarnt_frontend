import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
import pic1 from './photo12.jpg';
import pic2 from './photo2.jpg';
import pic3 from "./photo3.jpg"
import pic4 from './photo4.jpg';
import pic5 from './photo5.jpg';
import pic7 from './photo6.jpg';
import pic8 from './photo11.jpg';
import ic1 from "../src/components/item1.jpg";
import ic2 from '../src/components/item2.jpg';
import ic3 from '../src/components/item3.jpg';
import ic4 from '../src/components/item4.jpg';
import ic5 from '../src/components/item5.jpg';
import ic6 from '../src/components/item6.jpg';
 import ic7 from '../src/components/item7.jpg';
 import ic8 from '../src/components/item8.jpg';
 import ic10 from '../src/components/item9.jpg';
export default function Menudemo() {
  return (
    <>
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
    <div>
    <div class="index-banner">
		<div class="index-banner-bg">
        <div id="slideshow">
<div class="slide-wrapper">
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
            <img src={pic5} style={{width:"100%",heigth:"10cm"}}/></Link>
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
        <img src={pic4} style={{width:"100%",heigth:"20cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic1} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic3} style={{width:"100%",heigth:"10cm"}}/>
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
        <img src={pic2} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
    </div>
        </div>
        </div>

        </div>
        <div>
        <div>
        <div class="ndex-banner-text">
        
        <p class="text-info">
            <i class="line line-left"></i>
            <i class="line line-right"></i>
        </p>
    </div>

<div class="ndex-menu" >
    <div class="menu-tips">The Menu</div>
    <div class="public-container  menu-list" style={{backgroundColor:"rgba(232, 56, 85,0.5)",marignLeft:"5cm",backgroundAttachment:"fixed",backgroundPosition:"cover"}}>
        <ul class="clearfloat"style={{marginLeft:"8cm"}}>
            
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Hyderabad Briyani</h2>
                <h3 class="comment">Chicken,Mutton,Egg</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Voluptate cillum fugiat</h2>
                <h3 class="comment">Cheese, tomato, mushrooms, onions</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Hamburder</h2>
                <h3 class="comment">Cheese, tomato, Chicken,Beef</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Meatloaf</h2>
                <h3 class="comment">Mutton,Chicken,Prawn</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Cobb Salad</h2>
                <h3 class="comment">Nuts,Vegetable,Fruits</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Pot Roast</h2>
                <h3 class="comment">Beef, tomato, mushrooms</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                    <h2>Key Lime Pie</h2>
                    <h3 class="comment">Lemon,Citrus,Orange</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>French Fries</h2>
                <h3 class="comment">Cheese,Potato,onions.</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Barbeque</h2>
                <h3 class="comment">Cheese,Beef,Chicken</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
            <li class="menu-item clearfloat">
                <a class="title">
                <h2>Biscuits and Gravy</h2>
                <h3 class="comment">Milk,Cheese,</h3>
                </a>
                <div class="line"></div>
                <div class="price"></div>
            </li>
        </ul>
    </div>
    
</div>
<div class="ndex-menu" >
<div class="menu-tips">Special Dishes</div>
    <div className="ccgalery" style={{display:"flex", flexWrap: "wrap",padding:"150px",textAlign:"center"}}>
        <figure class="ccimage" style={{padding:"50px"}}>  <Link to="/bok">
  <img alt="Mitglieder" src={ic1} style={{ width: "300px",height: "225px"}}/></Link>
    <figcaption >Spicy BBQ
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
</div>
<div class="footer">
    
    <div class="content">
    <div class="services">
    
    <h4>Services</h4>
    <p><a href="#">Buffet Service</a></p>
    <p><a href="#">Silver Service.</a></p>
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
    </div>
   
    </>
  )
}
