import { gql } from '@apollo/client';

export const GET_FEATURED_ANIMATIONS = gql`
  query GetFeaturedAnimations {
    featuredAnimations {
      id
      title
      lottieUrl
    }
  }
`;