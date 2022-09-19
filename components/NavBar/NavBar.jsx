import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase';
import Cart from '../Cart/Cart';
import { auth } from '../../utils/firebase';
import { useStateContext } from '../../context/StateContext';


const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const { currentUser, setCurrentUser } = useUserContext();
    const handleAuthenticaton = () => {
        if (currentUser) {
            auth.signOut();
            setCurrentUser(null);
        }
    }
    return (
        <div className="navbar-container">
            <p>
                <Link href="/">
                    <img className="logo" src="/assets/R.png" alt="" />
                </Link>
            </p>
            <div className="navbar-right">
                <p className="login-button">
                    {/* <Link href="/authentication">Login</Link> */}
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!currentUser ? "Guest" : currentUser.email}
                        </span>
                        {currentUser ? (
                            <div className='header__optionLineTwo' onClick={handleAuthenticaton}>
                                SIGN OUT
                            </div>
                        ) : (
                            <div className='header__optionLineTwo'>
                                <Link href='/authentication'>
                                    SIGN IN
                                </Link>
                            </div>
                        )}
                    </div>
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