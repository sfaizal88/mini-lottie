/**
 * Fetch api component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import { gql } from '@apollo/client';

// USED TO FETCH ANIMATION LIST
export const GET_FEATURED_ANIMATIONS = gql`
  query GetFeaturedAnimations {
    featuredAnimations {
      id
      title
      lottieUrl
    }
  }
`;