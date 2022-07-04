import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Sola from './Sola';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Sola />
  </React.StrictMode>
);
