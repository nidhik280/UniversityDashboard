import { Component, OnInit } from '@angular/core';
import { UniversityService } from './University.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string | null = null;

  constructor(private UniversityService: UniversityService, private router: Router) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setUsername();
      }
    });
  }

  ngOnInit(): void {
    this.setUsername();
  }

  setUsername(): void {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.username = user.username;
    } else {
      this.username = null;
    }
  }

  logout(): void {
    this.UniversityService.logout();
    this.username = null;
    this.router.navigate(['/login']);
  }
}
