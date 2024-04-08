import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { compare } from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // Log the email and password entered by the user
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    // Retrieve the hashed password stored during signup
    const storedUserData = this.authService.getUserByEmail(this.email);
    console.log('Stored User Data:', storedUserData);
  
    if (storedUserData) {
      // Compare provided password with stored password
      compare(this.password, storedUserData.password, (err, result) => {
        // Log the comparison result
        console.log('Comparison Result:', result);
  
        if (err) {
          // Handle error
          console.error('Error comparing passwords:', err);
          this.loginError = 'An unexpected error occurred. Please try again later.';
        } else {
          if (result) {
            // Passwords match, login successful
            console.log('Login successful');
            this.router.navigate(['/management']); // Redirect to desired page after successful login
          } else {
            // Passwords don't match, failed attempt
            console.log('Invalid email or password');
            this.loginError = 'Invalid email or password.';
          }
        }
      });
    } else {
      // No user data found for the provided email
      console.log('User not found');
      this.loginError = 'No account found with this email.';
    }
  }
  
}
