import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter}from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Connect from './router';
import './style.css'
import { Provider } from 'react-redux';
import store from './store';
// import App from './App';
// import Registration from './Registration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Registration/>
  // </React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <Connect/>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
