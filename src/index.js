// 👍 This File is the Main Running File DO NOT WRITE ANYTHING HERE
// 🔥 This file will just import app & will run Here.
// 🏆 Check app.js if you want to understand more about the flow of the Project
// 🎍 While Styling only use 
//  #192028 (Light Black) (objects)
//  #313842 (Dark Gray) (Background)
//  #BEBEBE (Light Gray) (text)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
