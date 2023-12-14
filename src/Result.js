import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Result=()=>
{

    const [data, setData] = useState([]);

   
    const containerStyle = {
        backgroundImage: 'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)',
        color:"black",
        
       };
    
  useEffect(() => {
    axios.get(`http://localhost:8085/getfeed`)
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
        <br></br>
        <h1 style={{textAlign:"center"}}>Feedback List</h1>
        <div className="data-display" style={{backgroundColor:"pink"}}>
        <br></br>
        <br></br>
        <div className="data-list">
        {data.map(item => (
            <div className="data-item" style={containerStyle}>
            <div>
              <h5> {item.email}</h5>
              <h5>Result: {item.result}</h5>
                </div>
                </div>
                ))}
                </div>
                </div>
                </div>
                </>
    )
}
export default Result;