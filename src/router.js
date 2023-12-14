//import React from "react";
import {Route,Routes} from 'react-router-dom';
import Loginsignup from "./Loginsignup";
import Registration from "./Registration";
import React, { Component } from 'react';
import Menudemo from "./Menudemo";
import AdminLogin from './AdminLogin';
import BookingPage from './book';
import Side from './Side';
import Login from './Register';
import UpdateBooking from './UpdateBooking';
import BookAppointment from './feedback';
import Display from './Display';
import Register from './Register';
import Form from './Form';
import Admin from './Admin';
import Logout from './Logout';
import Orders from './Orders';
import Result from './Result';
import Address from'./Address';
import ThankYouPage from './Thankyou';
import ThankYouPagesec from './Thankyousec';
import History from './History';

class Connect extends Component {
  render() {
    return ( 
        <Routes>
        <Route path="/update" element={<UpdateBooking/>}/>
        <Route path="/loggin/sidepannel" element={<Side/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/home" element={<Registration/>}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Menudemo" element={<Menudemo/>}/>
        <Route path="/bok" element={<BookingPage/>}/>
        <Route path="/" element={<Form/>}/>
        <Route path="/feedback" element={<BookAppointment/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Result" element={<Result/>}/>
        <Route path="/Address" element={<Address/>}/>
        <Route path="/Thankyou" element={<ThankYouPage/>}/>
        <Route path='/History' element={<History/>}/>
        <Route path="/Thankyousec" element={<ThankYouPagesec/>}/>
        </Routes>
    )
  }
}

export default Connect
