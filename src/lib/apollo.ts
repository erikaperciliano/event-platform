import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4obggvb1pll01z235m471zw/master',
    cache: new InMemoryCache()
})