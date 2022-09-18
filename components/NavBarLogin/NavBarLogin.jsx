import React from 'react';
import Link from 'next/link';


const NavBarLogin = () => {


    return (
        <div className="navbar-container">
            <p className="logo-container">
                <Link href="/">
                    <a className='logo-login'>
                        <img className="logo" src="/assets/R.png" alt="" />
                        <span>|</span>
                        <p style={{ fontSize: "20px", fontWeight: "700" }}>
                            LOGIN
                        </p>
                    </a>
                </Link>
            </p>

        </div>
    )
}

export default NavBarLogin