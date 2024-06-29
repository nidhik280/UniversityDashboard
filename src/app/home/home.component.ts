import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from '../University.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | null = null;

  constructor(private router: Router, private UniversityService: UniversityService) {}

  ngOnInit(): void {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.username = user.username;
    }
  }

  logout(): void {
    this.UniversityService.logout();
    this.router.navigate(['/login']);
  }
}
