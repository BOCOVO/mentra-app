import { PropsWithChildren } from "react";
import { ApolloProvider as CoreApolloProvider } from "@apollo/client";
import apolloClient from "gql/client";

const ApolloProvider = ({ children }: PropsWithChildren) => {
  return (
    <CoreApolloProvider client={apolloClient}>{children}</CoreApolloProvider>
  );
};

export default ApolloProvider;
