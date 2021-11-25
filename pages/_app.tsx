import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include',
});


function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ApolloProvider client={client}>
          <ChakraProvider>
              <Component {...pageProps} />
          </ChakraProvider>
      </ApolloProvider>
    );
}

export default MyApp;
