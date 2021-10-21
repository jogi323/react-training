import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";

import App from './App';
import './index.css';
import i18n from './i18n/i18n';
import ErrorBoundaryComponent from "./Components/ErrorBoundaryComponent";
import Store from "./Store/Store";

axios.interceptors.request.use(
  (req) => {
    let token = "1345421"
    req.headers = { ...req.headers, Authorization: `Bearer ${token}` }
    // consosle.log(req);
    return req;
  },
  (err) => {
    console.log(err);
  }
)

axios.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  (err) => {
    if (err) {
      console.log("Error")
    }
    console.log(err);
  }
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store()}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ErrorBoundaryComponent>
            <App />
          </ErrorBoundaryComponent>
        </I18nextProvider>
      </BrowserRouter>
    </Provider >
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
