import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as allStore from "./stores/index";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(allStore);
root.render( <App />);
