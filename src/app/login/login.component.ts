import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from '../University.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private UniversityService: UniversityService, private router: Router) {}

  login(): void {
    this.UniversityService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        console.log("success");
        
      } else 
      {
        console.log("failure");
      }
    }, error => {
      console.log("An error occurred during login. Please try again later.");
      
    })
    console.log(this.username, this.password);
    this.UniversityService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/home']);
      } else 
      {
        this.errorMessage = response.message;
      }
    }, error => {
      this.errorMessage = 'An error occurred during login. Please try again later.';
      console.error('Login error:', error);
    });
  }
}
