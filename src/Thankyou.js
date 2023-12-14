// ThankYouPage.js
import React from 'react';
import './Thankyou.css';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

    const navigate=useNavigate();
    const handleSubmit=()=>
    {
        navigate("/feedback");
    }
  return (
    <div className="page-containerxx">
      <h1 style={{color:"#333"}}>Thank You!</h1>
      <p style={{color:"#333"}}>Your order has been placed successfully.</p>
      <button style={{backgroundColor:"pink",color:"black"}} className="regBtn1" onClick={handleSubmit}>Feedback</button>
    </div>
  );
};

export default ThankYouPage;
