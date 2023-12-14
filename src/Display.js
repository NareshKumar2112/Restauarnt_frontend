import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './display.css'; 

const DataDisplay = () => 
{
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  
  const handleNavv=()=>
  {
    const username=localStorage.getItem("username");

    const data=axios.post(`http://localhost:8085/postorder/${username}`);
    console.log(data);
    navigate("/Address");
  }

  useEffect(() => {

    const username=localStorage.getItem("username");
    console.log(username);
    axios.get(`http://localhost:8085/getBefHis`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    
    <div className='bodya'>
    <div>
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
    </div>
    <div>
    <div className="data-display">
    <h1>My Orders</h1>
      <div className="data-list">
        {data.map(item => (
          <div key={item.id} className="data-item">
          <h2>Name: {item.foodname}</h2>
            <h2>No of item: {item.quantity}</h2>
            <p>Amount: Rs-{item.amount}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
      <button style={{alignItems:"center",marginLeft:"18cm"}} className='button' onClick={handleNavv}>Place Order</button>
      </div>
    );
};

export default DataDisplay;
