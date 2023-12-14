import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pic from"../src/components/adminpage.jpg";
const Admin=()=>
{
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [flag,setFlag]=useState(false);
      
   
      const handleReg=()=>
      {
            navigate("/Register");
      }
      const handleEmail=(e)=>
      {
          e.preventDefault();
          setEmail(e.target.value);
      }
      const handlePassword=(e)=>
      {
          e.preventDefault();
          setPassword(e.target.value);
      }
  
      const handleSubmit=(e)=>
      {
        e.preventDefault();
         if(Email==="nareshkumar@gmail.com"){
            if(password==="Naresh2003")
            {
                alert("Login successfull")
                setFlag(true);
            }
            else
            {
                alert("Login failed");
                setFlag(false);
            }
         }
         else{
            
            alert("Login failed");
            setFlag(false);
         }  
      }
    return(
        <>
        <div>
        {flag? <div>
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
        <div className="loginPage2" >
        
        <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "Lightblue", fontFamily: "cursive" }}>Welcome</h1>
        <h1 style={{ marginLeft: "5cm", fontSize: "85px", color: "#f4a460", fontFamily: "cursive" }}>Nareshkumar</h1>
              
      </div>
        </div>:<div>
        <header class="header">
        <nav class="navigation1">
        
        <div className='food-offer bouncing-food'>
        <h1 style={{ marginLeft: "3cm", fontSize: "45px", color: "#f4a460", fontFamily: "cursive" }}>Food Diary</h1>
        </div>
        
        <div className='navcon'>
            <Link to='/'>Back To Login Page</Link>
            </div>
        </nav>
        </header>
        
        <div className="loginPage2" >
      <div className="loginContent2">
                <span className="loginTitle">Login</span>
                <br></br>
                <form action="" className="loginForm">
                    <label style={{textAlign:"center"}}>Email Id</label>
                    <input type="text" value={Email} style={{background:"black",color:"white"}} onChange={handleEmail} id="" placeholder="Enter Your Email ID" />
                    <label style={{textAlign:"center"}}>Password</label>
                    <input type="password" style={{background:"black",color:"white"}} name="" value={password} onChange={handlePassword} id="" placeholder="Enter Your Password" />
                    <button style={{marginLeft:"1cm",backgroundColor:"saddlebrown"}} className="loginBtn" onClick={handleSubmit}>Login</button>
                </form>
            </div>
    </div>
    </div>}
        </div>
    </>
    )
}
export default Admin;