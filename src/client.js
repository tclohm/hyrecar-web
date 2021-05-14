import { ApolloClient } from "apollo-client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloLink } from "apollo-link";
import { sha256 } from "crypto-hash";

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'http://localhost:4000/graphql'

const link = ApolloLink.from([
	createPersistedQueryLink({ useGETForHashedQueries: true, sha256: sha256 }),
	createUploadLink({ useGETForQueries: true, uri: url , credentials: 'include' }),
])

const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache
});

export default client;