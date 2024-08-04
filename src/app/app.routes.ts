import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SemesterComponent } from './semester/semester.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'semester/:number', component: SemesterComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
