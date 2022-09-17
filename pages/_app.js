import '../styles/globals.css'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Authentication } from './authentication/authentication';


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Authentication />
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
