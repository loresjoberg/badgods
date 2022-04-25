import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bookshelf from "./layout/Bookshelf/Bookshelf";
import './fonts/ChaparralPro-Regular.otf';
import './fonts/ChaparralPro-Bold.otf';
import Unknown from "./Unknown";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/view/:volumeSlug/:folioSlug" element={<App/>}/>
        <Route path="/view/:volumeSlug/" element={<App/>}/>
        <Route path="/" element={<Bookshelf/>}/>
        <Route path='*' element={<Unknown/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
