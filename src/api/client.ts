/**
 * Grpahql Client
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import { ApolloClient, InMemoryCache } from '@apollo/client';

// CREATE CLIENT
export const client = new ApolloClient({
    uri: 'https://api.lottiefiles.com/v2/', // Update with the actual GraphQL endpoint
    cache: new InMemoryCache(),
});