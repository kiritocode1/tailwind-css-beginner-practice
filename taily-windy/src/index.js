import React from 'react';
import ReactDOM from 'react-dom';
// ! check readme for what happened here 
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* so we added the thing inside the browserRouter */}
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//// reportWebVitals();
