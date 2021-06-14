import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';
import Router from './router/router';
import 'assets/fonts/Farsi_numerals/webFonts/css/fontiran.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
