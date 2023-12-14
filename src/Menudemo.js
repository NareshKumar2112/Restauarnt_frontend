
import React, { useState ,useEffect} from 'react'
import './Food.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import bk1 from '../src/Foodimages/bread.jpg';
import bk2 from '../src/Foodimages/chapathi.jpg';
import bk3 from '../src/Foodimages/coffee.jpg';
import bk4 from '../src/Foodimages/dosa.jpg';
import bk5 from '../src/Foodimages/pongal.jpg';
import bk6 from '../src/Foodimages/puri.JPG';
import bk7 from '../src/Foodimages/upma.jpg';
import bk8 from '../src/Foodimages/idly.jpg';

import l1 from '../src/Foodimages/chickenbriyani.jpg';
import l2 from '../src/Foodimages/chickengravy.jpg';
import l3 from '../src/Foodimages/coffee.jpg';
import l4 from '../src/Foodimages/chillichicken.jpg';
import l5 from '../src/Foodimages/eggbriyani.jpg';
import l6 from '../src/Foodimages/fishfry.jpg';
import l7 from '../src/Foodimages/muttonbriyani.jpg';
import l8 from '../src/Foodimages/omlate.jpg';
import l9 from '../src/Foodimages/meals.JPG';
import l10 from '../src/Foodimages/Lemon.JPG';
import l11 from '../src/Foodimages/curdrice.JPG';
import l12 from '../src/Foodimages/grill.JPG';


import d1 from '../src/Foodimages/parota.jpg';
import d2 from '../src/Foodimages/chilliparota.jpg';
import d3 from '../src/Foodimages/pannergravy.png';
import d4 from '../src/Foodimages/noodles.jpg';
import d5 from '../src/Foodimages/masaladosa.jpg';
import d6 from '../src/Foodimages/friedrice.JPG';
import d7 from '../src/Foodimages/mutton.JPG';
import d8 from '../src/Foodimages/kothu.JPG';


export default function Menudemo() {

    
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState("breakfast");


  
  const img1=[
    {imgName:l1,name:"Chicken Briyani",amt:150},
    {imgName:l2,name:"Chicken Gravy",amt:120},
    {imgName:d7,name:"Mutton Fry",amt:160},
    {imgName:l4,name:"Chilli Chicken",amt:90},
    {imgName:l5,name:"Egg Briyani",amt:70},
    {imgName:l6,name:"Fish Fry",amt:100},
    {imgName:l7,name:"Mutton Briyani",amt:240},
    {imgName:l8,name:"Omlate",amt:20},
    {imgName:l9,name:"Meals",amt:120},
    {imgName:l10,name:"Lemon Rice",amt:50},
    {imgName:l11,name:"Curd Rice",amt:40},
    {imgName:l12,name:"Grill Chicken",amt:300}
  ];
  const img2=[
    {imgName:bk1,name:"Bread and Jam",amt:50},
    {imgName:bk2,name:"Chappathi",amt:20},
    {imgName:bk3,name:"Coffee",amt:30},
    {imgName:bk4,name:"Dosa",amt:20},
    {imgName:ic10,name:"Fruit Juice",amt:80},
    {imgName:d5,name:"Masala Dosa",amt:60},
    {imgName:l8,name:"Omlate",amt:30},
    {imgName:ic2,name:"Mussels fry",amt:260},
    {imgName:bk5,name:"Pongal",amt:60},
    {imgName:bk6,name:"Puri",amt:25},
    {imgName:bk7,name:"Ghee upma",amt:60},
    {imgName:bk8,name:"Idly",amt:10},
  ];
  const img3=[
    {imgName:d1,name:"Parota",amt:20},
    {imgName:d2,name:"Chilli Parata",amt:90},
    {imgName:d3,name:"Panner Gravy",amt:150},
    {imgName:d4,name:"Noodles",amt:100},
    {imgName:d5,name:"Masala Dosa",amt:60},
    {imgName:d6,name:"Veg Fried Rice",amt:120},
    {imgName:l2,name:"Chicken Gravy",amt:150},
    {imgName:d7,name:"Mutton Fry",amt:200},
    {imgName:l12,name:"Grill Chicken",amt:300},
    {imgName:bk4,name:"Dosa",amt:20},
    {imgName:bk8,name:"Idly",amt:10},
    {imgName:d8,name:"koththu parota",amt:120}
  ];

  const [imgname,setImagename]=useState(img2);
  
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
    backgroundColor:"lightblue"
  };
  
  const handleOrder=(nam)=>
  {
    const username=localStorage.getItem("username");
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

      const callimg3=()=>
      {
        setSelectedMeal("dinner");
        setImagename(img3);
        console.log(imgname);
      }
      const callimg2=()=>
      {
        setSelectedMeal("breakfast");
        setImagename(img2);
        console.log(imgname);
      }
      const callimg1=()=>
      {
        setSelectedMeal("lunch");
        setImagename(img1);
        console.log(imgname);
      }

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
    <div>
    <div class="index-banner">
		
        <div>
        <div>
        <div class="ndex-banner-text">
        
        <p class="text-info">
            <i class="line line-left"></i>
            <i class="line line-right"></i>
        </p>
    </div>
    <div style={{padding:"40px",backgroundColor:"pink"}}>
    
    <div style={{padding:"30px",marginLeft:"14cm",borderRadius:"1cm"}}>
    <button
      className={selectedMeal === 'breakfast' ? 'selected' : ''}
      onClick={callimg2}
    >
      Breakfast         
    </button>
    <button
      className={selectedMeal === 'lunch' ? 'selected' : ''}
      onClick={callimg1}
    >
      Lunch
    </button>
    <button
      className={selectedMeal === 'dinner' ? 'selected' : ''}
      onClick={callimg3}
    >
      Dinner
    </button>
  </div>
<div style={{backgroundColor:"white", padding: "100px", display: "flex",flexWrap:"wrap",textAlign:"center"}}>
           
            {imgname.map(images=>(
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
                <div class="footer">
                
                </div>
    
              </div>
</div>
</div>
    </div>
   
    </>
  )
              }
