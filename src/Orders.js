import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders=()=>
{

    const [data, setData] = useState([]);

    const containerStyle = {
      backgroundImage: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
      color:"black"
     };
    
  useEffect(() => {
    axios.get(`http://localhost:8085/getorders`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

    return(
        <>
        <div>
        <header class="header">
        <nav class="navigation1">
        
        <div className='food-offer bouncing-food'>
        <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
        </div>
        
        <div className='navcon'>
        <Link to='/Orders'>Orders</Link>
        <Link to='/Result'>Result</Link>
        <Link to='/Thankyousec'>Logout</Link>
            </div>
        </nav>
        </header>
        </div>
        <div>
        <div className="data-display" style={{backgroundColor:"lightblue"}}>
        <br></br>
        <h1>Orders List</h1>
        <br></br>
        <div className="data-list">
        {data.map(item => (
            <div key={item.id} className="data-item" style={containerStyle}>
            <div>
              <h5>Email: {item.email}</h5>
              <h5>Food Name: {item.foodname}</h5>
                <h5>No of item: {item.quantity}</h5>
                <h5>Date: {item.date}</h5>
                <h5>Amount: Rs-{item.amount}</h5>
                </div>
                </div>
                ))}
                </div>
                </div>
                </div>
                </>
    )
}
export default Orders;