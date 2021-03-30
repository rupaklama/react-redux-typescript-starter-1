import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// additional package require for react-redux to work with typescript: npm i --save-dev @types/react-redux
import { Provider } from 'react-redux';
import { store } from './store';

// Wrap the App component with the Provider component & pass in a single prop - store
// 'store' props takes in Redux store to connect React App to Global State Object
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Provider component connects to Redux Store.
// Instance of Connected Component connects to the Provider component to access data in Redux Store.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
