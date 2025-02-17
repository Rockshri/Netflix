import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode is a tool for highlighting potential problems in an application.
  // Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  // It renders componants double time two check incosistencies in the call.
  //It only happens in development mode not i production mode.
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
