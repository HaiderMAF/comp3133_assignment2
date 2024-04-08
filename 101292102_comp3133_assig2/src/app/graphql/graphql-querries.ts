import { gql } from 'apollo-angular';

export const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const GET_ALL_EMPLOYEES_QUERY = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;