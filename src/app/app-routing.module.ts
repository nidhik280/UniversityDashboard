import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { SecureGaurd } from './Secure.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [SecureGaurd] },
  { path: 'home', component: HomeComponent, canActivate: [SecureGaurd] },
  { path: 'courses', component: CoursesComponent, canActivate: [SecureGaurd] },
  { path: 'teachers', component: TeachersComponent, canActivate: [SecureGaurd] },
  { path: 'contact', component: ContactComponent, canActivate: [SecureGaurd] } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
