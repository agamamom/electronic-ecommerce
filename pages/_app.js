import '../styles/globals.css'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import LoginLayout from '../components/Layout/LoginLayout';
import { StateContext } from '../context/StateContext';
import { useRouter } from 'next/router';


// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <StateContext>

//       <Layout>
//         <Toaster />
//         <Component {...pageProps} />
//       </Layout>
//     </StateContext>
//   )
// }

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if ([`/authentication`].includes(appProps.router.pathname))
      return (
        <LoginLayout>
          <Toaster />
          <Component {...pageProps} />
        </LoginLayout>
      );

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return <StateContext>{getContent()}</StateContext>;
}

export default MyApp
