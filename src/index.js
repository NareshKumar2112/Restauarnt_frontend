import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter}from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Connect from './router';
import './style.css'
import { Provider } from 'react-redux';
import reducer from './reduce';
import { createStore } from 'redux';
import LoginsignUp from './Loginsignup';

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Connect/>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
