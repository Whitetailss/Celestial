import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware, compose } from 'redux';
import {configureStore} from "@reduxjs/toolkit";

// import thunk from 'react-thunk';


import { reducers } from './reducers';
import './index.css';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

const store = configureStore({reducer: reducers,  })

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
