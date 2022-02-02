import {
  ApolloClient, InMemoryCache, HttpLink, from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line no-console
    graphQLErrors.map((message, location) => console.log(`Graphql error ${message} ${location}`));
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://api.geographql.renzooo.com/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
