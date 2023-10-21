import { gql } from "@apollo/client"

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($fullName: String!, $file: Upload) {
    updateProfile(fullName: $fullName, file: $file) {
      id
      fullName
      avatarUrl
    }
  }
`