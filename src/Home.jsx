import React, { useState ,useEffect} from 'react'
import './Food.css'; 
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ic1 from "../src/components/item1.jpg";
import ic2 from '../src/components/item2.jpg';
import ic3 from '../src/components/item3.jpg';
import ic4 from '../src/components/item4.jpg';
import ic5 from '../src/components/item5.jpg';
import ic6 from '../src/components/item6.jpg';
import ic7 from '../src/components/loginimg.JPG';

import axios from 'axios';

export default function Registration() {
  const[name,setName]=useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [amt,setAmt]=useState(0);
  const [userName,setUsername]=useState("");
  const [flag, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const img=[
    {imgName:ic4,name:"Panner Gravy",amt:200},
    {imgName:ic5,name:"Briyani",amt:300},
    {imgName:ic6,name:"Black Forest",amt:60}
  ];
  const img1=[
    {imgName:ic4,name:"Panner Gravy",amt:200},
    {imgName:ic5,name:"Briyani",amt:300},
    {imgName:ic6,name:"Black Forest",amt:60},
    {imgName:ic1,name:"Chicken skewers",amt:300},
    {imgName:ic2,name:"Mussels fry",amt:160},
    {imgName:ic3,name:"Burger",amt:80}
  ];

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
    alignItems:"center",
  };
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    alignItems:"center",
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
    backgroundColor:"lightblue"
  };
  const handleOrder=(nam)=>
  {
    const username=localStorage.getItem("username");
    const food=
    {
      "quantity":quantity,
      "name":nam.name,
      "customerName":username,
      "amount":nam.amount*quantity,
    }
    const flag=axios.post("http://localhost:8085/postorder",food);
    if(flag)
    {
      alert("order placed successfully")
    }
    else
    {
      alert("order failed")
    }
  }
  const out=()=>
 {

    const username=localStorage.getItem("username");
    console.log(username+"dfdf");
    axios.delete(`http://localhost:8085/delete/${username}`)
    localStorage.clear();
 }
  const handleImage=(e)=>{
    setName(e);
  }
  return (
    <>
      <div>
        <div className='bod1'>
          <header class="header">
            <nav class="navigation1">
            
            <div className='food-offer bouncing-food'>
            <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
            </div>
              <div className='navcon'>
                <Link to='/home'>Home</Link>
                <Link to='/Menudemo'>Menu</Link>
                <Link to='/Display'>My Order</Link>
                <Link to='/History'>History</Link>
              </div>
            </nav>
          </header>
          {flag?<div><h1>{localStorage.getItem("username")}</h1></div>:<div></div>}
          <div>
            <div>
              <div class='content'>
                <div class="content-h6">
                  <h1 style={{ fontSize: "2cm" }}>Let's eat</h1>
                  <h3>Enjoy ever moment with us !</h3>
                </div>
                <div>
                  <br /><br />
                  
              <Link to="/Menudemo"><button className='button' style={{ padding: "0.25cm" }}>Order Now</button></Link>
              
                </div>
              </div>
              <br /><br /><br /><br /><br />
            </div>

          </div>
        </div>
        <div class="ndex-menu" style={{ Color: "white", borderTop: "4px solid #002c38" }}>
          <div class="menu-tips" style={{ backgroundColor: "#002c38" }}><h3>Special Dishes</h3></div> <br></br> <br></br> <br></br> <br></br>
          <div>

            <div style={{ backgroundColor: "#002c38" }}>
              <div className='nk1'>
              <div className='food-offer fading-food'>
              <div style={{ textAlign: "center", padding: "1px" }}>
              <h1 style={{ textAlign: "center", color: "orangered", fontSize: "2cm", fontFamily: " Georgia, 'Times New Roman', Times, serif", marginTop: "1cm" }}>Let's Order</h1>
              <h1 style={{ textAlign: "center", color: "orangered", fontSize: "2cm", fontFamily: " Georgia, 'Times New Roman', Times, serif" }}>  Now</h1>
              </div>
                </div>
                <div style={{ padding: "100px", display: "flex",flexWrap:"wrap",textAlign:"center"}}>
           
            {img1.map(images=>(
              <div>
              <div
              className="food-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => set()}
            >
              <img src={images.imgName} style={{ width: "300px", height: "225px", padding: "10px" }}/>
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
                <h2>{images.name}</h2>
                </div>
                </div>
                ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="ndex-menu" style={{ Color: "white", borderTop: "4px solid #002c38" }}>
          <div class="menu-tips" style={{ backgroundColor: "#002c38" }}><h1>Offers</h1></div> <br></br> <br></br> <br></br> <br></br>
        </div>


        <div style={{ backgroundColor: "sandybrown" }}>
          <div className='nk2'>
            <div style={{ textAlign: "center", padding: "50px" }}>
            
            <div style={{ backgroundColor: "#ffff5c", height: "5.5cm", width: "7cm", padding: "20px", borderRadius: "50px" }}>
            <h2 style={{ color: "#002c38", fontSize: "1cm" }}>MEGA OFFER</h2>
            <h4 style={{ color: "#002c38", fontSize: "1cm" }}>30%-</h4>
            
            </div>
              <div style={{ marginLeft: "5cm" }}>
                <h1 style={{ fontSize: "1.5cm" }}>Offers Going on </h1>
                <br></br>
                
            <div className='food-offer pulsing-food'>
                <h1 style={{ fontSize: "3cm" }}>Hurry up!</h1>
            </div>
              </div>
            </div>
            <div style={{ padding: "100px", display: "flex",textAlign:"center"}}>
           
           
            {img.map(images=>(
              <div>
              <div
              className="food-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => set()}
            >
              <img src={images.imgName} style={{ width: "300px", height: "225px", padding: "10px" }}/>
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
                <h2>{images.name}</h2>
                </div>
                </div>
                ))}
                </div>
            </div>
          </div>
        </div>

      <div class="footer">

        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <br></br>
            <p><a href="#">Special Offers</a></p>
            <p><a href="#">Premium Offers</a></p>
            <p><a href="#">Golden service</a></p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <br></br>
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
            <br></br>
            <p><a href="/home">Home</a></p>
            <p><a href="/Menudemo">Menu</a></p>
            <p><a href="/display">Orders</a></p>
            <p><a href="/History">History</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <br></br>
            <p>
              8/8-2,
              Daniel Street,
              New York,
              US.
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-7840298391</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">FoodDiary@gmail.com</a></p>
          </div>
            <hr />
        </div>
      </div>

    </>
      
  )
}
