import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis';
import { AuthenticationProvider } from '../context/AuthenticationContext';
import Head from 'next/head';
import { AdminPanelProvider } from '../context/AdminPanelContext';


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <ChakraProvider>
        <AuthenticationProvider>
          <AdminPanelProvider>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Component {...pageProps} />
          </AdminPanelProvider>
        </AuthenticationProvider>
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default MyApp
