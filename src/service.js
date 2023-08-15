import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
});
export const mint = async ({
  walletAddress = "",
  quiz = {},
  innovationType = "",
}) => {
  return await instance.post("/tech-sauce/mint", {
    walletAddress,
    quiz,
    innovationType,
  });
};
export const verify = async ({ walletAddress = "" }) => {
  return await instance.get(
    `/tech-sauce/verify?walletAddress=${walletAddress}`
  );
};

import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPH_HOST,
});

const authLink = (token) => setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
const graphqlClient = (token) => new ApolloClient({
  link: authLink(token).concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions,
});

export const fetchUserWallet = (token, id) => {
  const query = gql`
  query getUserId($id:String!) {
    user(id: $id) {
      wallet {
        address
      }
    }
  }
`;
  return graphqlClient(token).query({
    query,
    variables: {
      id: id,
    },
  })
}