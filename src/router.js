//import React from "react";
import {Route,Router,Routes} from 'react-router-dom';
import Loginsignup from "./Loginsignup";
import Registration from "./Registration";
import React, { Component } from 'react';
import Menudemo from "./Menudemo";
import Rest from './restaurant';
import AdminLogin from './AdminLogin';
import BookingPage from './book';
import Side from './Side';
import Login from './Loginn';
import UpdateBooking from './UpdateBooking';
import BookAppointment from './feedback';
class Connect extends Component {
  render() {
    return ( 
        <Routes>
        <Route path="/update" element={<UpdateBooking/>}/>
        <Route path="/loggin/sidepannel" element={<Side/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/res" element={<Rest/>}/>
        <Route path="/Menudemo" element={<Menudemo/>}/>
        <Route path="/bok" element={<BookingPage/>}/>
        <Route path="/loggin" element={<Login/>}/>
        <Route path="/feedback" element={<BookAppointment/>}/>
        
       
        </Routes>
    )
  }
}

export default Connect
