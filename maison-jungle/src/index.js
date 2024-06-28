import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './composants/App';
import Cart from './composants/Cart';
import ShoppingList from './composants/ShoppingList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='main'>
      <Cart />
      <ShoppingList />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
