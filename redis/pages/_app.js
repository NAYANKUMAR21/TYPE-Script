import { AuthCOntextProvider } from '@/Context/AuthCOntext';
import { ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthCOntextProvider>
        <Component {...pageProps} />
      </AuthCOntextProvider>
    </ChakraProvider>
  );
}
