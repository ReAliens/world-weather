import { gql } from '@apollo/client';

export default gql`
  query {
    countries(page: { first: 30 }) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          emoji
          iso3
          capital
          region
          phone_code
          timezones {
            gmt_offset_name
          }
        }
      }
    }
  }
`;
