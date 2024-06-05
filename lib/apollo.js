import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri:  process.env.APOLLO_SERVER_URL || "http://localhost:4000/", // Apollo Server endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
