import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation removeBook ($bookId: ID!) {
  removeBook(bookId: $ID) {
    bookId
    user {
      _id
      username
    }
  }
}
`;

export const ADD_BOOK = gql`
mutation saveBook ($authors: [String], $description: String, $title: String!, $image: String, $link: String) {
  saveBook(authors: $[String], description: $String, title: $String, image: $String, link: $String) {
    token
    authors
    description
    title
    image
    link
    user {
      _id
      username
    }
  }
}
`;