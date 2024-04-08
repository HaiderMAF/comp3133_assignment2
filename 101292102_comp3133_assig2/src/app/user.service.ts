import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  // Query to fetch user data by email
  getUserByEmail(email: string): Observable<User> {
    return this.apollo.query<any>({
      query: gql`
        query GetUserByEmail($email: String!) {
          getUserByEmail(email: $email) {
            id
            username
            email
            password
          }
        }
      `,
      variables: {
        email: email
      }
    }).pipe(
      map(result => result.data.getUserByEmail)
    );
  }

  // Mutation for new user
  signUp(user: User): Observable<User> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation SignUp($user: UserInput!) {
          signUp(user: $user) {
            id
            username
            email
            password
          }
        }
      `,
      variables: {
        user: user
      }
    }).pipe(
      map(result => result.data.signUp)
    );
  }
}
