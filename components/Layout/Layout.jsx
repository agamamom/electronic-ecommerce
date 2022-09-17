import React from 'react';
import Head from 'next/head';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Electronic Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout