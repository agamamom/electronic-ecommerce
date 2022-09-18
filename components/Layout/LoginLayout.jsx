import React from 'react';
import Head from 'next/head';
import NavBarLogin from '../NavBarLogin/NavBarLogin';

const LoginLayout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Electronic Store</title>
            </Head>
            <header>
                <NavBarLogin />
            </header>

            <main className="main-container">
                {children}
            </main>

        </div>
    )
}

export default LoginLayout