import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private users = [
    { id: 1, username: 'emilys', password: 'emilyspass' }
    
  ];

  constructor() { }

  login(username: string, password: string): Observable<any> {
    return of(this.users).pipe(
      delay(500), 
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          return { success: true, message: 'Login successful', user };
        } else {
          return { success: false, message: 'Username or password is incorrect' };
        }
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return throwError('Error occurred during login. Please try again later.');
      })
    );
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
