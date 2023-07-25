import React from 'react'
import './admin.css';
import axios from 'axios';
import pic111 from './user.png';
import { useState } from 'react';
import AdminLogin from './AdminLogin';
import { Link } from 'react-router-dom';
export default function UpdateBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [restaurant, setRes] = useState("");
  const [no_person, setGuests] = useState();
  const [food, setFood] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedFood, setSelectedFood] = useState('');


  
  const handleRestaurantChange1 = (e) => {
    setSelectedRestaurant(e.target.value);
    setRes(e.target.value);
  };

  const handleFoodChange1 = (e) => {
    setSelectedFood(e.target.value);
    setFood(e.target.value);
  };
    const handleSubmit1 = (e) => {
      e.preventDefault();
      const data1 =
      {
        name:name,
        email:email,
        date:date,
        time:time,
        res:restaurant,
        no_person:no_person,
        food:food
    };
    axios.put('http://localhost:8085/update',data1); 
    // alert("update successfully")
  }
  return (
    <body>
    <div class="wrapper">
    <div class="section">
 <div class="top_navbar">
   <div class="hamburgerr">
     
       {/* <button><MenuIcon /> </button>   */}
   </div>
 </div>
 <div class="containerr">
 <form className="reservation-form">
 <div className='clr'>
 <div className="form-group">
   <label htmlFor="name">Name -&nbsp;&nbsp;&nbsp;&nbsp;</label>
   <input
     type="text"
     id="name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     required
   />
   <br/><br/>
 </div>
 <div className="form-group">
   <label htmlFor="email">Email -&nbsp;&nbsp;&nbsp;&nbsp;</label>
   <input
     type="email"
     id="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required
   />
 </div>
 <br/>
 <div className="form-group">
   <label htmlFor="date">Date -&nbsp;&nbsp;&nbsp;&nbsp;</label>
   <input
     type="date"
     id="date"
     value={date}
     onChange={(e) => setDate(e.target.value)}
     required
   />
 </div>
 <br/>
 <div className="form-group">
   <label htmlFor="time">Time -&nbsp;&nbsp;&nbsp;&nbsp;</label>
   <input
     type="time"
     id="time"
     value={time}
     onChange={(e) => setTime(e.target.value)}
     required
   />
 </div>
 <div className="form-group" style={{marginLeft:"-0.7cm",marginTop:"0.5cm",display:"flex"}}>
   <label htmlFor="restaurant">
   <h4 style={{marginTop:"0.3cm"}}>Restaurant-</h4>
   </label>
   <select value={selectedRestaurant}
   onChange={handleRestaurantChange1} style={{marginLeft:"0.2cm"}}className="custom-select" >
   <option value="option1">----choose the Restaurant----</option>
     <option value="SS Hyderabad Briyani-Coimbatore,India">SS Hyderabad Briyani-Coimbatore,India</option>
     <option value="Spicy BBQ-Chennai,India">Spicy BBQ-Chennai,India</option>
     <option value="Taj Restaurant - Mumbai,India">Taj Restaurant - Mumbai,India</option>
     <option value="Kotlin-Res - Kerela,India">Kotlin-Res - Kerela,India</option>
     <option value="Meridian - Goa,India">Meridian - Goa,India</option>
     <option value="Amirtha Restaurant - Andhra Pradesh,India">Amirtha Restaurant - Andhra Pradesh,India</option>
     <option value="Noma - Kolkata,India">Noma - Kolkata,India</option>
   </select>
 </div>
 <div className="form-group" style={{marginLeft:"-0.0cm",marginTop:"0.5cm",display:"flex"}}>
   <label htmlFor="restaurant">
   <h4 style={{marginTop:"0.3cm"}}>Dishes-</h4>
   </label>
   <select value={selectedFood}
   onChange={handleFoodChange1} style={{marginLeft:"0.5cm"}}className="custom-select" >
   <option value="option2">----choose the Dishes----</option>
     <option value="Hamburger">Hamburger</option>
     <option value="Chicken Rice">Chicken Rice</option>
     <option value="briyani">briyani</option>
     <option value="Noodles">Noodles</option>
     <option value="Chilli Chicken">Chilli Chicken</option>
     <option value="icecream">Icecream</option>
     <option value="Milk Shake">Milg Skake</option>
   </select>
 </div>
 <div style={{display:"flex"}}>
 <div className="form-group">

   <label htmlFor="guests"><br/>Guests -&nbsp;&nbsp;&nbsp;&nbsp;</label>
   <input
   type="number"
   id="no_person"
   value={no_person}
   onChange={(e) => setGuests(parseInt(e.target.value))}
   min="1"
   max="100"
   required
   />
  
 </div>
 </div>
 <br/>
 <div className="form-group">
   <button type="submit" onClick={handleSubmit1}style={{cursor:"pointer"}}>Reserve</button>
 </div>
 </div>
</form>
</div>
     <div class="sidebarad">
         <div class="profilee">
             <img src={pic111} alt="profile_picture"/>
             <h3>NK</h3>
             <p>Admin</p>
         </div>
         <ul>
             <li>
                 <a href="/login/sidepannel" class="active">
                     <span class="icon"><i class="fas fa-home"></i></span>
                     <span class="item">Show Bookings</span>
                 </a>
             </li>
             <Link to="/update"><li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-desktop"></i></span>
                     <span class="item">Update Booking</span>
                 </a>
             </li></Link>
         </ul>
     </div>
     </div>
     </div>
 </body>
  );
}

