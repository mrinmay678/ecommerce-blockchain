import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis';
import { AuthenticationProvider } from '../context/AuthenticationContext';


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <ChakraProvider>
        <AuthenticationProvider>
          <Component {...pageProps} />
        </AuthenticationProvider>
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default MyApp
