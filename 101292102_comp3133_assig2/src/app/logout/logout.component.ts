import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private authService: AuthService) { }

  logout() {
    // Perform logout logic
    // Once logout is successful, clear session data
    this.authService.logout();
  }

}
