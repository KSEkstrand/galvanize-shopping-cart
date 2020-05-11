import React from 'react';
import logo from './logo.svg';
import CartFooter from './Components/CartFooter.jsx'
import CartHeader from './Components/CartHeader.jsx'
import CartItems from './Components/CartItems.jsx'
import './App.css';

function App() {
    return (
        <React.Fragment>
            <CartHeader></CartHeader>
            <CartItems></CartItems>
            <CartFooter></CartFooter>
        </React.Fragment>
        )
}

export default App;
