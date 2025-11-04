import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import App from "./App";

const HASURA_HTTP_URL = "https://helping-raptor-43.hasura.app/v1/graphql";
const HASURA_WS_URL = "wss://helping-raptor-43.hasura.app/v1/graphql";

const HASURA_ADMIN_SECRET = "nA70dE3Dej3gQlQ9BtcPaD8emGLLs5x20Lhm4IK9CtjNBfMo0h3orIac1i4F2yTs";

const httpLink = new HttpLink({
  uri: HASURA_HTTP_URL,
  headers: {
    "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: HASURA_WS_URL,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
