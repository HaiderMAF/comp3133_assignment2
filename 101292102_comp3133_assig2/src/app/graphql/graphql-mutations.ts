import { gql } from 'apollo-angular';

export const SIGNUP_MUTATION = gql`
  mutation SignUp($user: UserInput!) {
    signUp(user: $user) {
      id
      username
      email
      password
    }
  }
`;

export const ADD_EMPLOYEE_MUTATION = gql`
  mutation AddEmployee($employee: EmployeeInput!) {
    addEmployee(employee: $employee) {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;