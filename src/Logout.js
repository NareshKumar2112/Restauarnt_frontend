import React from "react";

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import './Logout.css';
function Logout() {

  const navigate = useNavigate();
  const logot=()=>
  {
    navigate("/");
  }
  return (
    <div className="bodyaa">
    <div className="logout-container1">
    <h1 style={{color:"#333"}}>Logout Successful</h1>
    <p style={{ color:"#666",marginBottom:"20px"}}>You have been successfully logged out.</p>
    <a className="aaaa" href="/">Login Again</a>
    </div>
    </div>
  );
}

export default Logout;
