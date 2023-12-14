import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import d1 from '../src/Foodimages/parota.jpg';
import d2 from '../src/Foodimages/chilliparota.jpg';
import d3 from '../src/Foodimages/pannergravy.png';
import d4 from '../src/Foodimages/noodles.jpg';
import d5 from '../src/Foodimages/masaladosa.jpg';
import d6 from '../src/Foodimages/friedrice.JPG';
import d7 from '../src/Foodimages/mutton.JPG';
import s1 from'../src/components/delboy.JPG';
import s2 from'../src/components/quality.JPG';
import s3 from'../src/components/call.JPG';

export default function Registration() {

  
  const img3=[
    {imgName:d1,name:"Parota",amt:20},
    {imgName:d2,name:"Chilli Parata",amt:90},
    {imgName:d3,name:"Panner Gravy",amt:150},
    {imgName:d4,name:"Noodles",amt:100},
    {imgName:d5,name:"Masala Dosa",amt:60},
    {imgName:d6,name:"Veg Fried Rice",amt:120}
  ];
  const [imgname,setImagename]=useState(img3);
  
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOrder=(nam)=>
  {
    const username=localStorage.getItem("username")
    console.log(nam.name);
    const food=
    {

      "quantity":quantity,
      "foodname":nam.name,
      "email":username,
      "amount":nam.amount*quantity,
    }
    const flag=axios.post("http://localhost:8085/befHis",food);
    if(flag)
    {
      alert("order placed successfully")
    }
    else
    {
      alert("order failed")
    }
  }

      const set=()=>
      {
        setIsHovered(false);
        setQuantity(1);
      }
    
      const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
      };

      const buttonContainerStyle = {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
      };
      const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor:"#00132C",
        transition: 'background-color 0.3s ease-in-out',
      };
      const formStyle = {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
      
      const quantityInputStyle = {
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginTop: '5px',
        backgroundColor:"#6aaede"
      };

  return (
    <>
    <header class="header">
    <nav class="navigation1">
    
    <div className='food-offer bouncing-food'>
    <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
    </div>
    
    <div className='navcon'>
    <Link to='/home'>Home</Link>
    <Link to='/Menudemo'>Menu</Link>
    <Link to='/Display'>My Orders</Link>
    <Link to='/History'>History</Link>
    </div>
    </nav>
    </header>
    <div className='bod1'>
    <br/><br/><br/><br/><br/>
   <div class='content'>
   <div class="content-h1">
            </div>
            <div>
            <br/><br/>
            <h1 style={{fontStyle:"italic",color:"burlywood",marginLeft:"3cm",fontSize:"3cm"}}>
            Let's eat
            <br/>
            </h1>
            <p style={{fontStyle:"italic",color:"burlywood",marginLeft:"5cm",fontSize:"1.5cm"}}>
            Enjoy every moment
            </p>
            <br/><br/>
            <Link to="/Menudemo"> <button style={{fontSize:"25px",backgroundColor:"orangeRed",alignItems:"center",marginLeft:"7cm",borderRadius:"1cm",width:"5cm",height:"1.7cm"}}>Order Now</button></Link>
        </div>
        </div>
        </div>
        <br></br>
        <div class="ndex-menu" style={{ Color: "white", borderTop: "5px solid #002c38"}}></div>
        <div className='bknk'>
        <br></br>
        <div className='food-offer fading-food'>
        <h1 style={{color:"black",fontSize:"2.5cm",marginLeft:"5cm"}}>Lets Order Now</h1>
        </div>
        <div style={{width:"30cm",textAlign:"center",display:"flex",flexWrap:"wrap",padding:"3cm",alignContent:"center",marginLeft:"0.1cm"}}>

{imgname.map(images=>(
  <div>
  <div
  className="food-card"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => set()}
  >
  <img src={images.imgName} style={{ width: "300px", height: "225px", padding: "20px" }}/>
  {isHovered && (
    <>
    <div className="food-info">
    <h2>{images.name}</h2>
    
    <h4>Rs-{images.amt}</h4>
    
    <form style={formStyle}>
    <label htmlFor="quantity">Quantity:</label>
    <input
      type="number"
      id="quantity"
      name="quantity"
      min="1"
      value={quantity}
      onChange={handleQuantityChange}
      style={quantityInputStyle}
      />
  </form>
    <div style={buttonContainerStyle}>
    <button style={buttonStyle} onClick={()=>handleOrder({name:images.name,amount:images.amt})}>Order Now</button>
  </div>
  </div>
  </>
  )}
    <h2 style={{color:"black"}}>{images.name}</h2>
    </div>
    </div>
    ))}
    </div>

            <div>
            <br/><br/>
          </div>
        </div>
        <br></br>
        <div style={{height:"20cm",backgroundColor:"#00132C",alignContent:"center"}}>
        <div className='food-offer fading-food'>
        <h1 style={{color:"burlywood",fontSize:"2.5cm",marginLeft:"15cm",padding:"1cm"}}>About Us</h1>
        </div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <div style={{height:"10cm",width:"10cm",backgroundColor:"white",marginLeft:"3cm",}}>
        <img src={s1} style={{ width: "300px", height: "225px", padding: "20px",marginLeft:"30px" }}></img>
        <h4 style={{color:"black",fontFamily:"cursive",textAlign:"center"}}>Free delivary with full refund if it's damage.Get the premium card for fast delivary within 30min.</h4>
        </div>
        <div style={{height:"10cm",width:"10cm",backgroundColor:"white",marginLeft:"3cm",}}>
        <img src={s2} style={{ width: "300px", height: "225px", padding: "20px",marginLeft:"35px" }}></img>
        <h4 style={{color:"black",fontFamily:"cursive",textAlign:"center"}}>
        The overall quality of foods and services of the customers are completly satisfied.We can satisfy the customers upto the mark.</h4>
       
        </div>
        <div style={{height:"10cm",width:"10cm",backgroundColor:"white",marginLeft:"3cm",}}>
        <img src={s3} style={{ width: "300px", height: "225px", padding: "20px",marginLeft:"35px" }}></img>
        <h4 style={{color:"black",fontFamily:"cursive",textAlign:"center"}}>
        We have 24/7 customer service and help you to solve issues.
        we have provide the returning service for unsatisfied orders.
        </h4>
        </div>
        </div>
        </div>
        <br></br>
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
        </>
      
  )
}