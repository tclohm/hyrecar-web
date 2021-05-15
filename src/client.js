import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const url = 'http://localhost:4000/graphql'

const link = createUploadLink({ useGETForQueries: true, uri: url , credentials: 'include' })

const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache
});

export default client;