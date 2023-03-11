import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../Redux/Store';
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
