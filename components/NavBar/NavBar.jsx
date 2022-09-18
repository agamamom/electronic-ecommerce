import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import Cart from '../Cart/Cart';
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className="navbar-container">
            <p>
                <Link href="/">
                    <img className="logo" src="/assets/R.png" alt="" />
                </Link>
            </p>
            <div className="navbar-right">
                <p className="login-button">
                    <Link href="/authentication">Login</Link>
                </p>
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
            </div>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar