import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const pathName = window.location.pathname;
const segments = pathName.split('/');
const postSlug = segments[3] ?? 'facialhairtypes';
const sectionSlug = segments[2];

ReactDOM.render(
  <React.StrictMode>
    <App postSlug={postSlug} sectionSlug={sectionSlug}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
