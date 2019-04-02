import { gql } from 'apollo-boost'

const DELETE_KEY = gql`
  mutation CBWEB_DELETE_KEY(
    $id: ID
  ) {
    apiKeys {
      delete(
        id: $id
      ) {
        id
        roles
      }
    }
  }
`

export default DELETE_KEY
